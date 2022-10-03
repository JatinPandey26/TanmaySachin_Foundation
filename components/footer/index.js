import styles from "./styles.module.scss";
import Image from "next/image";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
// import LanguageIcon from "@mui/icons-material/Language";
const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.upperwrapper}>
        <div className={styles.introWrapper}>
          <Image
            src={"/logotsf.png"}
            width="60%"
            height="60%"
            className="object-contain"
          ></Image>
          <p>
            Tanmay <br /> Sachin <br /> Foundation
          </p>
        </div>
        <div className={styles.addressWrapper}>
          <h4>Mailing Address</h4>
          <p>
            C/O Preeti Sumant Karanje, A-Juve, P-Dalepal-Rajapur District-
            Ratnagiri, Juve, Ratnagiri Maharashtra - 416702, India
          </p>
        </div>
        <div className={styles.connectWrapper}>
          <h4>Connect WIth us</h4>
        </div>
      </div>
      <hr className="w-[90%] m-auto h-[0.05rem] bg-[#152453a9] mb-[1rem]"/>
      <div className="text-center">
      <p className="text-[0.8rem] text-[#152453]">© 2022 TanmaySachinFoundation. All rights reserved.</p>
      <p className="text-[0.8rem] text-[#152453]">
      Website Designed and Coded By: Aditi Gemini & Jatin Pandey
      </p>
      </div>
    </div>
  );
};

export default Footer;
