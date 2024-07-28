import PropTypes from "prop-types";

export default function Category({ item }) {
  const { title, price, category, image } = item;

  return (
    <div className="w-full mt-9 overflow-hidden text-justify border rounded-xl bg-gray-800 border-gray-700 hover:shadow-lg">
      <div className="h-40 flex justify-center">
        <img
          className="w-full h-5-full object-cover object-top"
          src={image}
          alt={title}
          loading="lazy"
        />
      </div>

      <div className="p-4 flex-grow">
        <h5 className="mb-2 text-xl font-bold  text-white">{title}</h5>

        <p className="mb-3 font-normal capitalize  dark:text-gray-400">
          {category} - RD${price}
        </p>
      </div>
    </div>
  );
}

Category.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
