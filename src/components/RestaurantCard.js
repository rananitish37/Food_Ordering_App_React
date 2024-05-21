import {CDN_URL} from "../utils/constant";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name,cuisines,avgRating,costForTwo} = resData?.info;
    return(
        <div className="m-4 p-4 w-[250px] rounded-lg shadow-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg" alt="res-logo" src={CDN_URL+resData.info.cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} star</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData.info.sla.slaString}</h4>
        </div>
    )
}

export default RestaurantCard;