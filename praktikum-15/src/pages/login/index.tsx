import Link from "next/link";
import styles from "./login.module.scss"; // ✅ FIX PATH
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const TampilanLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push, query } = useRouter();

  const callbackUrl: any = query.callbackUrl || "/";
  const [error, setError] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl,
      });

      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl); // redirect setelah login
      } else {
        setIsLoading(false);
        setError("Email atau password salah");
      }
    } catch (error) {
      setIsLoading(false);
      setError("Terjadi kesalahan");
    }
  };

  return (
    <div className={styles.login}>
      {error && <p className={styles.login__error}>{error}</p>}

      <h1 className={styles.login__title}>Halaman Login</h1>

      <div className={styles.login__form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.login__form__item}>
            <label className={styles.login__form__item__label}>
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className={styles.login__form__item__input}
            />
          </div>

          <div className={styles.login__form__item}>
            <label className={styles.login__form__item__label}>
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              minLength={6}
              required
              className={styles.login__form__item__input}
            />
          </div>

          <button
            type="submit"
            className={styles.login__form__item__button}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>

        <br />

        <p className={styles.login__form__item__text}>
          Belum punya akun?{" "}
          <Link href="/auth/register">Daftar</Link>
        </p>
      </div>
    </div>
  );
};

export default TampilanLogin;