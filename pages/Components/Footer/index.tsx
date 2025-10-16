import Image from "next/image";
import React from "react";
import logoH from "@/public/logo.png";
import energo from "@/public/energo.png";
import ares from "@/public/ares.png";
import { Map, Mail, Phone } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#515151] text-white py-6 flex flex-col justify-center items-center">
            <div className="mb-4 flex items-center w-full px-40">
                <div className="flex flex-col w-1/3 justify-center items-center">
                    <Image src={logoH} alt="Logo" className="w-80 mb-4" />
                    <Image
                        src={energo}
                        alt="Logo"
                        width={240}
                        className="mb-4"
                    />
                    <Image src={ares} alt="Logo" width={120} />
                </div>
                <div className="flex flex-col h-fit w-1/3 justify-center">
                    <h3 className="font-semibold mb-8">Navigation</h3>
                    <a
                        href="#features"
                        className="hover:text-[#022577] transition-colors"
                    >
                        Početna
                    </a>
                    <a
                        href="#about"
                        className="hover:text-[#022577] transition-colors"
                    >
                        O Nama
                    </a>
                    <a
                        href="#additional-about"
                        className="hover:text-[#022577] transition-colors"
                    >
                        Usluge
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-[#022577] transition-colors"
                    >
                        Kontakt
                    </a>
                </div>
                <div className="flex flex-col h-fit w-1/3 justify-center">
                    <h3 className="font-semibold mb-8">Kontakt</h3>
                    <div className="flex gap-2"><Map /><p>Cetinjska 28, 36300 Novi Pazar</p></div>
                    <div className="flex gap-2"><Mail /><p>office@hayatenergy.com</p></div>
                    <div className="flex gap-2"><Phone /><p>+381 62 466 403</p></div>
                </div>
            </div>

            <p className="text-center">
                &copy; 2025 Energ. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
