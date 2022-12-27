import {useRef, useMemo, useEffect, useState} from "react";
import React from "react";
import $ from "jquery";
import GuestCounter from "./Counter.jsx";

import {adults_number_field_id, children_number_field_id} from "../../data/fields_html_ids.js";

export default function({adultsCounterRef, childrenCounterRef, ...props}) {
    const [adultsNumber, setAdultsNumber] = useState(1);
    const [childrenNumber, setChildrenNumber] = useState(0);

    //const adultsCounterRef = useRef();
    //const childrenCounterRef = useRef();
    
    const selectedItemRef = useRef();
    const selectionDivRef = useRef();
    const $selectedItemSpan = $(selectedItemRef.current);
    const $selectionDiv = $(selectionDivRef.current);
    
    useEffect(() => {
        $selectionDiv?.find("ul.selection").css("height", !props.show? "0px": "max-content");
    }, [props.show]);

    const onToggleSelection = (event) => {
        props.toggle(v => !v);
    }
    
    return (
        <div className = "search-bar" name = "search__filters">
            <div className = "summary" onClick = {onToggleSelection}>
                <span>{props.title}</span>
                <span ref = {selectedItemRef}>{+adultsNumber + +childrenNumber} guests</span>
            </div>
            <div
                ref = {selectionDivRef} 
                className = "selection"
                style = {{opacity : "" + Number(props.show)}}
            >
                <ul className = "selection">
                    <li>
                        <GuestCounter
                            id = {adults_number_field_id}
                            title = {<span>Adults<i className="material-icons" style = {{color : "#000"}}>person</i></span>}
                            subtitle = "Ages 13 or above" 
                            initialValue = {1}
                            max = {8}
                            min = {1}
                            ref = {adultsCounterRef}
                            setter = {setAdultsNumber} 
                        />
                    </li>
                    <li>
                        <GuestCounter 
                            id = {children_number_field_id}
                            title = {<span>Children<i className="material-icons" style = {{color : "#000"}}>child_care</i></span>}
                            subtitle = "Ages 2 - 12" 
                            initialValue = {0}
                            max = {8}
                            min = {0}
                            ref = {childrenCounterRef}
                            setter = {setChildrenNumber} 
                        />
                    </li>
                </ul>          
            </div>
        </div>
    )
}

