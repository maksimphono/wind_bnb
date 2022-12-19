import {Outlet, Link} from "react-router-dom";
import Header from "./components/ui/Haeder.jsx";
import Footer from "./components/ui/Footer.jsx";

function Layout(props) {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default Layout;