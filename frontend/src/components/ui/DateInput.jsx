import scss_module from "./css/dateinput.module.scss";
import {useState, useEffect, forwardRef, memo} from "react";
import PropTypes from "prop-types";

function DateInput({initialValue, label, setterCallback, styles = {}, classes = {}}, ref) {
    const [date, setDate] = useState(initialValue || new Date());
    useEffect(() => {
        setterCallback && setterCallback(date);
    }, [date]);

    return (
        <div className = {classes.wrapper || scss_module.date_wrapper} style = {styles.wrapper || {}}>
            <input type="date" name = "date__input" ref = {ref}/>
            <div className = {classes.label || scss_module.label} style = {styles.label || {}}>
                <label htmlFor="date__input">{label}</label>
                <span>{new Date(date).toISOString().slice(0, 10).replaceAll("-", '/')}</span>
            </div>
        </div>
    )
}

DateInput.propTypes = {
    label : PropTypes.string,
    styles : PropTypes.shape({
        wrapper : PropTypes.object,
        label : PropTypes.object
    }),
    classes : PropTypes.shape({
        wrapper : PropTypes.string,
        label : PropTypes.string
    })
}

export default memo(forwardRef(DateInput));