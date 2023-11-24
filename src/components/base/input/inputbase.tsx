"use client";

import React from "react";

import { Input, InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import useDialog from "@/store/UIProvider/dialog.store";
import { DialogViews } from "@/store/UIProvider/dialog.type";

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
}: InputBaseProps & InputProps) => {
  const { openDialog, setDialogView } = useDialog();

  const onClickOpen = () => {
    setDialogView(DialogViews.CAMERA_SCAN);
    openDialog();
  };
  return (
    <div
      className={cn(
        "relative text-white focus-within:text-black focus-within:border-tertiary focus-within:border-[1px]",
        className
      )}
    >
      <span
        onClick={() => onClickOpen()}
        className={`absolute text-black inset-y-0 ${
          iconPosition === "left" ? "left-0" : "right-2"
        } flex items-center pl-2 cursor-pointer`}
      >
        {icon || null}
      </span>
      <span
        className={`absolute inset-y-0 ${
          icon2Position === "left" ? "left-0" : "right-2"
        } flex items-center pl-2 `}
      >
        {icon2 || null}
      </span>
      <Input
        type="text"
        className={cn(
          `text-foreground text-white bg-[#3D3D3D] rounded-xl focus-within:border-tertiary focus-within:border-[1px]  ${
            icon2 && icon2Position === "left" ? "pl-8" : "pr-8"
          } ${icon && iconPosition === "left" ? "pl-8" : "pr-8"}`,
          inputClassName
        )}
        style={{
          boxShadow: "0px 0px 0px 0px rgba(255, 112, 0, 0.20)",
        }}
        {...props}
      />
    </div>
  );
};

export default InputBase;
