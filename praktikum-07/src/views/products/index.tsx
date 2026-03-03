import styles from "./product.module.scss";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

type Props = {
  products: ProductType[];
};

const TampilProduk = ({ products }: Props) => {
  return (
    <div className={styles.produk}>
      <h1 className={styles.produk_title}>Daftar Produk</h1>

      <div className={styles.produk_content}>
        {products.map((product) => (
          <div
            key={product.id}
            className={styles.produk_content_item}
          >
            <img src={product.image} />

            <div className={styles.produk_content_item_name}>
              {product.name}
            </div>

            <div className={styles.produk_content_item_category}>
              {product.category}
            </div>

            <div className={styles.produk_content_item_price}>
              Rp {product.price.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TampilProduk;