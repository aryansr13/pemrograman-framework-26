import { useRouter } from "next/router";
import { useState } from "react";
import TampilanProduk from "../../views/products";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";

const Kategori = () => {
  const { push } = useRouter();
  const [products, setProducts] = useState([]);

  const { data, error, isLoading } = useSWR("/api/produk", fetcher);

  return (
    <div>
       <TampilanProduk products={products} isLoading={!products?.length} />
    </div>
  );
};

export default Kategori;