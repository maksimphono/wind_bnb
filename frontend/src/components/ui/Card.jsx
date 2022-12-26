import {PropsType} from "react";
import "./css/card_style.scss";

export default function Card(props) {
    return (
        <div className = "wind-card">
            <div className = "preview-image">
                <img src = {props.preview_image} />
            </div>
            <div className = "title">
                <span className = "name">{props.isSuperHost && <span className = "super-host">Super Host</span>}
                {props.name || "Whithout name"}</span>
                <span className = "stars">{props.starsRate || 0.0}</span>
            </div>
            <div className = "description">
                <p>
                    {props.description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae, quia temporibus nisi dolores ipsa cum consectetur nemo ut? Magni ratione molestiae nam at laudantium cumque deserunt aperiam veritatis sit!"}
                </p>
            </div>
        </div>
    )
}

/*

*/
