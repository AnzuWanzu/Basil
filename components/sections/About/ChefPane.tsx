import { PlaceholderBox } from "@/components/ui/placeholder-box";

export function ChefPane() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,320px)_1fr] gap-6 text-left items-stretch">
      {/* Chef Photo Placeholder */}
      <PlaceholderBox
        className="aspect-square rounded-2xl shadow-lg mx-auto md:mx-0"
        innerClassName="gap-2 p-4"
        icon={
          <svg className="w-10 h-10 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 12a4 4 0 100-8 4 4 0 000 8z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.5 20.25c0-4.142 3.358-6.75 7.5-6.75s7.5 2.608 7.5 6.75" />
          </svg>
        }
        label="Chef Photo Placeholder"
      />

      {/* Chef Bio */}
      <div className="flex flex-col gap-3 rounded-2xl bg-stone-900/5 p-6 md:p-8">
        <span className="inline-block w-fit px-3 py-1 text-xs font-medium tracking-wider text-[#3e4a3a] uppercase bg-[#3e4a3a]/10 rounded-full">
          Executive Chef
        </span>
        <h3 className="font-serif text-xl font-bold text-stone-900">Chef Name Placeholder</h3>
        <p className="font-sans text-sm sm:text-base text-stone-600 leading-relaxed">
          A short bio introducing the chef&apos;s background, culinary philosophy, and
          signature style goes here.
        </p>
      </div>
    </div>
  );
}
