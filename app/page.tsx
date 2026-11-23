import Image from "next/image";
import Navbar from "./components/Navbar";
import { Young_Serif } from "next/font/google";

export default function Home() {
  const font = Young_Serif({
      // variable : "",
      weight : "400" 
  })
  return (
    <div className={`w-screen bg-[#ffe6a7] ${font.className}`}>
      <Navbar/>
      <div className="h-screen w-screen flex justify-center text-center text-[8rem] leading-none">
        <div>
          <h1>TAKE A STAND</h1>
        <h1>AGAINST FAST</h1>
        <h1>FASHION</h1>
        </div>
      </div>
    </div>
  );
}
