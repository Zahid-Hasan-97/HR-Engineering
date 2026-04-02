"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    FaFacebook,
    FaLinkedin,
    FaWhatsapp,
    FaFacebookMessenger,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
    const phoneNumber = "8801830025952";
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    const messengerLink = "https://m.me/61578215536016";
    const facebookPage =
        "https://www.facebook.com/profile.php?id=61578215536016";

    return (
        <footer className="bg-brand-dark text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="/images/logo.png"
                                alt="HR Engineering Logo"
                                width={150}
                                height={60}
                                className="h-16 w-auto object-contain"
                                priority
                                unoptimized
                            />
                        </Link>

                        <p className="text-slate-400 text-sm leading-relaxed">
                            Trusted HVAC service provider in Dhaka since 2018. Delivering
                            professional installation and repair for residential and
                            industrial systems.
                        </p>

                        {/* Social Icons */}
                        <div className="flex flex-wrap gap-3 mt-6">
                            <a
                                href={facebookPage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 bg-slate-800 rounded-full hover:bg-brand-blue transition-colors text-white"
                            >
                                <FaFacebook size={20} />
                            </a>

                            <a
                                href={messengerLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 bg-slate-800 rounded-full hover:bg-[#0084FF] transition-colors text-white"
                            >
                                <FaFacebookMessenger size={20} />
                            </a>

                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 bg-slate-800 rounded-full hover:bg-[#25D366] transition-colors text-white"
                            >
                                <FaWhatsapp size={20} />
                            </a>

                            <a
                                href="#"
                                className="p-2.5 bg-slate-800 rounded-full hover:bg-brand-blue transition-colors text-white"
                            >
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-l-4 border-brand-red pl-3 uppercase tracking-wider">
                            Services
                        </h4>
                        <ul className="space-y-4 text-slate-400 text-sm font-semibold">
                            <li>
                                <Link href="/services" className="hover:text-brand-blue">
                                    AC Service & Installation
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-brand-blue">
                                    VRF System Setup
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-brand-blue">
                                    Chiller Maintenance
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-brand-blue">
                                    Circuit & Electrical Repair
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-l-4 border-brand-red pl-3 uppercase tracking-wider">
                            Company
                        </h4>
                        <ul className="space-y-4 text-slate-400 text-sm font-semibold">
                            <li>
                                <Link href="/about" className="hover:text-brand-blue">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="hover:text-brand-blue">
                                    Work Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-brand-blue">
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-brand-blue">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-l-4 border-brand-red pl-3 uppercase tracking-wider">
                            Contact Info
                        </h4>

                        <ul className="space-y-5 text-slate-400 text-sm font-medium">
                            <li className="flex items-start gap-3">
                                <div className="text-brand-red mt-0.5">
                                    <FaMapMarkerAlt size={18} />
                                </div>
                                <span>
                                    1086 Muktipolli Road, Khilbarir Tek
                                    <br />
                                    Vatara, Dhaka-1212
                                </span>
                            </li>

                            <li className="flex items-center gap-3 group">
                                <div className="text-brand-red">
                                    <FaPhoneAlt size={14} />
                                </div>
                                <a
                                    href="tel:+8801830025952"
                                    className="group-hover:text-white"
                                >
                                    +880 1830-025952
                                </a>
                            </li>

                            <li className="flex items-center gap-3 group">
                                <div className="text-[#25D366]">
                                    <FaWhatsapp size={18} />
                                </div>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold text-white hover:underline"
                                >
                                    WhatsApp Chat
                                </a>
                            </li>

                            <li className="flex items-center gap-3 group">
                                <div className="text-brand-red">
                                    <FaEnvelope size={14} />
                                </div>
                                <a
                                    href="mailto:hrrw.rahad2018@gmail.com"
                                    className="group-hover:text-white truncate"
                                >
                                    hrrw.rahad2018@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
                    <p>
                        © {new Date().getFullYear()} HR Engineering. All rights reserved.
                    </p>

                    <div className="mt-2 space-x-4 font-medium">
                        <Link href="#" className="hover:text-white">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-white">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}