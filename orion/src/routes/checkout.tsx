import { createFileRoute } from "@tanstack/react-router";
import { CheckoutPage } from "@/landing-page/features/checkout-page";

export const Route = createFileRoute("/checkout")({
  component: RouteComponent,
});

function RouteComponent() {
  return <CheckoutPage />;
}
