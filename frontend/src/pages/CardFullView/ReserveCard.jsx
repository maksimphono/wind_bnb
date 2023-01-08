import {useState, memo, useRef, useEffect, useMemo, useCallback} from "react";
import DateInput from "../../components/ui/DateInput";
import Counter from "../../components/ui/Counter.jsx";
import DropDown from "../../components/ui/DropDown.jsx";
import $ from "jquery";

function dayOrDays(stayDuration) {
    return stayDuration % 10 === 1 && stayDuration !== 11?"day":"days"
}

const Stars = ({stars}) => (
    <span style = {{display: "flex", alignItems: "center"}}>
        <i className="material-icons" style = {{color : "#f77"}}>star</i>
        {stars} stars
    </span>
)

function ReserveCard({data, togglerLabel, onSubmit}) {
    const today = useMemo(() => new Date(), [])
    const [isDrDnOpen, setIsDrDnOpen] = useState(false);
    const [checkInDate, setCheckInDate] = useState(today);
    const [checkOutDate, setCheckOutDate] = useState(today);
    const [stayDuration, setStayDuration] = useState(0);

    const [warningMessages, setWarningMessages] = useState([])

    const totalPrice = useMemo(() => {
        const price = Array.from("" + data?.priceForNight * stayDuration)

        if (price.length < 3) return price;
        for (let i = price.length - 3; i > 0; i -= 3) {
            price.splice(i, 0, ',')
        }
        return price.join('');
    }, [stayDuration])

    const validate = useCallback(() => {
        const yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);
        setWarningMessages([]);
        if (checkInDate <= yesterday) {
            setWarningMessages(arr => [...arr, "You can't reserve apartment in past"])
            return false;
        }
        if (checkOutDate - checkInDate <= 0) {
            setWarningMessages(arr => [...arr, "We assume, you'd like to checkout AFTER check in."])
            return false;
        }
        return true;
    }, [checkInDate, checkOutDate])

    useEffect(() => {
        console.log("Submit btn : ", $("button[type='submit']"));
        if (validate()) {
            $("button[type='submit']").prop("disabled", false);
        } else {
            $("button[type='submit']").prop("disabled", true);
        }

        setStayDuration(Math.ceil((checkOutDate - checkInDate) / 86_400_000));
    }, [checkInDate, checkOutDate])

    const handleSubmit = (event) => {
        const metaData = {
            event,
            stayDuration : `${stayDuration} ${dayOrDays(stayDuration)}`,
            checkInDate,
            checkOutDate,
            totalPrice 
        }
        onSubmit && onSubmit(metaData);
    }

    return (
            <form className = "reserve__card" onSubmit = {handleSubmit}>
                <div className = "reserve__card__title">
                    <span>$ {data?.priceForNight || 0} <span>/ night</span></span>
                    <Stars stars = {data?.starsRate || 0} />
                </div>
                <form className = "set__in-out__date">
                    <DateInput 
                        initialValue={new Date()} 
                        label = "Check in date" 
                        classes={{wrapper : "wrapper", label : "label"}}
                        setterCallback = {setCheckInDate}
                    />
                    <DateInput 
                        initialValue={new Date()} 
                        label = "Check out date" 
                        classes={{wrapper : "wrapper", label : "label"}}
                        setterCallback = {setCheckOutDate}
                    />
                    <div className = "guests__settings__container">
                        <DropDown 
                            toggler = {togglerLabel || ""} 
                            isDrDnOpen = {isDrDnOpen} 
                            setterCallback = {setIsDrDnOpen} 
                            style = {{width : "100%", height: "100%"}} 
                            togglerStyle = {{height: "100%"}}>
                            <Counter 
                                title = {<span>Adults<i className="material-icons">person</i></span>}
                                subtitle = "Age 13+" 
                                initialValue = {1} 
                                max = {10} 
                                min = {0}/>
                            <Counter 
                                title = {<span>Children<i className="material-icons">child_care</i></span>} 
                                subtitle = "Age 2 - 12" 
                                max = {10} 
                                min = {0}/>
                            <Counter 
                                title = {<span>Infants<i className="material-icons">child_friendly</i></span>}
                                subtitle = "Age 0 - 2" 
                                max = {2} 
                                min = {0}/>
                            <Counter 
                                title =  {<span>Pets<i className="material-icons">cruelty_free</i></span>}
                                subtitle = "Animals"  
                                max = {4} 
                                min = {0}/>
                        </DropDown>
                    </div>                   
                </form>
                <button type = "submit">Reserve</button>
                {stayDuration > 0 && !warningMessages.length && 
                    <span
                        className = "count__total__price"
                    >
                        Price for <b>{stayDuration}</b> {dayOrDays(stayDuration)} will be <b>${totalPrice}</b>
                    </span>
                }
                {!!warningMessages.length && <ul className="warnings">
                    {warningMessages.map((message, i) => (
                            <li key = {i}>{message}</li>
                        ))
                    }
                </ul>
                }
            </form>
    )
}

export default memo(ReserveCard);