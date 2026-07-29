import React from "react";
import { Outlet } from "react-router-dom";


// import Footer from "./components/Footer/Footer";
import Header from "../components/Header/Header.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";



function MainLayout ( ){
    return (
        <>
        <div className="layout">

            <Header></Header>

            <Navbar></Navbar>
            

            <main className="main-content">
                <Outlet/>
            </main>
            {/* <Footer></Footer>  */}
        </div>
        </>


    );
}

export default MainLayout;
