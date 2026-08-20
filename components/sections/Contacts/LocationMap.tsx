import { ArrowUpRight } from "lucide-react";
import { ADDRESS_LINE1, ADDRESS_LINE2, MAPS_COORDS, MAPS_PLACE_URL } from "@/data/contacts";

export function LocationMap() {
  const embedSrc = `https://www.google.com/maps?q=${MAPS_COORDS.lat},${MAPS_COORDS.lng}&z=17&output=embed`;

  return (
    <div className="relative h-44 overflow-hidden rounded-2xl shadow-lg ring-1 ring-stone-900/10 sm:h-52 lg:h-auto lg:max-w-2xl lg:flex-1">
      <iframe
        src={embedSrc}
        title="Basil's location map"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full border-0"
      />

      <div className="absolute bottom-3 left-3 max-w-[15rem] rounded-xl bg-stone-900/90 p-3 text-background shadow-lg">
        <p className="font-sans text-xs font-semibold leading-snug">
          {ADDRESS_LINE1}
          <br />
          {ADDRESS_LINE2}
        </p>
        <a
          href={MAPS_PLACE_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-1.5 inline-flex items-center gap-1 font-sans text-[11px] font-medium tracking-wide text-background/70 uppercase transition hover:text-background"
        >
          Open in Maps
          <ArrowUpRight className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}
