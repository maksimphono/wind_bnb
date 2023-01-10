import "./css/cardFullView.scss";
import ImagesView from "./ImagesView.jsx";
import {useState, useEffect, useCallback, useMemo, useContext} from "react";
import useFetch from "../../hooks/useFetch.jsx";
import {useParams} from "react-router-dom";
import $ from "jquery";
import LoadingComponent from "../../components/ui/LoadingComponent";
import Modal from "../../components/ui/Modal.jsx";
import ReserveCard from "./ReserveCard.jsx";
import { API_URL } from "../../settings";
import { ModalContext } from "../../Layout";
import ReservationNotice from "./ReservationNotice";
import { briefText } from "../../utils/helper_tools";

const BRIEF_DESCRIPTION_LEN = 300;

export default function() {
    const {id} = useParams();
    const manageModal = useContext(ModalContext);

    const [showImages, setShowImages] = useState(false);
    const [showAboutModal, setShowAboutModal] = useState(false);
    const [owner, setOwner] = useState({ownerData : null, ownerIsLoading : null});
    
    const {data, isLoading, status, error} = useFetch(API_URL + "/" + id);
    const {data : dataImages, isLoading : imagesIsLoading, status : imagesStatus, error : imagesError} = useFetch(API_URL + "/image/" + id)

    const onShowImages = useCallback(() => setShowImages(true));

    useEffect(() => {
        $(".images img").on("click", onShowImages);
        return () => {
            $(".images img").off("click", onShowImages);
        }
    }, [dataImages]);

    useEffect(function fetchOwner() {
        if (data == undefined) return;
        $.ajax({
            url : API_URL + "/owner/" + data.owner,
            dataType : "json",
            success: function (ownerData) {
                setOwner(ownerData);
            },
            error : function (err) {
                console.log("Error while fetching owner info : ", err);
            }
        })
    }, [data])

    const handleReadMore = useCallback((event) => {
        manageModal.setModalTitle("About " + briefText(data.title, data.title?.indexOf(' ')))
        manageModal.setModalText(data.description)
        manageModal.setShowModal(true)
    }, [data.title, data.description])

    const submitReservation = useCallback((metaData) => {
        metaData.event.preventDefault()
        manageModal.setModalTitle("Apartment reservation")
        manageModal.setModalText(
            <ReservationNotice 
                title = {data.title} 
                metaData = {metaData}
            />
        )
        manageModal.setShowModal(true);
    }, [data.title])

    if (isLoading || imagesIsLoading) {
        return <LoadingComponent />
    }

    return (
        <>
        <Modal show = {showAboutModal} title = {"About " + briefText(data.title, data.title?.indexOf(' '))} onHide = {() => setShowAboutModal(false)}>
            <p>{data.description}</p>
        </Modal>
        <ImagesView show = {showImages} images = {dataImages} handleClose = {() => setShowImages(false)}/>
        <div className = "card__full__view">
            <div className = "card__title">
                <h2>{data.title}</h2>
                <span className = "star__number"><i className="material-icons">star</i>{data.starsRate} stars</span>
                <span className = "superhost">Superhost</span>
                <span className = "adress">{data.adress}</span>
            </div>
            <div className = "images">
                {dataImages.map(item => 
                    <img key = {item.card} src={item.image} alt={data.title} />
                )}
            </div>
            <p className="description">
                {briefText(data.description, BRIEF_DESCRIPTION_LEN)}
                {data.description.length >= BRIEF_DESCRIPTION_LEN && 
                    <button className = "read__more" onClick = {handleReadMore}>Read more...</button>
                }
            </p>
            <div className = "owner__info">
                <p className = "info">Entire house is owed by {owner.name}</p>
                <img src={owner.avatar} alt={owner.name} className = "avatar" />
            </div>
            <div className="conveniences">
                <ul>
                    {data.freewifi && <li><i className="material-icons">wifi</i><span>Free wifi avaliable in this apartment</span></li>}
                    {data.nocancelationfee && <li><i className="material-icons">request_quote</i><span>Booking cancelation without fees</span></li>}
                    {data.securitysystems && <li><i className="material-icons">gpp_good</i><span>Security system working on this property</span></li>}
                </ul>
            </div>
            <ReserveCard 
                data = {{priceForNight : data?.priceForNight, starsRate : data?.starsRate}}
                togglerLabel = "Guests"
                onSubmit = {submitReservation}
            />
        </div>
        </>
    )
    /*
    */
    
}