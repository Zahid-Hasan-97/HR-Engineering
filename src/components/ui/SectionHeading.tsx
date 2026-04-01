import React from 'react';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    light?: boolean;
}

export default function SectionHeading({ title, subtitle, light = false }: SectionHeadingProps) {
    return (
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
            <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${light ? 'text-white' : 'text-slate-900'}`}>
                {title}
            </h2>
            {subtitle && (
                <p className={`mt-4 text-lg ${light ? 'text-slate-300' : 'text-slate-600'}`}>
                    {subtitle}
                </p>
            )}
            <div className="mt-6 flex justify-center gap-1">
                <div className="w-16 h-1.5 rounded-full bg-brand-blue"></div>
                <div className="w-4 h-1.5 rounded-full bg-brand-red"></div>
            </div>
        </div>
    );
}