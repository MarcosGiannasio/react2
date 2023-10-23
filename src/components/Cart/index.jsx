import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import itemCart from "../ItemCart";

const Cart = () => {

          const { cart, totalPrice, clearCart } = useCartContext();

          if (cart.length === 0) {
                    return (
                              
                              <div className="text-dark text-center">
                              <hr />
                              <div className="mt-5 mb-3 h5">No hay elementos en el carrito 😢 </div>
                              <Link to='/'className="text-dark text-center h5 text-decoration-none">Compra ahora!</Link>
                              </div>
                    );
          }

          return (  <div className="text-center"> <h4 className="mt-5 text-dark text-center p-5">Estás a un paso de transformar tu casa 🔥🚀: </h4>
                    <div><p> Total: {totalPrice()} </p></div>
                    <div className="d-grid gap-2"><button className="btn btn-success">Finalizar compra</button>
                    <button onClick={()=>clearCart()}>Vaciar carrito</button>

                    </div>
          
          
                    
                    </div>
                    
                    
                    
          )
          
}
                    //cart.map(product => <itemCart key = {data.id} product={product}/>)
                    //

export default Cart