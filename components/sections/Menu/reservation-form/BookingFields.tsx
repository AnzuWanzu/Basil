import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function BookingFields() {
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="reservation-guests" className="3xl:text-base">
            Guests
          </Label>
          <Input
            id="reservation-guests"
            name="guests"
            type="number"
            min={1}
            max={20}
            defaultValue={2}
            required
            className="h-11 3xl:h-12 3xl:text-base"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="reservation-date" className="3xl:text-base">
            Date
          </Label>
          <Input id="reservation-date" name="date" type="date" required className="h-11 3xl:h-12 3xl:text-base" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="reservation-time" className="3xl:text-base">
            Time
          </Label>
          <Input
            id="reservation-time"
            name="time"
            type="time"
            min="09:00"
            max="18:00"
            required
            className="h-11 3xl:h-12 3xl:text-base"
          />
        </div>
      </div>
      <p className="font-sans text-xs text-stone-500 3xl:text-sm">
        Reservations are available Mon-Sat from 9:00 AM to 6:00 PM.
      </p>
    </div>
  );
}
