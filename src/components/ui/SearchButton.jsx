export default function (props) {
    return (
        <div className = "search-btn-wrapper">
            <button className = "search-btn">
                <span className = "search__icon" >P</span>
                <span className = "search__label" style = {{display : props.showSearchLabel?"flex":"none"}}>Search</span>
            </button>
        </div>
    )
}