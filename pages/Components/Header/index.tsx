import Image from "next/image";

export default function Header() {
  return (
    <header className="px-20 py-5 w-full flex justify-between items-center">
        <Image src="/logo.png" alt="Logo" width={130} height={60} />
        <nav>
            <ul className="flex gap-10">
                <li><a href="#features" className="hover:">Start</a></li>
                <li><a href="#about" className="hover:">About us</a></li>
                <li><a href="#contact" className="hover:">Contact</a></li>
            </ul>
        </nav>
    </header>
  );
}