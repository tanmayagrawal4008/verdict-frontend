import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RequireAuth from "../../components/RequireAuth";
import { ErrorMessage, Loading } from "../../components/PageState";
import { api } from "../../api/client";
import { useAuth } from "../../context/AuthContext";
import "./Testcases.css";

const initialTestcase = { input: "", expected_output: "", is_sample: false };

function TestcaseManager() {
  const { problemId } = useParams();
  const { access_token } = useAuth();
  const [testcases, setTestcases] = useState(null);
  const [form, setForm] = useState(initialTestcase);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setTestcases(null);
    setError("");
    api.getTestcases(problemId, access_token).then(setTestcases).catch((err) => setError(err.message));
  }, [problemId, access_token]);

  function change(event) {
    const { name, value, checked, type } = event.target;
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
  }

  async function submit(event) {
    event.preventDefault();
    setSaving(true);
    setError("");
    setSuccess("");
    try {
      const testcase = await api.createTestcase(problemId, form, access_token);
      setTestcases((current) => [...(current || []), testcase]);
      setForm(initialTestcase);
      setSuccess("Test case added successfully.");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return <section className="testcase-page"><div className="testcase-heading"><div><h1 className="page-title">Manage test cases</h1><p>Add private cases used to judge submissions for your problem.</p></div><Link className="button secondary" to="/my-problems">Back to my problems</Link></div>{error && <ErrorMessage>{error}</ErrorMessage>}<div className="testcase-layout"><form className="form-card page-card form-grid" onSubmit={submit}><h2 className="section-title">Add a test case</h2>{success && <div className="alert success">{success}</div>}<div className="field"><label htmlFor="input">Input</label><textarea id="input" name="input" value={form.input} onChange={change} placeholder="Input passed to the program" /></div><div className="field"><label htmlFor="expected_output">Expected output</label><textarea id="expected_output" name="expected_output" value={form.expected_output} onChange={change} placeholder="Expected program output" /></div><label className="sample-field"><input name="is_sample" type="checkbox" checked={form.is_sample} onChange={change} /> Show this as a sample test case</label><div className="form-actions"><button className="button" disabled={saving}>{saving ? "Adding..." : "Add test case"}</button></div></form><section className="page-card testcase-list"><h2 className="section-title">Existing test cases</h2>{testcases === null ? <Loading text="Loading test cases..." /> : testcases.length === 0 ? <p className="testcase-empty">No test cases yet. Add one to make this problem judgeable.</p> : <div className="table-wrap"><table className="data-table"><thead><tr><th>#</th><th>Input</th><th>Expected output</th><th>Type</th></tr></thead><tbody>{testcases.map((testcase) => <tr key={testcase.testcase_id}><td>{testcase.testcase_id}</td><td><pre>{testcase.input || "(empty)"}</pre></td><td><pre>{testcase.expected_output || "(empty)"}</pre></td><td>{testcase.is_sample ? "Sample" : "Hidden"}</td></tr>)}</tbody></table></div>}</section></div></section>;
}

export default function Testcases() {
  return <RequireAuth><TestcaseManager /></RequireAuth>;
}
