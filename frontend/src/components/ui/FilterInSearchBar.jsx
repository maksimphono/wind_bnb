import {useRef, useState, useMemo, useEffect} from "react";
import React from "react";
import $ from "jquery";
import { toggleElem } from "./Haeder";

import {location_selection_fielt_id} from "../../data/fields_html_ids.js";

function makeLocation(item){
    if (item == null) return null;
    return item.country + ", " + item.city
}
    
export default React.forwardRef(function(props, ref) {
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

    const selectionDivRef = useRef();
    
    useEffect(() => {
        $(selectionDivRef.current)?.find("ul.selection").css("height", !props.show? "0px": "max-content");
    }, [props.show]);
    
    const onSelectItem = (index) => {
        setSelectedItemIndex(index);
    }

    const onToggleSelectionDiv = (event) => {
        props.toggle(v => !v);
    }
    
    return (
        <div className = "search-bar" name = "search__filters">
            <div className = "summary" onClick = {onToggleSelectionDiv}>
                <span>{props.title}</span>
                <span 
                    id = {location_selection_fielt_id} 
                    data-value = {props.list[selectedItemIndex]?.id}
                >
                    {makeLocation(props.list[selectedItemIndex]) || "No location specified"}
                </span>
            </div>
            <div 
                ref = {selectionDivRef} 
                className = "selection"
                style = {{opacity : "" + Number(props.show)}}
            >
                <ul className = "selection">
                    {props.list && props.list.map(
                        (item, i) => (
                            <li key = {item.id} onClick = {() => onSelectItem(i)}>
                                {makeLocation(item)}{item && <i className = "material-icons">location_city</i>}
                            </li>
                        ))
                    }
                </ul>          
            </div>
        </div>
    )
})
