import { useEffect, useState } from "react";
import { getProducts } from "../services/Api";
import Product from "./Product";
import Loading from "./Loading";

export default function ProductsContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading)
    return (
      <>
        <Loading />
      </>
    );

  return (
    <div className="flex flex-col w-full items-center">
      <h2 className="mt-14 text-5xl font-bold capitalize">productos</h2>
      <div className="grid md:grid-cols-3 gap-4 w-9/12 ">
        {products.length > 0 &&
          products.map((product) => (
            <Product key={product.id} item={product} />
          ))}
      </div>
    </div>
  );
}
