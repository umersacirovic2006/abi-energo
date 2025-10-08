import { Geist, Geist_Mono } from "next/font/google";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Contact from "./Components/Contact";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function Home() {
    return (
        <div
            className={`${geistSans.className} ${geistMono.className} font-sans`}
        >
            <Header />
            <Hero />
            <About />
            <Contact />
        </div>
    );
}
