// praktikum-07/src/pages/produk/server.tsx
import useSWR from "swr";
import TampilanProduk from "../../views/products";
import fetcher from "../utils/swr/fetcher";

const ServerProduk = () => {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);

  if (error) return <div>Gagal memuat data...</div>;

  return (
    <div>
      {/* Tambahkan tulisan khusus halaman server */}
      <h2>Halaman Produk Server</h2>

      <TampilanProduk
        products={data?.data || []}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ServerProduk;