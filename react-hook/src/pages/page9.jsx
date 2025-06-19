import React from "react";
import TodoList from '../Components/TodoList';
import { createTodos } from "../util/todos";

let todos = createTodos(); // generated todos data 50 item

function page9(){
    const [tab,setTab] = useState(`all`)

    const tabHandler= (val) =>{
        setTab(val)
    }
    return(
        <div className="container">
            <div className="title">
                <h1>useMemo hook</h1>
                <p>performance hooks a common way to optimize the re rendering performance is to skip unnecessary work.</p>

                <p>useMemo hook lets you cache the result of an expensive calculation </p>
            </div>
            <div className="blk">
                <button onClick={() => tabHandler(`all`)} className="btn warning">All</button>
                <button onClick={() => tabHandler(`active`)} className="btn success">Active</button>
                <button onClick={() => tabHandler(`completed`)} className="btn danger">completed</button>

            </div>
            <hr />

            <TodoList
            todos ={todos}
            tab={tab}
            />
        </div>
    )
}

export default page9;