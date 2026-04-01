import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    children: React.ReactNode;
}

export default function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
    const baseStyle = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-300 cursor-pointer active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        // Primary is Brand Blue
        primary: "border-transparent text-white bg-brand-blue hover:bg-blue-800 shadow-sm",
        // Secondary is Brand Red (best for CTA)
        secondary: "border-transparent text-white bg-brand-red hover:bg-red-700 shadow-sm",
        // Outline uses Brand Blue
        outline: "border-brand-blue text-brand-blue bg-transparent hover:bg-blue-50 border-2"
    };

    return (
        <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
}