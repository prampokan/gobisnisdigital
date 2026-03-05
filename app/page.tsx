import Hero from "./section/hero";
import Templates from "./section/templates";

export default function Home() {
  return (
    <div className="flex justify-center w-full px-5">
      <div className="w-full max-w-6xl py-32 space-y-32">
        <Hero />
        <Templates />
      </div>
    </div>
  );
}
