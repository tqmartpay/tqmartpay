import Link from "next/link"

export function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center shadow-lg animate-pulse-glow">
                  <span className="text-primary-foreground font-bold text-sm">TM</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-bounce-gentle"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-foreground leading-tight">TAQUMART</span>
                <span className="text-sm text-muted-foreground font-medium">PRIVATE LIMITED</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted partner for digital payments, recharges, and bill payments. Making financial transactions
              simple and secure.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services/mobile-recharge" className="hover:text-primary transition-colors">
                  Mobile Recharge
                </Link>
              </li>
              <li>
                <Link href="/services/dth" className="hover:text-primary transition-colors">
                  DTH Recharge
                </Link>
              </li>
              <li>
                <Link href="/services/electricity" className="hover:text-primary transition-colors">
                  Electricity Bills
                </Link>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  All Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a href="#faqs" className="hover:text-primary transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                  Data Protection
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                  Security
                </Link>
              </li>
              <li>Noida, UP, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2025 TAQUMART PRIVATE LIMITED. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
