import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import HeroLogo from "./components/hero-logo/hero-logo";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-[#FFFFF0]">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <HeroLogo />
      </div>
    </div>
  );
}
