import { BrowserRouter, Routes, Route } from "react-router-dom";
// Layout
import DefaultLayout from "./layouts/DefaultLayout";
// Pages
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/SingleProduct";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/prodotti" element={<Products />} />
          <Route path="/contatti" element={<Contact />} />
          <Route path="/prodotti/:id" element={<SingleProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
