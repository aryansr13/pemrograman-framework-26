import DetailProduk from "../../views/DetailProduct";
import { ProductType } from "../../types/Product.type";
import { retrieveProducts } from "../../utils/db/servicefirebase";

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

// ambil semua id produk
export async function getStaticPaths() {
  const products = (await retrieveProducts("products")) as ProductType[];

  const paths = products.map((product) => ({
    params: { product: product.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

// ambil detail produk
export async function getStaticProps({
  params,
}: {
  params: { product: string };
}) {
  const products = (await retrieveProducts("products")) as ProductType[];

  const detail = products.find(
    (item) => item.id === params.product
  );

  return {
    props: {
      product: detail as ProductType,
    },
    revalidate: 10,
  };
}