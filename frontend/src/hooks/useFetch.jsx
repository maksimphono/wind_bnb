import {useState, useEffect, useCallback} from "react";
import $ from "jquery";

export default function useFetch(url) {
    const [fetchedData, setFetchedData] = useState({
        data : [],
        isLoading : true,
        XHR : null,
        staus: "",
        error: false
    });
    const fetchData = useCallback(async () => {
        $.ajax({
            url : url,
            dataType: "json",
            success : (data, status, jqXHR) => {
                setFetchedData({
                    data : data || [status],
                    status: status,
                    XHR : jqXHR,
                    isLoading : false,
                    error: false
                });
            },
            error: (jqXHR, status) => {
                setFetchedData({
                    data : [],
                    status: status,
                    XHR : jqXHR,
                    isLoading : false,
                    error: false
                });
            }
        })
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [url, fetchData]);

    const {data, isLoading, status, error} = fetchedData;
    return {data, isLoading, status, error};
}