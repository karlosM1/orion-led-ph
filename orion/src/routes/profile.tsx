import { createFileRoute } from "@tanstack/react-router";
import { ProfilePage } from "@/landing-page/features/profile/profile-page";
import { Header } from "@/landing-page/features/components/navigation-bar";
import { Footer } from "@/landing-page/features/components/footer";

export const Route = createFileRoute("/profile")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header />
      <ProfilePage />
      <Footer />
    </>
  );
}
