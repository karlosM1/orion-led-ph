import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

export function SearchSection() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-black mb-2">
          Are you looking for
          <br className="md:hidden" /> a specific model?
        </h2>
        <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
          Find the perfect car that matches your preferences and budget.
        </p>

        <Card className="p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-3 md:mb-4">
            <Select>
              <SelectTrigger className="w-full h-12 border border-gray-200 bg-white">
                <SelectValue placeholder="Brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="porsche">Porsche</SelectItem>
                <SelectItem value="bmw">BMW</SelectItem>
                <SelectItem value="audi">Audi</SelectItem>
                <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                <SelectItem value="ferrari">Ferrari</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-full h-12 border border-gray-200 bg-white">
                <SelectValue placeholder="Model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="911">911</SelectItem>
                <SelectItem value="cayenne">Cayenne</SelectItem>
                <SelectItem value="panamera">Panamera</SelectItem>
                <SelectItem value="macan">Macan</SelectItem>
                <SelectItem value="taycan">Taycan</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-full h-12 border border-gray-200 bg-white">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-full h-12 border border-gray-200 bg-white">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-50k">Under $50k</SelectItem>
                <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                <SelectItem value="100k-200k">$100k - $200k</SelectItem>
                <SelectItem value="200k-500k">$200k - $500k</SelectItem>
                <SelectItem value="500k+">$500k+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Input
              placeholder="Search for specific features, colors, or specifications..."
              className="flex-1 h-12 border border-gray-200 bg-white"
            />
            <Button className="bg-black text-white hover:bg-gray-800 w-full sm:w-auto h-12 px-6">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
