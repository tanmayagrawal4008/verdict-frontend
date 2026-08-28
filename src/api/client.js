const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000"
).replace(/\/$/, "");
export class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}
export async function request(path, { method = "GET", body, token } = {}) {
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
  createProblem: (body, token) =>
    request("/problems", { method: "POST", body, token }),
  updateProblem: (id, body, token) =>
    request(`/problems/${id}`, { method: "PATCH", body, token }),
  deleteProblem: (id, token) =>
    request(`/problems/${id}`, { method: "DELETE", token }),
  submit: (id, body, token) =>
    request(`/problems/${id}/submissions`, { method: "POST", body, token }),
  getSubmission: (id, token) => request(`/submissions/${id}`, { token }),
  getMyProblems: (token) => request("/me/problems", { token }),
  getMySubmissions: (token) => request("/me/submissions", { token }),
  register: (body) => request("/auth/register", { method: "POST", body }),
  login: (body) => request("/auth/login", { method: "POST", body }),
  logout: (token) => request("/auth/logout", { method: "POST", token }),
};
