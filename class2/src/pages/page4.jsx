import React,{Component} from "react";
import {users} from '../data/users'
import UserCard from "../components/usercard";

export default class page4 extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>Page-4</h1>
                <div className="card-container">
                    {
                        users?.map((item,index) =>{
                            return(
                                <UserCard key={index} userInfo={item}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}