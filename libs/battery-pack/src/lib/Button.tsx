import clsx from "clsx";
import React from "react";

export type ButtonProps = {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
};

export const Button = ({ variant, children, className }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "py-1 px-4 rounded-md border-2",
        variant === "primary" &&
          "bg-slate-700 text-white border-transparent active:bg-slate-800",
        variant === "secondary" &&
          "bg-gray-200 text-slate-700 border-slate-700 active:bg-gray-300",
        className,
      )}
    >
      {children}
    </button>
  );
};
