import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRightIcon, SpinnerIcon } from "./icons";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface SharedProps {
  variant?: Variant;
  size?: Size;
  showArrow?: boolean;
  loading?: boolean;
  className?: string;
  children: ReactNode;
}

interface ButtonAsLink extends SharedProps {
  href: string;
  onClick?: () => void;
}

interface ButtonAsButton extends SharedProps {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variantClass: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-accent",
  secondary: "border border-line-strong text-ink hover:border-ink",
  ghost: "text-ink hover:text-accent",
};

const sizeClass: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", showArrow = false, loading = false, className = "", children } = props;

  const classes = `group ${baseClass} ${variantClass[variant]} ${sizeClass[size]} ${className}`;

  const content = (
    <>
      {children}
      {loading ? (
        <SpinnerIcon className="size-4" />
      ) : showArrow ? (
        <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      ) : null}
    </>
  );

  if (typeof props.href === "string") {
    return (
      <Link href={props.href} onClick={props.onClick} className={classes}>
        {content}
      </Link>
    );
  }

  const { type = "button", onClick, disabled } = props;

  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} className={classes}>
      {content}
    </button>
  );
}
