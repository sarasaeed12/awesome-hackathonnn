import Image from "next/image";
import Link from "next/link";
import Bottomheader from "./Components/Bottomheader";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Flash from "./Components/Flash";
import Seater from "./Components/Seater";
import Top from "./Components/Top";
import Asgaard from "./Components/Asgaard";
import Blogs from "./Components/Blogs";
import Instagram from "./Components/Instagram";




export default function Home() {
  return (
    <div>
   
      {/* <Bottomheader /> */}
      <Hero />
      <Seater />
      <Top />
      <Asgaard />
      <Blogs />
      <Instagram />
     
      {/* <Footer /> */}

      
     

    </div>
  );
}
