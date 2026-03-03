import { useEffect, useState } from "react";
import TampilProduk from "@/views/products";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

const ProdukPage = () => {
  const [products, setProducts] = useState([]);

useEffect(() => {
  setTimeout(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setProducts(result.data); 
      });
  }, 2000);
}, []);
  return (
    <div>
      <TampilProduk products={products} />
    </div>
  );
};

export default ProdukPage;