import {API_URL, OWNER_UR, LOCATION_FILTER_UR} from "../settings";
import $ from "jquery";

export function fetchOwner(data) {
    if (data == undefined) return;
    return new Promise((resolve, reject) => {
        $.ajax({
            url : [API_URL, OWNER_UR, data.owner].join("/"),
            dataType : "json",
            success: function (ownerData) {
                resolve(ownerData);
            },
            error : function (err) {
                reject(err);
            }
        })
    });
}

export function fetchWithLocation(query) {
    let url = API_URL;
    if (query?.location?.id) {
        url += `/${LOCATION_FILTER_UR}=${query.location.id}`;
    }
    return new Promise((resolve, reject) => {
        $.ajax({
            url : url,
            dataType : "json",
            success : (data) => (resolve({data : data, isLoading : false, status : "success", error : "noerr"})),
            error : (err) => (resolve({data : {}, isLoading : false, status : "error", error : err}))
        })
    })
}
