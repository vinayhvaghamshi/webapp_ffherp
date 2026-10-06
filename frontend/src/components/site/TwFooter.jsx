import React from "react";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { FOOTER_COLS } from "../../mock";
import { useGoTo } from "./crmStore";

// Tailwind-only footer for the framework layouts.
export default function TwFooter({ variant = "light" }) {
  const goTo = useGoTo();
  const glass = variant === "glass";

  return (
    <footer className={glass ? "bg-slate-950 text-slate-300" : "bg-slate-900 text-slate-300"} data-testid="tw-footer">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2.5 text-[17px] font-bold text-white">
              <img src="/ffh-logo.png" alt="FFH ERP" width="30" height="30" className="h-[30px] w-[30px] rounded-full" />
              <span>FFH<i className="not-italic font-medium text-indigo-400">|</i>ERP</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Nine connected modules for sales, marketing, finance, AMC, support and projects — on one database.
            </p>
            <form className="mt-6 flex max-w-xs gap-2" onSubmit={(e) => e.preventDefault()}>
              <input placeholder="Your email" className="w-full rounded-lg bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 ring-1 ring-white/10 outline-none focus:ring-2 focus:ring-indigo-500" />
              <button type="submit" aria-label="Subscribe" className="rounded-lg bg-indigo-600 px-3.5 py-2.5 text-white transition hover:bg-indigo-500"><ArrowRight className="h-4 w-4" /></button>
            </form>
          </div>

          {FOOTER_COLS.map((c) => (
            <div key={c.title}>
              <h6 className="text-xs font-semibold uppercase tracking-widest text-slate-500">{c.title}</h6>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <button type="button" onClick={() => goTo(l === "About" ? "/about" : "#modules")} className="bg-transparent text-sm text-slate-400 transition hover:text-white">
                      {l}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-7 text-sm text-slate-400">
          <a href="tel:+919284162015" className="flex items-center gap-2 hover:text-white"><Phone className="h-4 w-4" />+91 92841 62015</a>
          <a href="mailto:ffhsales@kriskrossinc.com" className="flex items-center gap-2 hover:text-white"><Mail className="h-4 w-4" />ffhsales@kriskrossinc.com</a>
          <span className="ml-auto text-xs text-slate-500">© 2025 FFH|ERP by KrisKross Inc.</span>
        </div>
      </div>
    </footer>
  );
}
