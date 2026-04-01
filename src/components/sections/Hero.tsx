/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Image with Brand Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/close-up-heat-pump-outside-home.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-brand-blue/40"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                        <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
                        <span className="text-white text-xs font-bold uppercase tracking-widest">Est. Since 2018</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                        Expert <span className="text-brand-red underline decoration-4 underline-offset-8">HVAC</span> Solutions for Your Space
                    </h1>

                    <p className="text-xl text-blue-50 mb-10 leading-relaxed max-w-xl">
                        From industrial chillers to residential split systems, we provide Dhaka&lsquo;s most reliable installation and repair services.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/contact">
                            <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-lg font-bold shadow-lg shadow-brand-red/20">
                                Book Service Now
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button variant="outline" className="w-full sm:w-auto px-8 py-4 text-lg font-bold !text-white !border-white hover:!bg-white hover:!text-brand-blue">
                                Our Services
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-white rounded-full"></div>
                </div>
            </div>
        </section>
    );
}