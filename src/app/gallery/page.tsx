"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import Button from '../../components/ui/Button';
import SectionHeading from '../../components/ui/SectionHeading';
import { GalleryItem } from '../../../types';
import { FaFacebook } from 'react-icons/fa';

export default function GalleryPage() {
    const [selectedMedia, setSelectedMedia] = useState<GalleryItem | null>(null);

    // Your actual Facebook Links mapped to Gallery Items
    const galleryItems: GalleryItem[] = [
        // 24 REELS (VIDEOS)
        ...[
            'https://www.facebook.com/reel/1740393496570411',
            'https://www.facebook.com/reel/24216502597992810',
            'https://www.facebook.com/reel/1416999592908196',
            'https://www.facebook.com/reel/1110766514266560',
            'https://www.facebook.com/reel/1820390328874243',
            'https://www.facebook.com/reel/561370510300966',
            'https://www.facebook.com/reel/732231319631711',
            'https://www.facebook.com/reel/1069878715331740',
            'https://www.facebook.com/reel/1791865548075181',
            'https://www.facebook.com/reel/767876368963243',
            'https://www.facebook.com/reel/1119429636917415',
            'https://www.facebook.com/reel/4075634119416325',
            'https://www.facebook.com/reel/3778486065775533',
            'https://www.facebook.com/reel/1332744304929383',
            'https://www.facebook.com/reel/1151051940221562',
            'https://www.facebook.com/reel/2709546082711662',
            'https://www.facebook.com/reel/1303312674674271',
            'https://www.facebook.com/reel/1112514467257244',
            'https://www.facebook.com/reel/1203166671859748',
            'https://www.facebook.com/reel/1308709344084044',
            'https://www.facebook.com/reel/1150167106993719',
            'https://www.facebook.com/reel/2934983710041045',
            'https://www.facebook.com/reel/883663544524436',
            'https://www.facebook.com/reel/2094067561209760'
        ].map((link, index) => ({
            id: index + 1,
            title: `HVAC Service & Repair Work ${index + 1}`,
            category: 'Service Video',
            type: 'video' as const,
            image: '',
            link: link
        })),

        // 6 PHOTOS
        ...[
            'https://www.facebook.com/photo.php?fbid=122108136632940517&set=pb.61578215536016.-2207520000&type=3',
            'https://www.facebook.com/photo/?fbid=122113689590940517&set=pb.61578215536016.-2207520000',
            'https://www.facebook.com/photo/?fbid=122117386526940517&set=pb.61578215536016.-2207520000',
            'https://www.facebook.com/photo/?fbid=122117386574940517&set=pb.61578215536016.-2207520000',
            'https://www.facebook.com/photo/?fbid=122117386622940517&set=pb.61578215536016.-2207520000',
            'https://www.facebook.com/photo.php?fbid=122126692364940517&set=pb.61578215536016.-2207520000&type=3'
        ].map((link, index) => ({
            id: index + 25,
            title: `Recent Installation & Maintenance ${index + 1}`,
            category: 'Work Photo',
            type: 'photo' as const,
            image: '',
            link: link
        }))
    ];

    const closeModal = () => setSelectedMedia(null);

    return (
        <div className="pt-24 pb-16 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <SectionHeading title="Work & Video Portfolio" subtitle="Take a look at our recent field work, installations, and maintenance projects directly from our Facebook page updates." />

                {/* Facebook Link Banner */}
                <div className="bg-teal-50 border border-teal-100 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <FaFacebook className="text-teal-600 h-8 w-8" />
                        <div>
                            <h3 className="font-bold text-slate-900">Follow us on Facebook</h3>
                            <p className="text-slate-600 text-sm">We post regular updates, live work videos, and service tips.</p>
                        </div>
                    </div>
                    <a href="https://www.facebook.com/profile.php?id=61578215536016" target="_blank" rel="noreferrer">
                        <Button>Visit Facebook Page</Button>
                    </a>
                </div>

                {/* Grid Gallery - Using actual Facebook media as thumbnails */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {galleryItems.map((item) => (
                        <div
                            key={item.id}
                            className="relative rounded-xl overflow-hidden shadow-md h-80 border border-slate-200 bg-slate-100"
                        >
                            {/* Facebook Iframe directly embedded as the background thumbnail */}
                            <iframe
                                src={`https://www.facebook.com/plugins/${item.type === 'video' ? 'video' : 'post'}.php?href=${encodeURIComponent(item.link || '')}&show_text=false&width=350`}
                                className="absolute top-0 left-0 w-full h-full"
                                style={{ border: 'none', overflow: 'hidden' }}
                                scrolling="no"
                                loading="lazy"
                            ></iframe>

                            {/* INVISIBLE CLICK CATCHER: This overlay catches the click and triggers your Modal instead of playing inside the small box */}
                            <div
                                className="absolute inset-0 z-10 cursor-pointer hover:bg-black/10 transition-colors duration-300"
                                onClick={() => setSelectedMedia(item)}
                            ></div>

                            {/* Title overlay at the bottom */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none z-20">
                                <span className="bg-teal-600 text-white text-xs px-2 py-1 rounded inline-block mb-1">{item.category}</span>
                                <h3 className="text-white font-medium text-sm truncate drop-shadow">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* FULLSCREEN MODAL (Lightbox) */}
            {selectedMedia && selectedMedia.link && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 p-4 sm:p-8 backdrop-blur-sm">
                    {/* Close button */}
                    <button
                        onClick={closeModal}
                        className="absolute top-6 right-6 text-white/70 hover:text-white bg-slate-800 p-2 rounded-full transition-colors z-[110]"
                    >
                        <X className="h-6 w-6" />
                    </button>

                    {/* Modal Content - Embedding Facebook natively */}
                    <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col items-center justify-center">

                        <div className="w-full aspect-video md:w-[400px] md:aspect-[9/16] bg-black rounded-lg overflow-hidden shadow-2xl relative">
                            <iframe
                                src={`https://www.facebook.com/plugins/${selectedMedia.type === 'video' ? 'video' : 'post'}.php?href=${encodeURIComponent(selectedMedia.link)}&show_text=false&width=400`}
                                className="absolute top-0 left-0 w-full h-full bg-white"
                                style={{ border: 'none', overflow: 'hidden' }}
                                scrolling="no"
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            ></iframe>
                        </div>

                        <div className="mt-4 text-center">
                            <span className="bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                {selectedMedia.category}
                            </span>
                            <h3 className="text-white text-xl font-medium mt-3">{selectedMedia.title}</h3>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}