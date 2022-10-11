import styles from "./styles.module.scss";
import Mission from "../../components/missionAndVision";
import Navbar from "../../components/navbar";
import RegBanner from "../../components/reginfobanner";
import Story from "../../components/story";
import Whyweserve from "../../components/whyweserve";
import Footer from "../../components/footer";
import Link from "next/link";
import { AboutTSF } from "../../components/aboutUs";
import { DonateBand } from "../../components/aboutUsDonateBand";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <RegBanner />
      <h1 className={styles.heading}>
        About Us
      </h1>
      <Mission />
      <Whyweserve />
      <button className={styles.donateBtn}><Link href={'/donate'}>Donate Now</Link></button>
      <Footer />
    </div>
  );
}
