import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

const ProductList = ({productList}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>BEST RESTAURANT IN TOWN</h1>
            <p className={styles.desc}>
                Providing you with the best food and service is what we take pride in
                and this is what sets us apart from all other restaurants in the city. We 
                specialize in providing the perfect ambience for a romantic dinner for two, a 
                business lunch or a family reunion. Check out our amazing meals below.
            </p>
            <div className={styles.wrapper}>
                {productList.map((product) => (
                    <ProductCard key={product._id} product={product}/>
                ))}
            </div>
        </div>
    )
}

export default ProductList
