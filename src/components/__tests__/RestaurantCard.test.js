import { render,screen } from "@testing-library/react"
import MOCK_DATA from "../Mocks/resCardMock.json"
import RestaurantCard from "../RestaurantCard"
import "@testing-library/jest-dom"

it("should render restaurant component with props data",() =>{
    render(<RestaurantCard resData = {MOCK_DATA}/>)

    const name = screen.getByText("Domino's Pizza");

    expect(name).toBeInTheDocument();

});

it("should render restaurant component with promoted label",() =>{

});