import Image from "next/image";

export default function TemplateCard() {
  return (
    <div className="group w-full max-w-md rounded-3xl overflow-hidden cursor-pointer p-2 bg-background/50">
      <div className="aspect-video w-full rounded-2xl overflow-hidden relative">
        <Image
          src="/assets/images/pulsa-dark.png"
          alt="template 1"
          fill
          className="object-cover object-top transition-all duration-500 group-hover:blur-sm group-hover:scale-110"
        />
        <div className="absolute inset-0 rounded-2xl bg-transparent backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
      </div>
    </div>
  );
}
