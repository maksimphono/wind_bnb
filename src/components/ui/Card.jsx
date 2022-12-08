import {PropsType} from "react";
import "./css/card_style.scss";

export default function Card (props) {
    return (
        <div className = "wind-card">
            <div className = "preview-image">
                <img src = "https://shorttermrentalz.com/wp-content/uploads/2020/05/bae26820-dc55-480d-8871-36554069af88.jpg"/>
            </div>
            <div className = "title">
                <span className = "name">{props.isSuperHost && <span className = "super-host">Super Host</span>}
                {props.name || "Name"}</span>
                <span className = "stars">{props.starsRate || 4.5}</span>
            </div>
            <div className = "description">
                <p>
                    {props.description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae, quia temporibus nisi dolores ipsa cum consectetur nemo ut? Magni ratione molestiae nam at laudantium cumque deserunt aperiam veritatis sit!"}
                </p>
            </div>
        </div>
    )
}
