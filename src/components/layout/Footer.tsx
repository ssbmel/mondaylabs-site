import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navItems, siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper">
      <Container className="py-16 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <p className="font-mono text-sm font-semibold tracking-tight text-ink">{siteConfig.name}</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">{siteConfig.description}</p>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-20">
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">Menu</p>
              <ul className="mt-4 flex flex-col gap-3">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-ink-soft transition-colors hover:text-ink">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">Contact</p>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-ink-soft">
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-ink">
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${siteConfig.phone}`} className="hover:text-ink">
                    {siteConfig.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-xs text-ink-faint md:flex-row md:items-center md:justify-between">
          <p>
            {siteConfig.name} · 사업자등록번호 {siteConfig.businessRegistrationNumber} · {siteConfig.address}
          </p>
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
