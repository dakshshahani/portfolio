import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Daksh Shahani",
    description: "Welcome to my portfolio!",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="h-full bg-background">
        <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full bg-background`}
        >
        <main className="min-h-screen bg-background">{children}</main>
        </body>
        </html>
    );
}