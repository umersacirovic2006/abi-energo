import Image from "next/image";

export default function Header() {
  return (
    <header className="p-10 w-full flex justify-between items-center">
        <Image src="/logo.png" alt="Logo" width={90} height={40} />
        <nav>
            <ul className="flex gap-10">
                <li><a href="#features" className="hover:">Features</a></li>
                <li><a href="#pricing" className="hover:">Pricing</a></li>
                <li><a href="#contact" className="hover:">Contact</a></li>
            </ul>
        </nav>
    </header>
  );
}