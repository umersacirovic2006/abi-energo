import React from "react";

const Hero = () => {
    return (
        <div
            id="features"
            className='h-[65vh] flex flex-col bg-[url("/hero.webp")] bg-cover bg-no-repeat bg-right px-60 py-22'
        >
            <h2 className="text-4xl font-bold w-1/3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                sunt quas eveniet quae unde ab quia accusantium delectus sit
                itaque!
            </h2>
            <p className="text-lg w-1/3 mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                nostrum, quisquam, quae, quod quibusdam quidem quos quia
                quibusdam.
            </p>
        </div>
    );
};

export default Hero;
