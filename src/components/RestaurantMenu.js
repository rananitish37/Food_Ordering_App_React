import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu  = () =>{

    const {resId} =useParams();

    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu= async () => {
        const data = await fetch(MENU_API+resId);

        const json = await data.json();
        setResInfo(json.data);
        // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.crads[2]?.card?.card?.itemCards?.card);
    };

    if(resInfo === null) return <Shimmer />

    const {name,cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const  itemCards  = resInfo.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    // console.log(itemCards);
    

    return(
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}-{costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name}- {"Rs"} {item.card.info.price/100 || item.card.info.defaultPrice/100 }</li>)}
                {/* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li> */}
            </ul>
        </div>
    )
}

export default RestaurantMenu;