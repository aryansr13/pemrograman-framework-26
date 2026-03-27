import TampilanProduk from "../../views/products";
import { ProductType } from "../../types/Product.type";

type Props = {
  products: ProductType[];
};

const HalamanProdukStatic = ({ products }: Props) => {
  return (
    <div>
      <h1>Halaman Produk Static</h1>
       <TampilanProduk products={products} isLoading={!products?.length}/>
    </div>
  );
};

export default HalamanProdukStatic;

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:3000/api/products");
  const response: { data: ProductType[] } = await res.json();

  return {
    props: {
      products: response.data,
    },
    revalidate: 10, 
  };
}