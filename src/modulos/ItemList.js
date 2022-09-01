import React, {useState, useEffect} from "react";
import promise from "../utils/promise";
import {data} from "../utils/data";
import Item from "./Item.List";


export default function ItemListContainer(props) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    promise(data)
      .then(result => setProducts(result))
      .catch(err => console.log(err))
  })

  return (
    <>
      <h1 >{props.greetings}</h1>
      <Item Items={products} />
    </>
  );
}