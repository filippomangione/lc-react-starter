import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const apiUrl = import.meta.env.VITE_API_BASE_URL;

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}/recipes?limit=10`)
      .then((response) => setProducts(response.data.recipes))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Pagina Prodotti</h1>
      <section>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link to={`/prodotti/${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
