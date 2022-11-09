import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/hero_aa.png" alt="" layout="fill" objectFit="cover"/>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            THE ONLY THING WE LOVE MORE THAN FOOD IS YOU
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANT</h1>
          <p className={styles.text}>
            No. 1, Ilesanmi House,
            <br /> After Winners Chapel,
            <br /> Airport Road,
            <br /> Oba-Ile, Akure.
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 09:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY UNTIL SUNDAY
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer