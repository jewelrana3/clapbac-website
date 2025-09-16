// components/Footer.tsx
import Link from "next/link";
import Container from "./Container";

const footerLinks = [
  {
    title: "ABOUT",
    links: [
      { label: "About Clapbac", href: "/about-us" },
      { label: "FAQs", href: "/faq" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    title: "COMMUNITY",
    links: [
      { label: "Log In", href: "/login" },
      { label: "Sign Up", href: "/signup" },
      { label: "Help Center", href: "#" },
    ],
  },
  {
    title: "FOR BUSINESSES",
    links: [
      { label: "Advertise on Clapbac", href: "https://www.google.com" },
      { label: "Business Log In", href: "https://www.google.com" },
      { label: "Clapbac for Business", href: "https://www.google.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#181716] text-white py-10 px-6 md:px">
      <Container className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 text-sm font-lato">
          {/* Logo Section */}
          <Link href="/">
            {" "}
            <div>
              <h1 className="text-2xl font-bold">
                <span className="text-[#ff4d00]">CLAP</span>
                <span className="text-[#a0d911]">BAC</span>
              </h1>
            </div>
          </Link>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-orange-600 mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label} className="my-5 sm:my-9">
                    <Link className="link" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className=" mt-10 pt-6 text-xs flex flex-col md:flex-row justify-between ">
          <p className="condition">© 2025 Clapbac | All Rights Reserved.</p>
          <div className="space-x-4 mt-2 md:mt-0">
            <Link className="condition" href="/privacy-policy">
              Terms of Service
            </Link>
            <span>|</span>
            <Link className="condition" href="/privacy-policy">
              Privacy Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
