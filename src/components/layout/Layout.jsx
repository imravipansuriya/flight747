import { Container, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import HeaderBar from "./headerBar";
import Footer from "./footer";

const Layout = () => {
    return (
        <div>
            <HeaderBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;