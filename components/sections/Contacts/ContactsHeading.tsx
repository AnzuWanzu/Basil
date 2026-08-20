import { LOCATION_CITY } from "@/data/contacts";

export function ContactsHeading() {
  return (
    <h2 className="flex flex-col font-serif font-normal text-background tracking-tight leading-none">
      <span className="text-[21px] sm:text-[27px] 3xl:text-[33px]">Find Us In</span>
      <span className="-mt-1 text-[33px] sm:text-[45px] 3xl:text-[57px] font-bold italic text-[#FFFFC0]">{LOCATION_CITY}.</span>
    </h2>
  );
}
