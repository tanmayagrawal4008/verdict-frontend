import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import Enter from "./pages/Enter/Enter";
import Register from "./pages/Register/Register";
import ProblemSet from "./pages/ProblemSet/ProblemSet";
import ProblemDetail from "./pages/ProblemDetail/ProblemDetail";
import Submit from "./pages/Submit/Submit";
import CreateProblem from "./pages/CreateProblem/CreateProblem";
import MyProblems from "./pages/MyProblems/MyProblems";
import MySubmissions from "./pages/MySubmissions/MySubmissions";
import SubmissionDetail from "./pages/SubmissionDetail/SubmissionDetail";
import NotFound from "./pages/NotFound/NotFound";
import Testcases from "./pages/Testcases/Testcases";
import "./App.css";
import "./pages/shared.css";



function App() {
  return <BrowserRouter><AuthProvider><Routes><Route element={<MainLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/problems" element={<ProblemSet />} />
    <Route path="/problems/:problemId" element={<ProblemDetail />} />
    <Route path="/problems/:problemId/submit" element={<Submit />} />
    <Route path="/problems/:problemId/testcases" element={<Testcases />} />
    <Route path="/create-problem" element={<CreateProblem />} />
    <Route path="/my-problems" element={<MyProblems />} />
    <Route path="/my-submissions" element={<MySubmissions />} />
    <Route path="/submissions/:submissionId" element={<SubmissionDetail />} />
    <Route path="/enter" element={<Enter />} />
    <Route path="/register" element={<Register />} />
    <Route path="*" element={<NotFound />} />
  </Route></Routes></AuthProvider></BrowserRouter>;
}

export default App;
