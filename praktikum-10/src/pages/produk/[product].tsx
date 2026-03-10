import DetailProduk from "../../views/DetailProduct";
import { ProductType } from "@/types/Product.type";

const HalamanProduk = ({ product }: { product: ProductType }) => {
  return (
    <div>
      <DetailProduk products={product} />
    </div>
  );
};

export default HalamanProduk;

// Fungsi getServerSideProps akan dipanggil setiap kali halaman diakses
// Digunakan untuk Server-Side Rendering (SSR)
export async function getServerSideProps({
  params,
}: {
  params: { product: string };
}) {
  const res = await fetch(
    `http://localhost:3000/api/products/${params.product}`
  );

  const response = await res.json();

  return {
    props: {
      product: response.data,
    },
  };
}