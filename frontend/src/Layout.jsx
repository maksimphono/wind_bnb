import {Outlet, Link} from "react-router-dom";
import {useContext, createContext, useState} from "react";
import Header from "./components/ui/Haeder.jsx";
import Footer from "./components/ui/Footer.jsx";
import Modal from "./components/ui/Modal.jsx";
export const FetchContext = createContext({query : {}, setQuery : () => null})
export const ModalContext = createContext({
    setShowModal : null, 
    setModalText : null, 
    setModalTitle : null
})

function Layout(props) {
    const [query, setQuery] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [modalText, setModalText] = useState("")
    const [modalTitle, setModalTitle] = useState("")
    const [modalFooter, setModalFooter] = useState([])

    return (
        <>
            <Modal show = {showModal} title = {modalTitle} footer = {modalFooter} onHide = {() => setShowModal(false)}>
                <p>{modalText}</p>
            </Modal>
            <FetchContext.Provider value = {{query : query, setQuery : setQuery}}>
                <ModalContext.Provider value = {{setShowModal, setModalText, setModalTitle, setModalFooter}}>
                    <Header />
                    <Outlet />
                </ModalContext.Provider>
            </FetchContext.Provider>
            
            <Footer />
        </>
    )
}

export default Layout;