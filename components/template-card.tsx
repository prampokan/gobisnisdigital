import Image from "next/image";
import { Button } from "./ui/button";
import { Eye, MousePointerClick } from "lucide-react";

export default function TemplateCard() {
  return (
    <div className="group w-full rounded-3xl overflow-hidden p-1 shadow bg-background/50">
      <div className="aspect-video w-full rounded-2xl overflow-hidden relative h-auto relative">
        <Image
          src="/assets/images/pulsajaya.png"
          alt="template 1"
          width={500}
          height={500}
          className="w-full h-full object-cover object-top transition-all duration-500 group-hover:blur-sm group-hover:scale-110"
        />
        <div className="absolute inset-0 rounded-2xl bg-transparent backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-center space-y-2">
          {/* <h1 className="font-semibold text-lg tracking-tighter">
            Bisnis Templates
          </h1> */}
          <div className="flex gap-x-2">
            <Button className="rounded-full">
              <MousePointerClick />
              Pilih Template
            </Button>
            <Button className="rounded-full" variant="primary">
              <Eye />
              Lihat
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
