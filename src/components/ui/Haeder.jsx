import "./css/header.scss";
//import searchIcon from "../../assets/icons/search__icon.svg";
import logo from "../../logo.svg"

export default function (props) {
    return (
        <div className = "header">
            <div className = "brand">Wind BnB</div>
            <form className = "search">
                <button className = "search-bar location" name = "search__filters">
                    <span>Location</span>
                    <span>Helsinki, Finland</span>
                </button>
                <button className = "search-bar guests" name = "search__filters">
                    <span>Guests</span>
                    <span>4 adults</span>
                </button>
                <div className = "search-btn-wrapper">
                    <button className = "search-btn">

                        <span className = "search__label">Search</span>
                    </button>
                </div>
                
                <div className = "additional-filters">
                    <div className = "filter">
                        <input checked type = "radio" name = "radio1"/>  
                    </div>
                    <div className = "filter">
                        <input type = "radio" name = "radio1"/>
                    </div>
                </div>
                
            </form>
        </div>
    )
}