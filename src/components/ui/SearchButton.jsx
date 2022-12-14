export default function ({showSearchLabel}) {
    return (
        <div className = "search-btn-wrapper">
            <button className = "search-btn">
                <span>P</span>
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