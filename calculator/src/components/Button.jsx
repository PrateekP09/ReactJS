import React from "react";

export default class Button extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const{label, css, handler} = this.props
        return(
            <button className={cls} onClick={handler}>
                {label}
            </button>
        )
    }
}