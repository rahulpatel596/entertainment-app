import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Trending from '../components/trending'
import styles from '../styles/Home.module.css'

const Home: NextPage = (props: any) => {
  return (
    <div >
        <Trending data={props.data}/>
    </div>
  )
}

export async function getServerSideProps() {
  const data =  await fetch(`http://localhost:3000/api/trending`).then(res =>{ console.log(res); return res.json()});
  return {props: {data}}
}

export default Home
