import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"

const Body = () => {

    const [listOfRestro, setListOfRestro] = useState([]);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=23.0224734&lng=72.5715931");

        const json = await data.json();

        // console.log(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestro(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    }; 

    if(listOfRestro.length === 0){
        return <Shimmer />
    }

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