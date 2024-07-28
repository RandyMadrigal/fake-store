import { useEffect, useState } from "react";
import { getCategories } from "../services/Api";
import Loading from "./Loading";
import Categories from "./Categories";

export default function CategoriesContainer() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getCategories();

        setCategories(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <div className="flex flex-row w-full justify-center items-center mb-10 ">
        <h2 className="text-5xl font-bold capitalize text-white  ">
          What can i find in the store?
        </h2>
      </div>
      <div className="flex flex-row w-full justify-center items-center gap-4">
        {categories &&
          categories.map((category, index) => (
            <Categories key={index} category={category} />
          ))}
      </div>
    </>
  );
}
