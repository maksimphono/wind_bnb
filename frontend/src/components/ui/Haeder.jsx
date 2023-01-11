import { useRef, useCallback, useState, useContext } from "react";
import {Link} from "react-router-dom";
import "./css/header.scss";
//import searchIcon from "../../assets/icons/search__icon.svg";
import logo from "../../logo.svg"
import FilterInSearchBar from "./FilterInSearchBar";
import FilterGuestsInSearchBar from "./FilterGuestsInSearchBar";
import SearchButton from "./SearchButton";
import { FetchContext } from "../../Layout";
import $ from "jquery";
import useFetch from "../../hooks/useFetch.jsx";

import {location_selection_fielt_id, adults_number_field_id, children_number_field_id} from "../../data/fields_html_ids.js";
import { API_URL } from "../../settings";

export function toggleElem(elem, hide) {
    $(elem).css({
        "opacity": "" + +hide,
    });
    $(elem).find("ul.selection").css("height", hide? "0px" : "max-content");
}

export default function (props) {
    const {query, setQuery} = useContext(FetchContext);

    const [showLocationSelect, setShowLocationSelect] = useState(false);
    const [showGuestsSelect, setShowGuestsSelect] = useState(false);
    const [showSearchLabel, toggleSearchLabel] = useState(false);
    
    const {data : locationsData, isLoading : locationsDataIsLoading} = useFetch(API_URL + "/locations")
    
    const onSubmit = useCallback((event) => {
        event.preventDefault();
        const querySelection = {
            location: {
                id : $("#" + location_selection_fielt_id)[0].dataset.value,
                name : $("#" + location_selection_fielt_id)[0].dataset.name,
            },
            adults : +$("#" + adults_number_field_id)[0].dataset.value,
            children : +$("#" + children_number_field_id)[0].dataset.value
        };
        setQuery && setQuery(querySelection);
    }, [query]);

    const onToggleSelection = useCallback((val) => {
        setShowLocationSelect(val);
        setShowGuestsSelect(val);
        toggleSearchLabel(false);
    }, []);

    return (
        <div className = "header">
            <Link to = "/" className = "brand" onClick = {() => window.location.href = "/"}></Link>
            <form 
                className = "search" 
                onMouseEnter={(e) => toggleSearchLabel(true)} 
                onMouseLeave={(e) => onToggleSelection(false)}
                onSubmit = {onSubmit}
            >
                {locationsData.length && 
                    <FilterInSearchBar 
                        show = {showLocationSelect}
                        toggle = {setShowLocationSelect}
                        location_selection_id = "location_selection_id"
                        title = "Location" 
                        list = {locationsData}
                    />
                }
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