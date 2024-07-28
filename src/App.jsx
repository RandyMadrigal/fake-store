import Home from "./components/Home";
import ProductContainer from "./components/ProductsContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CategoriesContainer from "./components/CategoriesContainer";
import CategoryContainer from "./components/CategoryContainer";

import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="bg-gradient-to-r from-slate-300 to-slate-500">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<ProductContainer />} />

          <Route path="/products" element={<ProductContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />

          <Route path="/categories/" element={<CategoriesContainer />} />
          <Route path="/categories/:category" element={<CategoryContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
