import React,{useCallback, useEffect, useState} from "react";

const url = "https://dummyjson.com"

function page10(){
    const [product,setProducts] = useState([])

    const getProducts = useCallback(() =>{
        fetch(`${url}/products`)
        .then(res => res.json())
        .then(res => {
            console.log(`products =`, res)
            setProducts(res?.products)
        }).catch(err => console.log(err.messgae))
    },[])

    useEffect(()=> {
        getProducts()
    },[])

    return(
        <div className="container">
            <h1>useCallback hook</h1>
            <p>useCallback is a react hook that lets you cache function defination
                between re renders</p>

        <product products ={products}/>
        </div>
    )
}

export default page10;