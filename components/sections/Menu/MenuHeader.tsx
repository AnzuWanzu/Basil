"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { ClipboardCheckIcon } from "@/components/animate-ui/icons/clipboard-check";
import { ReservationForm } from "./reservation-form/ReservationForm";

export function MenuHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex flex-col gap-3 max-w-xl">
        <h2 className="font-serif font-normal text-stone-900 tracking-tight leading-tight">
          <span className="text-2xl sm:text-3xl 3xl:text-4xl">Indulge in our Exquisite</span>{" "}
          <span className="text-4xl sm:text-5xl 3xl:text-6xl font-bold italic text-secondary">Favorites</span>
        </h2>
        <p className="font-sans text-base sm:text-lg text-stone-600 leading-relaxed">
          Discover our chef's selection of tastes with our handpicked favorites that promise to
          delight your senses.
        </p>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <AnimateIcon animateOnHover>
          <DialogTrigger asChild>
            <Button className="shrink-0 gap-1.5 text-base">
              <ClipboardCheckIcon className="size-5" />
              Reserve a Table
            </Button>
          </DialogTrigger>
        </AnimateIcon>
        <DialogContent className="max-h-[85vh] overflow-y-auto p-5 sm:max-w-lg sm:p-8 3xl:max-w-xl 3xl:p-10 4xl:max-w-2xl 4xl:p-12">
          <ReservationForm onSuccess={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
