import Image from "next/image";
import { siteConfig } from "@/data/site";

export function Logo() {
  return <Image src="/logo.png" alt={siteConfig.name} width={1536} height={1024} className="h-8 w-auto" priority />;
}

export function BrandLogo() {
  return (
    <div className="flex items-center">
      <Image src="/logo.png" alt={siteConfig.name} width={1536} height={1024} className="h-8 w-auto" priority />
      <div className="font-brand">
        <span className="text-xl font-bold tracking-wide text-ink">monday</span>
        <span className="text-xl tracking-wide text-gray-600">{siteConfig.shortName.replace("monday", "")}</span>
      </div>
    </div>
  );
}
