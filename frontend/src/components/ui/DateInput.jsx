import scss_module from "./css/dateinput.module.scss";
import {useState, useEffect} from "react";

function DateInput({initialValue, label, setterCallback, styles = {}}) {
    const [date, setDate] = useState(initialValue || new Date());
    useEffect(() => {
        setterCallback && setterCallback(date);
    }, [date]);

    return (
        <div className = {scss_module.date_wrapper}>
            <input type="date" name = "date__input" onChange = {({target}) => (setDate(target.value))}/>
            <div className = {scss_module.label}>
                <label htmlFor="date__input">{label}</label>
                <span>{new Date(date).toISOString().slice(0, 10).replaceAll("-", '/')}</span>
            </div>
        </div>
    )
}

export default DateInput;