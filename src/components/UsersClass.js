import React from "react";

// import { Component } from "react";
// class UsersClass extends Component    //we can also do like this

class UsersClass extends React.Component{
    constructor(props){
        super(props);

        console.log(this.props.name+" child Constructor");
        // this.state={
        //     count:0,
        //     count2:1,
        // }
        // this.state={
        //     count:0,
        // } 
        this.state={
            userInfo:{
                name:"dummy",
                location:"default",
            },
        };
    }

    async componentDidMount(){
        // console.log(this.props.name+" componentDidMount");
        const getData= await fetch("https://api.github.com/users/rananitish37");

        const json = await getData.json();

        this.setState({
            userInfo:json,
        });

        console.log(json);
    }

    
    render(){
        const {name, location,avatar_url} = this.state.userInfo;
        console.log(name+" child render");
        // const {count,count2} = this.state;
        // const { count } = this.state;
        return(
            <div className="m-4 p-4 rounded-lg bg-gray-100">
                {/* <h1>count: {this.state.count}</h1> */}
                {/* <h1>count: {count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                })
                }}>Click to inc count</button> */}

                <img className="w-36 rounded-lg" src={avatar_url}/>
                <h1 className="font-bold">Name: {name}</h1>
                <h2>Location: {location}</h2>
            </div>
        )
    }
}

export default UsersClass;