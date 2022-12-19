import styles from "./css/imagesview.module.scss";
import {useCallback, useState} from "react";

function ImagesView(props) {
    return (
        props.show && <div className = {styles.images__view}>
            <button className = {styles.close__button} onClick = {props.handleClose}>X</button>
            <img />
            <img />
            <img />
            <img />
        </div>
    );
}

export default ImagesView;