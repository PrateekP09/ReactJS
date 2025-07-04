import React, {useMemo} from "react";
import { filterTodos } from "../src/util/todos";


function Todolist(props){
     const {todos,tab} = props

    //  useMemo(callback,[dependancy])
        const visibleTodos = useMemo(()=>filterTodos(todos),[])
    return(
        <div className="container">
            <p>
                <b>note: filter todos</b> are artificially slow down after Performance
            </p>
            <div className="blk">
                <ul className="List">
                    {
                        visibleTodos?.map((item,index)=>{
                            return(
                                <li key={index} className={item?.completed ? "succes-list": "warning-list"}> {item?.text} </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Todolist;