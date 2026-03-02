import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./login.module.css";

const HalamanLogin = () => {
    const { push } = useRouter();

    const handlerLogin = () => {
        sessionStorage.setItem("isLogin", "true");
        push("/produk");
    }

  return (
    <div className={styles.login}>
        <h1>Halaman Login</h1>
        <button onClick={() => handlerLogin()}>Login</button> <br/>
        <Link href={"/auth/register"} className="link">ke Halaman Register</Link>
    </div>
  );
}

export default HalamanLogin;