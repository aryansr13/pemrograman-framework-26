import TampilanProduk from "../../views/products";
import { ProductType } from "../../types/Product.type";
import { retrieveProducts } from "../../utils/db/servicefirebase";

type Props = {
  products: ProductType[];
};

const HalamanProdukStatic = ({ products }: Props) => {
  return (
    <div>
      <h1>Halaman Produk Static</h1>
      <TampilanProduk products={products} isLoading={!products?.length} />
    </div>
  );
};

export default HalamanProdukStatic;

export async function getStaticProps() {
  const products = (await retrieveProducts("products")) as ProductType[];

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
}