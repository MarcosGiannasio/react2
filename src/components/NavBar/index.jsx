import React from 'react'
import './navBar.css'
import CartWidget from '../CartWidget'
import { Link } from 'react-router-dom'
import Cart from '../Cart'
import ItemCount from '../itemCount'



export const NavBar= () => {
          return (
             <div>
                <nav className=" row align-items-center justify-content-between my-3">
                   <div className="col-3 mt-3">
                      <Link to="/" className="mx-5">
                         <img src="./src/assets/logoMB.svg" alt="logoPagina" />
                      </Link>
                   </div>
                   <div className="col-3 p-0">
                      <ul className=" d-flex justify-content-between gap-3">
                         <Link
                            to="/category/Baño"
                            className="text-decoration-none btn btn-secondary"
                            href="#"
                         >
                            Baño
                         </Link>
                         <Link
                            to="/category/Cocina"
                            className="text-decoration-none btn btn-secondary"
                            href="#"
                         >
                            Cocina
                         </Link>
                         <Link
                            to="/category/Habitacion"
                            className="text-decoration-none btn btn-secondary"
                            href="#"
                         >
                            Habitacion
                         </Link>
                         <Link
                            to="/category/Living"
                            className="text-decoration-none btn btn-secondary"
                            href="#"
                         >
                            Living
                         </Link>
                      </ul>
                   </div>
                   <div className="col-3">
                      <ul>
                         <li>
                            <CartWidget className="mx-5 numberCart" />
                            {}
                         </li>
                      </ul>
                   </div>
                </nav>
             </div>
          );
}

export default NavBar ;
