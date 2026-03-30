import styles from "./login.module.scss";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e:any) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password
    });

    if (res?.error) {
      setError("Email atau password salah");
    } else {
      router.push("/");
    }
  };

  const handleGoogle = async () => {
    await signIn("google", {
      callbackUrl: "/"
    });
  };

  return (
    <div className={styles.login}>

      <h1 className={styles.login__title}>
        Halaman login
      </h1>

      <form onSubmit={handleLogin} className={styles.login__form}>

        <div className={styles.login__form__item}>
          <label className={styles.login__form__item__label}>
            Email
          </label>

          <input
            type="text"
            placeholder="user"
            className={styles.login__form__item__input}
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>

        <div className={styles.login__form__item}>
          <label className={styles.login__form__item__label}>
            Password
          </label>

          <input
            type="password"
            placeholder="****"
            className={styles.login__form__item__input}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        {error && (
          <p className={styles.login__error}>
            {error}
          </p>
        )}

        <button type="submit">
          login
        </button>

        <br/><br/>

        <button
          type="button"
          onClick={handleGoogle}
        >
          sign in with google
        </button>

        <p style={{marginTop:"15px"}}>
          tidak punya akun?
          {" "}
          <Link href="/register">
            Ke Halaman Register
          </Link>
        </p>

      </form>

    </div>
  );
}