import Header from "../components/Header";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Expertise from "../components/Expertise";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Partners />
        <Expertise />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
