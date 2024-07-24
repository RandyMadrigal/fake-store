import { useEffect, useState } from "react";
import { getProducts } from "../services/Api";
import Item from "./Item";

export default function ItemContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <>
      <div className="flex flex-col w-full items-center">
        <div className="grid md:grid-cols-3 gap-4 w-9/12 ">
          {products.length > 0 &&
            products.map((product) => <Item key={product.id} item={product} />)}
        </div>
      </div>
    </>
  );
}