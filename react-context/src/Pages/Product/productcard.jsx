import React from 'react'
import { useNavigate } from 'react-router-dom'
import useProduct from '../Hooks/useProduct'

function productcard(props){
    const {id, title, thumbnail, price} = props
    const navigate = useNavigate()
    const {addTocart} = useProduct()

    
}



export default function productcard() {
  return (
    <div>
      <div className="col-md-4 col-lg-3 col-sm-6"  style={{cursor: "pointer"}}>

      </div>
    </div>
  )
}
