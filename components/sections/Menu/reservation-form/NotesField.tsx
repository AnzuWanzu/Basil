import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function NotesField() {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="reservation-notes" className="3xl:text-base">
        Special Requests
      </Label>
      <Textarea
        id="reservation-notes"
        name="notes"
        placeholder="Dietary restrictions, seating preference, celebration details..."
        rows={3}
        className="3xl:text-base"
      />
    </div>
  );
}
