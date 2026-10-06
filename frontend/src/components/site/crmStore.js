import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

// Single navigation helper used by the header, footer, hero and about page.
// Accepts "#pricing" (a section on the home page) or "/about" (another route).
// Called from a non-home route, a section target routes home first and the
// landing page scrolls to it once mounted.
export const useGoTo = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (target) => {
    if (!target) return;
    if (!target.startsWith("#")) return void navigate(target);

    const id = target.slice(1);
    if (pathname !== "/") navigate("/", { state: { scrollTo: id } });
    else scrollToId(id);
  };
};
