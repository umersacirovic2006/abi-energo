import Image from "next/image";
import React from "react";
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
                    About Us
                </h2>
                <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis nostrum, quisquam, quae, quod quibusdam quidem quos quia
                    quibusdam.
                </p>
            </div>
        </div>
    );
};

export default About;
