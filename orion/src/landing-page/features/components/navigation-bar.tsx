import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/lib/cart";
import { images } from "@/constants";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 bg-white/55 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <img src={images.orion} alt="Logo" className="h-8 w-auto" />

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-black transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/landing/about"
              className="text-gray-600 hover:text-black transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/landing/contact"
              className="text-gray-600 hover:text-black transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/landing/stock"
              className="text-gray-600 hover:text-black transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Stock
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/cart" className="relative p-2">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-black text-white text-xs rounded-full">
                  {totalItems}
                </Badge>
              )}
            </Link>

            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden ml-2">
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] sm:w-[350px]">
                <div className="flex flex-col space-y-6 mt-8 ml-5">
                  <Link
                    to="/"
                    className="text-xl font-medium text-black hover:text-gray-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/landing/about"
                    className="text-xl font-medium text-gray-600 hover:text-black transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    to="/landing/contact"
                    className="text-xl font-medium text-gray-600 hover:text-black transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link
                    to="/landing/stock"
                    className="text-xl font-medium text-gray-600 hover:text-black transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Stock
                  </Link>
                  <Link
                    to="/cart"
                    className="text-xl font-medium text-gray-600 hover:text-black transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Cart {totalItems > 0 && `(${totalItems})`}
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
