import { createFileRoute } from "@tanstack/react-router";
import { SignInPage } from "@/auth/signin-page";

export const Route = createFileRoute("/auth/signin")({
  component: RouteComponent,
});

function RouteComponent() {
  return <SignInPage />;
}
