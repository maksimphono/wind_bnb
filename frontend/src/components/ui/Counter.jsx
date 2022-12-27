import React, {useReducer} from "react";
import PropTypes from "prop-types";
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

const Counter = React.forwardRef(function (props, counterRef) {
    const [counter, dispatch] = useReducer(counterReducer, props.initialValue || 0);

    const handleValueChange = ({target}) => {
        dispatch({
            type : $(target).data("action"), 
            setter : props.setter || (() => null), 
            max : (props.max || 10), 
            min : (props.min || 0)
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
                <span id = {"" + props.id} ref = {counterRef} data-value = {counter}>{counter}</span>
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
});

Counter.propTypes = {
    id: PropTypes.string,
    title : PropTypes.node.isRequired,
    subtitle : PropTypes.string.isRequired,
    initialValue : PropTypes.number,
    max: PropTypes.number,
    min: PropTypes.number,
    setter : PropTypes.func
}

export default Counter;