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
            src={images.axiel}
            alt="Featured Car"
            className="w-full h-100 object-cover rounded-lg"
          />
        </div>
        <Card className="bg-black text-white p-5 md:p-8">
          <CardContent className="p-0">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              ORION CHAMPION
            </h3>
            <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
              At Orion PH Parañaque, you’re in good hands with Sir Axel. Our
              head technician personally handled this upgrade—explaining the
              process, making sure every detail was right, and delivering a
              clean, high-performance install. The customer left with headlights
              they can rely on and service they won’t forget.
              <br />
              <br />
              ✔️ Plug and play <br />
              ✔️ No modification <br />
              ✔️ No hassle, just pure brightness and safety.
              <br />
              <br />
              Visit us daily from 8 AM to 10 PM. Walk-ins welcome.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
