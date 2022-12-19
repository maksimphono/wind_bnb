import "./css/cardFullView.scss";
import Counter from "../../components/ui/Counter.jsx";
import DropDown from "../../components/ui/DropDown.jsx";
import ImagesView from "./ImagesView.jsx";
import {useState, useEffect, useCallback} from "react";
import $ from "jquery";

export default function() {
    const [showImages, setShowImages] = useState(false);
    const onShowImages = useCallback(() => setShowImages(true));

    useEffect(() => {
        $(".images img").on("click", onShowImages);
        return () => {
            $(".images img").off("click", onShowImages);
        }
    }, []);

    return (
        <>
        <ImagesView show = {showImages} handleClose = {() => setShowImages(false)}/>
        <div className = "card__full__view">
            <div className = "card__title">
                <h2>Seaview and Thai temple view pool villa</h2>
                <span className = "star__number">4.4 stars</span>
                <span className = "superhost">Superhost</span>
                <span className = "adress">Ko Samui, Chang Wat Surat Thani, Thailand</span>
            </div>
            <div className = "images">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            
            <div className = "owner__info">
                <p className = "info">Entire house is owed by Lisa</p>
                <img src="" alt="" className = "avatar" />
            </div>
            <form className = "reserve__card">
                <div className = "reserve__card__title">
                    <span>$4,998 <span>/ night</span></span>
                    <span>4.4 stars</span>
                </div>
                <form className = "set__in-out__date">
                    <div className = "container">
                        <input type="date" name = "checkin__date" />
                        <div className = "label">
                            <label htmlFor="checkin__date">Check In date</label>
                            <span>12/04/22</span>
                        </div>
                    </div>
                    <div className = "container">
                        <input type="date" name = "checkout__date" />
                        <div className = "label">
                            <label htmlFor="checkout__date">Check Out date</label>
                            <span>12/04/22</span>
                        </div>
                    </div>
                    <div className = "guests__settings__container">
                        <DropDown toggler = "Guests" isOpen = {false} style = {{width : "100%", height: "100%"}} togglerStyle = {{height: "100%"}}>
                            <Counter title = "Adults" subtitle = "Age 13+" initialValue = {1} max = {10} min = {0}/>
                            <Counter title = "Children" subtitle = "Age 2 - 12"  max = {10} min = {0}/>
                            <Counter title = "Infants" subtitle = "Age 0 - 2"  max = {2} min = {0}/>
                            <Counter title = "Pets" subtitle = "Animals"  max = {4} min = {0}/>
                        </DropDown>
                    </div>
                    
                </form>
                <button type = "submit">Reserve</button>
            </form>
        </div>
        </>
    )
}