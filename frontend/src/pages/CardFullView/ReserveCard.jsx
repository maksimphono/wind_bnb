import {useState, memo, useRef, useEffect, useMemo, useCallback} from "react";
import DateInput from "../../components/ui/DateInput";
import Counter from "../../components/ui/Counter.jsx";
import DropDown from "../../components/ui/DropDown.jsx";
import $ from "jquery";

const Stars = ({stars}) => (
    <span style = {{display: "flex", alignItems: "center"}}>
        <i className="material-icons" style = {{color : "#f77"}}>star</i>
        {stars} stars
    </span>
)

function ReserveCard({data, togglerLabel, onSubmit}) {
    const [isDrDnOpen, setIsDrDnOpen] = useState(false);
    const [checkInDate, setCheckInDate] = useState(new Date());
    const [checkOutDate, setCheckOutDate] = useState(new Date());
    const [stayDuration, setStayDuration] = useState(0);

    const dayOrDays = useMemo(() => (
        stayDuration % 10 === 1 && stayDuration !== 11?"day":"days"
    ), [stayDuration]);

    const totalPrice = useMemo(() => {
        const price = Array.from("" + data?.priceForNight * stayDuration)

        if (price.length < 3) return price;
        for (let i = price.length - 3; i > 0; i -= 3) {
            price.splice(i, 0, ',')
        }
        return price;
    }, [stayDuration])

    useEffect(() => {
        setStayDuration(Math.ceil((checkOutDate - checkInDate) / 86_400_000));
    }, [checkInDate, checkOutDate])

    return (
            <form className = "reserve__card" onSubmit = {onSubmit}>
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
                {stayDuration > 0 && 
                    <span
                        className = "count__total__price"
                    >
                        Price for <b>{stayDuration}</b> {dayOrDays} will be <b>${totalPrice}</b>
                    </span>
                }
            </form>
    )
}

export default memo(ReserveCard);