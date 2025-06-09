import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { images } from "@/constants";

export function ModelsSection() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8">
        Models
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        <Card className="overflow-hidden p-0">
          <CardContent className="p-0">
            <div className="relative flex items-center justify-center">
              <img
                src={images.bulb13}
                alt="Car Interior"
                width={300}
                height={240}
                className="block w-full h-auto object-contain"
                style={{ display: "block" }}
              />
              <Badge className="absolute top-4 left-4 bg-black text-white">
                MAX HVN
              </Badge>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden p-0">
          <CardContent className="p-0">
            <div className="relative flex items-center justify-center">
              <img
                src={images.bulb1}
                alt="Car Model"
                width={300}
                height={240}
                className="block w-full h-auto object-contain"
                style={{ display: "block" }}
              />
              <Badge className="absolute top-4 left-4 bg-black text-white">
                ALPHA
              </Badge>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden sm:col-span-2 md:col-span-1 p-0 m-0">
          <CardContent className="p-0 m-0">
            <div className="relative flex items-center justify-center">
              <img
                src={images.bulb15}
                alt="Car Model"
                width={300}
                height={240}
                className="block w-full h-auto object-contain"
                style={{ display: "block" }}
              />
              <Badge className="absolute top-4 left-4 bg-black text-white">
                SIGMA
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
