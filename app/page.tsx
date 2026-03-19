import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import SocialProof from '@/components/SocialProof';
import BentoFeatures from '@/components/BentoFeatures';
import SignatureTreatments from '@/components/SignatureTreatments';
import Location from '@/components/Location';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import WhatsAppFAB from '@/components/WhatsAppFAB';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-obsidian selection:bg-champagne selection:text-obsidian overflow-x-hidden">
        <Navbar />
        <Hero />
        <Stats />
        <SocialProof />
        <BentoFeatures />
        <SignatureTreatments />
        <Location />
        <Testimonials />
        <FinalCTA />
        <Footer />
      </main>
      <WhatsAppFAB />
    </>
  );
}
