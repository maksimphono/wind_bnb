import "./css/header.scss";
//import searchIcon from "../../assets/icons/search__icon.svg";
import logo from "../../logo.svg"

export default function (props) {
    return (
        <div className = "header">
            <div className = "brand">Wind BnB</div>
            <form className = "search">
                <div className = "search-bar location" name = "search__filters">
                    <div className = "summary">
                        <span>Location</span>
                        <span>Helsinki, Finland</span>
                    </div>
                    <div className = "selection">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis necessitatibus dolorum aut voluptates ut non ducimus sunt est, dicta consequatur impedit quaerat consectetur itaque repellat eius sit eveniet fuga expedita.
                    </div>
                </div>
                <div className = "search-bar guests" name = "search__filters">
                    <div className = "summary">
                        <span>Guests</span>
                        <span>4 adults</span>
                    </div>
                    <div className = "selection">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis necessitatibus dolorum aut voluptates ut non ducimus sunt est, dicta consequatur impedit quaerat consectetur itaque repellat eius sit eveniet fuga expedita.
                    </div>
                </div>
                <div className = "search-btn-wrapper">
                    <button className = "search-btn">
                        <span className = "search__label">P Search</span>
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