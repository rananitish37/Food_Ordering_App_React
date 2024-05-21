// import Users from "./Users";
import { Component } from "react";
import UsersClass from "./UsersClass";

// const About = () => {
//     return (
//         <div>
//             <h1>About us page</h1>
//             {/* <Users name = {"Nitish Rana"} location={"Ahmedabad"} /> */}
//             <UsersClass name={"Nitish Rana"} location={"Delhi"} />
//         </div>
//     )
// }
class About extends Component{
    constructor(){
        super();
        console.log("Parent constructor");
    }

    componentDidMount(){
        // console.log("Parent componentDidMount");

    }

    render(){
        console.log("Parent render");
        return (
            <div>
                <h1>About us page</h1>
                {/* <Users name = {"Nitish Rana"} location={"Ahmedabad"} /> */}
                <UsersClass name={"First"} location={"Delhi"} />
                {/* <UsersClass name={"Second"} location={"Kolkata"} /> */}
            </div>
        )
    }
}

export default About;