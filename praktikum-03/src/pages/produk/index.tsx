import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const router = useRouter();
  const [isLogin] = useState(true); // ganti false kalau mau redirect

  useEffect(() => {
    if (!isLogin) {
      router.push("/auth/login");
    }
  }, [isLogin, router]);

  return (
    <div>
      <h1>Produk User Page</h1>
    </div>
  );
}