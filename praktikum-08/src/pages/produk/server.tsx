import TampilanProduk from "../../views/products";

const HalamanProdukServer = () => {
  return (
    <div>
      <h1>Halaman Produk Server</h1>
      <TampilanProduk products={[]} isLoading={false} />
    </div>
  );
};

export default HalamanProdukServer;