import React from "react";

import { Input, InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface InputBaseProps {
  icon?: React.ReactNode;
  icon2?: React.ReactNode;
  iconPosition?: "left" | "right";
  icon2Position?: "left" | "right";
  className?: string;
  inputClassName?: string;
}
const InputBase = ({
  icon,
  icon2,
  iconPosition,
  icon2Position,
  className,
  inputClassName,
  ...props
}: InputBaseProps & InputProps) => (
  <div className={cn("relative text-white focus-within:text-white", className)}>
    <span
      className={`absolute inset-y-0 ${
        iconPosition === "left" ? "left-0" : "right-2"
      } flex items-center pl-2 cursor-pointer`}
    >
      {icon || null}
    </span>
    <span
      className={`absolute inset-y-0 ${
        icon2Position === "left" ? "left-0" : "right-2"
      } flex items-center pl-2`}
    >
      {icon2 || null}
    </span>
    <Input
      type="text"
      className={cn(
        `text-foreground ${
          icon2 && icon2Position === "left" ? "pl-8" : "pr-8"
        } ${icon && iconPosition === "left" ? "pl-8" : "pr-8"}`,
        inputClassName
      )}
      {...props}
    />
  </div>
);

export default InputBase;
