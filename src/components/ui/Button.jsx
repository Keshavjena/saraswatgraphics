import { cn } from "@/lib/utils";

export function Button({
  className,
  variant = "primary",
  size = "md",
  as: Component = "button",
  children,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-background-secondary text-primary hover:bg-background-secondary/80",
    accent: "bg-accent text-white hover:bg-accent/90",
    outline: "border border-primary text-primary hover:bg-background-secondary/50",
    ghost: "hover:bg-background-secondary/50 text-foreground",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg rounded-2xl",
    icon: "h-11 w-11",
  };

  return (
    <Component
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
