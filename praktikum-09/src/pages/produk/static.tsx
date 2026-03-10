import TampilanProduk from "../../views/products";
import { retrieveProducts } from "../../utils/db/servicefirebase";

export default function HalamanProdukStatic({ products }: any) {
  return (
    <div>
      <h1>Halaman Produk Static</h1>
      <TampilanProduk products={products} isLoading={false} />
    </div>
  );
}

export async function getStaticProps() {
  const products = await retrieveProducts("products");

  return {
    props: {
      products,
    },
  };
}