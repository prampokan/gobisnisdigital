import TemplateCard from "@/components/template-card";

export default function Templates() {
  return (
    <div className="flex flex-col items-center gap-y-5">
      <h1 className="text-xl sm:text-4xl font-semibold tracking-tighter text-accent-foreground text-start sm:text-center">
        Pilih Template Sesuai Bisnismu!
      </h1>
      <p className="text-center max-w-2xl text-lg text-slate-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus
        fugiat est laudantium officiis doloremque, sunt inventore dolorum quo,
        cum ea ipsum architecto nulla nemo deleniti, animi dicta tempora
        veritatis!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-10">
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
      </div>
    </div>
  );
}
