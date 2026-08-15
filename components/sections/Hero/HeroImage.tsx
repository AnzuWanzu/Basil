import { PlaceholderBox } from "@/components/ui/placeholder-box";

export function HeroImage() {
  return (
    <div className="lg:col-span-5 relative">
      <PlaceholderBox
        className="aspect-[4/5] max-h-[65svh] rounded-2xl shadow-lg"
        innerClassName="p-6"
        icon={
          <svg className="w-12 h-12 mb-3 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        }
        label="Hero Image / Banner"
      />
    </div>
  );
}
