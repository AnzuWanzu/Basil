import { BrandSocial } from "./BrandSocial";
import { LegalLinks } from "./LegalLinks";
import { HoursSchedule } from "./HoursSchedule";

export default function Contacts() {
  return (
    <div className="flex w-full flex-col gap-10 text-left md:flex-row md:justify-between">
      <BrandSocial />

      {/* Legal & Hours */}
      <div className="grid grid-cols-1 gap-4 justify-start sm:grid-cols-[auto_auto] sm:gap-8">
        <LegalLinks />
        <HoursSchedule />
      </div>
    </div>
  );
}
