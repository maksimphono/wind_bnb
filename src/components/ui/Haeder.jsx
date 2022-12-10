import "./css/header.scss";

export default function (props) {
    return (
        <div className = "header">
            <div className = "brand">Wind BnB</div>
            <form className = "search">
                <input className = "search-bar location" type = "text" placeholder="Search"/>
                <input className = "search-bar guests" type = "text" placeholder="Search"/>
                <button className = "search-btn">o</button>
                
                <div className = "additional-filters">
                    <div className = "filter">
                        <input checked type = "radio" name = "radio1"/>  
                    </div>
                    <div className = "filter">
                        <input type = "radio" name = "radio1"/>
                    </div>
                </div>
                
            </form>
        </div>
    )
}