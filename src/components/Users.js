const Users = (props) => {
    const {name,location}=props;
    return(
        <div className="m-4 p-4 rounded-lg bg-gray-100">
            <h1>name: {name}</h1>
            <h2>Location: {location}</h2>
        </div>
    )
}

export default Users;