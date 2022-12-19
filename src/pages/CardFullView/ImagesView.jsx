import styles from "./css/imagesview.module.scss";
import {useCallback, useState} from "react";

function ImagesView(props) {
    return (
        props.show && <div className = {styles.images__view}>
            <button className = {styles.close__button} onClick = {props.handleClose}>X</button>
            <div className = {styles.images}>
                <img src="https://th.bing.com/th/id/R.149a813e49860f6b6bde0872a869fedb?rik=DyHz0u5KYXdpFQ&pid=ImgRaw&r=0" alt="" />
                <img src="https://th.bing.com/th/id/R.149a813e49860f6b6bde0872a869fedb?rik=DyHz0u5KYXdpFQ&pid=ImgRaw&r=0" alt="" />
                <img src="https://th.bing.com/th/id/OIP.co2IySTzP1YwwIaVwGgrigHaE8?pid=ImgDet&w=800&h=534&rs=1" alt="" />
                <img src="https://th.bing.com/th/id/R.149a813e49860f6b6bde0872a869fedb?rik=DyHz0u5KYXdpFQ&pid=ImgRaw&r=0" alt="" />
                <img src="https://th.bing.com/th/id/R.149a813e49860f6b6bde0872a869fedb?rik=DyHz0u5KYXdpFQ&pid=ImgRaw&r=0" alt="" />
            </div>
        </div>
    );
}

export default ImagesView;