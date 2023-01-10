import scss from "./css/modal.module.scss"
import {useState, useMemo, useEffect, useCallback, memo} from "react";

function ModalComponent(props){
    const [show, setShow] = useState(props.show)

    const handleClose = useCallback(event => {
        setShow(false);
        props.onHide && props.onHide()
    }, [props.onHide])

    useEffect(() => {
        setShow(props.show);
    }, [props.show]);

    return (

        show && 
        <>
        <div onClick = {handleClose} className = {scss.not__modal__filter} />
        <div className = {scss.modal}>
            <div className = {scss.header}>
                <button onClick = {handleClose}>
                    <i className = "material-icons">close</i>
                </button>
                <h2>{props.title}</h2>
            </div>
            <div className = {scss.body}>
                {props.children}
            </div>
            <div className = {scss.footer}>
                {props.footer}
            </div>
        </div>
        </>
        
    )
}

export default memo(ModalComponent);