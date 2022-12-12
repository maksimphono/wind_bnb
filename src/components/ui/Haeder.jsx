import { useRef, useReducer, useState } from "react";
import "./css/header.scss";
//import searchIcon from "../../assets/icons/search__icon.svg";
import logo from "../../logo.svg"
import FilterInSearchBar from "./FilterInSearchBar";
import SearchButton from "./SearchButton";
import $ from "jquery";

export function toggleElem(elem, hide) {
    $(elem).css({
        "opacity": "" + +hide,
    });
    $(elem).find("ul.selection").css("height", hide? "0px" : "max-content");
}

export default function (props) {
    const selectItemsLocationRef = useRef();
    const selectItemsGuestsRef = useRef();

    const onHideUlSelection = ({target}) => {
        for (let elem of [selectItemsLocationRef.current, selectItemsGuestsRef.current]) {
            toggleElem(elem, true);
        }
    }

    return (
        <div className = "header">
            <div className = "brand">Wind BnB</div>
            <form className = "search" onMouseLeave={onHideUlSelection}>

                <FilterInSearchBar ref = {selectItemsLocationRef} title = "Location" list = {["Finland, Helsinki", "Finland, Guavar"]} />
                <FilterInSearchBar ref = {selectItemsGuestsRef} title = "Guests" list = {["2 guests", "4 guests"]} />
                <SearchButton />
            
            </form>
        </div>
    )
}