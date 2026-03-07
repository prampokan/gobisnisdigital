import Hero from "./section/hero";
import Templates from "./section/templates";
import Journey from "./section/journey";
import Pricing from "./section/pricing";

export default function Home() {
  return (
    <div className="flex justify-center w-full px-5">
      <div className="w-full max-w-7xl py-32 space-y-32">
        <Hero />
        <Journey />
        <Templates />
        <Pricing />
      </div>
    </div>
  );
}
