import DownloadAppSection from "@/components/DownloadAppSection";
import Footer from "@/components/Footer";
import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";
import PopularFoods from "@/components/PopularFoods";
import SpecialOffer from "@/components/SpecialOffer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <HomeSection />
      <PopularFoods />
      <SpecialOffer />
      <DownloadAppSection />
      <Footer />
    </main>
  );
}


//
