import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

interface ContactButtonProps {
  className?: string;
  icon: React.JSX.Element | string; // Accepts either a Lucide icon or an image URL
  buttonLabel: string;
  href: string;
}

export const ContactButton = ({
  className,
  icon,
  buttonLabel,
  href,
}: ContactButtonProps) => {
  return (
    <>
      <Button
        className={`flex items-center justify-start gap-4 rounded-xl bg-black text-white hover:bg-gray-800 transition-colors ${className}`}
      >
        {typeof icon === "string" ? (
          <img src={icon} alt="Contact Icon" className="h-5 w-5" />
        ) : (
          <span className="h-5 w-5">{icon}</span>
        )}
        <Link to={href}>{buttonLabel}</Link>
      </Button>
    </>
  );
};
