import React, {useReducer} from "react";
import $ from "jquery";

const INCREACE = "INCREACE";
const DECREACE = "DECREACE";

function counterReducer(state, action) {
    switch (action.type) {
        case INCREACE:
            return (state + 1);
        case DECREACE:
            return (state - 1);
    }
}

export default React.forwardRef(function (props, counterRef) {
    const [counter, dispatch] = useReducer(counterReducer, props.initialValue);

    const handleValueChange = ({target}) => {
        dispatch({type : $(target).data("action")});
    }
    
    return (
        <div className = "guests__counter">
            <span>{props.title}</span>
            <span>{props.subtitle}</span>
            <span ref = {counterRef}>{counter}</span>
            <button 
                type = "button"
                className = "control__btn" 
                data-action = {DECREACE}
                onClick = {handleValueChange}
            >
                -
            </button>
            <button 
                type = "button"
                className = "control__btn" 
                data-action = {INCREACE}
                onClick = {handleValueChange}
            >
                +
            </button>
        </div>
    )
})