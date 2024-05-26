import React,{Suspense, lazy, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
// import UserContext from "./utils/UserContext";
import { Provider} from "react-redux";
import appStore from "./utils/appStore";
import CartList from "./components/CartList";


const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () => {

    const [userName, setUserName] = useState();


    useEffect(()=>{
        const data = {name:"NR"};
        setUserName(data);
    },[]);
    return (
        // <UserContext.Provider value={{loggedInUser:userName}} >
        <Provider store={appStore}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </Provider>
        // </UserContext.Provider>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>
            },
            {
                path:"/cart",
                element: <CartList />
            },
        ],
        errorElement: <Error />,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter} />);



