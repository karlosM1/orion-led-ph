import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { useCart } from "@/lib/cart";
import { ChevronLeft } from "lucide-react";
import { CheckoutForm } from "../components/checkout-form";
import { OrderSummary } from "../components/order-summary";
import { Header } from "./components/navigation-bar";
import { Footer } from "./components/footer";
import { toast } from "sonner";

export function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    clearCart();

    toast.success("Order placed successfully!", {
      description:
        "Your order has been confirmed and will be processed shortly.",
      duration: 5000,
    });

    setIsSubmitting(false);
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
                      to="/cart"
                      className="text-gray-700 hover:text-gray-900"
                    >
                      Cart
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-gray-500">Checkout</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          <h1 className="text-3xl font-bold text-black mb-8">Checkout</h1>

          {items.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Your cart is empty
              </h2>
              <p className="text-gray-500 mb-8">
                You need to add items to your cart before checking out.
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
                <form onSubmit={handleSubmit}>
                  <CheckoutForm />

                  <div className="mt-8 flex justify-between">
                    <Link to="/cart">
                      <Button
                        type="button"
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        Back to Cart
                      </Button>
                    </Link>

                    <Button
                      type="submit"
                      className="bg-black text-white hover:bg-gray-800"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Place Order"}
                    </Button>
                  </div>
                </form>
              </div>

              <div>
                <OrderSummary items={items} totalPrice={totalPrice} />
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
