import { useParams } from "react-router-dom";
import { useState } from "react";

import { db } from "../../Firebase/Firebase-init";
import { collection, query, onSnapshot, where } from "firebase/firestore";

import "./Category.css";

function Category() {
  const { productName } = useParams();
  // const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useState(() => {
    async function getProfilePosts() {
      const categoryProduct = query(
        collection(db, "categories"),
        where("type", "==", productName)
      );
      onSnapshot(categoryProduct, (querySnapshot) => {
        const postDocs = [];
        querySnapshot.forEach((doc) => {
          postDocs.push(doc.data());
          setProducts(postDocs);
        });
      });
    }
    getProfilePosts();
  }, []);

  return (
    <div className="container">
      <h1 className="uppercase text-center mt-10 text-5xl">{productName}</h1>
      <p>
        <a href="/">GO BACK</a>
      </p>
      <h1 className="text-3xl">LOADING...</h1>
      <table className="w-full border-separate border border-slate-500">
        <thead className="text-left text-5xl bold">
          <tr>
            <th className="p-5">No</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody className="text-3xl gap-10">
          {products.map((product, index) => {
            return (
              <tr key={product.id}>
                <td className="border border-slate-700 p-5">{index + 1}</td>
                <td className="border border-slate-700">{product.quantity}</td>
                <td className="border border-slate-700">{product.price}</td>
                <td className="border border-slate-700">
                  <button className="w-full text-center">Add</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {console.log(products)}
    </div>
  );
}

export default Category;
