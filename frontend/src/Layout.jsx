import {Outlet, Link} from "react-router-dom";
import {useContext, createContext, useState} from "react";
import Header from "./components/ui/Haeder.jsx";
import Footer from "./components/ui/Footer.jsx";

export const FetchContext = createContext({query : "", setQuery : () => null})

function Layout(props) {
    const [query, setQuery] = useState("");
    return (
        <>
            <FetchContext.Provider value = {{query : query, setQuery : setQuery}}>
                <Header />
                <Outlet />
            </FetchContext.Provider>
            <Footer />
        </>
    )
}

export default Layout;