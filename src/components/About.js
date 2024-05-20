// import Users from "./Users";
import UsersClass from "./UsersClass";

const About = () => {
    return (
        <div>
            <h1>About us page</h1>
            {/* <Users name = {"Nitish Rana"} location={"Ahmedabad"} /> */}
            <UsersClass name={"Nitish Rana"} location={"Delhi"} />
        </div>
    )
}

export default About;