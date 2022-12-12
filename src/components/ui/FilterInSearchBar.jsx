import {useRef, useMemo, useEffect} from "react";
import React from "react";
import $ from "jquery";
import { toggleElem } from "./Haeder";

export default React.forwardRef(function(props, ref) {
    const selectedItemRef = useRef();
    const selectionDivRef = useRef();
    const $selectedItemSpan = $(selectedItemRef.current);
    const $selectionDiv = $(selectionDivRef.current);
    
    useEffect(() => {
        $selectionDiv?.find("ul.selection").css("height", !props.show? "0px": "max-content");
    }, [props.show]);
    
    const onSelectItem = ({target}) => {
        const $target = $(target);
        
        $selectedItemSpan.text($target.text());
    }

    const onToggleSelection = (event) => {
        props.toggle(v => !v);
    }
    
    return (
        <div className = "search-bar" name = "search__filters">
            <div className = "summary" onClick = {onToggleSelection}>
                <span>{props.title}</span>
                <span ref = {selectedItemRef}>{props.list[0] || "Subtitle"}</span>
            </div>
            <div 
                ref = {selectionDivRef} 
                className = "selection"
                style = {{opacity : "" + Number(props.show)}}
            >
                <ul className = "selection">
                    {props.list && props.list.map(
                        (item, i) => (
                            <li key = {i} onClick = {onSelectItem}>
                                {item.toString()}
                            </li>
                        ))
                    }
                </ul>          
            </div>
        </div>
    )
})

