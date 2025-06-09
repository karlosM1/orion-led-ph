import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { CartItemType } from "@/lib/cart";

interface OrderSummaryProps {
  items: CartItemType[];
  totalPrice: number;
}

export function OrderSummary({ items, totalPrice }: OrderSummaryProps) {
  // Calculate shipping cost (free over $1000)
  const shippingCost = totalPrice > 1000 ? 0 : 50;

  // Calculate tax (8.5%)
  const taxRate = 0.085;
  const taxAmount = totalPrice * taxRate;

  // Calculate final total
  const finalTotal = totalPrice + shippingCost + taxAmount;
  console.log("Final Total:", finalTotal);

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-bold text-black mb-4">Order Summary</h2>

        <div className="space-y-4 mb-6">
          {items.map((item) => (
            <div key={item.id} className="flex gap-3">
              <div className="w-16 h-16 relative flex-shrink-0">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-medium text-gray-900 text-sm">
                    {item.name}
                  </h3>
                  <span className="font-medium text-sm">
                    ₱{(item.price * item.quantity).toLocaleString()}.00
                  </span>
                </div>
                <p className="text-gray-500 text-xs">Qty: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        <Separator className="my-4" />

        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">
              ₱{totalPrice.toLocaleString()}.00
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Shipping</span>
            <span className="font-medium">
              {shippingCost === 0
                ? "Free"
                : `₱${shippingCost.toLocaleString()}.00`}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Tax (8.5%)</span>
            <span className="font-medium">
              ₱
              {taxAmount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
          <Separator />
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>
              {finalTotal.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
