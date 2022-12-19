import {useReducer, useRef, useState, useEffect, useCallback} from "react";
import PropTypes from "prop-types";
import $ from "jquery";
import styles from "./css/drowpdown.module.scss"

function toggleReducer(state, action) {
    action.setterCallback && action.setterCallback(action?.state || !state);
    return (action?.state || !state);
}

function DrowDown({children, ...props}) {
    const [isOpen, setIsOpen] = useState(props.isOpen || false);
    let togglerRef = useRef();
    let selectionRef = useRef();

    useEffect(() => {
        $(document).on("click", handleBlur);
        $(togglerRef).css("width", props.togglerStyle?.width || props.style?.width);

        return () => {
            $(document).off("click", handleBlur);
        }
    }, []);

    const handleBlur = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path?.includes(togglerRef) && !path?.includes(selectionRef)) {
            setIsOpen(false);
        }

        props.setterCallback && props.setterCallback(false);
    }

     const handleToggle = (event) => {
        
        setIsOpen(v => {
            props.setterCallback && props.setterCallback(!v);
            $(".arrow").css(v && {"transform" : "rotate(0deg)"} || {"transform" : "rotate(180deg)"});
            return !v;
        });
     }

     useEffect(() => {
        if (props.isOpen && props.isOpen !== isOpen) {
            setIsOpen(props.isOpen);
        }
        
     }, [props.isOpen, isOpen]);

    return (
        <div style = {props.style || {}} className = {styles.dropdown__wrapper}>
            <button style = {props.togglerStyle || {}} ref = {ref => (togglerRef = ref)} onClick = {handleToggle} type = "button" className = {styles.toggler}>{props.toggler}<span className = "arrow">V</span></button>
            <div className={styles.selection} style = {props.selectionStyle || {}}>
                <div style = {isOpen?{...props.selectionStyle}:{display: "none"}} className={styles.children} ref = {ref => (selectionRef = ref)}>
                    {children}
                </div>
            </div>
        </div>
    );
}

DrowDown.propTypes = {
    isOpen : PropTypes.bool,
    toggler : PropTypes.string.isRequired,
    setterCallback : PropTypes.func,
    style : PropTypes.object,
    togglerStyle : PropTypes.object,
    selectionStyle : PropTypes.object
}

export default DrowDown;