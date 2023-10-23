import './itemCount.css';
import React, {useState, useEffect} from 'react';

export const ItemCount =({initial, stock, onAdd})=> {
          const [count, setCount] = useState(parseInt(initial));

          const decrase =()=>{
                    setCount(count - 1);
          }

          const incrase =()=>{
                    setCount(count + 1);
          }
          useEffect(()=> {
                    setCount(parseInt(initial));
          }, [initial])
          
          return (
                    <div className='counter'>
                              <div className=' gap-2 justify-content-center d-flex'>
                              <button className="btn btn-outline-light" disabled={count < 1} onClick={decrase}>-</button>
                              <span>{count}</span>
                              <button className="btn btn-outline-light"  disabled={count >= stock}onClick={incrase}>+</button>
                              </div>
                    <div className=''>
                              <button className='butons btn btn-outline-secondary btn-sm my-3' disabled={stock <= 0} onClick={()=> onAdd(count) }>Agregar al carrito</button>
                    </div>
                    </div>
          );
}

export default ItemCount;