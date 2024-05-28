import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Expertise from "../../components/Expertise";
import WhyChooseUs from "../../components/WhyChooseUs";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

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
