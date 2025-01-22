import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Home Organizers',
    description:
        'Professional home organization services tailored to your lifestyle and needs.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
