import { BrowserRouter, Routes,  Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx"
import Home from "./pages/Home/Home.jsx";
import "./App.css";

function App() {


  return (
     <BrowserRouter>
      <Routes>
        
        <Route element = {<MainLayout/>}>
          <Route path = "/" element = {<Home/>}/>
          {/* <Route path = "/problems" element = {<Problems/>}/>
          <Route path = "/problem/:problemId" element = {<ProblemDetails/>}/>
          <Route path = "/submissions" element = {<Submissions/>}/>
          <Route path = "/submission/:submissionId" element = {<SubmissionDetails/>}/> */}

        </Route>
        {/* <Rout path = "/login" element = {<Login/>}/>
        <Rout path = "/signup" element = {<Signup/>}/> */}


      </Routes>
    
    
    </BrowserRouter>
   
  )
}

export default App;
