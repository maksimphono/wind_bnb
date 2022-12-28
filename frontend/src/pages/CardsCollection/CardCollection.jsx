import Card from "../../components/ui/Card.jsx";
import LoadingComponent from "../../components/ui/LoadingComponent.jsx";
import {useMemo, useEffect, useContext, useState, useCallback} from "react";
import {Link} from "react-router-dom";
import "./css/card_collection_style.scss";
import useFetch from "../../hooks/useFetch.jsx";
import $ from "jquery"
import { FetchContext } from "../../Layout.jsx";
import { API_URL, LOCATION_FILTER } from "../../settings.js";

function useFetchWithQuery(url, filterName, query){
    let adress = url;
    if (filterName && query) {
        adress += "/" + filterName + "/" + query;
    }
    return useFetch(adress);
}

export default function(props) {
    const {query, setQuery} = useContext(FetchContext);
    const [{data, isLoading, status, error}, setResults] = useState({data : [], isLoading : true, status : "", error: ""});

    const disableQuery = useCallback(() => setQuery(""), [query]);

    useEffect(() => {
        $(document).on("reload", disableQuery);
        return () => {
            $(document).off("reload", disableQuery);
        }
    }, []);

    useEffect(() => {
        let url = API_URL
        console.log("query : ", query.location?.replaceAll(" ", ""));
        if (query) {
            url += "/" + LOCATION_FILTER + query.location?.replaceAll(" ", "");
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