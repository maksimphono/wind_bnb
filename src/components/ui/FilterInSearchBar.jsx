export default function(props) {
    return (
        <div className = "search-bar location" name = "search__filters">
            <div className = "summary">
                <span>{props.title}</span>
                <span>Subtitle</span>
            </div>
            <div className = "selection">
                <ul className = "selection">
                    {props.list && props.list.map(
                        (elem) => (
                            <li>
                                <label>{elem.toString()}</label>
                            </li>
                        ))
                    }
                </ul>          
            </div>
        </div>
    )
}

