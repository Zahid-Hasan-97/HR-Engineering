export interface NavItem {
    label: string;
    href: string;
}

export interface ServiceItem {
    title: string;
    description: string;
    icon: React.ElementType;
}

export interface GalleryItem {
    id: number;
    title: string;
    category: string;
    type: 'photo' | 'video';
    image: string;    // This MUST be a .jpg or .png thumbnail
    link?: string;    // ADD THIS: The actual Facebook video URL
}

export interface TestimonialItem {
    id: number;
    name: string;
    role: string;
    content: string;
}