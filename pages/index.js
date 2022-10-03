//import Head from 'next/head'
import Footer from '../components/footer'
import { HomePic } from '../components/homepageBg'
import Navbar from '../components/navbar'
import  RegBanner  from '../components/reginfobanner'
import SendDonationBand from '../components/sendDonations'
import WhoWeAreBand from '../components/whoWeAreHome'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

  
    <div className='flex flex-col'>
    <Navbar/>
    <RegBanner/>
    <HomePic/>
    <WhoWeAreBand/>
    
    <SendDonationBand/>
    <Footer/>
    </div>
  )
}