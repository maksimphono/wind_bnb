import {useRef, useState, useMemo, useEffect} from "react";
import React from "react";
import $ from "jquery";
import { toggleElem } from "./Haeder";

export default React.forwardRef(function(props, ref) {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);

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
                <span id = {props.location_selection_id} data-value = {selectedItemIndex}>{props.list[selectedItemIndex] || "No location specified"}</span>
            </div>
            <div 
                ref = {selectionDivRef} 
                className = "selection"
                style = {{opacity : "" + Number(props.show)}}
            >
                <ul className = "selection">
                    {props.list && props.list.map(
                        (item, i) => (
                            <li key = {i} onClick = {() => onSelectItem(i)}>
                                {item.toString()}
                            </li>
                        ))
                    }
                </ul>          
            </div>
        </div>
    )
})

