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
          <h4>Reach Us</h4>
          <p>
            A-Juve, P-Dalepal-Rajapur District- Ratnagiri, Juve, Ratnagiri
            Maharashtra - 416702, India
          </p>
        </div>
        <div className={styles.connectWrapper}>
          <h4>Connect with Us</h4>
          <p>989XXXXXXX</p>
        </div>
      </div>
      <hr className="w-[90%] m-auto h-[0.05rem]  mb-[1rem]" />
      <div className="text-center">
        <p className="text-[0.8rem] text-[#152453]">
          © 2022 TanmaySachinFoundation. All rights reserved.
        </p>
        <p className="text-[0.8rem] text-[#152453]">
          Website Designed and Developed By:
          <a href="https://www.linkedin.com/in/aditi-gemini-374109227/">
            {" "}
            Aditi Gemini
          </a>{" "}
          &{" "}
          <a href="https://www.linkedin.com/in/aditi-gemini-374109227/">
            {" "}
            Jatin Pandey
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
