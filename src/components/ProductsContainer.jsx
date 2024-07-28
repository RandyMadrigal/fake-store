import { useEffect, useState } from "react";
import { filterData } from "../services/Api";
import Product from "./Product";
import Filter from "./Filter";
import Loading from "./Loading";

export default function ProductsContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(null);

  const handleClick = (e) => {
    e.target.innerText === "ALL"
      ? setCategory(null)
      : setCategory(e.target.innerText.toLowerCase());
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await filterData(category);
        setProducts(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [category]);

  if (loading)
    return (
      <>
        <Loading />
      </>
    );

  return (
    <div className="flex flex-col w-full items-center ">
      <div className="flex flex-row w-9/12 justify-center gap-2 my-5">
        <Filter handleClick={handleClick} />
      </div>

      <div className="grid md:grid-cols-3 gap-2 w-9/12  ">
        {products.length > 0 &&
          products.map((product) => (
            <Product key={product.id} item={product} />
          ))}
      </div>
    </div>
  );
}
