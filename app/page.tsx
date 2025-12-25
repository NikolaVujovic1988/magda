import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MagdaFaq from "@/components/faq";
import MagdaReviewsSlider from "@/components/google-slider";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <MagdaReviewsSlider />
      <Contact />
      <MagdaFaq />
      <Footer />
    </>
  );
}