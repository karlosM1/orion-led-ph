import { createFileRoute } from "@tanstack/react-router";
import { SignUpPage } from "@/auth/signup-page";

export const Route = createFileRoute("/auth/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  return <SignUpPage />;
}
