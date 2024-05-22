import React from "react";
import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import Solusi from "./page/solusi";
import Promo from "./page/promo";
import Artikel from "./page/artikel";
import Footer from "./page/footer";
import Ebook from "./page/ebook";
import Video from "./page/video";



function App() {
  return (
    <>
    <div className="container">
      <Navbar/>
  </div>
   <Carousel/>
   <Solusi/>
   <Promo/>
   <Artikel/>
   {/* <Ebook/> */}
   <Video/>
   <Footer/>
   </>

  );
}

export default App;
