import TampilanProduk from "../../views/products";
import { ProductType } from "../../types/Product.type";

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

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const response = await res.json();

  return {
    props: {
      products: response.data || [],
    },
  };
}