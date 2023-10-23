import { Link } from "react-router-dom";
import React, {useContext} from "react";
/* import { CartContext } from "../../context/CartContext"; */
import ItemCount from "../itemCount";
import "../itemCount/itemCount.css"


const Item = ({info}) => {

          return (
          < div className="container">
          <div className="mb-5 row">
                    <div className="card product col-12 shadow  mb-5 rounded">
                              <img className="img mt-0 pt-0" src={info.image} width={125} alt="imagenProducto"/>
                              <Link to="/Description/descriptionId" className="h4 text-decoration-none"><h4>{info.title}</h4></Link>
                              <span className="" style={{color:"red"}}> <strong>$ {info.price}</strong></span>
                 {/*              <Link to = {`/description/${info.id}`}/> */}
                    </div>                                          
          </div>
          </div>
          );
}
export default Item;


