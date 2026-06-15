import Navbar from "@/components/Navbar";
import AboutHero from "@/components/about/AboutHero";
import AboutMission from "@/components/about/AboutMission";
import AboutWhy from "@/components/about/AboutWhy";
import AboutValue from "@/components/about/AboutValue";
import AboutHowItWorks from "@/components/about/AboutHowItWorks";
import AboutPrivacy from "@/components/about/AboutPrivacy";
import AboutThread from "@/components/about/AboutThread";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <AboutMission/>
      <AboutWhy/>
      <AboutValue/>
      <AboutHowItWorks/>
      <AboutPrivacy/>
      <AboutThread/>
      <Footer/>
    </>
  );
}