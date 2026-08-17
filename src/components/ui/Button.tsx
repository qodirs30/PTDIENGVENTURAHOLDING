import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-display font-medium rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-accent-gold text-primary hover:bg-accent-gold-hover shadow-lg shadow-accent-gold/10 hover:shadow-accent-gold/20",
    secondary: "bg-forest-light text-off-white hover:bg-forest-glow",
    outline: "border border-border-hairline hover:border-accent-gold/50 text-off-white hover:text-accent-gold bg-transparent",
    ghost: "text-text-muted hover:text-off-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs uppercase tracking-wider",
    md: "px-6 py-3 text-sm uppercase tracking-wider",
    lg: "px-8 py-4 text-base uppercase tracking-widest",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
