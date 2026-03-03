import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
  category: string; // Tambah field category
  color?: string;
};

const Produk = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/produk")
      .then((res) => res.json())
      .then((data) => {
        // Konversi ke array
        const dataArray = Array.isArray(data.data) 
          ? data.data 
          : Object.values(data.data);
        setProducts(dataArray);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ padding: "20px" }}>Loading...</div>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Daftar Produk</h1>
      
      {products.length === 0 ? (
        <p>Tidak ada produk</p>
      ) : (
        products.map((product) => (
          <div key={product.id} style={{ 
            border: "1px solid #ccc", 
            padding: "15px", 
            margin: "10px 0",
            borderRadius: "5px"
          }}>
            <h3>{product.name}</h3>
            <p><strong>Harga:</strong> Rp {product.price.toLocaleString()}</p>
            <p><strong>Ukuran:</strong> {product.size}</p>
            <p><strong>Kategori:</strong> {product.category}</p> {/* Tampilkan category */}
            {product.color && <p><strong>Warna:</strong> {product.color}</p>}
          </div>
        ))
      )}
    </div>
  );
};

export default Produk;