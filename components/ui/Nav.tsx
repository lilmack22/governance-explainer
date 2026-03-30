"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/cases", label: "Case Explorer" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 backdrop-blur-md bg-ink-950/80">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Globe
            size={18}
            className="text-gold opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <span className="font-serif text-sm font-semibold tracking-wide text-text-primary/90 group-hover:text-text-primary transition-colors">
            Governance Matters
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-xs font-medium tracking-wide uppercase text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-[17px] left-0 right-0 h-[1px] bg-gold"
                  />
                )}
              </Link>
            );
          })}

          <Link
            href="/cases/rwanda"
            className="ml-2 px-3 py-1.5 text-xs font-medium tracking-wide bg-gold/10 text-gold border border-gold/30 rounded hover:bg-gold/20 transition-all"
          >
            Explore Rwanda →
          </Link>
        </nav>
      </div>
    </header>
  );
}
