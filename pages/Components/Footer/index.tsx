import Image from "next/image";
import React from "react";
import logoH from "@/public/logo.png";
import energo from "@/public/energo.png";
import ares from "@/public/ares.png";

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
                        Start
                    </a>
                    <a
                        href="#about"
                        className="hover:text-[#022577] transition-colors"
                    >
                        About us
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-[#022577] transition-colors"
                    >
                        Contact
                    </a>
                </div>
                <div className="flex flex-col h-fit w-1/3 justify-center">
                    <h3 className="font-semibold mb-8">Contact Us</h3>
                    <h4 className="">Phone</h4>
                    <p className="">+123 456 7890</p>
                    <h4 className="">Email</h4>
                    <p className="">asacirovic90@gmail.com</p>
                </div>
            </div>

            <p className="text-center">
                &copy; 2025 Energ. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
