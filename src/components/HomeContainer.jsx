import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const HomeContainer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="h-96 flex flex-col items-center justify-center font-bold mb-24">
      <div className="relative bg-white w-full h-4/6  border-1 border-black text-white ">
        <img
          src="https://t3.ftcdn.net/jpg/01/07/00/50/360_F_107005010_vHGDB9kSbCKY0bYpYkGd9oAhgmSY9f8v.jpg"
          loading="lazy"
          className="w-full h-96 object-cover brightness-50"
          alt="homeImg"
        />
        <div className="absolute top-52 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className=" text-7xl uppercase">Loren Epsum</h1>
          <br />
          <p className="text-2xl text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            placerat sem.
          </p>
          <br />

          <Link
            className="capitalize bg-indigo-500 p-4 m-5 rounded-2xl hover:bg-indigo-600"
            to={"/products"}
          >
            Explore the shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
