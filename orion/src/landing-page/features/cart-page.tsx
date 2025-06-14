import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate } from "@tanstack/react-router";
import { CartItem } from "../components/cart-item";
import { useCart, useCartTotals } from "@/lib/cart";
import { ShoppingBag, ArrowRight, ChevronLeft } from "lucide-react";
import { Header } from "./components/navigation-bar";
import { Footer } from "./components/footer";
import { useAuth } from "@/lib/auth";

export function CartPage() {
  const { removeItem, updateQuantity, clearCart } = useCart();
  const { items, totalItems, totalPrice } = useCartTotals();

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate({
        to: "/auth/signin",
        search: { redirect: "/cart" },
      });
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

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
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-gray-500">Cart</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          <h1 className="text-3xl font-bold text-black mb-8">Your Cart</h1>

          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="mx-auto h-16 w-16 text-gray-300 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Your cart is empty
              </h2>
              <p className="text-gray-500 mb-8">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Link to="/stock">
                <Button className="bg-black text-white hover:bg-gray-800">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-500 mb-4 md:grid">
                      <div className="col-span-6">Product</div>
                      <div className="col-span-2 text-center">Price</div>
                      <div className="col-span-2 text-center">Quantity</div>
                      <div className="col-span-2 text-right">Total</div>
                    </div>

                    <div className="space-y-4">
                      {items.map((item) => (
                        <CartItem
                          key={item.id}
                          item={item}
                          onRemove={() => removeItem(item.id)}
                          onUpdateQuantity={(quantity) =>
                            updateQuantity(item.id, quantity)
                          }
                        />
                      ))}
                    </div>

                    <div className="flex justify-between items-center mt-8">
                      <Button
                        variant="outline"
                        onClick={clearCart}
                        className="text-gray-600"
                      >
                        Clear Cart
                      </Button>
                      <Link to="/stock">
                        <Button
                          variant="outline"
                          className="flex items-center gap-2"
                        >
                          <ChevronLeft className="h-4 w-4" />
                          Continue Shopping
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-black mb-4">
                      Order Summary
                    </h2>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Subtotal ({totalItems} items)
                        </span>
                        <span className="font-medium">
                          ₱{totalPrice.toLocaleString()}.00
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shipping</span>
                        <span className="font-medium">
                          Calculated at checkout
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tax</span>
                        <span className="font-medium">
                          Calculated at checkout
                        </span>
                      </div>
                      <Separator />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>₱{totalPrice.toLocaleString()}.00</span>
                      </div>
                    </div>

                    <Link to="/checkout" className="block mt-6">
                      <Button className="w-full bg-black text-white hover:bg-gray-800 flex items-center justify-center gap-2">
                        Proceed to Checkout
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
