import { Card, CardContent } from "@/components/ui/card";
import { images } from "@/constants";

export function WeeklyHighlight() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8">
        Weekly Highlight
      </h2>
      <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
        <div>
          <img
            src={images.macan}
            alt="Featured Car"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <Card className="bg-black text-white p-5 md:p-8">
          <CardContent className="p-0">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              ORION CHAMPION
            </h3>
            <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
              ORION LED HEADLIGHTS and FOG LIGHTS are designed to provide better
              visibility while driving through dark, fog, and/or rain. ORION LED
              generates lights that allow you to clearly see where you are
              headed, especially when driving under bad weather condition.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
