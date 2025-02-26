import FeatruredCourses from "@/components/FeatruredCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestimonialCard";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    
    <HeroSection />
    <FeatruredCourses />
    <WhyChooseUs />
    <MusicSchoolTestimonials />
    <UpcomingWebinars />
    <Instructors />
    <Footer />
    </main>
  );
}
