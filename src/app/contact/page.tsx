"use client";

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Button from '../../components/ui/Button';

export default function ContactPage() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Service Request Sent! We will contact you shortly.");
    };

    return (
        <div className="pt-24 pb-16 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Need Fast & Reliable Service?</h2>
                        <p className="text-lg text-slate-600 mb-10">
                            Contact our expert field technicians today for AC installation, VRF maintenance, chiller repairs, or emergency service.
                        </p>

                        <div className="space-y-6 bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                                    <Phone className="h-5 w-5 text-teal-600" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-500 uppercase">Call Now</h4>
                                    <p className="text-lg font-bold text-slate-900">+880 1830-025952</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                                    <Mail className="h-5 w-5 text-teal-600" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-500 uppercase">Email Us</h4>
                                    <p className="text-lg font-bold text-slate-900">hrrw.rahad2018@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                                    <MapPin className="h-5 w-5 text-teal-600" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-500 uppercase">Visit Us</h4>
                                    <p className="text-lg font-bold text-slate-900">1086 Muktipolli Road, Khilbarir Tek<br />Vatara, Dhaka-1212</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">
                        <h3 className="text-2xl font-bold mb-6 text-slate-900">Book a Service</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                                    <input type="text" required className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition-shadow" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                                    <input type="tel" required className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition-shadow" placeholder="01XXX-XXXXXX" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Service Required</label>
                                <select className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition-shadow bg-white">
                                    <option>AC Servicing & Installation</option>
                                    <option>VRF System Setup</option>
                                    <option>Chiller Service</option>
                                    <option>Circuit / Leak Repair</option>
                                    <option>Dryer Machine Service</option>
                                    <option>Other / General Inquiry</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Address & Details</label>
                                <textarea rows={4} required className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition-shadow" placeholder="Your exact location in Dhaka and service details..."></textarea>
                            </div>
                            <Button type="submit" className="w-full shadow-md">Submit Request</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
