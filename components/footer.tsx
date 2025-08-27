import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-lg">GSFS</span>
              </div>
              <div>
                <span className="font-heading font-black text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Global Strategic
                </span>
                <div className="text-sm text-muted-foreground font-medium">Financial Solutions</div>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Ultra-premium financial services platform offering sophisticated investment opportunities and business
              financing solutions for discerning clients worldwide.
            </p>
            <div className="text-sm text-muted-foreground">
              <p className="font-semibold mb-2">Regulatory Information:</p>
              <p>Delaware Statutory Trust • SEC Registered • FCA Authorized</p>
              <p>Services intended for Accredited & Sophisticated Investors</p>
            </div>
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link href="/wealth-management" className="hover:text-primary transition-colors">
                  Wealth Management
                </Link>
              </li>
              <li>
                <Link href="/wealth-management/private-placements" className="hover:text-primary transition-colors">
                  Private Placements
                </Link>
              </li>
              <li>
                <Link href="/wealth-management/lending-program" className="hover:text-primary transition-colors">
                  Securities Lending
                </Link>
              </li>
              <li>
                <Link href="/project-funding" className="hover:text-primary transition-colors">
                  Project Funding
                </Link>
              </li>
              <li>
                <Link href="/project-funding/collateralized-loans" className="hover:text-primary transition-colors">
                  Collateralized Loans
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link href="/testimonials" className="hover:text-primary transition-colors">
                  Client Stories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/apply" className="hover:text-primary transition-colors">
                  Applications
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Legal
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Global Strategic Financial Solutions. All rights reserved. Investment opportunities intended solely
            for Accredited Investors, Institutional, and Sophisticated Investors.
          </p>
        </div>
      </div>
    </footer>
  )
}
