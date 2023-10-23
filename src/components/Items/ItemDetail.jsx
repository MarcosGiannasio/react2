import React, {useState} from "react";
import {useCartContext} from "../../context/CartContext";
import ItemCount from "../itemCount";
import { Link } from "react-router-dom";


export const ItemDetail = ({ data }) =>{

  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext();

  const onAdd =(quantity)=>{
    if(quantity===0) {
      alert(`Para continuar, debes añadir al menos una unidad`);}
    
/*     if(quantity>0 && quantity <=1) {
              alert(`añadiste ${quantity} unidad!`);
}else if (quantity>1) {alert(`añadiste ${quantity} unidades!`);} 
else{alert("Para añadir, sumá al menos 1 producto!")}*/
else {setGoToCart(true);
      addProduct(data, quantity)}
} 

         return ( 

                       <div className="item-list text-center">
                        
                            <div>

                              <h4 className="mb-5">Detalle del producto 🔥:</h4>
                              <img className="rounded" src={data.image} width={125} alt="" />
                              <h2>{data.title}</h2>
                              <p>{data.description}</p>
                              <span>{data.price}</span>
                              {
                                goToCart ?  <Link className='butons btn btn-outline-secondary btn-sm ' to='/cart'>Finalizar Compra</Link>
                              :
                              <span> <strong><ItemCount initial={0} stock ={10} onAdd={onAdd}/> </strong> </span> 
                            }
                              
                              </div>


                        </div> 

                        
          );
} 
export default ItemDetail;

