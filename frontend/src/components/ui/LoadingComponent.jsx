import styles from "./css/loadingcomponent.module.scss"

export default function () {
    return (
        <div className = {styles.component__wrapper}>
            <div className = {styles.loading__icon}></div>
        </div>
    )
}