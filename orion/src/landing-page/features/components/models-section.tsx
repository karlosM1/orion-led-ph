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
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative h-48 bg-gray-900">
              <img
                src={images.bulb13}
                alt="Car Interior"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-black text-white">
                MAX HVN
              </Badge>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative h-48 bg-blue-500">
              <img
                src={images.bulb2}
                alt="Car Model"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden sm:col-span-2 md:col-span-1">
          <CardContent className="p-0">
            <div className="relative h-48 bg-red-500">
              <img
                src={images.bulb3}
                alt="Car Model"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
