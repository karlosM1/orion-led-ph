import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/landing-page/features/navigation-bar";
import { HeroSection } from "@/landing-page/features/homepage";
import { ModelsSection } from "@/landing-page/features/models-section";
import { SearchSection } from "@/landing-page/features/search-section";
import { WeeklyHighlight } from "@/landing-page/features/weekly-highlight";
import { LatestSales } from "@/landing-page/features/latest-sales";
import { Footer } from "@/landing-page/features/footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
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
}
