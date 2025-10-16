import Image from "next/image";
import React from "react";

// It was easier to name it same as the placeholder image than making a new one :)
import elec from "@/public/electrician.jpg";

const About = () => {
    return (
        <div
            id="about"
            className="px-60 py-20 w-full h-screen flex gap-20 justify-center items-center text-[#515151]"
        >
            <div className="w-1/2">
                <Image src={elec} alt="elec" />
            </div>
            <div className="w-1/2">
                <h2 className="text-4xl font-bold mb-6">
                    Rešenja prilagođena zahtevima korisnika
                </h2>
                <p className="text-lg">
                    Snaga našeg portfolija omogućava nam da obezbedimo
                    prilagođena rešenja u elektroenergetici za klijente koji
                    posluju u različitim granama privrede.
                    <br />
                    <br />
                    Pružamo punu podršku
                    i ekspertizu prilikom nabavke materijala i opreme, što našim
                    klijentima pomaže da načine pravi izbor kada je u pitanju
                    odnos cene i kvaliteta.
                </p>
            </div>
        </div>
    );
};

export default About;
