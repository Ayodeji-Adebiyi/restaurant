import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Product.module.css";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const Product = ({prod}) => {
    const[price, setPrice] = useState(prod.prices[0])
    const[size, setSize] = useState(0);
    const[quantity, setQuantity] = useState(1);
    const[extras, setExtras] = useState([]);
    const dispatch = useDispatch();

    const changePrice = (number) => {
        setPrice(price+number);
    };

    const handleSize = (sizeIndex) => {
        const difference = prod.prices[sizeIndex] - prod.prices[size];
        setSize(sizeIndex);
        changePrice(difference);
    }

    const handleChange = (e,item) => {
        const checked = e.target.checked;

        if(checked) {
            changePrice(item.price);
            setExtras((prev) => [...prev, item]);
        }else{
            changePrice(-item.price);
            setExtras(extras.filter((extra) => extra._id !== item._id));
        }
    };

    const handleClick = () => {
        dispatch(addProduct({...prod, extras, price, quantity}));
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={prod.img} alt="" layout="fill" objectFit="contain"/>
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{prod.title}</h1>
                <span className={styles.price}>₦{price}</span>
                <p className={styles.desc}>{prod.desc}</p>
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size}>
                        <Image src="/img/size.png" alt="" layout="fill" onClick={() => handleSize(0)}/>
                        <span className={styles.amount}>Small</span>
                    </div>
                    <div className={styles.size}>
                        <Image src="/img/size.png" alt="" layout="fill" onClick={() => handleSize(1)}/>
                        <span className={styles.amount}>Medium</span>
                    </div>
                    <div className={styles.size}>
                        <Image src="/img/size.png" alt="" layout="fill" onClick={() => handleSize(2)}/>
                        <span className={styles.amount}>Large</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Choose additional items</h3>
                <div className={styles.items}>
                    {prod.extraOptions.map(item => (
                        <div className={styles.item} key={item._id}>
                            <input type="checkbox" id={item.text} name={item.text} className={styles.checkbox} onChange={(e)=>handleChange(e, item)}/>
                            <label htmlFor="grilled">{item.text}</label>
                        </div>
                    ))}
                </div>
                <div className={styles.add}>
                    <input onChange={(e)=> setQuantity(e.target.value)} type="number" defaultValue={1} className={styles.quantity}/>
                    <button className={styles.button} onClick={handleClick}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async ({params}) => {
    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
    return {
        props: {
            prod: res.data,
        },
    };
};

export default Product
