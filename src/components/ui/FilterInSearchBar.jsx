import {useRef, useMemo, useEffect} from "react";
import React from "react";
import $ from "jquery";

export default React.forwardRef(function(props, selectionDivRef) {
    const selectedItemRef = useRef();
    //const selectionDivRef = ref;
    let $selectedItemSpan;
    let $selectionDiv;

    useEffect(() => {
        $selectedItemSpan = $(selectedItemRef.current);
        $selectionDiv = $(selectionDivRef.current);
    }, []);

    const onSelectItem = ({target}) => {
        const $target = $(target);
        
        $selectedItemSpan.text($target.text());
    }

    const onToggleSelection = (event) => {
        const isVisiable = Number($selectionDiv.css("opacity"));
        console.log($selectionDiv, isVisiable);
        $selectionDiv.css({
                "opacity": "" + Number(!isVisiable),
            }
        );
        $selectionDiv.find("ul.selection").css("height", isVisiable? "0px": "max-content");
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

