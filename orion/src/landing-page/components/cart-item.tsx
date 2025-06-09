"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Trash2, Plus, Minus } from "lucide-react";
import type { CartItemType } from "@/lib/cart";
import { toast } from "sonner";

interface CartItemProps {
  item: CartItemType;
  onRemove: () => void;
  onUpdateQuantity: (quantity: number) => void;
}

export function CartItem({ item, onRemove, onUpdateQuantity }: CartItemProps) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number.parseInt(e.target.value);
    if (isNaN(newQuantity) || newQuantity < 1) return;
    setQuantity(newQuantity);
    onUpdateQuantity(newQuantity);
  };

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onUpdateQuantity(newQuantity);
  };

  const decrementQuantity = () => {
    if (quantity <= 1) return;
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
    onUpdateQuantity(newQuantity);
  };

  const handleRemove = () => {
    onRemove();
    toast.success("Item removed from cart", {
      description: `${item.name} has been removed from your cart.`,
    });
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-12 md:col-span-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 relative flex-shrink-0">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="object-cover rounded-md"
              />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{item.name}</h3>
              <p className="text-sm text-gray-500 mt-1">ORION</p>
            </div>
          </div>
        </div>

        <div className="col-span-4 md:col-span-2 text-left md:text-center">
          <div className="md:hidden text-xs text-gray-500 mb-1">Price</div>
          <div className="font-medium">₱{item.price.toLocaleString()}.00</div>
        </div>

        <div className="col-span-4 md:col-span-2 text-center">
          <div className="md:hidden text-xs text-gray-500 mb-1">Quantity</div>
          <div className="flex items-center justify-center">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={decrementQuantity}
              disabled={quantity <= 1}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <Input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="h-8 w-12 text-center mx-1 p-0"
            />
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={incrementQuantity}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        </div>

        <div className="col-span-3 md:col-span-2 text-right">
          <div className="md:hidden text-xs text-gray-500 mb-1">Total</div>
          <div className="font-medium">
            ₱{(item.price * item.quantity).toLocaleString()}.00
          </div>
        </div>

        <div className="col-span-1 text-right">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleRemove}
            className="text-gray-400 hover:text-red-500"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Separator />
    </>
  );
}
