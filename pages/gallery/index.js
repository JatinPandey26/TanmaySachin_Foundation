import Footer from "../../components/footer";
import Gallery from "../../components/Gallery";
import Navbar from "../../components/navbar";
import RegBanner from "../../components/reginfobanner";
import styles from "./styles.module.scss";
export default function Home() {
  return (
    <div className="flex flex-col bg-[#c0d6ec96]">
      <Navbar />
      <RegBanner />
      <h1 className={styles.heading}>Our Gallery</h1>
      <Gallery />
      <Footer />
    </div>
  );
}
