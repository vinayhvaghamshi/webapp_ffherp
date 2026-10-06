// Shared FFH|ERP webhook client.
//
// Contract is frozen by the spec in webapp_ffherp/data/apis_data.txt — do not
// rename, reorder or re-value the fixed fields (Customerid "14225", parentid
// "kk192", leadtype "30", the empty strings). Only the values marked below are
// supplied by the forms.
//
//   POST https://api.ffherp.co.in/api/Webhook/IncomingWebhookForProspect
//   content-type: application/json
//   success  -> the response body is exactly "SUCCESS"
//
// Two modules use it, told apart by `token`:
//   token "signup" -> company = the Company name typed in the signup form
//   token "chat"   -> company = the Department chosen in the chat form

export const FFH_WEBHOOK_URL = "https://api.ffherp.co.in/api/Webhook/IncomingWebhookForProspect";
export const FFH_SUCCESS = "SUCCESS";
export const FFH_TIMEOUT_MS = 15000;

/** The spec's own formatDate(): yyyy-mm-dd in local time. */
export function formatDate(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Builds the exact payload from the specification. Field order matches the
 * snippet so a captured request can be compared with it line by line.
 *
 * @param {object} v
 * @param {"signup"|"chat"} v.token   module flag
 * @param {string} [v.company]        signup: company name | chat: department
 * @param {string} [v.name]           contact name
 * @param {string} [v.mobile]         mobile number (chat sends "")
 * @param {string} [v.email]          email address
 * @param {string} [v.message]        ProductCode — the description message
 * @param {string} [v.interestedIn]   ProdServType
 */
export function buildProspectPayload({
  token,
  company = "",
  name = "",
  mobile = "",
  email = "",
  message = "",
  interestedIn = "",
} = {}) {
  return {
    leadid: "", // Any document no which client maintain for reference.
    leadtype: "30", // Any source value which is available in CRM
    prefix: "", // Contact title like Mr., Mrs etc
    company, // signup: Company name | chat: Department
    name, // form value
    mobile, // form value ("" for chat)
    phone: "",
    email, // form value
    date: formatDate(new Date()),
    ProductCode: message, // Description message
    area: "",
    city: "",
    brancharea: "",
    pincode: "",
    time: "",
    Customerid: "14225", // Do not change this ID.
    token, // Module name (signup/chat)
    ProdServType: interestedIn, // Available service type in CRM
    parentid: "kk192", // Do not change this ID.
  };
}

/**
 * POSTs a payload and reports whether the server answered "SUCCESS".
 * Never throws: network/CORS/timeout problems come back as { ok: false }.
 */
export async function sendProspect(payload) {
  const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
  const timer = controller ? setTimeout(() => controller.abort(), FFH_TIMEOUT_MS) : null;
  try {
    const res = await fetch(FFH_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      ...(controller ? { signal: controller.signal } : {}),
    });
    const body = (await res.text()).trim();
    return { ok: res.ok && body === FFH_SUCCESS, status: res.status, body };
  } catch (e) {
    return {
      ok: false,
      status: 0,
      body: "",
      error: e && e.name === "AbortError" ? "timeout" : String((e && e.message) || e),
    };
  } finally {
    if (timer) clearTimeout(timer);
  }
}
