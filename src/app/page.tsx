import Footer from "@/components/Footer";
import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";
import PopularFoods from "@/components/PopularFoods";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <HomeSection />
      <PopularFoods />
      <Footer />
    </main>
  );
}
