import { Brain, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-6 w-6" />
              <span className="font-bold">KreativWIZ</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Innovating with AI, Blockchain, and Digital Marketing for a Smarter Tomorrow
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/services#ai" className="text-sm text-muted-foreground hover:text-primary">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#blockchain" className="text-sm text-muted-foreground hover:text-primary">
                  Blockchain Strategy
                </Link>
              </li>
              <li>
                <Link href="/services#marketing" className="text-sm text-muted-foreground hover:text-primary">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services#api" className="text-sm text-muted-foreground hover:text-primary">
                  API Integration
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-muted-foreground hover:text-primary">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="mt-4 flex space-x-4">
              <Link href="https://github.com/yahayakenny" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com/yahayakenny" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com/in/yahayakenny" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="mailto:contact@kreativwiz.com" className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} KreativWIZ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}