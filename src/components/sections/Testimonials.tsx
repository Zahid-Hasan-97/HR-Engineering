import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Ahmed R.",
        role: "Corporate Office Manager",
        content: "HR Engineering installed a complete VRF system for our new office. Their field technicians were highly professional and completed the work right on schedule."
    },
    {
        id: 2,
        name: "Tariq H.",
        role: "Factory Owner",
        content: "We had a critical breakdown with our industrial chiller. HR Engineering responded incredibly fast and fixed the leak and circuit issues the very same day."
    },
    {
        id: 3,
        name: "Farhana M.",
        role: "Homeowner",
        content: "Very reliable and affordable AC servicing. The team was polite, identified the cooling issue quickly, and their regular maintenance keeps our ACs running perfectly."
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Trusted By Our Clients"
                    subtitle="See what our residential and corporate clients have to say about our service."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item) => (
                        <div key={item.id} className="relative p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                            <Quote className="text-brand-blue h-10 w-10 opacity-20 mb-4" />
                            <p className="text-slate-600 italic mb-6 leading-relaxed relative z-10">
                                &ldquo;{item.content}&ldquo;
                            </p>
                            <div>
                                <h4 className="font-bold text-slate-900">{item.name}</h4>
                                <p className="text-brand-blue text-sm font-medium">{item.role}</p>
                            </div>
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <div className="w-16 h-16 bg-brand-blue rounded-full"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}