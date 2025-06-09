import { Button } from "@/components/ui/button";
import { images } from "@/constants";

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-black leading-tight mb-6 md:mb-8">
            The
            <br />
            Light of
            <br />
            Champions
          </h1>
          <Button className="bg-black text-white hover:bg-gray-800 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full sm:w-auto">
            Get Started
          </Button>
        </div>

        <div className="relative order-1 lg:order-2 flex justify-center">
          <img
            src={images.porche}
            alt="Sports Car"
            className="w-full h-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-none scale-100 sm:scale-110 md:scale-125 lg:scale-150 lg:translate-x-72 transition-all duration-300"
            style={{ minHeight: "200px", minWidth: "0" }}
          />
        </div>
      </div>
    </section>
  );
}
