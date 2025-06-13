import React,{Component} from "react"
import Display from "../components/Display";
import Keypad from "../components/Keypad";

class calculator extends Component{
    constructor(props){
        super(props)
        this.state={
            keys: ["%", "C","CE", "BS", "1/x", "x2", "sqrt", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1","2", "3", "+", "+/-", "0", ".", "="]
        }
    }

    render(){
        return(
            <section className="calculator">
                <Display inp={this.state.inp}/>
                <Keypad keys={this.state.keys}/>
            </section>
        )
    }
}

export default calculator