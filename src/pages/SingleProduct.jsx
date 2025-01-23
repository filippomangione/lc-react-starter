import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const apiUrl = import.meta.env.VITE_API_BASE_URL;

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`${apiUrl}/recipes/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  const navigate = useNavigate();
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.instructions}</p>
      <button onClick={() => navigate(-1)}>Torna alla pagina precedente</button>
    </div>
  );
}
