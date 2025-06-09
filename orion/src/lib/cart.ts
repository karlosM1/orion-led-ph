import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItemType {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItemType[];
  addItem: (item: Omit<CartItemType, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        const { items } = get();
        const existingItem = items.find((i) => i.id === item.id);

        if (existingItem) {
          set({
            items: items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        } else {
          set({ items: [...items, { ...item, quantity: 1 }] });
        }
      },

      removeItem: (id) => {
        const { items } = get();
        set({ items: items.filter((i) => i.id !== id) });
      },

      updateQuantity: (id, quantity) => {
        const { items } = get();
        if (quantity <= 0) {
          set({ items: items.filter((i) => i.id !== id) });
        } else {
          set({
            items: items.map((i) => (i.id === id ? { ...i, quantity } : i)),
          });
        }
      },

      clearCart: () => set({ items: [] }),

      getTotalItems: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        const { items } = get();
        return items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: "cart-storage",
    }
  )
);

export const useCartTotals = () => {
  const items = useCart((state) => state.items);
  const getTotalItems = useCart((state) => state.getTotalItems);
  const getTotalPrice = useCart((state) => state.getTotalPrice);

  return {
    items,
    totalItems: getTotalItems(),
    totalPrice: getTotalPrice(),
  };
};
