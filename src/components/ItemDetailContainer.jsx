import { useEffect, useState } from "react";
import { getProduct } from "../services/Api";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const id = useParams().id;

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [id]);

  if (loading)
    return (
      <>
        <Loading />
      </>
    );

  return (
    <>
      {product && (
        <div className="flex flex-col w-full items-center">
          <ItemDetail item={product} />
        </div>
      )}
    </>
  );
}
