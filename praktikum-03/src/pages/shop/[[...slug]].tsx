import { useRouter } from "next/router";

const HalamanToko = () => {
  const { query } = useRouter();
  const slug = query.slug as string[] | undefined;

  return (
    <div>
      <h1>Halaman Toko</h1>

      {/* tampil kategori */}
      <p>
        Kategori: {slug && slug.length > 0 ? slug[0] : "Semua Kategori"}
      </p>

      {/* tampil sub kategori */}
      <p>
        Sub Kategori: {slug && slug.length > 1 ? slug[1] : "-"}
      </p>
    </div>
  );
};

export default HalamanToko;