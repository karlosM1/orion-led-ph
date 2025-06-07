import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/landing-page/features/about";

export const Route = createFileRoute("/landing/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return <About />;
}
