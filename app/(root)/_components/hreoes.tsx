import Image from "next/image";
import React from "react";

const Hreoes = () => {
  return (
    <div className="flex items-center">
      <div className="relative w-[300px] h-[300px] sm:w-[350px] md:w-[400px]">
        <Image
          src={"/hero-illo.webp"}
          alt="hero-image"
          className="object-contain"
          fill
        />
      </div>
    </div>
  );
};

export default Hreoes;
