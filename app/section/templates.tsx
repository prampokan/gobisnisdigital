import TemplateCard from "@/components/template-card";

export default function Templates() {
  return (
    <div className="">
      <h1 className="text-xl sm:text-4xl font-semibold tracking-tighter text-accent-foreground text-start sm:text-center">
        Pilih Template Sesuai Bisnismu!
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-10">
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
      </div>
    </div>
  );
}
