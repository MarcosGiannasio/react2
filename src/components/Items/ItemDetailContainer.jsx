import React, {useEffect, useState} from "react";
import {getFirestore, doc, getDoc} from 'firebase/firestore'
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () => {
  const [data, setData] = useState ({});
  const {descriptionId} = useParams();

  useEffect (()=> {
    const  querydb = getFirestore();
    const  queryDoc = doc( querydb, 'products', descriptionId );
    getDoc(queryDoc)
    .then( res => setData({id: res.id, ...res.data() }))
  }, [descriptionId])

  return (

 
    <ItemDetail  data={data} />


);
}

export default ItemDetailContainer;

/* 
function useProducts(descriptionId) {

  return new Promise ((resolve)=> {
    setTimeout(() => {
      if(descriptionId != undefined) {
        const detalle = productsJson.filter(
          (item) => item.description === descriptionId
          );
          resolve(detalle)
      }else {
        resolve(productsJson);    
      }
      
    }, 2000);

  });
}

export default function Productos(){

  const product = useProducts();
  const {descriptionId} = useParams()

  useEffect(()=> {
    useProducts(descriptionId)
            .then (response => response.json)
            .then(datos => {
              useProducts(datos)
            })
  }, [descriptionId]);

  return (

      <div>
      <ItemDetail  item={product} />
      </div>

)

  }
 */
        
        




      