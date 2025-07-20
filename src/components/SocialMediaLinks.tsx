import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export interface SocialMediaLinksProps {
  orientation?: "horizontal" | "vertical";
}

const socialPlatforms = [
  { name: "facebook", Icon: FaFacebook, href: "https://facebook.com" },
  { name: "twitter", Icon: FaTwitter, href: "https://twitter.com" },
  { name: "instagram", Icon: FaInstagram, href: "https://instagram.com" },
  { name: "linkedin", Icon: FaLinkedin, href: "https://linkedin.com" },
];

export const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({
  orientation = "horizontal",
}) => {
  const layoutClass =
    orientation === "vertical" ? "flex-col space-y-4" : "flex-row space-x-4";

  return (
    <div className={`flex ${layoutClass}`}>
      {socialPlatforms.map(({ name, Icon, href }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name} //  Accessibility improvement
          className="text-gray-600 hover:text-blue-500 text-xl"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};
