import styles from "./register.module.css";
import Link from "next/link";

const HalamanRegister = () => {
  return (
    <div className={styles.register}>
      <h1>Halaman Register</h1>

      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button>Register</button>

      <p>
        Sudah punya akun?{" "}
        <Link href="/auth/login">Login di sini</Link>
      </p>
    </div>
  );
};

export default HalamanRegister;