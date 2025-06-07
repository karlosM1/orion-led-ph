import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/landing-page/features/home";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Home />
    </div>
  );
}
