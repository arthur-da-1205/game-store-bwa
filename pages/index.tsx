import type { NextPage } from "next";
import AOS from "aos";
import { useEffect } from "react";
import Navbar from "../components/organisms/Navbar";
import MainBanner from "../components/organisms/MainBanner";
import TransactionsStep from "../components/organisms/TransactionsStep";
import FeaturedGame from "../components/organisms/FeaturedGame";
import Reached from "../components/organisms/Reached";
import Story from "../components/organisms/Story";
import Footer from "../components/organisms/Footer";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Navbar />
      {/* // <!-- Header --> */}
      <MainBanner />
      {/* <!-- 3 Column - Feature --> */}
      <TransactionsStep />
      {/* <!-- 5 Column - Featured-game --> */}
      <FeaturedGame />
      {/* <!-- Reached --> */}
      <Reached />
      {/* <!-- Story --> */}
      <Story />
      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
};

export default Home;
