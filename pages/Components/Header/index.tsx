import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-[url('/nav.png')] bg-cover bg-no-repeat h-fit w-full flex justify-between items-center">
            <div className="ml-60 flex px-20 py-5 w-fit h-full">
                <Image src="/logo.png" alt="Logo" width={260} height={120} />
            </div>

            <div className="pr-20 ">
                <nav className="hidden md:flex gap-10 text-[#515151]">
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
                </nav>

                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden p-2 rounded hover:text-[#51d4fe]-100"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>

                {open && (
                    <nav className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
                        <a
                            href="#features"
                            onClick={() => setOpen(false)}
                            className="hover:text-[#51d4fe]"
                        >
                            Start
                        </a>
                        <a
                            href="#about"
                            onClick={() => setOpen(false)}
                            className="hover:text-[#51d4fe]"
                        >
                            About us
                        </a>
                        <a
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className="hover:text-[#51d4fe]"
                        >
                            Contact
                        </a>
                    </nav>
                )}
            </div>
        </header>
    );
}
