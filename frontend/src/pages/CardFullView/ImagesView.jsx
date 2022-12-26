import styles from "./css/imagesview.module.scss";
import {useCallback, useState} from "react";

function ImagesView(props) {
    return (
        props.show && <div className = {styles.images__view}>
            <button className = {styles.close__button} onClick = {props.handleClose}>X</button>
            <div className = {styles.images}>
                {props.images.map(item => 
                    <img key = {item.card} src = {item.image} alt = ""/>
                )}
            </div>
        </div>
    );
}

export default ImagesView;