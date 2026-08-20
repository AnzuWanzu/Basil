const VIEWBOX = "0 0 1920 560";
const TOP_PATH =
  "M0,455C128,419.2,384,285.6,640,276C896,266.4,1024,407.2,1280,407C1536,406.8,1792,301.4,1920,275L1920,560L0,560Z";

export function ContactsWave() {
  return (
    <svg
      aria-hidden="true"
      viewBox={VIEWBOX}
      preserveAspectRatio="none"
      className="block h-8 w-full text-secondary sm:h-15 sm:-mt-4 md:-mt-48 md:h-100"
    >
      <path fill="currentColor" d={TOP_PATH} />
    </svg>
  );
}
