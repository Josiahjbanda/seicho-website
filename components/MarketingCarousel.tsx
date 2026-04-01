"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const MARKETING_IMAGES = [
  "/images/marketing/483194892_17997447368754804_3269018247791580190_n.jpg",
  "/images/marketing/483755488_17975673071829938_6591457656890392628_n.jpg",
  "/images/marketing/619457495_17955120372058120_979209786747586376_n.webp",
  "/images/marketing/621575140_18101259631830266_7120795179058419581_n.webp",
  "/images/marketing/622425387_18093431248988785_3401754102962932253_n.webp",
  "/images/marketing/622809611_17971153106843912_318541326718630840_n.webp",
  "/images/marketing/622900445_18069250034443230_2210220876575416228_n.webp",
  "/images/marketing/623047354_18081248660261144_4785467359809352345_n.webp",
  "/images/marketing/624362595_18073590404528726_8480476662664960161_n.webp",
  "/images/marketing/624773396_18072520946531780_1643080366034452201_n.webp",
  "/images/marketing/625030213_17978854790806331_2766725484618904890_n.webp",
  "/images/marketing/625357339_18323710087222847_7289393816041308103_n.webp",
  "/images/marketing/626463186_18161776615408846_9056343080474205543_n.webp",
  "/images/marketing/653637764_18052883009651166_9086708023772937393_n.webp",
];

export function MarketingCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % MARKETING_IMAGES.length),
      2500
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-full w-full bg-black">
      {MARKETING_IMAGES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="SEICHO marketing and campaign creative"
          fill
          className={`object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

