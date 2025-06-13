import React, { Component } from "react"; // state in class shld define as obj

class page3 extends Component {
    constructor(props){
        super(props)
        this.state ={
            user: {
                name:"john",
                Image:"https://picsum.photos/id/67/500/500",
                email: "john@gmail.com",
                mobile: "9909845672",
                address: {
                    city: "bengaluru",
                    pin: "560091"

                }
            }
        }
    }

    render(){
        return(
            <div>
                <h1>Props</h1>
                <usercard userinfo={this.state.user}/>
            </div>
        )
    }
}

export default page3