import styles from "./css/imagesview.module.scss";
import {useCallback, useState} from "react";
import PropTypes from "prop-types";

function ImagesView(props) {
    return (
        props.show && <div className = {styles.images__view}>
            <h3>Title</h3>
            <button className = {styles.close__button} onClick = {props.handleClose}><i className = "material-icons">close</i></button>
            <div className = {styles.images}>
                {props.images.map(item => 
                    <img key = {item.card} src = {item.image} alt = ""/>
                )}
            </div>
        </div>
    );
}

ImagesView.propTypes = {
    show : PropTypes.bool,
    handleClose : PropTypes.func,
    images : PropTypes.shape({
        card : PropTypes.number,
        image : PropTypes.string
    })
}

export default ImagesView;