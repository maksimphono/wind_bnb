import "./css/cardFullView.scss";
import Counter from "../../components/ui/Counter.jsx";
import DropDown from "../../components/ui/DropDown.jsx";

export default function() {
    return (
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
            <div className = "reserve__card">
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
                    <DropDown>
                        <Counter />
                        <Counter />
                    </DropDown>
                    <div className = "children__number__setting" style = {{background: "#ada"}}></div>
                </form>
            </div>
        </div>
    )
}