const Users = (props) => {
    const {name,location}=props;
    return(
        <div className="user_info">
            <h1>name: {name}</h1>
            <h2>Location: {location}</h2>
        </div>
    )
}

export default Users;