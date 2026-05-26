import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-4 ${className}`}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return <div className="mb-3">{children}</div>;
}

export function CardContent({ children }) {
  return <div className="text-sm text-gray-700">{children}</div>;
}

export function CardFooter({ children }) {
  return <div className="mt-3">{children}</div>;
}
