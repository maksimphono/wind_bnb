import "./css/header.scss";
//import searchIcon from "../../assets/icons/search__icon.svg";
import logo from "../../logo.svg"
import FilterInSearchBar from "./FilterInSearchBar";
import SearchButton from "./SearchButton";

export default function (props) {
    return (
        <div className = "header">
            <div className = "brand">Wind BnB</div>
            <form className = "search">

                <FilterInSearchBar title = "Location" list = {["Finland, Helsinki", "Finland, Guavar"]} />
                <FilterInSearchBar title = "Guests" list = {["2 guests", "4 guests"]} />
                <SearchButton />
            
            </form>
        </div>
    )
}