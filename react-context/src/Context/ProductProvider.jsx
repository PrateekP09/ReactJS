import React, { createContext, useEffect, useState} from 'react'
import { toast } from 'react-toastify'
import Cart from '../Pages/Product/Cart'
import addTocart from '../Pages/Product/addTocart'


export const ProductContext = createContext()


function ProductProvider(props) {
    const [produts,setProducts] = useState([])
    const [Cart, setCart] = useState([])
    const [subTotal,setSubTotal] =useState(0)
    const [total,setTotal] =useState(0)
    const [tax,setTax] = useState(0)

    const readProducts = async () => {

    }

    
    // products exists in a cart or not
    const check = cart.every(item => {
      return item.id !== data.id;
    })

    console.log('check=', check)
    if(check){
      setCart([...Cart, { ...data, quantity: 1, amount}])
      toast.success("product added to cart")
    }else{
      toast.warning("product already in cart")
    }

    // incrementing the cart

    // decrement the quantity
  return (
    <ProductContext.Provider value={{produts, card, addTocart}}>
         {
            props.children
         }
    </ProductContext.Provider>
  )
}

export default ProductProvider
