import {Outlet, Link} from "react-router-dom";
import Header from "./components/ui/Haeder.jsx";

function Layout(props) {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
export default Layout;