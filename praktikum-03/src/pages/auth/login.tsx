import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    localStorage.setItem("login", "true"); // tanpa spasi
    router.push("/produk");
  };

  return (
    <div>
      <h1>Halaman Login</h1>
      <button onClick={handleLogin}>Login ke Produk</button>
    </div>
  );
}