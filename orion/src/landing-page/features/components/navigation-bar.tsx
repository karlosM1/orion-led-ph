import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-gray-100 sticky top-0 bg-white/55 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-black">ORION</div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-black hover:text-gray-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Community
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors"
            >
              News
            </a>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[350px]">
              <div className="flex flex-col space-y-6 mt-8">
                <a
                  href="#"
                  className="text-xl font-medium text-black hover:text-gray-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-xl font-medium text-gray-600 hover:text-black transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-xl font-medium text-gray-600 hover:text-black transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Community
                </a>
                <a
                  href="#"
                  className="text-xl font-medium text-gray-600 hover:text-black transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  News
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
