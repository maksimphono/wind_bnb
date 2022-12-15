import {useReducer, useRef, useState, useEffect, useCallback} from "react";
import PropTypes from "prop-types";
import $ from "jquery";

import "./css/drowpdown.scss";

function toggleReducer(state, action) {
    action.setterCallback && action.setterCallback(action?.state || !state);
    return (action?.state || !state);
}

function DrowDown({children, ...props}) {
    const [showSelection, dispatchSelection] = useReducer(toggleReducer, false);
    const selectionRef = useRef();
    const [selectionParams, setSelectionParams] = useState({});
    const ddRef = useRef();

    const onShowDropDown = useCallback(() => (console.log("onShow"), dispatchSelection({setterCallback : props.setterCallback, state : true})), [])

    useEffect(() => {
        setSelectionParams({
            "height" : "max-content",
            "min-height" : "100%",
            "opacity" : "1",
            "z-index" : "0"
        });
        props.style.height && $(ddRef.current).find(".toggler__button").css("height", props.style.height);
    }, []);

    useEffect(() => {
        $(selectionRef.current).animate(!showSelection && {"height": "0"}, 500,
        () => $(selectionRef.current).css(showSelection ? selectionParams : {"height": "0", "min-height" : "0", "opacity": "0", "z-index": "-9"}));
    }, [showSelection, props.show]);
    
    return (
        <div 
            className = "dropdown"
            ref = {ddRef}
            style = {props.style} 
        >
            <button
                type = "button"
                onClick = {() => dispatchSelection({setterCallback : props.setterCallback})}
                className = "toggler__button"
            >{props.label}</button>
            <div 
                className = "selection" 
                ref = {selectionRef}
                
            >
                {children}
            </div>
        </div>
    );
}

DrowDown.propTypes = {

    show : PropTypes.bool,
    toggler : PropTypes.string.isRequired,
    setterCallback : PropTypes.func
}

export default DrowDown;