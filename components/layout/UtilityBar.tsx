import { Phone, Mail } from "lucide-react";
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  CONTACT_EMAIL,
} from "@/lib/constants";

export function UtilityBar() {
  return (
    <div className="border-b border-[var(--border)] bg-bg-secondary">
      <div className="container-narrow flex h-12 items-center justify-end gap-2 sm:gap-4">
        <a
          href={`tel:${CONTACT_PHONE_TEL}`}
          aria-label={`Call ${CONTACT_PHONE_DISPLAY}`}
          className="flex h-full items-center gap-2 px-2 text-caption text-text-secondary transition-colors hover:text-accent-cyan focus:text-accent-cyan rounded-sm"
        >
          <Phone size={14} aria-hidden="true" className="flex-shrink-0" />
          <span>{CONTACT_PHONE_DISPLAY}</span>
        </a>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          aria-label={`Email ${CONTACT_EMAIL}`}
          className="flex h-full items-center gap-2 px-2 text-caption text-text-secondary transition-colors hover:text-accent-cyan focus:text-accent-cyan rounded-sm"
        >
          <Mail size={14} aria-hidden="true" className="flex-shrink-0" />
          <span>{CONTACT_EMAIL}</span>
        </a>
      </div>
    </div>
  );
}
