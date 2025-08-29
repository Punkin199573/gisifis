import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="relative h-12 w-12 flex-shrink-0">
                <Image
                  src="/gsfs-logo.png"
                  alt="Global Strategic Financial Solutions"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-heading font-black text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Global Strategic
                </span>
                <div className="text-sm text-muted-foreground font-medium">Financial Solutions</div>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Part of the Global Financial Consortium, providing sophisticated investment opportunities and business
              financing solutions for discerning clients across the UK and internationally.
            </p>
            <div className="text-sm text-muted-foreground space-y-2">
              <p className="font-semibold mb-2">Corporate Information:</p>
              <p>UK Financial Services Company • No: 12345678</p>
              <p>FCA Regulated Investment Company</p>
              <p>Services for HNWI, Sophisticated Investors & Institutions</p>
              <div className="mt-4 space-y-1">
                <p className="font-medium">Corporate Office:</p>
                <p>1 Canary Wharf, London E14 5AB</p>
                <p>Phone: +44 7700 144320</p>
                <p>Email: office@gsfs.co.uk</p>
              </div>
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
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Global Offices</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">United States</p>
                <p>Hamburg, New York</p>
                <p>+1 979 618 8876</p>
              </div>
              <div>
                <p className="font-medium text-foreground">United Kingdom</p>
                <p>London & Manchester</p>
                <p>+44 7700 144320</p>
              </div>
              <div>
                <p className="font-medium text-foreground">International</p>
                <p>Global Operations</p>
                <p>+44 7700 144320</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Banking Partner</p>
                <p>Barclays Bank PLC</p>
                <p>London, UK</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t mt-12 pt-8">
          <div className="grid gap-6 md:grid-cols-2 text-sm text-muted-foreground">
            <div>
              <p className="font-medium text-foreground mb-2">Legal & Compliance</p>
              <p>Legal Counsel: Clifford Chance LLP</p>
              <p>Solicitor: Senior Partner</p>
              <p>Anti-Money Laundering Compliance (UK MLR 2017)</p>
            </div>
            <div>
              <p className="font-medium text-foreground mb-2">Investment Disclaimer</p>
              <p>
                Investment opportunities intended solely for Accredited Investors, Institutional, and Sophisticated
                Investors. All investments carry risk of loss.
              </p>
            </div>
          </div>
          <div className="text-center mt-8 pt-6 border-t">
            <p className="text-sm text-muted-foreground">
              © 2025 Global Strategic Financial Solutions (GSFS). All rights reserved. Part of the Global Financial
              Consortium.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
