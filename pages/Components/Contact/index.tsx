import React from "react";

const Contact = () => {
    return (
        <div
            className="h-screen flex justify-evenly items-center bg-[#f1f1f1] text-[#515151]"
            id="contact"
        >
            <div className="flex flex-col justify-between ">
                <h2 className="text-4xl font-bold mb-6">KONTAKT</h2>
                <h3 className="font-semibold mb-1.5">Adresa</h3>
                <p className="mb-2">Cetinjska 28, 36300 Novi Pazar</p>
                <h3 className="font-semibold mb-1.5">Email</h3>
                <p className="mb-2">office@hayatenergy.com</p>
                <h3 className="font-semibold mb-1.5">Telefon</h3>
                <p className="mb-2">+381 62 466 403</p>
                <br />
                <br />
                <h2 className="text-4xl font-bold mb-6">PRODAJA</h2>
                <h3 className="font-semibold mb-1.5">Email</h3>
                <p className="mb-2">dejan@hayatenergy.com</p>
                <h3 className="font-semibold mb-1.5">Telefon</h3>
                <p className="mb-2">+381 64 847 8017</p>
            </div>
            <section className="flex justify-center py-10 px-4">
                <form className="bg-[#f5f5f5] shadow-sm border border-gray-100 rounded-md p-6 w-full max-w-md space-y-4">
                    <input
                        type="text"
                        placeholder="Ime"
                        className="w-full border border-gray-300 rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#cfc487]"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border border-gray-300 rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#cfc487]"
                    />
                    <input
                        type="text"
                        placeholder="Naslov"
                        className="w-full border border-gray-300 rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#cfc487]"
                    />
                    <textarea
                        placeholder="Poruka"
                        rows={4}
                        className="w-full border border-gray-300 rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#cfc487]"
                    />
                    <button
                        type="submit"
                        className="bg-[#1e255a] text-white font-semibold rounded-md px-6 py-2 hover:bg-[#2c3578] transition"
                    >
                        POŠALJI
                    </button>
                </form>
            </section>
        </div>
    );
};

export default Contact;
