import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
  category: string;
  color?: string;
};

const Produk = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  // Fungsi untuk mengambil data
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/produk");
      const data = await response.json();
      
      const dataArray = Array.isArray(data.data) 
        ? data.data 
        : Object.values(data.data);
      
      setProducts(dataArray);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Ambil data saat pertama kali halaman dibuka
  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <div style={{ padding: "20px" }}>Loading...</div>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        marginBottom: "20px" 
      }}>
        <h1>Daftar Produk</h1>
        {/* Tombol Refresh */}
        <button 
          onClick={fetchProducts}
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          🔄 Refresh
        </button>
      </div>
      
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
            <p><strong>Kategori:</strong> {product.category}</p>
            {product.color && <p><strong>Warna:</strong> {product.color}</p>}
          </div>
        ))
      )}
    </div>
  );
};

export default Produk;