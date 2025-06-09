import { Button } from "@/components/ui/button";
import { images } from "@/constants";
export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-16">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight mb-6 md:mb-8">
            The
            <br />
            Light of
            <br />
            Champions
          </h1>
          <Button className="bg-black text-white hover:bg-gray-800 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full w-full sm:w-auto">
            Get Started
          </Button>
        </div>
        <div className="relative  order-1 lg:order-2">
          <img
            src={images.porche}
            alt="Sports Car"
            className="w-full h-auto max-w-none scale-145 lg:scale-150 lg:translate-x-72"
            style={{ minHeight: "400px", minWidth: "700px" }}
          />
        </div>
      </div>
    </section>
  );
}
