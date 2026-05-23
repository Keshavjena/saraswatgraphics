import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  containerClassName,
  children,
  dark = false,
  ...props
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        dark ? "bg-primary text-white" : "bg-transparent",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
