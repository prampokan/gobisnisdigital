import TemplateCard from "@/components/template-card";

export default function Templates() {
  return (
    <div className="mt-64">
      <h1 className="text-4xl font-semibold tracking-tighter text-accent-foreground text-center">
        Pilih Template Sesuai Bisnismu!
      </h1>
      <div className="grid grid-cols-2 gap-2 mt-10">
        <TemplateCard />
        <TemplateCard />
      </div>
    </div>
  );
}
