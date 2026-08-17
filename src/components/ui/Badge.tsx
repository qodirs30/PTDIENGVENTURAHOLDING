import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "accent" | "outline";
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const baseStyle = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-display tracking-wider uppercase";
  
  const variants = {
    primary: "bg-forest-light text-off-white",
    secondary: "bg-surface-overlay text-text-muted border border-border-hairline",
    accent: "bg-accent-gold/10 text-accent-gold border border-accent-gold/20",
    outline: "border border-border-hairline text-text-muted bg-transparent",
  };

  return (
    <span className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
};
