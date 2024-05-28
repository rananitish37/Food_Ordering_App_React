import { fireEvent, render,screen } from "@testing-library/react";
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"



it("should load header component with a login button", () =>{
    //render
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // query
    // const loginButton = screen.getByRole("button");
    // const loginButton = screen.getByText("Login");

    // if we have multiple button we can write it more descriptive way
    const loginButton = screen.getByRole("button",{name:"login"});

    // Assertion
    expect(loginButton).toBeInTheDocument();

});

it("should load header component with a Cart (0)", () =>{
    //render
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // query
    const Cart = screen.getByText("Cart (0)");

    // Assertion
    expect(Cart).toBeInTheDocument();

});

it("should load header component with a Cart", () =>{
    //render
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // query
    // if we don't want to check entire test and only want a fix part we can write it in reg-ex
    const Cart = screen.getByText(/Cart/);

    // Assertion
    expect(Cart).toBeInTheDocument();

});


it("should load header component with a login button", () =>{
    //render
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // query
    const loginButton = screen.getByRole("button",{name:"login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button",{name:"logout"});
    // Assertion
    expect(logoutButton).toBeInTheDocument();

});
