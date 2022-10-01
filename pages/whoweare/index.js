import Navbar from '../../components/navbar'
import  RegBanner  from '../../components/reginfobanner'
import SendDonationBand from '../../components/sendDonations'
import WhoWeAreBand from '../../components/whoWeAreHome'


export default function Home() {
  return (

  
    <div className='flex flex-col'>
    <Navbar/>
    <RegBanner/>
    <WhoWeAreBand/>
    <SendDonationBand/>
    </div>
  )
}