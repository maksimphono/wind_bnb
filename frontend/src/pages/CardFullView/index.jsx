import "./css/cardFullView.scss";
import Counter from "../../components/ui/Counter.jsx";
import DropDown from "../../components/ui/DropDown.jsx";
import ImagesView from "./ImagesView.jsx";
import {useState, useEffect, useCallback, useMemo} from "react";
import useFetch from "../../hooks/useFetch.jsx";
import {useParams} from "react-router-dom";
import $ from "jquery";
import LoadingComponent from "../../components/ui/LoadingComponent";
import Modal from "../../components/ui/Modal.jsx";
import DateInput from "../../components/ui/DateInput";
import { API_URL } from "../../settings";

export default function() {
    const [showImages, setShowImages] = useState(false);
    const [showAboutModal, setShowAboutModal] = useState(false);
    const [isOpenDrop, setIsOpenDrop] = useState(false);
    const onShowImages = useCallback(() => setShowImages(true));
    const {id} = useParams();
    const {data, isLoading, status, error} = useFetch(API_URL + "/" + id);
    const [owner, setOwner] = useState({ownerData : null, ownerIsLoading : null});
    const {data : dataImages, isLoading : imagesIsLoading, status : imagesStatus, error : imagesError} = useFetch(API_URL + "/image/" + id)

    const brefDescription = useMemo(() => {
        if (!data.description) return;
        const bref = [...data.description];

        bref.splice(19, bref.length, "...");
        return bref;
    }, [data.description])

    useEffect(() => {
        $(".images img").on("click", onShowImages);
        return () => {
            $(".images img").off("click", onShowImages);
        }
    }, [dataImages]);

    useEffect(() => {
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

    if (isLoading || imagesIsLoading) {
        return <LoadingComponent />
    }

    return (
        <>
        <Modal show = {showAboutModal} title = {"About " + data.title} onHide = {() => setShowAboutModal(false)}>
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
                {brefDescription}
                <button onClick = {() => setShowAboutModal(true)}>Read more...</button>
            </p>
            <div className = "owner__info">
                <p className = "info">Entire house is owed by {owner.name}</p>
                <img src={owner.avatar} alt={owner.name} className = "avatar" />
            </div>
            <form className = "reserve__card">
                <div className = "reserve__card__title">
                    <span>{data.priceForNight} <span>/ night</span></span>
                    <span style = {{display: "flex", alignItems: "center"}}><i className="material-icons" style = {{color : "#f77"}}>star</i>{data.starsRate} stars</span>
                </div>
                <form className = "set__in-out__date">
                    <DateInput initialValue={new Date()} label = "Check in date" classes={{wrapper : "wrapper", label : "label"}}/>
                    <DateInput initialValue={new Date()} label = "Check out date" classes={{wrapper : "wrapper", label : "label"}}/>
                    <div className = "guests__settings__container">
                        <DropDown toggler = "Guests" isOpen = {isOpenDrop} setterCallback = {setIsOpenDrop} style = {{width : "100%", height: "100%"}} togglerStyle = {{height: "100%"}}>
                            <Counter 
                                title = {<span>Adults<i className="material-icons">person</i></span>}
                                subtitle = "Age 13+" 
                                initialValue = {1} 
                                max = {10} 
                                min = {0}/>
                            <Counter 
                                title = {<span>Children<i className="material-icons">child_care</i></span>} 
                                subtitle = "Age 2 - 12" 
                                max = {10} 
                                min = {0}/>
                            <Counter 
                                title = {<span>Infants<i className="material-icons">child_friendly</i></span>}
                                subtitle = "Age 0 - 2" 
                                max = {2} 
                                min = {0}/>
                            <Counter 
                                title =  {<span>Pets<i className="material-icons">cruelty_free</i></span>}
                                subtitle = "Animals"  
                                max = {4} 
                                min = {0}/>
                        </DropDown>
                    </div>
                    
                </form>
                <button type = "submit">Reserve</button>
            </form>
        </div>
        </>
    )
    /*
    */
    
}