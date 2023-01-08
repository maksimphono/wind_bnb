import "./css/cardFullView.scss";
import ImagesView from "./ImagesView.jsx";
import {useState, useEffect, useCallback, useMemo} from "react";
import useFetch from "../../hooks/useFetch.jsx";
import {useParams} from "react-router-dom";
import $ from "jquery";
import LoadingComponent from "../../components/ui/LoadingComponent";
import Modal from "../../components/ui/Modal.jsx";

import ReserveCard from "./ReserveCard.jsx";
import { API_URL } from "../../settings";

const BRIEF_DESCRIPTION_LEN = 300;

export default function() {
    const [showImages, setShowImages] = useState(false);
    const [showAboutModal, setShowAboutModal] = useState(false);
    const onShowImages = useCallback(() => setShowImages(true));
    const {id} = useParams();
    const {data, isLoading, status, error} = useFetch(API_URL + "/" + id);
    const [owner, setOwner] = useState({ownerData : null, ownerIsLoading : null});
    const {data : dataImages, isLoading : imagesIsLoading, status : imagesStatus, error : imagesError} = useFetch(API_URL + "/image/" + id)

    
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

    const briefText = useCallback((text, numberOfSym) => {
        if (!text) return;
        if (text.length < numberOfSym) return text;
        const brief = [...text];

        brief.splice(numberOfSym, brief.length, "...");
        return brief.join("");
    }, [data.title, data.description])

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
                    <button className = "read__more" onClick = {() => setShowAboutModal(true)}>Read more...</button>
                }
            </p>
            <div className = "owner__info">
                <p className = "info">Entire house is owed by {owner.name}</p>
                <img src={owner.avatar} alt={owner.name} className = "avatar" />
            </div>
            <ReserveCard 
                data = {{priceForNight : data?.priceForNight, starsRate : data?.starsRate}}
                togglerLabel = "Guests"
                onSubmit = {() => alert("submit")}
            />
        </div>
        </>
    )
    /*
    */
    
}