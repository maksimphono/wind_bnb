export default function() {
    return (
        <div className = "card__full__view">
            <div className = "card__title">
                <h2>Seaview and Thai temple view pool villa</h2>
                <span className = "star__number">4.4 stars</span>
                <span className = "adress">Ko Samui, Chang Wat Surat Thani, Thailand</span>
            </div>
            <div className = "images">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            <div className = "owner__info">
                <p className = "info"></p>
                <img src="" alt="" className = "avatar" />
            </div>
            <div className = "reserve__card">
                <div className = "reserve__card__title">
                    <span>$4,998/night</span>
                    <span>4.4 stars</span>
                </div>
                <form className = "set__in-out__date">
                    <input type="date" className = "checkin__date" />
                    <input type="date" className = "checkout__date" />
                    <div style = {{background: "red"}}></div>
                    <div style = {{background: "#ada"}}></div>
                </form>
            </div>
        </div>
    )
}