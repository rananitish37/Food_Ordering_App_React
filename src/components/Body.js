import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [listOfRestro, setListOfRestro] = useState([]);

    const [searchText, setSearchText] = useState("");

    const [listOfRestroTemp, setListOfTesroTemp] = useState([]);

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=25.59080&lng=85.13480");

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

    // console.log(listOfRestro);
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false ) return(
        <h1>Seems your are offline please check your internet connection</h1>
    );

    return listOfRestro.length === 0 ? (<Shimmer />) : (
        <div className="body">
                <div className="filter flex">
                    <div className="search p-4 m-4 ">
                        <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) =>{
                            setSearchText(e.target.value);
                        }} />
                        <button className="px-4 py-1 bg-red-100 m-4"
                            onClick={() => {
                                const filteredRestro = listOfRestro.filter((res) =>
                                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                );

                            // console.log(filteredRestro);
                            setListOfTesroTemp(filteredRestro);
                            
                        }} >Search</button>
                    </div>
                    <div className="p-4 m-4 flex items-center">
                        <button className="p-4 py-1 m-2  bg-red-100"
                            onClick={() => {
                                const filteredList = listOfRestroTemp.filter(
                                    (res) => res.info.avgRating > 4);
                                    setListOfTesroTemp(filteredList);
                            }}
                        >Top Rated Restaurant</button>
                    </div>
                    
            </div>
            <div className="flex flex-wrap px-7">
                {listOfRestroTemp.map((restaurant) =>(
                    <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id} >
                        {restaurant.info.promoted ?
                        <RestaurantCardPromoted resData={restaurant}/> :
                        <RestaurantCard resData={restaurant} />}
                    </Link>
                ))}
            </div>
        </div>
        
    )
    
}

export default Body;