import { Card, CardContent } from "@/components/ui/card";

export function WeeklyHighlight() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8">
        Weekly Highlight
      </h2>
      <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
        <div>
          <img
            src="/placeholder.svg?height=400&width=600"
            alt="Featured Car"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <Card className="bg-black text-white p-5 md:p-8">
          <CardContent className="p-0">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              Porsche Macan GTS
            </h3>
            <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
              Meet Macan GTS. Distinctive design elements and an enhanced V6
              engine deliver a driving experience that's unmistakably GTS. With
              its sport-tuned suspension and dynamic performance, every journey
              becomes an adventure. The perfect balance of luxury and
              sportiness, designed for those who demand excellence in every
              detail.
            </p>
            <div className="space-y-2 text-xs md:text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Engine:</span>
                <span>2.9L V6 Twin-Turbo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Power:</span>
                <span>434 HP</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">0-60 mph:</span>
                <span>4.7 seconds</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
