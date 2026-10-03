import React, { createContext, useContext, useEffect, useState } from "react";
import { CRM_SEED } from "../../mock";

const KEY = "ffh_live_crm_v1";
const CRMContext = createContext(null);

const load = () => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : CRM_SEED;
  } catch (e) {
    return CRM_SEED;
  }
};

export function CRMProvider({ children }) {
  const [crm, setCrm] = useState(load);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(crm));
  }, [crm]);

  const log = (msg) => setCrm((c) => ({ ...c, activity: [msg, ...c.activity].slice(0, 6) }));
  const update = (fn, msg) =>
    setCrm((c) => {
      const next = fn(c);
      return msg ? { ...next, activity: [msg, ...next.activity].slice(0, 6) } : next;
    });
  const reset = () => setCrm(CRM_SEED);

  return React.createElement(CRMContext.Provider, { value: { crm, update, log, reset } }, children);
}

export const useCRM = () => useContext(CRMContext);

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top: y, behavior: "smooth" });
};
