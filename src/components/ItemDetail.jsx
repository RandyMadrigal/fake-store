import PropTypes from "prop-types";

export default function ItemDetail({ item }) {
  const { id, title, price, category, description, image } = item;
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-flow-col grid-col-2 text-white text-justify rounded-3xl w-8/12 gap-2">
        <div className="max-h-96 rounded-lg overflow-hidden">
          <img className="w-full h-full object-cover" src={image} alt={title} />
        </div>

        <div className="bg-gray-800 border-gray-700 hover:shadow-lg p-6 overflow-hidden rounded-3xl">
          <h3 className="mb-2 text-xl font-bold  text-white">
            {id} - {title}.
          </h3>
          <h3 className="mb-2 text-lg font-normal capitalize">
            <strong>Category:</strong> {category}
          </h3>
          <h3 className="mb-2 text-xl font-normal capitalize">
            <strong>Price: RD${price}.00</strong>
          </h3>
          <h4 className="mb-2 text-lg font-normal capitalize">{description}</h4>
        </div>
      </div>
    </div>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
