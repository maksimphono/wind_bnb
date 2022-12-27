import Card from "../../components/ui/Card.jsx";
import {useMemo} from "react";
import {Link} from "react-router-dom";
import "./css/card_collection_style.scss";

export default function(props) {
    const cards = useMemo(() => props.cards, []);

    return (
        <>
            <h1 className = "stay-location">Stay in Finland</h1>
            <div className = "card-collection">
                <Link to = "/full/1">
                    <Card name = "Hotel 1" description = "Desc 1" isSuperHost starsRate = {5.6} />
                </Link>
                <Link to = "/full/2">
                    <Card name = "Hotel 2" description = "Desc 2" isSuperHost starsRate = {5.6} />
                </Link>
                <Card name = "Hotel 2" description = "" isSuperHost starsRate = {3.6} />
                <Card name = "Hotel 3" description = "Desc 2" starsRate = {2.6} />
                <Card name = "Hotel 4" description = "" starsRate = {4.6} />
                <Card name = "Hotel 5" description = "" isSuperHost starsRate = {5.6} />
                <Card name = "Hotel 6" description = "" starsRate = {5.6} />
            </div>
        </>       
    )
}