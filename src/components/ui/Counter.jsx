import React, {useReducer} from "react";
import $ from "jquery";

const INCREACE = "INCREACE";
const DECREACE = "DECREACE";

function counterReducer(state, action) {
    switch (action.type) {
        case INCREACE:
            if (state + 1 > action.max) return (state);
            action.setter(state + 1);
            return (state + 1);
        case DECREACE:
            if (state - 1 < action.min) return (state);
            action.setter(state - 1);
            return (state - 1);
    }
}

export default React.forwardRef(function (props, counterRef) {
    const [counter, dispatch] = useReducer(counterReducer, props.initialValue);

    const handleValueChange = ({target}) => {
        dispatch({
            type : $(target).data("action"), 
            setter : props.setter, 
            max : props.max, 
            min : props.min
        });
    }
    
    return (
        <div className = "guests__counter">
            <span className = "title">{props.title}</span>
            <span className = "subtitle">{props.subtitle}</span>
            <div className = "counter__wrapper">
                <button 
                    type = "button"
                    className = "control__btn" 
                    data-action = {DECREACE}
                    onClick = {handleValueChange}
                >
                    -
                </button>
                <span ref = {counterRef} data-value = {counter}>{counter}</span>
                <button 
                    type = "button"
                    className = "control__btn" 
                    data-action = {INCREACE}
                    onClick = {handleValueChange}
                >
                    +
                </button>
            </div>
            
        </div>
    )
})