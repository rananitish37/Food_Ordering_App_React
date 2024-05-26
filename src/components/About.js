// import Users from "./Users";
import { Component } from "react";
import UsersClass from "./UsersClass";
import UserContext from "../utils/UserContext";

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
        // console.log("Parent constructor");

        this.state = {
            userName:"",
        }
    }

    componentDidMount(){
        // console.log("Parent componentDidMount");

    }
    

    render(){
        
        return (
            <div>
                <h1>About us page</h1>
                {/* <UserContext.Consumer>
                    {(data)=>{this.setState({userName:data.loggedInUser})}}
                </UserContext.Consumer> */}
                {/* <Users name = {"Nitish Rana"} location={"Ahmedabad"} /> */}
                <UsersClass name={"First"} location={"Delhi"} />
                {/* <UsersClass name={"Second"} location={"Kolkata"} /> */}
            </div>
        )
    }
}

export default About;