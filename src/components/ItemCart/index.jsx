import React from "react";
import './itemCart.css';
import { useCartContext } from "../../context/CartContext";



const itemCart = ({ data }) => {
const {removeProduct} =  useCartContext();
          return (
                    <div className="itemCart">
                              <img src={data.image} alt ={data.title}/>
                              <div>
                                        <p>Titulo: {data.title}</p>
                                        <p>Cantidad: {data.quantity}</p>
                                        <p>Precio unitario: {data.price}</p>
                                        <p>Subtotal: ${data.quantity * data.price}</p>
                                        <button onClick={() => removeProduct(data.id)}>Eliminar producto</button>
                              </div>
                              
                    </div>
          )
          
}

export default itemCart