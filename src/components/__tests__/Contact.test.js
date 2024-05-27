import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("It will display heading or not",() =>{
    render(<Contact />)

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

test("It will display button or not",() =>{
    render(<Contact />)

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
});

test("It will display button or not",() =>{
    render(<Contact />)

    const inputBox = screen.getAllByRole("textbox");
    expect(inputBox.length).toBe(2);
});

test("It will display button or not",() =>{
    render(<Contact />)

    const name = screen.getByPlaceholderText("name");
    expect(name).toBeInTheDocument();
});