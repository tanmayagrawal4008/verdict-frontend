import { BrowserRouter, Routes,  Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx"
import Home from "./pages/Home/Home.jsx";
import Enter from "./pages/Enter/Enter.jsx"
import Register from "./pages/Register/Register.jsx"
import "./App.css";

function App() {


  return (
     <BrowserRouter>
      <Routes>
        
        <Route element = {<MainLayout/>}>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/enter" element = {<Enter/>}/>
          <Route path = "/register" element = {<Register/>}/>
          

        </Route>

      


      </Routes>
    
    
    </BrowserRouter>
   
  )
}

export default App;
