import Hero from "./section/hero";

export default function Home() {
  return (
    <div className="flex justify-center w-full px-5">
      <div className="w-full max-w-3xl py-32">
        <Hero />
      </div>
    </div>
  );
}
