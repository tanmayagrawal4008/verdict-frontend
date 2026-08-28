const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000"
).replace(/\/$/, "");
const AUTH_STORAGE_KEY = "cf-clone-auth";
export const AUTH_UPDATED_EVENT = "cf-clone-auth-updated";
export const AUTH_SESSION_EXPIRED_EVENT = "cf-clone-auth-session-expired";
let refreshPromise;

export class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

function readStoredAuth() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function notifyAuth(eventName, detail) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(eventName, { detail }));
  }
}

async function send(path, { method, body, token }) {
  let response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      method,
      headers: {
        ...(body ? { "Content-Type": "application/json" } : {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      ...(body ? { body: JSON.stringify(body) } : {}),
    });
  } catch {
    throw new ApiError(
      `Could not reach the API at ${API_BASE_URL}. Start the backend or set VITE_API_BASE_URL.`,
      0,
    );
  }
  const payload = await response.json().catch(() => ({}));
  return { response, payload };
}

async function refreshAccessToken() {
  if (!refreshPromise) {
    refreshPromise = (async () => {
      const currentAuth = readStoredAuth();
      if (!currentAuth.refresh_token) {
        throw new ApiError("Your session has expired. Please sign in again.", 401);
      }

      const { response, payload } = await send("/auth/refresh", {
        method: "POST",
        body: { refresh_token: currentAuth.refresh_token },
      });
      if (!response.ok || !payload.success || !payload.data?.access_token) {
        if (response.status === 400 || response.status === 401) {
          localStorage.removeItem(AUTH_STORAGE_KEY);
          notifyAuth(AUTH_SESSION_EXPIRED_EVENT);
          throw new ApiError("Your session has expired. Please sign in again.", 401);
        }
        throw new ApiError(payload.message || "Could not refresh your session", response.status);
      }

      const nextAuth = { ...currentAuth, ...payload.data };
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(nextAuth));
      notifyAuth(AUTH_UPDATED_EVENT, nextAuth);
      return nextAuth.access_token;
    })().finally(() => {
      refreshPromise = undefined;
    });
  }
  return refreshPromise;
}

export async function request(path, { method = "GET", body, token } = {}) {
  const storedAuth = token ? readStoredAuth() : {};
  const accessToken = storedAuth.access_token || token;
  let { response, payload } = await send(path, { method, body, token: accessToken });

  if (response.status === 401 && accessToken && path !== "/auth/refresh") {
    const refreshedToken = await refreshAccessToken();
    ({ response, payload } = await send(path, { method, body, token: refreshedToken }));
  }

  if (!response.ok || !payload.success)
    throw new ApiError(
      payload.message || "Something went wrong",
      response.status,
    );
  return payload.data;
}
export const api = {
  getProblems: () => request("/problems"),
  getProblem: (id) => request(`/problems/${id}`),
  getSampleTestcases: (id) => request(`/problems/${id}/sample-testcases`),
  createProblem: (body, token) =>
    request("/problems", { method: "POST", body, token }),
  updateProblem: (id, body, token) =>
    request(`/problems/${id}`, { method: "PATCH", body, token }),
  deleteProblem: (id, token) =>
    request(`/problems/${id}`, { method: "DELETE", token }),
  getTestcases: (id, token) => request(`/problems/${id}/testcases`, { token }),
  createTestcase: (id, body, token) =>
    request(`/problems/${id}/testcases`, { method: "POST", body, token }),
  submit: (id, body, token) =>
    request(`/problems/${id}/submissions`, { method: "POST", body, token }),
  getSubmission: (id, token) => request(`/submissions/${id}`, { token }),
  getMyProblems: (token) => request("/me/problems", { token }),
  getMySubmissions: (token) => request("/me/submissions", { token }),
  register: (body) => request("/auth/register", { method: "POST", body }),
  login: (body) => request("/auth/login", { method: "POST", body }),
  logout: (token) => request("/auth/logout", { method: "POST", token }),
};
