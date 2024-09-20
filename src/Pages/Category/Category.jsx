import { useParams } from "react-router-dom";
import { useState } from "react";

import { db } from "../../Firebase/Firebase-init";
import { collection, query, onSnapshot } from "firebase/firestore";

import "./Category.css";

function Category() {
  const { productName } = useParams();

  useState(() => {
    async function getCategories() {
      try {
        const categories = query(collection(db, "categories"));
        onSnapshot(categories, (documents) => {
          const postDocs = [];
          documents.forEach((doc) => {
            postDocs.push(doc.data());
            // setPost(postDocs[0]);
            console.log(postDocs[0]);
          });
        });
      } catch (error) {
        console.log(error.message);
      }
    }
    getCategories();
  }, []);

  return (
    <div>
      <p>Welcome to the {productName} category page</p>
      <h1 className="text-3xl">LOADING...</h1>
    </div>
  );
}

export default Category;
