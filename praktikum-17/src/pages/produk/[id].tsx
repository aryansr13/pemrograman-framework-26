import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "@/utils/swr/fetcher"; // Sesuaikan path ini dengan lokasimu
import DetailProduk from "@/views/DetailProduct"; // Sesuaikan path ini dengan lokasimu

const ProductDetailPage = () => {
  const { query, isReady } = useRouter();
  
  // Kita fetch data dari API berdasarkan ID yang ada di URL
  // Gunakan isReady agar SWR tidak fetch data saat query.id masih undefined
  const { data, error, isLoading } = useSWR(
    isReady ? `/api/products/${query.id}` : null,
    fetcher
  );

  return (
    <div>
      <DetailProduk 
        product={isLoading || !isReady ? null : data?.data} 
        isLoading={isLoading || !isReady} 
      />
    </div>
  );
};

export default ProductDetailPage;