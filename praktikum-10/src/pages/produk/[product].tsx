import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduk from "../../views/DetailProduct";

const HalamanProduk = () => {
  const { query } = useRouter();

  const { data, error, isLoading } = useSWR(
    query.product ? `/api/products/${query.product}` : null,
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Terjadi error saat mengambil data</div>;
  if (!data) return <div>Data tidak ditemukan</div>;

  return (
    <div>
      <DetailProduk products={data.data} />
    </div>
  );
};

export default HalamanProduk;