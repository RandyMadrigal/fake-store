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
    <div className="h-screen flex items-center justify-center gap-5">
      {categories &&
        categories.map((category, index) => (
          <Categories key={index} category={category} />
        ))}
    </div>
  );
}
