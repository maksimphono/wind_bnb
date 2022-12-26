import Card from "../../components/ui/Card.jsx";
import LoadingComponent from "../../components/ui/LoadingComponent.jsx";
import {useMemo, useEffect} from "react";
import {Link} from "react-router-dom";
import "./css/card_collection_style.scss";
import useFetch from "../../hooks/useFetch.jsx";
import $ from "jquery"

export default function(props) {
    const {data, isLoading, status, error} = useFetch("http://127.0.0.1:8000/api");

    useEffect(() => {
        console.log(data);
    }, [data, isLoading]);

    if (isLoading) {
        return <LoadingComponent />
    }

    return (
        <>
            <h1 className = "stay-location">Stay in Finland</h1>
            <div className = "card-collection">
                {data.map(item => 
                    <Link key = {item.id} to = {"/full/" + item.id}>
                        <Card 
                            name = {item.title} 
                            description = {item.description} 
                            isSuperHost 
                            starsRate = {5.0}
                            preview_image = {item.preview_image}
                         />
                    </Link>
                )}
            </div>
        </>       
    )
}

/*
<Link to = "/full/1">
                    <Card name =  description = "Desc 1" isSuperHost starsRate = {5.6} />
                </Link>
*/