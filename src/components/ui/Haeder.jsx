import { useRef, useReducer, useState } from "react";
import "./css/header.scss";
//import searchIcon from "../../assets/icons/search__icon.svg";
import logo from "../../logo.svg"
import FilterInSearchBar from "./FilterInSearchBar";
import FilterGuestsInSearchBar from "./FilterGuestsInSearchBar.jsx";
import SearchButton from "./SearchButton";
import $ from "jquery";

export function toggleElem(elem, hide, childrenToHide = ["ul.selection"]) {
    $(elem).css({
        "opacity": "" + +hide,
    });
    for (let childSelector of childrenToHide) {
        $(elem).find(childSelector).css("height", hide? "0px" : "max-content");
    }
}

export default function (props) {
    const [showLocationSelect, setShowLocationSelect] = useState(false);
    const [showGuestsSelect, setShowGuestsSelect] = useState(false);
    const [showSearchLabel, toggleSearchLabel] = useState(false);

    const onToggleSelection = (val) => {
        setShowLocationSelect(val);
        setShowGuestsSelect(val);
        toggleSearchLabel(val)
    }

    return (
        <div className = "header">
            <div className = "brand">Wind BnB</div>
            <form
                className = "search"
                onMouseLeave = {(e) => onToggleSelection(false)}
                onMouseEnter = {(e) => toggleSearchLabel(true)}>

                <FilterInSearchBar 
                    show = {showLocationSelect}
                    toggle = {setShowLocationSelect}
                    title = "Location" 
                    list = {["Finland, Helsinki", "Finland, Guavar"]}
                />
                <FilterGuestsInSearchBar 
                    show = {showGuestsSelect}
                    toggle = {setShowGuestsSelect} 
                    title = "Guests" 
                />
                <SearchButton showSearchLabel = {showSearchLabel} />
            
            </form>
        </div>
    )
}