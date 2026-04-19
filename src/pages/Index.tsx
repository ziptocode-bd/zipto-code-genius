import ScrollProgressBar from "@/components/ScrollProgressBar";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import MidPageCTA from "@/components/MidPageCTA";
import Pricing from "@/components/Pricing";
import WhyChooseUs from "@/components/WhyChooseUs";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import ProjectTimeline from "@/components/ProjectTimeline";
import GuaranteeSection from "@/components/GuaranteeSection";
import CertificateSection from "@/components/CertificateSection";
import Team from "@/components/Team";
import GitHubActivity from "@/components/GitHubActivity";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import EmailSubscription from "@/components/EmailSubscription";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BackToTop from "@/components/BackToTop";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgressBar />
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <HowWeWork />
      <TechStack />
      <Projects />
      <MidPageCTA />
      <Pricing />
      <WhyChooseUs />
      <IndustriesWeServe />
      <ProjectTimeline />
      <GuaranteeSection />
      <CertificateSection />
      <Team />
      <GitHubActivity />
      <Testimonials />
      <FAQ />
      <Contact />
      <EmailSubscription />
      <Footer />
      <FloatingButtons />
      <BackToTop />
      <CookieConsent />
    </div>
  );
};

export default Index;
