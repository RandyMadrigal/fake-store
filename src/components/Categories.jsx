import { Link } from "react-router-dom";
import { CategoriesImg } from "../helpers/CategoriesImg";
import PropTypes from "prop-types";

export default function HomeItem({ category }) {
  return (
    <div className="w-64 bg-white border hover:w-72 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/categories/${category}`}>
        <div className="h-96 flex justify-center overflow-hidden">
          <img
            className="rounded-t-lg w-full h-full object-cover object-top"
            src={CategoriesImg(category)}
            alt={category}
          />
        </div>

        <div className="p-5 text-center capitalize">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {category}
          </h5>
        </div>
      </Link>
    </div>
  );
}

HomeItem.propTypes = {
  category: PropTypes.string.isRequired,
};
