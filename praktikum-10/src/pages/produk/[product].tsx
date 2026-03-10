import { useRouter } from "next/router";

export default function DetailProduk() {
  const router = useRouter();
  const { product } = router.query;

  return (
    <div style={{ padding: "40px" }}>
      <h1>Halaman Detail Produk</h1>
      <p>ID Produk: {product}</p>
    </div>
  );
}