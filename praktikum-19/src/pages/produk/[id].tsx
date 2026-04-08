import DetailProduk from "@/views/DetailProduct"; 

const ProdukDetailPage = ({ product }: { product: any }) => {
  return (
    <div>
      <DetailProduk product={product} isLoading={false} />
    </div>
  );
};

export default ProdukDetailPage;

export async function getServerSideProps({ params }: { params: { id: string } }) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  try {
    const res = await fetch(`${baseUrl}/api/produk/${params.id}`);
    
    if (!res.ok) {
      throw new Error("Gagal mengambil data dari API");
    }

    const response = await res.json();

    return {
      props: {
        product: response.data || null,
      },
    };
  } catch (error) {
    console.error("Error di getServerSideProps:", error);
    return {
      props: {
        product: null,
      },
    };
  }
}