import React from "react";
import clsx from "clsx";

// FormField wrapper with label
export const FormField: React.FC<{
  label: string;
  children: React.ReactNode;
  className?: string;
}> = ({ label, children, className = "" }) => (
  <div className={clsx("space-y-1", className)}>
    <label className="block text-sm font-medium text-gray-300">{label}</label>
    {children}
  </div>
);

// Styled input
export const FormInput: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & { className?: string }
> = ({ className = "", ...props }) => (
  <input
    className={clsx(
      "w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-700",
      "focus:outline-none focus:ring-2 focus:ring-green-500 transition",
      className
    )}
    {...props}
  />
);

// Styled select dropdown
export const FormSelect: React.FC<
  React.SelectHTMLAttributes<HTMLSelectElement> & { className?: string }
> = ({ className = "", children, ...props }) => (
  <select
    className={clsx(
      "w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-700",
      "focus:outline-none focus:ring-2 focus:ring-green-500 transition",
      className
    )}
    {...props}
  >
    {children}
  </select>
);

// Styled submit button
export const FormButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { fullWidth?: boolean }
> = ({ children, fullWidth = false, className = "", ...props }) => (
  <button
    className={clsx(
      "px-4 py-2 rounded text-white bg-green-600 hover:bg-green-700",
      "focus:ring-2 focus:ring-green-400 focus:outline-none transition",
      fullWidth && "w-full",
      className
    )}
    {...props}
  >
    {children}
  </button>
);
