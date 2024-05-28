import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Expertise from "../../components/Expertise/Expertise";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Expertise />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
