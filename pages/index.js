import Head from 'next/head'
import Navbar from '../components/navbar'
import  RegBanner  from '../components/reginfobanner'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

  
    <div className='flex flex-col'>
    <Navbar/>
    <RegBanner/>

    </div>
  )
}