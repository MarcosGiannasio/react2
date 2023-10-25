
import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../../firebase/config.js';
import { useParams } from 'react-router-dom';
import ItemList from '../Items/ItemList.jsx';
import Title from '../Title/index.jsx';

export default function ItemListContainer(props) {
   const [data, setData] = useState([]);

   const { categoryName } = useParams();

   useEffect(() => {
      const queryCollection = collection(db, 'productos');
      console.log(queryCollection);
      if (categoryName) {
         const queryFilter = query(
            queryCollection,
            where('category', '==', categoryName)
         );
         getDocs(queryFilter).then((res) =>
            setData(
               res.docs.map((product) => ({
                  id: product.id,
                  ...product.data(),
               }))
            )
         );
      } else {
         getDocs(queryCollection).then((res) =>
            // res.docs.forEach((doc) => {
            //    console.log(doc.id);
            // })

            setData(
               res.docs.map((product) => ({
                  id: product.id,
                  ...product.data(),
               }))
            )
         );
      }
   }, [categoryName]);

   /*           if(loading) return (<div class="text-center">
          <div class="spinner-border mt-5" role="status"></div>
        </div>) */

   return (
      <>
         <Title greeting={props.texto} />
         <ItemList data={data} />
      </>
   );
} 
