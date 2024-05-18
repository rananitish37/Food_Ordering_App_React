import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {

    const [listOfRestro, setListOfRestro] = useState(resList);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=23.0224734&lng=72.5715931");

        const json = await data.json();

        // console.log(json);
        console.log(json?.data?.success?.cards[0]?.gridWidget?.imageGridCards);
        // setListOfRestro(json?.data?.success?.cards[0]?.gridWidget?.imageGridCards);
    }; 

    return(
        <div className="body">
                <div className="filter">
                    <button className="filter-btn"
                        onClick={() => {
                            const filteredList = listOfRestro.filter(
                                (res) => res.info.avgRating > 4);
                                setListOfRestro(filteredList);
                        }}
                    >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {listOfRestro.map((restaurant) =>(
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
        
    )
    
}

export default Body;