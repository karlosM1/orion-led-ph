import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/landing-page/features/components/navigation-bar";
import { Footer } from "@/landing-page/features/components/footer";
import { ContactButton } from "@/landing-page/components/contact-button";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import { SearchSection } from "@/landing-page/features/components/search-section";
import { images } from "@/constants";

export const Route = createFileRoute("/landing/contact")({
  component: RouteComponent,
});
const contact = [
  {
    buttonLabel: "Contact Us",
    icon: <Phone />,
    href: "/landing/contact",
  },
  {
    buttonLabel: "Send an Email",
    icon: <Mail />,
    href: "/",
  },
  {
    buttonLabel: "Facebook",
    icon: <Facebook />,
    href: "/landing/about",
  },
  {
    buttonLabel: "Instagram",
    icon: <Instagram />,
    href: "/landing/about",
  },
];

function RouteComponent() {
  return (
    <>
      <Header />
      <section className="container mx-auto px-4 py-8 md:py-16">
        <h3 className="text-xl md:text-2xl font-bold mb-10 md:mb-10">
          Contact
        </h3>
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          <div className="flex flex-col gap-4 w-full">
            {contact.map((btn) => (
              <ContactButton
                key={btn.buttonLabel}
                buttonLabel={btn.buttonLabel}
                icon={btn.icon}
                href={btn.href}
                className="w-full h-12"
              />
            ))}
          </div>
          <div>
            <img
              src={images.car2}
              alt="Sports Car"
              className="w-full h-auto max-w-none scale-125 lg:scale-120 lg:translate-x-72"
              style={{ minHeight: "300px", minWidth: "300px" }}
            />
          </div>
        </div>
      </section>
      <SearchSection />
      <Footer />
    </>
  );
}
