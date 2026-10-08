export function Loading({ text = "Loading..." }) {
  return <div className="page-state">{text}</div>;
}
export function ErrorMessage({ children }) {
  return <div className="alert error">{children}</div>;
}
export function EmptyState({ children }) {
  return <div className="empty-state">{children}</div>;
}
