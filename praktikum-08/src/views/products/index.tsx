import styles from "./product.module.scss";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

const TampilanProduk = ({
  products,
  isLoading,
}: {
  products: ProductType[];
  isLoading: boolean;
}) => {
  return (
    <div className={styles.produk}>
      <h1 className={styles.produk__title}>Daftar Produk</h1>

      <div className={styles.produk__content}>
        {isLoading ? (
          // 🔥 Tampilkan skeleton saat loading
          Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className={styles.produk__content__skeleton}
            >
              <div className={styles.produk__content__skeleton__image}></div>
              <div className={styles.produk__content__skeleton__name}></div>
              <div className={styles.produk__content__skeleton__category}></div>
              <div className={styles.produk__content__skeleton__price}></div>
            </div>
          ))
        ) : products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className={styles.produk__content__item}
            >
              <div className={styles.produk__content__item__image}>
                <img
                  src={product.image}
                  alt={product.name}
                  width={200}
                />
              </div>

              <h4 className={styles.produk__content__item__name}>
                {product.name}
              </h4>

              <p className={styles.produk__content__item__category}>
                {product.category}
              </p>

              <p className={styles.produk_content_item_price}>
                Rp {product.price.toLocaleString("id-ID")}
              </p>
            </div>
          ))
        ) : (
          <p>Tidak ada produk.</p>
        )}
      </div>
    </div>
  );
};

export default TampilanProduk;