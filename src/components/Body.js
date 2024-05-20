import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"

const Body = () => {

    const [listOfRestro, setListOfRestro] = useState([]);

    const [searchText, setSearchText] = useState("");

    const [listOfRestroTemp, setListOfTesroTemp] = useState([]);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=23.0224734&lng=72.5715931");

        const json = await data.json();

        //optional chaining
        // console.log(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestro(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setListOfTesroTemp(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    }; 

    // conditional rendring
    // if(listOfRestro.length === 0){
    //     return <Shimmer />
    // }

    return listOfRestro.length === 0 ? (<Shimmer />) : (
        <div className="body">
                <div className="filter">
                    <div className="search">
                        <input type="text" className="search-box" value={searchText} onChange={(e) =>{
                            setSearchText(e.target.value);
                        }} />
                        <button 
                            onClick={() => {
                                const filteredRestro = listOfRestro.filter((res) =>
                                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                );

                            // console.log(filteredRestro);
                            setListOfTesroTemp(filteredRestro);
                            
                        }} >Search</button>
                    </div>
                    <button className="filter-btn"
                        onClick={() => {
                            const filteredList = listOfRestroTemp.filter(
                                (res) => res.info.avgRating > 4);
                                setListOfTesroTemp(filteredList);
                        }}
                    >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {listOfRestroTemp.map((restaurant) =>(
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
        
    )
    
}

export default Body;