import Image from "next/image";
import React from "react";
import elec from "@/public/energointrans.jpg";

const Addition = () => {
    return (
        <div
            id="additional-about"
            className="px-60 py-20 w-full h-screen flex gap-20 justify-center items-center text-[#515151]"
        >
            <div className="w-1/2">
                <h2 className="text-4xl font-bold mb-6">
                    Energetski transformatori{" "}
                </h2>
                <p className="text-lg">
                    U ponudi su uljni energetski transformatori, kao i suvi
                    transformatori zaliveni smolom, napona do 38kV i nazivne
                    snage do 10.000kVA proizvođača ENERGOIN TRAFO. Svi
                    transformatori su dostupni u verziji sa aluminijumskim ili
                    bakarnim namotajima. Uljni transformatori mogu biti
                    hermetički zatvoreni ili sa konzervatorom.
                    <br />
                    <br />
                    ENERGOIN TRAFO ima proizvodne kapacitete u Izmitu u Turskoj
                    i u Visokom u Bosni i Hercegovini. Fabrika u Turskoj
                    poseduje akreditovanu laboratoriju.
                    <br />
                    <br />
                    Energetski transformatori ENERGOIN TRAFO u potpunosti
                    ispunjavaju važeće međunarodne standarde i propise.
                </p>
            </div>
            <div className="w-1/2">
                <Image src={elec} alt="elec" />
            </div>
        </div>
    );
};

export default Addition;
