import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status }: any = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      if (session?.user?.role === "admin") {
        router.push("/admin");
      } else if (session?.user?.role === "editor") {
        router.push("/editor");
      }
    }
  }, [status, session, router]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Praktikum Next.js Pages Router</h1>
      {status === "loading" ? <p>Memeriksa sesi...</p> : <p>Selamat datang, {session?.user?.fullname || "Guest"}</p>}
    </div>
  );
}