import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu  = () =>{

    const {resId} =useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex,setShowIndex] = useState(0);

    if(resInfo === null) return <Shimmer />

    const {name,cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const  categories  = resInfo.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    // console.log(categories);

    return(
        <div className="text-center">
            <h1 className="font-bold text-2xl my-6">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")}-{costForTwoMessage}</p>
             {/* Categort */}
            {categories.map((category, index) => 
                <div>
                    {
                        <RestaurantCategory key={category?.card?.card?.title} 
                        data={category?.card?.card} 
                        showItems = {index === showIndex ? true : false}
                        setShowIndex={()=>setShowIndex(index)} 
                        />}
                </div>
            )}
        </div>
    )
}

export default RestaurantMenu;