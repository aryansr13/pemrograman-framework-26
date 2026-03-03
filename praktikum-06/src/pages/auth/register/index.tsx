import Link from "next/link";
import styles from "./register.module.css";

const HalamanRegister = () => {
    return (
        <div className={styles.register}>
            <h1 className={styles.h1}>Halaman Register</h1>
            <p className={styles.p}>sudah punya akun?</p>
            <Link href={"/auth/login"} className={styles.link}>
                ke Halaman Login
            </Link>
        </div>
    );
}

export default HalamanRegister;