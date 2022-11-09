import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Add from '../components/Add'
import AddButton from '../components/AddButton'
import ProductList from '../components/ProductList'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'

export default function Home({productList, admin}) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Restaurant in Akure</title>
        <meta name="description" content="Best restaurant in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider/>
      {admin && <AddButton setClose={setClose}/>}
      <ProductList productList={productList}/>
      {!close && <Add setClose={setClose}/>}
      
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if(myCookie.token === process.env.TOKEN){
    admin = true;
  }
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      productList: res.data,
      admin,
    },
  };
};
