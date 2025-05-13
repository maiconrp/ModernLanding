import React from 'react';
import { cn } from "@/lib/utils";

interface CardGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  gold?: boolean;
}

const CardGlass = React.forwardRef<HTMLDivElement, CardGlassProps>(
  ({ children, className, gold = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          gold ? "glass-gold" : "glass",
          "rounded-xl shadow-lg",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardGlass.displayName = "CardGlass";

export { CardGlass };
