import React from "react";

function ProductItem(){
    return(
        <div className="card">
            <img src={props?.thumbnail} alt=" no prodcut image" />
            <div className="content">
                <h5>{ props?.title}</h5>
                <p> price: &#8377; {props?.price }</p>
            </div>
        </div>
    )
}


export default ProductItem;