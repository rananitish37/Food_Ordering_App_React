import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice.js";

const CartList =()=>{
    const cartItems = useSelector((store)=>store.cart.items);

    const dispatch = useDispatch();

    const handledClearCart = ()=>{
        dispatch(clearCart());
    }


    return(
        <div className="m-4 p-4 text-center">
            <h1 className="text-2xl font-bold">Cart Items</h1>
            <button onClick={handledClearCart} className="m-2 p-2 bg-black text-white rounded-lg">Clear Cart</button>
            {cartItems.length == 0 && <h1>Cart is empty please add item in your cart!</h1>}
            <div className="w-6/12 m-auto">
                <ItemList items={cartItems}/>
            </div>
            
        </div>
    )
}

export default CartList;