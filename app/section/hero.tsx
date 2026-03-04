import Image from "next/image";
import { TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="w-full flex flex-col items-center text-center mt-10">
      <div className="flex items-center gap-x-4">
        {/* <div className="w-20 h-20">
          <Image
            src="/assets/images/logo2.png"
            alt="logo"
            width={200}
            height={200}
            className="w-full h-full onject-cover object-center"
          />
        </div> */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tighter text-accent-foreground">
          ⚡Digitalin Bisnismu!
        </h1>
      </div>
      <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-accent-foreground mt-5 sm:mt-12 max-w-md leading-relaxed">
        Landing Page Profesional untuk Bisnis yang Mau{" "}
        <span className="text-orange-400">Naik Kelas!</span>
      </h2>
    </div>
  );
}
