import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/product";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";
import { Header } from "./navigation-bar";
import { Footer } from "./footer";
import { images } from "@/constants";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addItem } = useCart();
  const image = [images.bulb1, images.bulb2, images.bulb3];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % image.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + image.length) % image.length);
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || "/placeholder.svg",
    });

    toast.success(`${product.name} added to cart`, {
      description: "Item has been successfully added to your cart.",
      action: {
        label: "View Cart",
        onClick: () => {
          window.history.pushState({}, "", "/cart");
          window.dispatchEvent(new PopStateEvent("popstate"));
        },
      },
    });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link to="/" className="text-gray-700 hover:text-gray-900">
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <Link
                      to="/stock"
                      className="text-gray-700 hover:text-gray-900"
                    >
                      Stock
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-gray-500">{product.name}</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <div className="mb-2 text-gray-500 uppercase tracking-wide text-sm">
                ORION
              </div>
              <h1 className="text-3xl font-bold text-black mb-6">MAX HVN</h1>

              <div className="grid grid-cols-2 gap-8 mb-6">
                <div>
                  <div className="text-gray-500 text-sm">Brightness</div>
                  <div className="font-bold">
                    {product.brightness || "25000 Lumens"}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Power</div>
                  <div className="font-bold">{product.power || "55 watts"}</div>
                </div>
              </div>

              <div className="text-3xl font-bold mb-6">
                ₱{product.price.toLocaleString()}.00
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/checkout" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-black text-white hover:bg-gray-800 rounded-full">
                    Check Out
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto bg-gray-200 text-black hover:bg-gray-300 border-0 rounded-full flex items-center gap-2"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={product.image || "/placeholder.svg?height=400&width=400"}
                alt={product.name}
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>

          <div className="mb-16">
            <Tabs defaultValue="images">
              <TabsList className="border-b w-full justify-start mb-6 bg-transparent p-0 h-auto">
                <TabsTrigger
                  value="images"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none pb-2 px-0 mr-6"
                >
                  Images
                </TabsTrigger>
                <TabsTrigger
                  value="technical"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none pb-2 px-0 mr-6"
                >
                  Technical Sheets
                </TabsTrigger>
                <TabsTrigger
                  value="details"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none pb-2 px-0"
                >
                  Details
                </TabsTrigger>
              </TabsList>

              <TabsContent value="images" className="mt-0">
                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <img
                      src={image[currentImageIndex] || "/placeholder.svg"}
                      alt={`${product.name} - Image ${currentImageIndex + 1}`}
                      width={600}
                      height={400}
                      className="object-contain"
                    />
                  </div>

                  <div className="flex items-center justify-center gap-4">
                    <span className="text-sm text-gray-500">
                      {currentImageIndex + 1} / {image.length}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevImage}
                      className="rounded-full h-8 w-8"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextImage}
                      className="rounded-full h-8 w-8"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="technical" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-6">
                    <div className="text-gray-500 text-sm mb-1">BRIGHTNESS</div>
                    <div className="font-bold text-lg">
                      {product.brightness || "25000 LUMENS"}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6">
                    <div className="text-gray-500 text-sm mb-1">POWER</div>
                    <div className="font-bold text-lg">
                      {product.power || "55 WATTS/BULB"}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6">
                    <div className="text-gray-500 text-sm mb-1">
                      COLOR TEMPERATURE
                    </div>
                    <div className="font-bold text-lg">
                      {product.colorTemperature || "PERFECT"}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6">
                    <div className="text-gray-500 text-sm mb-1">
                      WARRANTY PERIOD
                    </div>
                    <div className="font-bold text-lg">
                      {product.warranty || "4 YEARS"}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6">
                    <div className="text-gray-500 text-sm mb-1">
                      COOLING SYSTEM
                    </div>
                    <div className="font-bold text-lg">
                      {product.cooling || "FANLESS"}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6">
                    <div className="text-gray-500 text-sm mb-1">
                      THERMAL MANAGEMENT
                    </div>
                    <div className="font-bold text-lg">
                      {product.thermal || "HIGH PERFORMANCE THERMAL LINKS"}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6">
                    <div className="text-gray-500 text-sm mb-1">
                      CONSTRUCTION
                    </div>
                    <div className="font-bold text-lg">
                      {product.construction || "PREMIUM MATERIAL CONSTRUCTION"}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6">
                    <div className="text-gray-500 text-sm mb-1">
                      LIGHT PATTERN
                    </div>
                    <div className="font-bold text-lg">
                      {product.beamPattern || "BEST BEAM PATTERN"}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6">
                    <div className="text-gray-500 text-sm mb-1">LED TYPE</div>
                    <div className="font-bold text-lg">
                      {product.ledType || "BRIGHTEST EMITTING LED"}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="details" className="mt-0">
                <div className="prose max-w-none">
                  <h3>Product Details</h3>
                  <p>
                    The {product.name} represents the pinnacle of automotive
                    lighting technology. Designed for maximum visibility and
                    performance, these lights provide exceptional illumination
                    while maintaining energy efficiency.
                  </p>
                  <p>
                    With a {product.warranty || "4-year"} warranty and premium
                    construction, the {product.name} is built to last through
                    extreme conditions while providing consistent, reliable
                    performance.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
