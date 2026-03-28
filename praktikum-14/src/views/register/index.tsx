import Link from "next/link";
import styles from "./register.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

const TampilanRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { push } = useRouter();

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    // ✅ ambil data dengan aman
    const email = formData.get("email")?.toString() || "";
    const fullName = formData.get("Fullname")?.toString() || "";
    const password = formData.get("Password")?.toString() || "";

    console.log({ email, fullName, password }); // 🔍 debug

    // ✅ validasi input
    if (!email || !fullName || !password) {
      setError("Semua field wajib diisi");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, fullName, password }),
      });

      const result = await response.json();
      console.log("Response:", result);

      // ✅ pakai response.ok
      if (response.ok) {
        form.reset();
        setIsLoading(false);
        push("/login"); // ✅ redirect benar
      } else {
        setIsLoading(false);
        setError(result.name || "Terjadi kesalahan");
      }
    } catch (err) {
      setIsLoading(false);
      setError("Server error");
    }
  };

  return (
    <div className={styles.register}>
      <h1 className={styles.register__title}>Halaman Register</h1>

      <div className={styles.register__form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.register__form__item}>
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" />
          </div>

          <div className={styles.register__form__item}>
            <label>Fullname</label>
            <input type="text" name="Fullname" placeholder="Fullname" />
          </div>

          <div className={styles.register__form__item}>
            <label>Password</label>
            <input type="password" name="Password" placeholder="Password" />
          </div>

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Register"}
          </button>

          {error && <p>{error}</p>}
        </form>

        <p>
          Sudah punya akun?
          <Link href="/login"> Ke Halaman Login</Link> {/* ✅ FIX */}
        </p>
      </div>
    </div>
  );
};

export default TampilanRegister;