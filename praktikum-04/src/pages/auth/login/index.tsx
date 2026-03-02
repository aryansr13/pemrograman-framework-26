import Link from "next/link";
import { useRouter } from "next/router";
// import styles from "./login.module.css";
import styles from "./login.module.scss";


const HalamanLogin = () => {
    const { push } = useRouter();

    const handlerLogin = () => {
        sessionStorage.setItem("isLogin", "true");
        push("/produk");
    }

  return (
    <div className={styles.login}>
        <h1 className=" text-3xl font-bold text-blue-600">Halaman Login</h1>
        <button onClick={() => handlerLogin()}>Login</button> <br/>
        <h1 style={{ color: "red",border: "1px solid red" ,borderRadius: "10px",padding: "10px",}}>Belum punya akun?</h1>
        <Link href={"/auth/register"} className="link">ke Halaman Register</Link>
    </div>
  );
}

export default HalamanLogin;