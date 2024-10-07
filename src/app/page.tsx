import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Portfolio from "@/components/sections/portfolio";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import Experience from "@/components/sections/Experience";

export default function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <Experience />
            <Contact />
            <Footer />
        </div>
    );
}
