import "./css/card_style.scss";

export default function () {
    return (
        <div className = "wind-card">
            <div className = "preview-image">
                <img src = "https://shorttermrentalz.com/wp-content/uploads/2020/05/bae26820-dc55-480d-8871-36554069af88.jpg"/>
            </div>
            <div className = "title">
                <span className = "super-host">Super Host</span>
                <span className = "name">Name</span>
                <span className = "stars">Stars</span>
            </div>
            <div className = "description">
                <p>
                    Description
                </p>
            </div>
        </div>
    )
}