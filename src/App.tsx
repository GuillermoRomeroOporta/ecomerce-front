import { useEffect, useState } from "react";

import { Marca } from "./components/Tienda/Marca";
import { Categorias } from "./components/Tienda/Categorias";
import { Paices } from "./components/Ciudad/Paices";
import { Generos } from "./components/Generos/Generos";

function App() {
  const [products, setProducts] = useState([]);

  const API_URL = "http://localhost:3000";
  const PRODUCT_ENDPOINT = "products";

  const getProducts = async () => {
    const response = await fetch(${API_URL}/${PRODUCT_ENDPOINT});
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (

    <div className="App">
      <h1>Hola mundo react</h1>
      {products.map((product: any) => (
        <div key={product.id}>{product.name}</div>
      ))}
      <Categorias/>
      <Marca />
      <Paices />
      <Generos />
    </div>
  );
}

export default App;