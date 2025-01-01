



import Hero from "./Components/Hero";

import Seater from "./Components/Seater";
import Top from "./Components/Top";
import Asgaard from "./Components/Asgaard";
import Blogs from "./Components/Blogs";
import Instagram from "./Components/Instagram";




export default function Home() {
  return (
    <div className="flex flex-col">
   
      
      <Hero />
      <Seater />
      <Top />
      <Asgaard />
      <Blogs />
      <Instagram />
     
     
      
     

    </div>
  );
}
