import { PlaceholderBox } from "@/components/ui/placeholder-box";
import { HOURS } from "@/data/about";

export function LocationPane() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
      {/* Map Placeholder */}
      <PlaceholderBox
        className="aspect-[4/3] md:aspect-auto md:min-h-[320px] rounded-2xl shadow-lg"
        innerClassName="gap-2 p-4"
        icon={
          <svg className="w-10 h-10 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
        }
        label="Map Placeholder"
      />

      {/* Opening Hours */}
      <div className="flex flex-col gap-4 rounded-2xl bg-stone-900/5 p-6 md:p-8">
        <h3 className="font-serif text-xl font-bold text-stone-900">Opening Hours</h3>
        <div className="flex flex-col gap-3">
          {HOURS.map((h) => (
            <div
              key={h.days}
              className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-[#F4EFE6] px-4 py-3"
            >
              <span className="font-sans text-sm font-medium text-stone-700">{h.days}</span>
              <span className="flex items-center gap-1.5 font-sans text-sm text-stone-600">
                <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {h.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
