import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { OFFICES } from "../../mock";

// The three offices as cards — the same block in both footers, fed by the shared
// OFFICES list so the home page and the About page can never disagree.
// Rendered on the dark navy footer, so the cards are translucent rather than white.
export default function OfficeCards({ testid = "office" }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-testid={`${testid}-grid`}>
      {OFFICES.map((o, i) => (
        <div key={o.city} data-testid={`${testid}-${o.city.toLowerCase()}`}
          className="flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
          style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.10)" }}>
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-[12px] font-semibold text-white/25">{String(i + 1).padStart(2, "0")}</span>
            <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--brand)" }}>
              <span aria-hidden="true">{o.flag}</span>{o.label}
            </span>
          </div>

          <h6 className="mt-4 flex items-baseline gap-2 text-[19px] font-semibold tracking-[-0.01em] text-white">
            {o.city}<span className="text-[12px] font-medium text-white/45">{o.country}</span>
          </h6>

          <p className="mt-3 flex items-start gap-2 text-[13px] leading-relaxed text-white/60">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--brand)" }} />{o.address}
          </p>

          {o.phone ? (
            <a href={`tel:${o.tel}`} className="mt-3 inline-flex items-center gap-2 text-[13px] font-semibold text-white/85 transition hover:text-white">
              <Phone className="h-4 w-4 shrink-0" style={{ color: "var(--brand)" }} />{o.phone}
            </a>
          ) : null}
          {o.hours ? (
            <span className="mt-2 flex items-center gap-2 text-[12.5px] text-white/45">
              <Clock className="h-4 w-4 shrink-0" style={{ color: "var(--brand)" }} />{o.hours}
            </span>
          ) : null}

          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.maps)}`} target="_blank" rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[12.5px] font-semibold transition hover:underline" style={{ color: "var(--brand)" }}>
            Open in Maps <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      ))}
    </div>
  );
}
