import { useSession, getSession } from "next-auth/react";
import Image from "next/image"; // Menggunakan next/image
import { GetServerSideProps } from "next";

export default function EditorPage() {
  const { data: session }: any = useSession();

  return (
    <div style={{ padding: "50px", textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>Dashboard Editor Khusus</h1>
      <p>Selamat datang, Editor {session?.user?.fullname}!</p>
      
      {session?.user?.image && (
        <div style={{ marginTop: "20px" }}>
          {/* Implementasi next/image untuk avatar */}
          <Image 
            src={session.user.image} 
            alt="User Avatar" 
            width={100} 
            height={100} 
            style={{ borderRadius: "50%", objectFit: "cover" }}
            priority // Menandakan gambar penting untuk LCP (opsional)
          />
        </div>
      )}

      <p style={{ marginTop: "20px" }}>
        Halaman ini hanya bisa diakses oleh user dengan role <strong>Editor</strong>.
      </p>
    </div>
  );
}

// Proteksi Halaman via Server Side
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session: any = await getSession(context);

  // Jika tidak ada session, lempar ke login
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  // Jika role BUKAN editor, lempar kembali ke home atau halaman forbidden
  if (session.user.role !== "editor") {
    return {
      redirect: {
        destination: "/", // Atau bisa arahkan ke halaman /403
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};