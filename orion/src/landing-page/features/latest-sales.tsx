import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function LatestSales() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8">
        Latest sales
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative h-48">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Car Wheel"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute bottom-4 left-4 bg-white text-black">
                SOLD OUT
              </Badge>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative h-48">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Car Interior"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute bottom-4 left-4 bg-white text-black">
                AVAILABLE
              </Badge>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden sm:col-span-2 md:col-span-1">
          <CardContent className="p-0">
            <div className="relative h-48">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Boat"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute bottom-4 left-4 bg-white text-black">
                RESERVED
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
