import Card from "../../components/ui/Card.jsx";
import LoadingComponent from "../../components/ui/LoadingComponent.jsx";
import {useEffect, useContext, useState, useCallback} from "react";
import {Link} from "react-router-dom";
import "./css/card_collection_style.scss";
import useFetch from "../../hooks/useFetch.jsx";
import $ from "jquery"
import { FetchContext } from "../../Layout.jsx";
import { fetchWithLocation } from "../../utils/fetch_tools.js";
import EmptyResult from "../../components/ui/EmptyResult.jsx";

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
        fetchWithLocation(query)
            .then(newResults => setResults(newResults));
    }, [query]);

    useEffect(() => {
        console.log(data)
    }, [data])

    if (isLoading) {
        return <LoadingComponent />
    }
    return (
        <>
            <h1 className = "stay-location">Stay {query?.location?.name && "in " + query.location.name || "anywhere"}</h1>
            
            {!data.length && <EmptyResult returnToHP={() => setQuery("")} /> || 
                <div className = "card-collection">
                    {data?.map(item => 
                        <Link key = {item.id} to = {"/full/" + item.id}>
                            <Card 
                                name = {item.title} 
                                description = {item.description} 
                                isSuperHost = {item.isSuperhost} 
                                starsRate = {item.starsRate}
                                preview_image = {item.preview_image}
                            />
                        </Link>
                    )}
                </div>
            }
        </>       
    )
}

/*
<Link to = "/full/1">
                    <Card name =  description = "Desc 1" isSuperHost starsRate = {5.6} />
                </Link>
*/