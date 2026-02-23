import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProdukPage() {
  const router = useRouter();

  useEffect(() => {
    const isLogin = localStorage.getItem("login");

    if (!isLogin) {
      router.push("/auth/login");
    }
  }, [router]);

  return (
    <div>
      <h1>Produk User Page</h1>
    </div>
  );
}