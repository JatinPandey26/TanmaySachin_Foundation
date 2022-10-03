import Navbar from "../../components/navbar";
import RegBanner from "../../components/reginfobanner";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <RegBanner />
      <h1 className="m-auto mt-[3rem]  underline underline-offset-[1rem] mb-[5rem] text-[#152453] font-bold text-[2rem]">
        Gallery
      </h1>
    </div>
  );
}
