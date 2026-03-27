import DetailProduk from "../../views/DetailProduct";
import { ProductType } from "@/types/Product.type";

type Props = {
  product: ProductType;
};

const HalamanProduk = ({ product }: Props) => {
  return (
    <div>
      <DetailProduk products={product} />
    </div>
  );
};

export default HalamanProduk;

/* Static Site Generation */

// mengambil semua id produk untuk membuat halaman statis
export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/products");
  const response = await res.json();

  const paths = response.data.map((product: ProductType) => ({
    params: { product: product.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

// mengambil data produk berdasarkan id
export async function getStaticProps({
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