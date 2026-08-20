import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ContactFields() {
  return (
    <>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="reservation-name" className="3xl:text-base">
          Full Name
        </Label>
        <Input
          id="reservation-name"
          name="name"
          placeholder="Juan Dela Cruz"
          required
          className="h-11 3xl:h-12 3xl:text-base"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="reservation-email" className="3xl:text-base">
            Email
          </Label>
          <Input
            id="reservation-email"
            name="email"
            type="email"
            placeholder="you@email.com"
            required
            className="h-11 3xl:h-12 3xl:text-base"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="reservation-phone" className="3xl:text-base">
            Phone
          </Label>
          <Input
            id="reservation-phone"
            name="phone"
            type="tel"
            placeholder="09XX XXX XXXX"
            className="h-11 3xl:h-12 3xl:text-base"
          />
        </div>
      </div>
    </>
  );
}
