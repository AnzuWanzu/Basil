import { HOURS } from "@/data/about";

export function HoursSchedule() {
  return (
    <div className="flex flex-col gap-3 text-left">
      <h3 className="font-serif text-lg font-bold text-stone-900">Hours</h3>
      <ul className="flex flex-col divide-y divide-stone-900/10 font-sans text-sm">
        {HOURS.map((h) => (
          <li key={h.days} className="flex items-baseline justify-between gap-4 py-2">
            <span className="font-medium text-stone-700">{h.days}</span>
            <span className="text-stone-600">{h.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
