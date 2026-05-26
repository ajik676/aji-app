import React from "react";

export default function Button({
  children,
  variant = "default",
  onClick,
  className = "",
}) {
  const base =
    "px-4 py-2 rounded-lg text-sm font-medium inline-flex items-center gap-2";
  const variants = {
    default: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    outline: "bg-white border border-gray-200 text-gray-800 hover:bg-gray-50",
    subtle: "bg-gray-50 text-gray-700",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
    link: "bg-transparent text-blue-600 underline",
  };

  const cls = `${base} ${variants[variant] || variants.default} ${className}`;

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
