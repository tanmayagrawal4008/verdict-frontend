import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";

function MainLayout() {
  return (
    <div className="site-shell">
      <Header />
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="site-footer">
        Codeforces Clone · Built for practice and problem solving
      </footer>
    </div>
  );
}

export default MainLayout;
