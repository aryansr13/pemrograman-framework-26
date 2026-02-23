import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProdukPage = () => {
  const [isLogin] = useState(false); // simulasi belum login
  const router = useRouter();

  useEffect(() => {
    if (!isLogin) {
      router.push("/auth/login");
    }
  }, [isLogin, router]);

  return <div>Produk User Page</div>;
};

export default ProdukPage;