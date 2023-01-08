import {useState, memo, useRef} from "react";
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
                        onChange = {setCheckInDate}
                    />
                    <DateInput 
                        initialValue={new Date()} 
                        label = "Check out date" 
                        classes={{wrapper : "wrapper", label : "label"}}
                        onChange = {setCheckOutDate}
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
                <span>Stay for {checkOutDate.toISOString()}</span>
            </form>
    )
}

export default memo(ReserveCard);