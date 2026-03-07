import { Button } from "@/components/ui/button";
import { Check, MousePointerClick } from "lucide-react";

type PricingCardProps = {
  badge: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText?: string;
};

export default function PricingCard({
  badge,
  title,
  price,
  description,
  features,
  buttonText = "Pilih Paket",
}: PricingCardProps) {
  return (
    <div className="shadow bg-background/30 rounded-3xl p-5 hover:outline hover:outline-sky-300 duration-300 outline outline-transparent">
      <Button variant="primary" className="rounded-full cursor-default">
        ⭐ {badge}
      </Button>

      <h1 className="font-medium tracking-tight mt-5">{title}</h1>

      <h1 className="mt-5 font-semibold text-4xl tracking-tighter border-b-4 border-dashed pb-5 text-slate-700">
        {price}
      </h1>

      <p className="text-slate-500 text-sm mt-5 leading-relaxed">
        {description}
      </p>

      <ul className="mt-3 space-y-3">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex gap-x-2 items-center text-sm text-slate-500"
          >
            <Check size={15} className="text-blue-500 shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <Button className="w-full mt-7 rounded-full">
        <MousePointerClick />
        {buttonText}
      </Button>
    </div>
  );
}
