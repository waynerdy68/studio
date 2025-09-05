"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Simple, conflict-free Label component.
 * Extends the native <label> props so `children`, `className`, etc. all work.
 */
export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    />
  )
);
Label.displayName = "Label";

export { Label };

