"use client";

import { useEffect, useState } from "react";
import { MousePointerClick, AppWindowMac, Globe } from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    title: "order dan design kebutuhan",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: AppWindowMac,
    title: "development dan deployment",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: Globe,
    title: "website go live",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export default function Journey() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000); // ganti step tiap 3 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex flex-col items-center mb-10 space-y-5">
        <h1 className="text-xl sm:text-4xl font-semibold tracking-tighter text-accent-foreground text-start sm:text-center">
          Secepat Ini Bikin Website!
        </h1>

        <p className="text-center max-w-2xl text-lg text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus
          fugiat est laudantium officiis doloremque.
        </p>
      </div>
      {/* STEPPER BAR */}
      <div className="flex items-center mb-10">
        {steps.map((_, i) => (
          <div key={i} className="flex-1 flex items-center">
            {/* dot */}
            <div
              className={`w-4 h-4 rounded-full ${
                i <= activeStep ? "bg-sky-500" : "bg-slate-300"
              }`}
            />

            {/* line */}
            <div className="flex-1 h-[3px] bg-slate-200 mx-2 overflow-hidden">
              <div
                className={`h-full bg-sky-500 transition-all duration-700 ${
                  i <= activeStep ? "w-full" : "w-0"
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isActive = i === activeStep;

          return (
            <div
              key={i}
              className={`flex flex-col items-center group transition-all duration-500 ${
                isActive ? "opacity-100 scale-105" : "opacity-50"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex justify-center items-center border-2 border-dashed duration-300 ${
                  isActive ? "border-sky-500" : "border-sky-300"
                }`}
              >
                <h1 className="font-mono text-sky-500">{i + 1}</h1>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-x-2 mt-5">
                <div className="w-10 h-10 shadow rounded-xl flex justify-center items-center bg-background/30">
                  <Icon size={20} />
                </div>
                <h1 className="capitalize font-medium text-xl tracking-tighter text-center mt-4 lg:mt-0">
                  {step.title}
                </h1>
              </div>

              <p className="text-center mt-2 text-slate-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
