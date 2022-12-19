import { useRef, useReducer, useState } from "react";
import {Link} from "react-router-dom";
import "./css/header.scss";
//import searchIcon from "../../assets/icons/search__icon.svg";
import logo from "../../logo.svg"
import FilterInSearchBar from "./FilterInSearchBar";
import FilterGuestsInSearchBar from "./FilterGuestsInSearchBar";
import SearchButton from "./SearchButton";
import $ from "jquery";

import {location_selection_fielt_id, adults_number_field_id, children_number_field_id} from "../../data/fields_html_ids.js";

export function toggleElem(elem, hide) {
    $(elem).css({
        "opacity": "" + +hide,
    });
    $(elem).find("ul.selection").css("height", hide? "0px" : "max-content");
}

export default function (props) {
    const [showLocationSelect, setShowLocationSelect] = useState(false);
    const [showGuestsSelect, setShowGuestsSelect] = useState(false);
    const [showSearchLabel, toggleSearchLabel] = useState(false);
    
    const onSubmit = ({target}) => {
        const $target = $(target);
        console.log(location_selection_fielt_id)
        const content = {
            location: $target.find("#" + location_selection_fielt_id).data("value"),
            adults : $("#" + adults_number_field_id).data("value"),
            children : $("#" + children_number_field_id).data("value")
        }
        console.table(content);
    }

    const onToggleSelection = (val) => {
        setShowLocationSelect(val);
        setShowGuestsSelect(val);
        toggleSearchLabel(false);
    }

    return (
        <div className = "header">
            <Link to = "/" className = "brand">Wind BnB</Link>
            <form 
                className = "search" 
                onMouseEnter={(e) => toggleSearchLabel(true)} 
                onMouseLeave={(e) => onToggleSelection(false)}
                onSubmit = {onSubmit}
            >
                
                <FilterInSearchBar 
                    show = {showLocationSelect}
                    toggle = {setShowLocationSelect}
                    location_selection_id = "location_selection_id"
                    title = "Location" 
                    list = {["Finland, Helsinki", "Finland, Guavar"]}
                />
                <FilterGuestsInSearchBar 
                    show = {showGuestsSelect}
                    toggle = {setShowGuestsSelect} 
                    title = "Guests"
                />
                <SearchButton
                    showSearchLabel = {showSearchLabel}
                />
            
            </form>
        </div>
    )
}