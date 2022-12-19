import {Link} from "react-router-dom";
import styles from "./css/footer.module.scss";

function Footer(props) {
    return (
        <div className= {styles.footer}>
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li><a href = "https://github.com/maksimphono/wind_bnb">Checkout this project on GitHub</a></li>
            </ul>
            <div className={styles.licence}>
                WindBnB 2022 - {new Date().toDateString().slice(-4)}. All rights reserved.
            </div>
        </div>
    )
}

export default Footer;