import { Header } from "@/landing-page/features/components/navigation-bar";
import { HeroSection } from "@/landing-page/features/components/homepage";
import { ModelsSection } from "@/landing-page/features/components/models-section";
import { SearchSection } from "@/landing-page/features/components/search-section";
import { WeeklyHighlight } from "@/landing-page/features/components/weekly-highlight";
import { LatestSales } from "@/landing-page/features/components/latest-sales";
import { Footer } from "@/landing-page/features/components/footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ModelsSection />
      <SearchSection />
      <WeeklyHighlight />
      <LatestSales />
      <Footer />
    </div>
  );
};
