import React from "react";

import { Input, InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface InputBaseProps {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  inputClassName?: string;
}
const InputBase = ({
  icon,
  iconPosition,
  className,
  inputClassName,
  ...props
}: InputBaseProps & InputProps) => (
  <div
    className={cn(
      "relative text-gray-600 focus-within:text-gray-400",
      className
    )}
  >
    <span
      className={`absolute inset-y-0 ${
        iconPosition === "left" ? "left-0" : "right-2"
      } flex items-center pl-2`}
    >
      {icon || null}
    </span>
    <Input
      type="text"
      className={cn(
        `text-foreground ${icon && iconPosition === "left" ? "pl-8" : "pr-8"}`,
        inputClassName
      )}
      {...props}
    />
  </div>
);

export default InputBase;
