import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/client";
import { ErrorMessage, Loading, EmptyState } from "../../components/PageState";
import "./ProblemSet.css";
const difficultyName = (n) =>
  ({ 1: "Easy", 2: "Medium", 3: "Hard" })[n] || (n ? `Level ${n}` : "Unrated");
function ProblemSet() {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState("all");
  useEffect(() => {
    api
      .getProblems()
      .then(setProblems)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);
  const visible = useMemo(
    () =>
      problems.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) &&
          (difficulty === "all" || String(p.difficulty) === difficulty),
      ),
    [problems, query, difficulty],
  );
  return (
    <section>
      <h1 className="page-title">Problemset</h1>
      <div className="page-card">
        <div className="problem-toolbar">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search problems"
          />
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="all">All difficulties</option>
            <option value="1">Easy</option>
            <option value="2">Medium</option>
            <option value="3">Hard</option>
          </select>
        </div>
        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : visible.length === 0 ? (
          <EmptyState>No problems match your filters yet.</EmptyState>
        ) : (
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Problem</th>
                  <th>Difficulty</th>
                  <th>Limits</th>
                </tr>
              </thead>
              <tbody>
                {visible.map((problem) => (
                  <tr key={problem.problem_id}>
                    <td>{problem.problem_id}</td>
                    <td>
                      <Link to={`/problems/${problem.problem_id}`}>
                        {problem.title}
                      </Link>
                    </td>
                    <td>
                      <span className={`difficulty d${problem.difficulty}`}>
                        {difficultyName(problem.difficulty)}
                      </span>
                    </td>
                    <td>
                      {problem.time_limit} ms / {problem.memory_limit} MB
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
export default ProblemSet;
