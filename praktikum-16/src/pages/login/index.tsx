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
    // const form = event.currentTarget;
    // const formData = new FormData(event.currentTarget);
    // const email = formData.get("email") as string;
    // const fullname = formData.get("Fullname") as string;
    // const password = formData.get("password") as string;

    // if (password.length < 6) {
    //   setError("password minimal 6 karakter");
    //   setIsLoading(false);
    //   return;
    // }

    // const response = await fetch("/api/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email, fullname, password }),
    // });
    // if (response.status === 200) {
    //   form.reset();
    //   // event.currentTarget.reset();
    //   setIsLoading(false);
    //   push("/auth/login");
    // } else {
    //   setIsLoading(false);
    //   setError(response.status === 400 ? "Email already exists" : "An error occurred");
    // }
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl,
      });

      // console.log("signIn response:", res);
      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError("Login failed");
      }
    } catch (error) {
      setIsLoading(false);
      setError("wrong email or password");
    }
  };
  return (
    <div className={styles.login}>
      {error && <p className={styles.login__error}>{error}</p>}
      <h1 className={styles.login__title}>Halaman Login</h1>
      <div className={styles.login__form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.login__form__item}>
            <label htmlFor="email" className={styles.login__form__item__label}>
              Email
            </label>
            <input type="email" id="email" name="email" placeholder="Email" required className={styles.login__form__item__input} />
          </div>
          <div className={styles.login__form__item}>
            <label htmlFor="password" className={styles.login__form__item__label}>
              Password
            </label>
            <input type="password" id="password" name="password" placeholder="password" minLength={6} required className={styles.login__form__item__input} />
          </div>
          <button type="submit" className={styles.login__form__item__button} disabled={isLoading}>
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
        <br />
        <p className={styles.login__form__item__text}>
          Sudah punya akun? <Link href="/auth/login">Ke Halaman Login</Link>
        </p>
      </div>
    </div>
  );
};

export default TampilanLogin;