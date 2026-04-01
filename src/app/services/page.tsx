import React from 'react';
import Link from 'next/link';
import { Snowflake, Wind, Settings, Zap, Wrench, ChevronRight } from 'lucide-react';
import SectionHeading from '../../components/ui/SectionHeading';
import { ServiceItem } from '../../../types';


export default function ServicesPage() {
    const services: ServiceItem[] = [
        { title: 'AC Service & Installation', description: 'Expert installation and routine servicing for all types of home and office air conditioning units. We handle split, window, and portable systems with precision.', icon: Snowflake },
        { title: 'VRF AC System Setup', description: 'Specialized installation, maintenance, and servicing for large-scale VRF (Variable Refrigerant Flow) cooling systems typically used in commercial high-rises.', icon: Wind },
        { title: 'Chiller & Industrial Service', description: 'Comprehensive chiller service and industrial AC maintenance. We ensure factory cooling systems operate at peak efficiency with minimal downtime.', icon: Settings },
        { title: 'Circuit & Leak Repair', description: 'Precise electrical circuit repair, thorough gas leak detection, and rapid fixes by seasoned professionals to restore your cooling fast.', icon: Zap },
        { title: 'Dryer Machine Service', description: 'Specialized maintenance and repair services for industrial and commercial dryer machines ensuring optimal performance.', icon: Wrench }
    ];

    return (
        <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <SectionHeading title="Our Comprehensive Services" subtitle="End-to-end heating, ventilation, and air conditioning solutions for residential, corporate, and industrial clients." />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
                                <div className="w-14 h-14 bg-teal-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                                    <Icon className="h-7 w-7 text-teal-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                                <Link href="/contact" className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700">
                                    Book this service <ChevronRight className="ml-1 h-4 w-4" />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
