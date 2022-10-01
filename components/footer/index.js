import styles from "./styles.module.scss";
import Image from "next/image";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
// import LanguageIcon from "@mui/icons-material/Language";
const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <Image
        src={"/TanmaySachinFoundation.png"}
        className="rounded-lg "
        layout="intrinsic"
        width="80%"
        height="70%"
      />
      <h3 className="mt-4 text-2xl font-medium text-center">TanmaySachin Foundation</h3>
      <div className="flex flex-col justify-center items-center my-2 mx-2 ">
        <div className="flex flex-col mx-auto items-center ">
          <span className="text-center">
            C/O Preeti Sumant Karanje, A-Juve, P-Dalepal-Rajapur
          </span>
          <span>District- Ratnagiri, Juve, Ratnagiri</span>
          <span>Maharashtra - 416702, India</span>
        </div>
        <div className="flex flex-col items-center my-2">
          <span>+91-8108070899</span>
          <a
            href="mailto:sachin@tanmaysachinfoundation.com"
            className="mx-2 cursor-pointer"
          >
            sachin@tanmaysachinfoundation.com
          </a>
        </div>
      </div>
      <p className="text-white mx-1 mt-5 text-center font-thin text-sm italic">
        @2022 TanmaySachinFoundation.All rights reserved{" "}
      </p>
      <span className="text-white mx-1 mt-1  text-center font-thin text-sm italic">
        Website Designed and Coded by:{" "}
        <a
          className="underline"
          href="https://www.linkedin.com/in/aditi-gemini-374109227/"
        >
          Aditi Gemini
        </a>{" "}
        &{" "}
        <a className="underline" href="https://www.linkedin.com/in/jatin-pandey-18194b1a0/">
          Jatin Pandey
        </a>
      </span>
    </div>
  );
};

export default Footer;
