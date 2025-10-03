import { Geist, Geist_Mono } from "next/font/google";
import Header from "./Components/Header";

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
        </div>
    );
}
