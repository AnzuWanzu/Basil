"use client";

import { motion } from "motion/react";
import { ContactsWave } from "./ContactsWave";
import { ContactsHeading } from "./ContactsHeading";
import { LocationMap } from "./LocationMap";
import { ContactDetails } from "./ContactDetails";
import { CONTACTS_CARD_STAGGER_CONTAINER } from "@/animations/sections/contacts.variants";

export default function Contacts() {
  return (
    <div className="relative mx-[calc(50%-50vw)] w-screen">
      <ContactsWave />

      <div
        id="contact"
        className="scroll-mt-[var(--header-h)] bg-secondary pb-10 md:scroll-mt-[calc(var(--header-h)+8rem)] md:pb-16"
      >
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-5 pt-4 text-left md:-mt-20 md:px-8 md:pt-0">
          <ContactsHeading />

          <motion.div
            variants={CONTACTS_CARD_STAGGER_CONTAINER}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3, margin: "0px 0px -15% 0px" }}
            className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-6"
          >
            <LocationMap />
            <ContactDetails />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
