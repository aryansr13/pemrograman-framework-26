import TampilanProduk from "../../views/products";

export default function HalamanProdukServer({ products }: any) {
  return <TampilanProduk products={products} isLoading={false} />;
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const response = await res.json();

  return {
    props: {
      products: response.data,
    },
  };
}