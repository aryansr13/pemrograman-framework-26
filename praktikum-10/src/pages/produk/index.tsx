import useSWR from "swr";
import TampilanProduk from "../../views/products";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function HalamanProduk() {
  const { data } = useSWR("/api/products", fetcher);

  const products = data?.data || [];
  const isLoading = !data;

  return <TampilanProduk products={products} isLoading={isLoading} />;
}