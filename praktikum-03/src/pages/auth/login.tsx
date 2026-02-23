import Link from "next/link";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    // simulasi login sukses
    router.push("/produk");
  };

  return (
    <div>
      <h1>Halaman Login</h1>

      {/* Imperatif Navigation */}
      <button onClick={handleLogin}>
        Login ke Product
      </button>

      <br /><br />

      {/* Navigasi Link */}
      <Link href="/auth/register">
        Ke Halaman Register
      </Link>
    </div>
  );
}