import Link from "next/link";

export default function RegisterPage() {
  return (
    <div>
      <h1>Halaman Register</h1>

      <Link href="/auth/login">
        Ke Halaman Login
      </Link>
    </div>
  );
}