import Card from "../../components/ui/Card.jsx";
import LoadingComponent from "../../components/ui/LoadingComponent.jsx";
import {useMemo, useEffect, useContext, useState} from "react";
import {Link} from "react-router-dom";
import "./css/card_collection_style.scss";
import useFetch from "../../hooks/useFetch.jsx";
import $ from "jquery"
import { FetchContext } from "../../Layout.jsx";

function useFetchWithQuery(url, filterName, query){
    let adress = url;
    if (filterName && query) {
        adress += "/" + filterName + "/" + query;
    }
    return useFetch(adress);
}

export default function(props) {
    const {query} = useContext(FetchContext);
    const [{data, isLoading, status, error}, setResults] = useState({data : [], isLoading : true, status : "", error: ""});

    useEffect(() => {
        console.log(data);
    }, [data, isLoading]);

    useEffect(() => {
        let url = "http://127.0.0.1:8000/api"
        console.log("query : ", query.location?.replaceAll(" ", ""));
        if (query) {
            url += "/location/" + query.location?.replaceAll(" ", "");
        }
        $.ajax({
            url : url,
            dataType : "json",
            success : (data) => (setResults({data : data, isLoading : false, status : "success", error : "noerr"})),
            error : (err) => (setResults({data : data, isLoading : false, status : "error", error : err}))
        })
        
    }, [query]);

    if (isLoading) {
        return <LoadingComponent />
    }

    return (
        <>
            <h1 className = "stay-location">Stay in Finland</h1>
            <div className = "card-collection">
                {data?.map(item => 
                    <Link key = {item.id} to = {"/full/" + item.id}>
                        <Card 
                            name = {item.title} 
                            description = {item.description} 
                            isSuperHost 
                            starsRate = {item.starsRate}
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