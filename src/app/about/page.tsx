import React from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import Button from '../../components/ui/Button';


export default function AboutPage() {
    return (
        <div className="pt-24 pb-16">
            <div className="bg-slate-900 text-white py-16 mb-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About HR Engineering</h1>
                    <p className="text-teal-400 text-lg">Your Trusted Service Provider in Dhaka</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-teal-100 rounded-3xl transform rotate-3 -z-10"></div>
                        <img
                            src="/images/low-angle-shot-metal-black-ceiling-with-white-ventilation-pipes.jpg"
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                            Building Trust Through Technical Excellence.
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            HR Engineering was established with a singular goal: to provide the most reliable, professional, and transparent HVAC solutions in Bangladesh. Whether its a simple home AC setup or a massive industrial chiller plant, we treat every project with the highest level of care.
                        </p>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Based in Vatara, Dhaka, our reach extends across the city. We pride ourselves on having field-tested technicians who can diagnose and fix complex circuit and leak issues on the spot.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {['Experienced & Certified Technicians', 'Reliable Service & Fast Response', 'Industrial & Residential Coverage', 'Affordable & Transparent Pricing'].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-teal-600 shrink-0" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href="/contact">
                            <Button variant="primary">Contact Our Team</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
