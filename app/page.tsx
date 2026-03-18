import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import SocialProof from '@/components/SocialProof';
import BentoFeatures from '@/components/BentoFeatures';
import SignatureTreatments from '@/components/SignatureTreatments';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian selection:bg-champagne selection:text-obsidian overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <SocialProof />
      <BentoFeatures />
      <SignatureTreatments />
      <FinalCTA />
      <Footer />
    </main>
  );
}
