/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';

// Inline SVG components to resolve "react-icons" dependency issues in the preview
const FaFacebook = ({ size = 20 }) => (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
);
const FaFacebookMessenger = ({ size = 20 }) => (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c-5.523 0-10 4.209-10 9.4 0 2.955 1.433 5.586 3.677 7.291l-.014 2.825 2.723-1.493c1.134.316 2.338.487 3.614.487 5.523 0 10-4.209 10-9.4s-4.477-9.4-10-9.4zm.941 12.59l-2.454-2.618-4.791 2.618 5.271-5.601 2.529 2.618 4.716-2.618-5.271 5.601z" /></svg>
);
const FaWhatsapp = ({ size = 20 }) => (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
);
const FaLinkedin = ({ size = 20 }) => (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.989v-10.131c0-7.88-8.922-7.593-11.02-3.711v-2.158z" /></svg>
);
const FaMapMarkerAlt = ({ size = 20, className = "" }) => (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24" className={className}><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
);
const FaPhoneAlt = ({ size = 20, className = "" }) => (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24" className={className}><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.509-8.958.077-.038 2.091-1.031 2.091-1.031l-3.535-6.848s-2.031 1.013-2.116 1.053c-4.5 2.25-2.325 14.42 2.062 18.774 4.395 4.357 16.592 6.649 20.846 2.154.086-.09 1.746-1.354 1.746-1.354z" /></svg>
);
const FaEnvelope = ({ size = 20, className = "" }) => (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24" className={className}><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099l3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" /></svg>
);

export default function Footer() {
    const phoneNumber = "8801830025952";
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    const messengerLink = "https://m.me/61578215536016";
    const facebookPage = "https://www.facebook.com/profile.php?id=61578215536016";

    return (
        <footer className="bg-brand-dark text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <a href="/" className="inline-block mb-6">
                            <img
                                src="/images/logo.png"
                                alt="HR Engineering Logo"
                                width={150}
                                height={60}
                                className="h-16 w-auto object-contain brightness-0 invert"
                            />
                        </a>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Trusted HVAC service provider in Dhaka since 2018. Delivering professional installation and repair for residential and industrial systems.
                        </p>

                        {/* Social Icons with Official Brand Colors */}
                        <div className="flex flex-wrap gap-3 mt-6">
                            <a href={facebookPage} target="_blank" rel="noreferrer" className="p-2.5 bg-slate-800 rounded-full hover:bg-brand-blue transition-colors text-white" title="Facebook">
                                <FaFacebook size={20} />
                            </a>
                            <a href={messengerLink} target="_blank" rel="noreferrer" className="p-2.5 bg-slate-800 rounded-full hover:bg-[#0084FF] transition-colors text-white" title="Messenger">
                                <FaFacebookMessenger size={20} />
                            </a>
                            <a href={whatsappLink} target="_blank" rel="noreferrer" className="p-2.5 bg-slate-800 rounded-full hover:bg-[#25D366] transition-colors text-white" title="WhatsApp">
                                <FaWhatsapp size={20} />
                            </a>
                            <a href="#" className="p-2.5 bg-slate-800 rounded-full hover:bg-brand-blue transition-colors text-white">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-l-4 border-brand-red pl-3 uppercase tracking-wider">Services</h4>
                        <ul className="space-y-4 text-slate-400 text-sm font-semibold">
                            <li><a href="/services" className="hover:text-brand-blue transition-colors">AC Service & Installation</a></li>
                            <li><a href="/services" className="hover:text-brand-blue transition-colors">VRF System Setup</a></li>
                            <li><a href="/services" className="hover:text-brand-blue transition-colors">Chiller Maintenance</a></li>
                            <li><a href="/services" className="hover:text-brand-blue transition-colors">Circuit & Electrical Repair</a></li>
                        </ul>
                    </div>

                    {/* Company Navigation */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-l-4 border-brand-red pl-3 uppercase tracking-wider">Company</h4>
                        <ul className="space-y-4 text-slate-400 text-sm font-semibold">
                            <li><a href="/about" className="hover:text-brand-blue transition-colors">About Us</a></li>
                            <li><a href="/gallery" className="hover:text-brand-blue transition-colors">Work Gallery</a></li>
                            <li><a href="/services" className="hover:text-brand-blue transition-colors">Our Services</a></li>
                            <li><a href="/contact" className="hover:text-brand-blue transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Info Section */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-l-4 border-brand-red pl-3 uppercase tracking-wider">Contact Info</h4>
                        <ul className="space-y-5 text-slate-400 text-sm">
                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt size={20} className="text-brand-red mt-0.5 shrink-0" />
                                <span>1086 Muktipolli Road, Khilbarir Tek<br />Vatara, Dhaka-1212</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <FaPhoneAlt size={16} className="text-brand-red shrink-0" />
                                <a href="tel:+8801830025952" className="group-hover:text-white transition-colors">+880 1830-025952</a>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <FaWhatsapp size={20} className="text-[#25D366] shrink-0" />
                                <a href={whatsappLink} target="_blank" rel="noreferrer" className="font-bold text-white hover:underline decoration-[#25D366]">WhatsApp Chat</a>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <FaEnvelope size={16} className="text-brand-red shrink-0" />
                                <a href="mailto:hrrw.rahad2018@gmail.com" className="group-hover:text-white transition-colors truncate">hrrw.rahad2018@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
                    <p>© {new Date().getFullYear()} HR Engineering. All rights reserved.</p>
                    <div className="mt-2 space-x-4 font-medium">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}