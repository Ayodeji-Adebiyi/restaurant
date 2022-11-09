import Image from "next/image"
import { useState } from "react";
import styles from "../styles/Slider.module.css"

const Slider = () => {
    const[index, setIndex] = useState(0)
    const handleArrow = (direction) => {
        if (direction === "l"){
            setIndex(index !== 0 ? index - 1 : 2)
        }
        if (direction === "r"){
            setIndex(index !== 2 ? index + 1 : 0)
        }
    }
    const sliderItems = [
        {
            id: "1",
            img: "/img/slider1.png",
            title: "HOT & SPICY",
            desc: "BOWL OF ASSORTED MEAT",
            para: "DON'T COMPROMISE ON TASTE! GET FLAT 20% OFF FOR THREE ORDERS AND MORE",
            bg: "#d1411e",
        },
        {
            id: "2",
            img: "/img/slider2.png",
            title: "EAT HEALTHY",
            desc: "PLATE OF SEA FOOD FRIED RICE",
            para: "DON'T COMPROMISE ON TASTE! GET FLAT 20% OFF FOR THREE ORDERS AND MORE",
            bg: "#d1411e",
        },
        {
            id: "3",
            img: "/img/slider3.png",
            title: "HOT & SPICY",
            desc: "PLATE OF CHICKEN AND CHIPS",
            para: "DON'T COMPROMISE ON TASTE! GET FLAT 10% OFF FOR THREE ORDERS AND MORE",
            bg: "#d1411e",
        },
    ];
    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{left: 0}} onClick={() => handleArrow("l")}>
                <Image src="/img/arrowl.png" alt="" layout="fill"/>
            </div>
            <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
                {sliderItems.map((item) => (
                    <div className={styles.slide} key={item.id}>
                        <div className={styles.infoContainer}>
                            <h4 className={styles.hFour}>{item.title}</h4>
                            <div className={styles.line1}></div>
                            <h2 className={styles.hTwo}>{item.desc}</h2>
                            <p className={styles.para}>{item.para}</p>
                        </div>
                        <div className={styles.imgContainer}>
                            <Image src={item.img} alt="" width="700px" height="500px" objectFit="contain" />
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.arrowContainer} style={{right: 0}} onClick={() => handleArrow("r")}>
                <Image src="/img/arrowr.png" alt="" layout="fill"/>
            </div>
            

        </div>
    )
}

export default Slider
