import { ReactNode } from "react";
import MacCard from "./ui/mac-card";

type JourneyCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  header: string;
};

export default function JourneyCard({
  icon,
  title,
  header,
  description,
}: JourneyCardProps) {
  return (
    <MacCard header={header}>
      <div className="w-14 h-14 rounded-lg bg-background/20 flex justify-center items-center shadow-xs">
        {icon}
      </div>

      <div className="mt-4">
        <h1 className="capitalize text-xl font-medium tracking-tighter">
          {title}
        </h1>

        <p className="mt-2 text-slate-500 font-light leading-relaxed">
          {description}
        </p>
      </div>
    </MacCard>
  );
}
