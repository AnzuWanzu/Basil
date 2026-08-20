import { ContactsWave } from "./ContactsWave";
import { ContactsHeading } from "./ContactsHeading";
import { LocationMap } from "./LocationMap";
import { ContactDetails } from "./ContactDetails";

export default function Contacts() {
  return (
    <div className="relative mx-[calc(50%-50vw)] w-screen">
      <ContactsWave />

      <div
        id="contact"
        className="scroll-mt-[var(--header-h)] bg-secondary pb-10 md:scroll-mt-[calc(var(--header-h)+8rem)] md:pb-16"
      >
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-5 pt-4 text-left md:-mt-20 md:px-8 md:pt-0">
          <ContactsHeading />

          <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-6">
            <LocationMap />
            <ContactDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
