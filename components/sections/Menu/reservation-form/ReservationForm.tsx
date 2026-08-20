"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CircleCheckIcon } from "@/components/animate-ui/icons/circle-check";
import { OccasionPicker, type Occasion } from "./OccasionPicker";
import { ContactFields } from "./ContactFields";
import { BookingFields } from "./BookingFields";
import { NotesField } from "./NotesField";

interface ReservationFormProps {
  onSuccess?: () => void;
}

export function ReservationForm({ onSuccess }: ReservationFormProps) {
  const [occasion, setOccasion] = useState<Occasion>("dining");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-8 text-center 3xl:gap-4 3xl:py-10">
        <CircleCheckIcon animate className="h-12 w-12 text-secondary 3xl:h-14 3xl:w-14" />
        <h3 className="font-serif text-xl font-bold text-stone-900 3xl:text-2xl">Reservation Requested!</h3>
        <p className="max-w-xs font-sans text-sm text-stone-600 3xl:max-w-sm 3xl:text-base">
          Thanks! We&apos;ll reach out shortly to confirm your table.
        </p>
        <Button type="button" variant="secondary" className="mt-2 3xl:text-base" onClick={onSuccess}>
          Done
        </Button>
      </div>
    );
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle className="font-serif text-2xl font-bold text-stone-900 3xl:text-3xl">
          Reserve a <span className="text-primary italic">Table</span>
        </DialogTitle>
        <DialogDescription className="3xl:text-base">
          Fill in the details below and we&apos;ll confirm your reservation shortly.
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 3xl:gap-6">
        <OccasionPicker value={occasion} onChange={setOccasion} />
        <ContactFields />
        <BookingFields />
        <NotesField />

        <Button type="submit" disabled={submitting} className="w-full justify-center text-base 3xl:h-12 3xl:text-lg">
          {submitting ? "Sending..." : "Reserve Table"}
        </Button>
      </form>
    </>
  );
}
