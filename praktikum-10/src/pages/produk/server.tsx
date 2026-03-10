import TampilanProduk from "../../views/products";
import { retrieveProducts } from "../../utils/db/servicefirebase";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

export default function HalamanProdukServer({
  products,
}: {
  products: ProductType[];
}) {
  return (
    <div>
      <h1>Halaman Produk Server</h1>
      <TampilanProduk products={products} isLoading={false} />
    </div>
  );
}

export async function getServerSideProps() {
  const products = await retrieveProducts("products");

  return {
    props: {
      products,
    },
  };
}