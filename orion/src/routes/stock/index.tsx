import { createFileRoute } from "@tanstack/react-router";
import { StockPage } from "@/landing-page/features/stock";

export const Route = createFileRoute("/stock/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <StockPage />;
}
