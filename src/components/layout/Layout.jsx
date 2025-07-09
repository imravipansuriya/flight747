 
import { Outlet } from "react-router-dom";
import HeaderBar from "./HeaderBar.jsx";
import Footer from "./Footer.jsx";

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