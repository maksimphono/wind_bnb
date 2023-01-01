import styles from "./css/empty_result.module.scss";
import { Link} from "react-router-dom"

export default function ({className, style, returnToHP}) {
    return (
        <div className = {styles.empty__results + " " + className}>
            <h3>Sorry, we can't find anything...</h3>
            <Link to = "/" onClick = {returnToHP}>Try return to the Home page</Link>
        </div>
    )
}