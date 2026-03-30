import styles from './navbar.module.css';
import { signIn, signOut, useSession } from "next-auth/react";
import Script from "next/script"; // Pastikan tetap menggunakan import yang benar
import Image from "next/image"; // 1. Tambahkan import Image dari Next.js

const Navbar = () => {
  const { data }: any = useSession();

  return (
    <div className={styles.navbar}>
      
      <div className={styles.navbar__brand} id="title"></div>

      <Script id="title-script" strategy="lazyOnload">
        {`document.getElementById('title').innerHTML = 'MyApp';`}
      </Script>

      <div className={styles.navbar__right}>
        {data ? (
          <>
            <div className={styles.navbar__user}>
              Welcome, {data.user?.fullname}
              {data.user?.image && (
                // 2. Ganti tag <img> dengan komponen <Image />
                <Image
                  width={50}      // Wajib ada width
                  height={50}     // Wajib ada height
                  src={data.user.image}
                  alt={data.user.fullname}
                  className={styles.navbar__user__image}
                />
              )}
            </div>
            <button
              className={`${styles.navbar__button} ${styles["navbar__button--danger"]}`}
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </>
        ) : (
          <button
            className={`${styles.navbar__button} ${styles["navbar__button--primary"]}`}
            onClick={() => signIn()}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;