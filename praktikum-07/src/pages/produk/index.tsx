import useSWR from "swr";
import TampilanProduk from "../../views/products";
import fetcher from "../utils/swr/fetcher";

const Kategori = () => {
  const { data, error, isLoading } = useSWR(
    "/api/products",
    fetcher
  );

  if (error) return <div>Gagal memuat data...</div>;

  return (
    <div>
      <TampilanProduk
        products={isLoading ? [] : data?.data || []}
      />
    </div>
  );
};

export default Kategori;