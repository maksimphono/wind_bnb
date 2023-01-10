import EmptyResult from "../../components/ui/EmptyResult"

function ReservationNotice({title, metaData}) {
    if (metaData == undefined) return <EmptyResult />

    const style = useMemo(() => ({
        totalPrice : {
            fontSize: "1.5rem",
            fontFamily: "sans-serif"
        }
    }), [])

    return (
        <p>
            <span>You reserved apartment "<i>{title}</i>" for {metaData.stayDuration}.</span>
            <>
                <br />
                <br />
            </>
            <span>Check in date : {metaData.checkInDate?.toDateString()}</span>
            <br />
            <span>Check out date : {metaData.checkOutDate?.toDateString()}</span>
            <>
                <br />
                <br />
            </>
            <span style = {style.totalPrice}>Total price will be <b>${metaData.totalPrice}</b></span>
        </p>
    )
}

export default ReservationNotice