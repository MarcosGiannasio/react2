import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import Cart from './components/Cart';
import React from 'react';
import CartProvider from './context/CartContext';





function App () {

  return (
    
    <BrowserRouter>
    <CartProvider>
      
      <NavBar/>
      <Routes> 
        <Route exact path='/' element={<ItemListContainer texto="TU CASA, COMO SIEMPRE SOÑASTE..."/>}/>
        <Route exact path="/category/:categoryName" element={<ItemListContainer/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path="/description/:descriptionId" element={<ItemDetailContainer/>}/>
      </Routes>
    </CartProvider>
    </BrowserRouter>
  );
}


export default App 
