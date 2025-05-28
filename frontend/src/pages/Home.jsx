import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Tools from "../components/Tools";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        {" "}
        <Header />
        <Tools />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default Home;
