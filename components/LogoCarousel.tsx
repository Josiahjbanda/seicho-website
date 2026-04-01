"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const LOGO_IMAGES = [
  "/images/logos/464562358_18066532189723614_8178303611152259375_n.webp",
  "/images/logos/464820507_18067077709723614_5839465353225522232_n.webp",
  "/images/logos/464875672_18067078093723614_5724466319355510079_n.webp",
  "/images/logos/464892313_18067078006723614_6350108267925394377_n.webp",
  "/images/logos/464909249_18067078363723614_6039127029009156167_n.webp",
  "/images/logos/464913981_18067078417723614_6550198145372460755_n.webp",
  "/images/logos/464913983_18067078129723614_6090249735890847609_n.webp",
  "/images/logos/464967396_18067077793723614_2083091193338762186_n.webp",
  "/images/logos/465015455_18067077976723614_787405509737620662_n.webp",
  "/images/logos/465100370_18067077931723614_4043475598011051560_n.webp",
  "/images/logos/465196161_18067078222723614_7035171916813918397_n.webp",
  "/images/logos/465323916_18067078174723614_8606238553878561690_n.webp",
  "/images/logos/472943505_18074117911723614_4856386886108055524_n.jpg",
  "/images/logos/475517147_18075998146723614_9004796139459885742_n.jpg",
  "/images/logos/476309870_18076776763723614_2773642168011461371_n.jpg",
  "/images/logos/479528810_18077456674723614_7127697191766786128_n.jpg",
  "/images/logos/482329606_18078991432723614_5210374838306392220_n.jpg",
  "/images/logos/622715883_18019516475799834_5263672600545290452_n.webp",
];

export function LogoCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % LOGO_IMAGES.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-full w-full bg-black">
      {LOGO_IMAGES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="SEICHO logo design exploration"
          fill
          className={`object-contain transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

