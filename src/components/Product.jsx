import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Product({ item }) {
  const { id, title, price, category, image } = item;

  return (
    <div className="w-full mt-9 overflow-hidden text-justify border rounded-xl bg-gray-800 border-gray-700 hover:shadow-lg">
      <div className="h-40 flex justify-center">
        <img
          className="w-full h-5-full object-cover object-top"
          src={image}
          alt={title}
        />
      </div>

      <div className="p-4 flex-grow">
        <h5 className="mb-2 text-xl font-bold  text-white">{title}</h5>

        <p className="mb-3 font-normal  dark:text-gray-400 capitalize">
          {category} - RD${price}
        </p>

        <div className="mt-auto">
          <Link
            to={`/Product/${id}`}
            className="px-3 py-2 text-sm font-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            +
          </Link>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
