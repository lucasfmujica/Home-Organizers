export interface Testimonial {
    id: number;
    text: string;
    author: string;
}

export interface ContactInfo {
    email: string;
    phone: string;
}

export interface SiteContent {
    testimonials: Testimonial[];
    contactInfo: ContactInfo;
}
