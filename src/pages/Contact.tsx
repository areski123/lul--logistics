import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/Contact";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
