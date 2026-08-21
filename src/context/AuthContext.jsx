import { createContext, useContext, useState } from "react";
import { api } from "../api/client";
const AuthContext = createContext(null); const STORAGE_KEY = "cf-clone-auth";
function readStoredAuth() { try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { return {}; } }
export function AuthProvider({ children }) { const [auth, setAuth] = useState(readStoredAuth); function save(next) { setAuth(next); localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } async function login(credentials) { const tokens = await api.login(credentials); save({ ...tokens, username: credentials.email.split("@")[0] }); } async function logout() { try { if (auth.access_token) await api.logout(auth.access_token); } catch {} finally { setAuth({}); localStorage.removeItem(STORAGE_KEY); } } const value = { ...auth, isAuthenticated: Boolean(auth.access_token), login, logout }; return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>; }
export function useAuth() { const context = useContext(AuthContext); if (!context) throw new Error("useAuth must be used inside AuthProvider"); return context; }
