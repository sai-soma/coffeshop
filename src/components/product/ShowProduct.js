import React from 'react'
import AddButton from './AddButton'
import Navbar from '../navbar/Navbar'
export default function ShowProduct({product}) {

  return (
   <>
   <img src={product.image} width={250} height={250}/>
   <p><b>{`${product.name}`}</b><br/>{`${product.desc}`} <br/><br/>
   <div className="Product-button"><AddButton id={product.id}/></div>
   </p>
   </> 
  )
}
