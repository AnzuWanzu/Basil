"use client";

import { motion } from "motion/react";
import { LOCATION_CITY } from "@/data/contacts";
import { CONTACTS_HEADER_FADE_UP_ITEM, CONTACTS_HEADER_STAGGER_CONTAINER } from "@/animations/sections/contacts.variants";

export function ContactsHeading() {
  return (
    <motion.h2
      variants={CONTACTS_HEADER_STAGGER_CONTAINER}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5, margin: "0px 0px -15% 0px" }}
      className="flex flex-col font-serif font-normal text-background tracking-tight leading-none"
    >
      <motion.span variants={CONTACTS_HEADER_FADE_UP_ITEM} className="text-[21px] sm:text-[27px] 3xl:text-[33px]">
        Find Us In
      </motion.span>
      <motion.span
        variants={CONTACTS_HEADER_FADE_UP_ITEM}
        className="-mt-1 text-[33px] sm:text-[45px] 3xl:text-[57px] font-bold italic text-[#FFFFC0]"
      >
        {LOCATION_CITY}.
      </motion.span>
    </motion.h2>
  );
}
