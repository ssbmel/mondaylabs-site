"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { navItems, siteConfig } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
        <Container>
          <div className="flex h-16 items-center justify-between md:h-20">
            <Link
              href="/"
              className="font-mono text-sm font-semibold tracking-tight text-ink"
              onClick={() => setOpen(false)}
            >
              {siteConfig.shortName}
            </Link>

            <nav className="hidden items-center gap-8 md:flex" aria-label="주요 메뉴">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <Button href="/#contact" size="md">
                프로젝트 문의
              </Button>
            </div>

            <button type="button" onClick={() => setOpen(true)} className="text-ink md:hidden" aria-label="메뉴 열기">
              <MenuIcon />
            </button>
          </div>
        </Container>
      </header>

      {open ? (
        <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-paper md:hidden">
          <Container>
            <div className="flex h-16 items-center justify-between">
              <span className="font-mono text-sm font-semibold tracking-tight text-ink">{siteConfig.shortName}</span>
              <button type="button" onClick={() => setOpen(false)} className="text-ink" aria-label="메뉴 닫기">
                <CloseIcon />
              </button>
            </div>

            <nav className="mt-12 flex flex-col gap-8" aria-label="모바일 메뉴">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-medium tracking-tight text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-12">
              <Button href="/#contact" size="lg" onClick={() => setOpen(false)} className="w-full">
                프로젝트 문의하기
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </>
  );
}
