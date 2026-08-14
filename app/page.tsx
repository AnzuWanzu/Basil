import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Menu from "@/components/sections/Menu";
import Testimonials from "@/components/sections/Testimonials";
import Contacts from "@/components/sections/Contacts";

export default function HomePage() {
  return (
   <Container 
    nav={<Navbar />}
    hero={<Hero />}
    about={<About />}
    menu={<Menu />}
    testimonials={<Testimonials />}
    contacts={<Contacts />}
    />
  );
}
