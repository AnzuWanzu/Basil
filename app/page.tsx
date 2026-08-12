import Container from "@/components/layout/Container";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import Contacts from "@/components/Contacts";

export default function HomePage() {
  return (
   <Container 
    nav={<Navbar />}
    hero={<Hero />}
    about={<About />}
    menu={<Menu />}
    reviews={<Reviews />}
    contacts={<Contacts />}
    />
  );
}
