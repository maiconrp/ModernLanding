import Header from "@/components/EbookLanding/Header";
import Hero from "@/components/EbookLanding/Hero";
import PainPoints from "@/components/EbookLanding/PainPoints";
import ProblemAggravation from "@/components/EbookLanding/ProblemAggravation";
import Solution from "@/components/EbookLanding/Solution";
import Benefits from "@/components/EbookLanding/Benefits";
import EbookContent from "@/components/EbookLanding/EbookContent";
import Bonus from "@/components/EbookLanding/Bonus";
import Authority from "@/components/EbookLanding/Authority";
import Testimonials from "@/components/EbookLanding/Testimonials";
import FAQ from "@/components/EbookLanding/FAQ";
import FinalCTA from "@/components/EbookLanding/FinalCTA";
import Footer from "@/components/EbookLanding/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Smooth scroll functionality
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
            });
          }
        }
      });
    });

    // Scroll animation for elements
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".glass, .glass-gold");
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (elementPosition < screenPosition) {
          element.classList.add("animate-fadeInUp");
        }
      });
    };

    // Run on load
    animateOnScroll();

    // Run on scroll
    window.addEventListener("scroll", animateOnScroll);

    return () => {
      window.removeEventListener("scroll", animateOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#101010] overflow-x-hidden">
      <Header />
      <Hero />
      <PainPoints />
      <ProblemAggravation />
      <Solution />
      <Benefits />
      <EbookContent />
      <Bonus />
      <Authority />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
