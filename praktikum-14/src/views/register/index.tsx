import Link from "next/link";
import styles from "./register.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

const TampilanRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { push } = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // ✅ SIMPAN REFERENSI FORM DI AWAL (Solusi bug 2 alert)
    const form = event.target as HTMLFormElement; 
    
    setError("");
    setSuccess("");
    setIsLoading(true);

    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const fullName = formData.get("Fullname") as string;
    const password = formData.get("Password") as string;

    // ✅ VALIDASI
    if (!email) {
      setError("Email wajib diisi");
      setIsLoading(false);
      return;
    }

    if (!email.includes("@")) {
      setError("Email tidak valid");
      setIsLoading(false);
      return;
    }

    if (!password || password.length < 6) {
      setError("Password minimal 6 karakter");
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

      if (!response.ok) {
        if (response.status === 400) {
          setError("Email sudah terdaftar");
        } else {
          setError(result.message || "Server error");
        }
        return; 
      }

      // ✅ SUCCESS
      setSuccess("Register berhasil! Redirect ke login...");
      form.reset(); // ✅ SEKARANG AMAN DIGUNAKAN

      setTimeout(() => {
        push("/login");
      }, 1500);

    } catch (error) {
      console.error(error);
      setError("Gagal terhubung ke server");
    } finally {
      // ✅ MATIKAN LOADING DI FINALLY AGAR SELALU DIJALANKAN
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.register}>
      {/* 🔴 ERROR ALERT */}
      {error && (
        <div className={styles.register__error}>
          <div className={styles.icon}>⚠️</div>
          <div className={styles.message}>{error}</div>
        </div>
      )}

      {/* 🟢 SUCCESS ALERT */}
      {success && (
        <div className={styles.register__success}>
          <div className={styles.icon}>✅</div>
          <div className={styles.message}>{success}</div>
        </div>
      )}

      <h1 className={styles.register__title}>Halaman Register</h1>

      <div className={styles.register__form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.register__form__item}>
            <label className={styles.register__form__item__label}>
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Masukkan email Anda"
              required
              className={styles.register__form__item__input}
            />
          </div>

          <div className={styles.register__form__item}>
            <label className={styles.register__form__item__label}>
              Fullname
            </label>
            <input
              type="text"
              name="Fullname"
              placeholder="Masukkan nama lengkap"
              required
              className={styles.register__form__item__input}
            />
          </div>

          <div className={styles.register__form__item}>
            <label className={styles.register__form__item__label}>
              Password
            </label>
            <input
              type="password"
              name="Password"
              placeholder="Minimal 6 karakter"
              minLength={6}
              required
              className={styles.register__form__item__input}
            />
          </div>

          <button
            type="submit"
            className={styles.register__form__item__button}
            disabled={isLoading}
          >
            {isLoading ? "Memproses..." : "Register"}
          </button>
        </form>

        <p className={styles.register__form__item__text}>
          Sudah punya akun? <Link href="/login">Masuk di sini</Link>
        </p>
      </div>
    </div>
  );
};

export default TampilanRegister;