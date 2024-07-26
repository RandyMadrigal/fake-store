import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bg-indigo-600 h-11 flex justify-center">
      <ul className="flex justify-center items-center font-bold text-white gap-10  w-9/12">
        <li className="hover:underline">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:underline">
          <Link to="/Products">Products</Link>
        </li>
        <li className="hover:underline">
          <Link to="categories">Categories</Link>
        </li>
        <li className="hover:underline">
          <Link to="cart">Cart</Link>
        </li>
        <li className="hover:underline mr-5">
          <Link to="ContactMe">Contact Me</Link>
        </li>
      </ul>
    </div>
  );
}
