import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Menu from "@/components/sections/Menu/Menu";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import Contacts from "@/components/sections/Contacts/Contacts";

export default function HomePage() {
  return (
   <Container
    nav={<Navbar />}
    hero={<Hero />}
    about={<About />}
    menu={<Menu />}
    testimonials={<Testimonials />}
    contacts={<Contacts />}
    footer={<Footer />}
    />
  );
}
