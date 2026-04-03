import { MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-foreground flex items-center justify-center">
                <span className="text-background font-bold text-sm font-mono">
                  D
                </span>
              </div>
              <span className="text-lg font-semibold tracking-tight">
                DeskCraft
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Handcrafted height-adjustable desks designed and manufactured in
              Bangladesh. Elevating workspaces since 2020.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <button
                onClick={() =>
                  document
                    .getElementById("products")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-left hover:text-foreground transition-colors"
              >
                Products
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-left hover:text-foreground transition-colors"
              >
                About
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-left hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm">Get in Touch</h4>
            <a
              href="https://wa.me/8801630411689?text=Hi!%20I'm%20interested%20in%20Height%20Adjustable%20Tables"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
            <p className="text-sm text-muted-foreground">
              support@deskcraft.in
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DeskCraft. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Made with precision ✦
          </p>
        </div>
      </div>
    </footer>
  );
};
