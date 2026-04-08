import { useRouter } from "next/router";
// Hapus useState karena tidak perlu lagi
import TampilanProduk from "../../views/products";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";

const Kategori = () => {
  const { push } = useRouter();

  // Ambil data menggunakan SWR
  const { data, error, isLoading } = useSWR("/api/products", fetcher);

  return (
    <div>
       <TampilanProduk 
         // Ambil array produk dari data.data. Jika belum ada, kirim array kosong []
         products={isLoading ? [] : data?.data || []} 
       />
    </div>
  );
};

export default Kategori;