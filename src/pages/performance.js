import React, { useState } from 'react';
import Navbar from '../components/Navbar';
// import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree
} from '../components/InfoSection/Data';
import Services from '../components/Services';

const Spacing  = {
  height: 400
}

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* <InfoSection></InfoSection> */}
      {/* <HeroSection /> */}
      {/* <Services/> */}
      <section style={Spacing}></section>
      <InfoSection {...homeObjThree} /> 
      {/* <InfoSection {...homeObjOne} />  */}
      {/* <InfoSection {...homeObjTwo} /> */}
      <Footer />
    </>
  );
}

export default Home;
