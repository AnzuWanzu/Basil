import { AboutStory } from "./AboutStory";

export default function About() {
  return (
    <div className="flex flex-col items-center gap-4 text-center -mt-8 -mb-12 md:-mt-12 md:-mb-16">
      {/* Heading & Description */}
      <div className="flex flex-col items-center gap-4 max-w-2xl">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight leading-tight">
          Get familiar with <span className="font-bold italic text-secondary">Basil&apos;s.</span>
          <br />
          Something <span className="font-bold text-primary">new</span> in every bite.
        </h2>
        <p className="font-sans text-sm sm:text-base text-stone-600 leading-relaxed">
          Basil offers an elegant dining experience rooted in fresh, seasonal ingredients.
          Our menu, crafted by our team of chefs, blends traditional recipes with a modern,
          organic twist.
        </p>
      </div>

      <AboutStory />
    </div>
  );
}
