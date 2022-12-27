export default function ({showSearchLabel}) {
    return (
        <div className = "search-btn-wrapper">
            <button className = "search-btn">
                <i className="material-icons" style = {{color : "#000"}}>search</i>
                <span 
                    className = "search__label" 
                    style = {{display: showSearchLabel? "flex" : "none"}}
                >
                        Search
                </span>
            </button>
        </div>
    )
}