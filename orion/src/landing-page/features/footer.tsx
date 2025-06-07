import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-black mb-4">Showroom</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>123 Luxury Ave, City</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-black mb-4">Company</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div>About Us</div>
              <div>Careers</div>
              <div>Press</div>
            </div>
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="font-bold text-black mb-4">Support</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div>Help Center</div>
              <div>Contact</div>
              <div>Service</div>
            </div>
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="font-bold text-black mb-4">
              Stay up to date with the latest news
            </h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button className="bg-black text-white hover:bg-gray-800 w-full sm:w-auto">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
