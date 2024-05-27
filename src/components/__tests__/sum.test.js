import { Sum } from "../Sum"


test("sum function will return sum of two number", () =>{

    const result = Sum(2,6);

    //Assertion
    expect(result).toBe(8);

})