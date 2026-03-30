import styles from "./login.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { signIn, getSession } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const res = await signIn("credentials", {
      redirect: false, // Kita handle redirect manual agar bisa cek role
      email,
      password,
    });

    if (res?.error) {
      setIsLoading(false);
      setError("Email atau password salah");
    } else {
      // Ambil session terbaru untuk mendapatkan role
      const session = await getSession();
      const role = session?.user?.role;

      // Logika redirect berdasarkan role
      if (role === "admin") {
        router.push("/admin");
      } else if (role === "editor") {
        router.push("/editor");
      } else {
        router.push("/");
      }
    }
  };

  const handleOAuth = (provider: string) => {
    // Untuk Google/Github, arahkan ke "/" dulu, 
    // nanti biarkan middleware atau halaman home yang mengarahkan
    signIn(provider, { callbackUrl: "/" }); 
  };

  return (
    <div className={styles.login}>
      <h1 className={styles.login__title}>Halaman Login</h1>

      <form onSubmit={handleLogin} className={styles.login__form}>
        <div className={styles.login__form__item}>
          <label className={styles.login__form__item__label}>Email</label>
          <input
            type="email"
            placeholder="email@example.com"
            className={styles.login__form__item__input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.login__form__item}>
          <label className={styles.login__form__item__label}>Password</label>
          <input
            type="password"
            placeholder="****"
            className={styles.login__form__item__input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className={styles.login__error}>{error}</p>}

        <button type="submit" disabled={isLoading} className={styles.login__button}>
          {isLoading ? "Loading..." : "Login"}
        </button>

        <hr style={{ margin: "20px 0", opacity: 0.2 }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <button
            type="button"
            onClick={() => handleOAuth("google")}
            style={{ backgroundColor: "#db4437", color: "white", padding: "10px", borderRadius: "8px", border: "none", cursor: "pointer" }}
          >
            Sign in with Google
          </button>

          <button
            type="button"
            onClick={() => handleOAuth("github")}
            style={{ backgroundColor: "#333", color: "white", padding: "10px", borderRadius: "8px", border: "none", cursor: "pointer" }}
          >
            Sign in with GitHub
          </button>
        </div>

        <p style={{ marginTop: "15px", textAlign: "center" }}>
          Belum punya akun?{" "}
          <Link href="/auth/register" style={{ color: "#2a5298", fontWeight: "600" }}>
            Daftar di sini
          </Link>
        </p>
      </form>
    </div>
  );
}