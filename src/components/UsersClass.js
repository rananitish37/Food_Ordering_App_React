import React from "react";

// import { Component } from "react";
// class UsersClass extends Component    //we can also do like this

class UsersClass extends React.Component{
    constructor(props){
        super(props);

        // this.state={
        //     count:0,
        //     count2:1,
        // }
        this.state={
            count:0,
        }
    }

    componentDidMount(){
        console.log("Mount");
    }

    
    render(){
        const {name, location} = this.props;
        // const {count,count2} = this.state;
        const { count } = this.state;
        return(
            <div className="user_info">
                {/* <h1>count: {this.state.count}</h1> */}
                <h1>count: {count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                })
                }}>Click to inc count</button>
                <h1>Name: {name}</h1>
                <h2>Location: {location}</h2>
            </div>
        )
    }
}

export default UsersClass;