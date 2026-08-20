import Link from "next/link";
import { Menu as MenuIcon, X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS, type NavKey } from "@/data/nav-links";
import { Logo } from "./Logo";

interface MobileNavSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  activeLink: NavKey;
  isOverHero: boolean;
  onSelect: (key: NavKey) => void;
}

export function MobileNavSheet({ open, onOpenChange, activeLink, isOverHero, onSelect }: MobileNavSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <button
          className={`md:hidden z-20 p-2 focus:outline-none transition-colors duration-300 ${
            isOverHero ? "text-background" : "text-stone-800"
          }`}
          aria-label="Open menu"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-[82%] max-w-xs gap-0 rounded-l-3xl border-none bg-background p-0 shadow-2xl"
      >
        <SheetHeader className="flex-row items-center justify-between gap-0 space-y-0 px-5 py-4 border-b border-stone-900/10 shrink-0">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <SheetDescription className="sr-only">Site navigation links</SheetDescription>
          <span className="flex items-center gap-2">
            <Logo variant="light" />
          </span>
          <SheetClose asChild>
            <button aria-label="Close menu" className="p-2 -mr-2 text-stone-800">
              <X className="w-5 h-5" />
            </button>
          </SheetClose>
        </SheetHeader>

        <div className="flex flex-col divide-y divide-stone-900/10 overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                onSelect(link.key);
              }}
              className={`px-5 py-4 font-sans font-medium text-base transition-colors ${
                activeLink === link.key
                  ? "text-primary-hover bg-primary-hover/8"
                  : "text-stone-800 hover:bg-stone-900/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
