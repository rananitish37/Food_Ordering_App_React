import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handledAddItem = (item) =>{
        dispatch(addItem(item));
    }
    return(
        <div>
            {items.map((item) =>(
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span className="font-bold">{item.card.info.name}</span>
                            <span className="font-bold"> ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button onClick={()=>handledAddItem(item)} className="rounded-sm mx-12 mt-28 bg-white text-green-400 font-bold"> ADD </button>
                        </div>
                        <img className="w-full rounded-lg" src={CDN_URL+item.card.info.imageId} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;