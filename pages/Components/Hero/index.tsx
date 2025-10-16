"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "/carousel2.jpg",
    "/carousel3.png",
    "/carousel4.png",
];

const Hero = () => {
    const [index, setIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const nextImage = () => setIndex((prev) => (prev + 1) % images.length);
    const prevImage = () =>
        setIndex((prev) => (prev - 1 + images.length) % images.length);

    const resetAutoSlide = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(nextImage, 5000);
    };

    useEffect(() => {
        resetAutoSlide();
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    const handleNext = () => {
        nextImage();
        resetAutoSlide();
    };

    const handlePrev = () => {
        prevImage();
        resetAutoSlide();
    };

    return (
        <div
            id="features"
            className='h-[70vh] flex flex-col bg-[url("/hero.jpg")] bg-cover bg-no-repeat bg-right px-60 py-22 text-[#fbfcff] justify-center'
        >
            <div className="bg-black/30 p-10 gap-10 rounded-lg flex">
                <div className="w-1/2">
                    <h2 className="text-4xl font-bold">
                        HAYAT ENERGY - Trgovačka kompanija iz oblasti
                        elektroenergetike
                    </h2>
                    <p className="text-lg mt-6">
                        Hayat Energy je trgovačka kompanija koja zastupa poznate
                        svetske proizvođače iz oblasti elektroenergetike.
                        Sedište firme je u Novom Pazaru gde posedujemo
                        odgovarajući magacinski prostor.
                    </p>
                    <p className="text-lg mt-6">
                        Naša misija je da kroz iskustvo, veštine i kreativnost
                        naših stručnjaka, kao osnovne pokretačke snage svakog
                        novog projekta i izazova, dođemo do novih vrednosti i
                        stalnih inovacija na polju tehnologije i novih proizvoda
                        koji pomeraju granice i otvaraju nove vidike.
                    </p>
                </div>

                <div className="relative mt-10 w-1/2 h-80 overflow-hidden rounded-2xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={images[index]}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.6 }}
                            className="absolute w-full h-full"
                        >
                            <Image
                                src={images[index]}
                                alt={`Slide ${index}`}
                                fill
                                className="object-cover rounded-2xl"
                                priority
                            />
                        </motion.div>
                    </AnimatePresence>

                    <button
                        onClick={handlePrev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
                        aria-label="Previous Slide"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
                        aria-label="Next Slide"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>

                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setIndex(i);
                                    resetAutoSlide();
                                }}
                                aria-label={`Go to slide ${i + 1}`}
                                className={`w-3 h-3 rounded-full transition ${
                                    i === index
                                        ? "bg-white scale-110"
                                        : "bg-gray-400"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
