import styles from "./css/imagesview.module.scss";

function ImagesView(props) {
    return (
        props.show && <div className = {styles.images__view}>
            <button className = {styles.close__button}>X</button>
            <img />
            <img />
            <img />
            <img />
        </div>
    );
}

export default ImagesView;