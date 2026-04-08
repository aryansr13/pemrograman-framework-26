import { ProductType } from "../../types/Product.type"; // Sesuaikan path
import styles from "./detailProduct.module.scss";
import Image from "next/image";

const DetailProduk = ({ product, isLoading }: { product: ProductType | null, isLoading: boolean }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Detail Produk</h1>

      {/* Jika masih loading, tampilkan Skeleton */}
      {isLoading ? (
        <div className={styles.produkdetail}>
          <div className={`${styles.produkdetail__image} ${styles.skeleton}`}></div>
          <div className={styles.produkdetail__info}>
            <div className={`${styles.skeleton} ${styles.skeleton__title}`}></div>
            <div className={`${styles.skeleton} ${styles.skeleton__category}`}></div>
            <div className={`${styles.skeleton} ${styles.skeleton__price}`}></div>
            <div className={`${styles.skeleton} ${styles.skeleton__button}`}></div>
          </div>
        </div>
      ) : product ? (
        /* Jika data sudah ada, tampilkan produk */
        <div className={styles.produkdetail}>
          <div className={styles.produkdetail__image}>
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              priority
            />
          </div>

          <div className={styles.produkdetail__info}>
            <h1 className={styles.produkdetail__name}>{product.name}</h1>
            <p className={styles.produkdetail__category}>Kategori: {product.category}</p>
            <p className={styles.produkdetail__price}>
              Rp {product.price?.toLocaleString("id-ID")}
            </p>
            
            {/* Tombol yang sebelumnya lupa ditambahkan */}
            <button className={styles.produkdetail__button}>
              Beli Sekarang
            </button>
          </div>
        </div>
      ) : (
        /* Jika produk tidak ditemukan di database */
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h2>Produk tidak ditemukan.</h2>
        </div>
      )}
    </div>
  );
};

export default DetailProduk;