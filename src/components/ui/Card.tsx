import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "glass" | "interactive";
  showCorners?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = "default",
  showCorners = false,
  className = "",
  ...props
}) => {
  const baseStyle = "relative overflow-hidden rounded border border-border-hairline bg-surface-card";
  
  const variants = {
    default: "p-6",
    glass: "glass-card p-6",
    interactive: "glass-card p-6 glass-card-hover cursor-default",
  };

  return (
    <div className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {/* Corner diagonal brackets for structural detail if requested */}
      {showCorners && (
        <>
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent-gold/40" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent-gold/40" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-accent-gold/40" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent-gold/40" />
        </>
      )}
      {children}
    </div>
  );
};
