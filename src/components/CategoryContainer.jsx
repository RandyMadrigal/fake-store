import { useEffect, useState } from "react";
import { getCategory } from "../services/Api";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import Category from "./Category";

function CategoriesContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const category = useParams().category;

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getCategory(category);
        setProduct(data);
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

  console.log(product);

  return (
    <>
      <div className="flex flex-col w-full items-center">
        <h2 className="mt-14 text-5xl font-bold capitalize">
          {product[0].category}
        </h2>
        <div className="grid md:grid-cols-3 gap-4 w-9/12 ">
          {product &&
            product.map((item) => <Category key={item.id} item={item} />)}
        </div>
      </div>
    </>
  );
}

export default CategoriesContainer;
