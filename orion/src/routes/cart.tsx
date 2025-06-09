import { createFileRoute } from "@tanstack/react-router";
import { CartPage } from "@/landing-page/features/cart-page";

export const Route = createFileRoute("/cart")({
  component: RouteComponent,
});

function RouteComponent() {
  return <CartPage />;
}
