
import React, { useState, useEffect} from "react";
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import { useParams } from "react-router-dom";
import ItemList from '../Items/ItemList';
import Title from '../Title/index';


export default function ItemListContainer({texto}){
          const [data, setData] = useState([]);

          const {categoryName} = useParams();


          useEffect(()=> {
            const querydb = getFirestore();
            const queryCollection = collection(querydb, 'products');
              if (categoryName){
                const queryFilter = query(queryCollection, where('category', '==', categoryName ))
                getDocs(queryFilter)
                  .then(res=> setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
              } else {
                getDocs(queryCollection)
                  .then(res=> setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
              }
          }, [categoryName])

/*           if(loading) return (<div class="text-center">
          <div class="spinner-border mt-5" role="status"></div>
        </div>) */

          return (
            <>
            <Title greeting = {texto} />
            < ItemList data ={data} />
            </>
                              
          );
} 
