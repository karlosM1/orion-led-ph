import { useState } from "react";
import { LogOut, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useCartTotals } from "@/lib/cart";
import { images } from "@/constants";
import { useAuth } from "@/lib/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useCartTotals();
  const { user, isAuthenticated, signOut } = useAuth();

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

            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="default"
                    size="icon"
                    className="relative ml-2"
                  >
                    <User className="h-6 w-6" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium">
                      {user?.firstName} {user?.lastName}
                    </p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="w-full">
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/cart" className="w-full">
                      Orders
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut} className="text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden md:flex items-center gap-2">
                <Link to="/auth/signin">
                  <Button variant="ghost">Sign In</Button>
                </Link>
                <Link to="/auth/signup">
                  <Button className="bg-black text-white hover:bg-gray-800">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] sm:w-[350px] pl-4">
                <div className="flex flex-col space-y-6 mt-8">
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
                    to="/stock"
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

                  {isAuthenticated ? (
                    <>
                      <div className="border-t pt-4">
                        <p className="text-sm text-gray-500 mb-2">
                          Signed in as
                        </p>
                        <p className="font-medium">
                          {user?.firstName} {user?.lastName}
                        </p>
                      </div>
                      <Link
                        to="/profile"
                        className="text-xl font-medium text-gray-600 hover:text-black transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Profile
                      </Link>
                      <Button
                        variant="ghost"
                        onClick={() => {
                          signOut();
                          setIsOpen(false);
                        }}
                        className="justify-start p-0 text-xl font-medium text-red-600 hover:text-red-700"
                      >
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <div className="border-t pt-4 space-y-4">
                      <Link
                        to="/auth/signin"
                        className="block text-xl font-medium text-gray-600 hover:text-black transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Sign In
                      </Link>
                      <Link
                        to="/auth/signup"
                        className="block text-xl font-medium text-black hover:text-gray-600 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Sign Up
                      </Link>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
