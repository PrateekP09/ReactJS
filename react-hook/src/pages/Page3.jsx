import React from "react";

 // custom reducer
 const customReducer =(state, action) => {
    switch(action){
        case "incr":
            return {
                age : state.age + 1
            }
        case "decr":
            return {
                age: state.age - 1
            }
        case "clr":
            return {
                age:0
            }

        default: console.error("Unknown action")
    }
 }
// local react function component
const Page3 = function(Props){
// const [state,dispatcher] = userReducer(reducer, initial_state)
const[state, dispatch] = useReducer(customReducer, {age : 20})
    return(
        <div className="container">
            <h1>userReducer</h1>

            <hr />

            <h2> User age = { state.age } years</h2>

            <button onClick={() => dispatch("incr")} className="btn success">Increment age</button>
            <button onClick={() => dispatch("decr")} className="btn success">Decrement age</button>
            <button  onClick={() => dispatch("clr")} className="btn warning">Clear Age</button>
        </div>
    );
}

export default Page3;