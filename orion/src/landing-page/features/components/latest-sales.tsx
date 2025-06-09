import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { images } from "@/constants";

export function LatestSales() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8">
        Latest sales
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        <Card className="overflow-hidden m-0 p-0">
          <CardContent className="p-0">
            <div className="relative w-full aspect-[3/2]">
              <img
                src={images.role1}
                alt="Car Wheel"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <Badge className="absolute bottom-4 left-4 bg-white text-black">
                Orion PH Cavite
              </Badge>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden m-0 p-0">
          <CardContent className="p-0">
            <div className="relative w-full aspect-[3/2]">
              <img
                src={images.role2}
                alt="Car Wheel"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <Badge className="absolute bottom-4 left-4 bg-white text-black">
                Orion PH Cavite
              </Badge>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden m-0 p-0">
          <CardContent className="p-0">
            <div className="relative w-full aspect-[3/2]">
              <img
                src={images.role3}
                alt="Car Wheel"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <Badge className="absolute bottom-4 left-4 bg-white text-black">
                Orion PH Parañaque
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
