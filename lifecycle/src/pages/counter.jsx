import React, {Component} from "react";

class Counter extends Component{
    constructor(props){
        super(props)
        console.log(`constructor called with num: ${props.num} `)
        this.state = {
            view: false
        }
    }

    static getDerivedStateandProps(nextProps, prevState){
        console.log(`getDerivedStateandProps called with num:${nextProps.num}`)
        // if the view state is false, update it to true
        if(nextProps.num>= 5){
            return{view: true};
        }
        //otherwise, return null to indicate no state change
        return null;
    }

// Lifecycle method that runs after the component is mounted
    incrementCount = () =>{
        this.props.root.render(
            <React.StrictMode>
                <Counter num={this.props.num + 1} root={this.props.root}/>
            </React.StrictMode>
        );
    }

    componentDidMount(){
        console.log(`componentDidMount called with num: ${this.props.num}`)
    }

    //update state methods 
    shouldComponentUpdate(nextProps, nextState){
        console.log(`shouldcomponentUpdate called with num: ${nextProps.num}`);
        console.log(`shouldcomponentUpdate called with view State: ${nextState.view}`);
        // allow the component to update if the view state is false
        return false;
    }

    getSnapShotBeforeUpdate(prevProps, prevState){
        console.log(`getSnapShotBeforeUpdate called prev num: ${prevProps.num} and current num:${this.props.num}`);
        //return null as we dont need to capture any snapshot
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(`componentDidUpdate called with prev num: ${prevProps} and current num: ${this.props.num}`);
        // if the view state has changed, log it
        if(prevState.view !== this.state.view){
            console.log(`view state changed to: ${this.state.view}`)
        }
    }
    // unmount method
    componentWillUnmount(){
        console.log(`componentWillUnmount called with num: ${this.props.num}`);
        // perform anu cleanup if necessary
    }




    render(){
        console.log(`component rendered with num: ${this.props.num}`)
        return(
            <div className="container">
                <h2 className="title">Counter Component { this.state.view ? null : this.props.num }</h2>
                

                <div className="blk">

                    <h3>
                        {
                            this.state.view ? "Welcome to the counter Component!" : "Click the button to update Counts."
                        }
                    </h3>
                    {
                        this.state.view ? null : <button className="mountBtn" onClick={this.incrementCount.bind(this)}>Inrecment Count</button>
                    }
                </div>
            </div>
        );
    }
}

export default Counter;