import NavBar from "@/components/landing/NavBar";
import HeroSection from "@/components/landing/HeroSection";
import GameCards from "@/components/landing/GameCards";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col font-sans">
      <NavBar />
      <main className="flex-grow">
        <HeroSection />
        <GameCards />
        {/* We can add a Predictions/Features section placeholder here later if needed */}
      </main>
      <Footer />
    </div>
  );
}
