"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import { NavItem } from '../../../types';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const navItems: NavItem[] = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'Contact', href: '/contact' },
    ];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isDarkNav = !isScrolled && pathname === '/';

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${!isDarkNav ? 'bg-white shadow-md py-2' : 'bg-slate-900/95 py-4 backdrop-blur-sm'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section - Text removed as it is in the PNG */}
                    <Link href="/" className="flex-shrink-0 flex items-center hover:opacity-90 transition-opacity">
                        <img 
                            src="/images/logo.png"
                            alt="logo"
                            className="h-14"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`text-sm font-bold transition-colors hover:text-brand-red 
                                    ${isActive ? 'text-brand-red' : (!isDarkNav ? 'text-slate-600' : 'text-slate-200')}`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                        <Link href="/contact" className="ml-4">
                            <Button variant="secondary" className="py-2 px-5 text-sm font-bold">
                                Book Service
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`${!isDarkNav ? 'text-slate-900' : 'text-white'} hover:text-brand-red focus:outline-none`}
                        >
                            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-4 text-base font-bold hover:text-brand-red hover:bg-slate-50 border-b border-slate-100 
                                ${pathname === item.href ? 'text-brand-red bg-red-50' : 'text-slate-700'}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="pt-4 px-3">
                            <Link href="/contact" onClick={() => setIsOpen(false)}>
                                <Button variant="secondary" className="w-full">Book Service</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}