import TampilanProduk from "../../views/products";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

const HalamanProdukServer = (props: { products: ProductType[] }) => {
  const { products } = props;

  return (
    <div>
      <h1>Halaman Produk Server</h1>
      <TampilanProduk products={products} isLoading={false} />
    </div>
  );
};

export default HalamanProdukServer;

// Fungsi getServerSideProps akan dipanggil setiap kali halaman diakses
// untuk mengambil data produk dari API sebelum halaman dirender
export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const response = await res.json();

  return {
    props: {
      products: response.data || [],
    },
  };
}