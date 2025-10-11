import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Booking from "@/components/Booking";
import About from "@/components/About";
import Process from "@/components/Process";
import Fleet from "@/components/Fleet";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Tools from "@/components/Tools";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Booking />
        <About />
        <Process />
        <Fleet />
        <Clients />
        <Testimonials />
        <Partners />
        <Tools />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
