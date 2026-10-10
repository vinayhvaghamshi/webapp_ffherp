#!/usr/bin/env node
/*
  Serves a production build locally, the way the host will.

  Why not `python -m http.server` or `npx serve`: this build has to behave like
  the real host for the checks to mean anything. This server
    - answers byte-range requests with 206, so video scrubbing can be verified
      the way GitHub Pages and nginx serve it;
    - sends .mp4/.webm as real video types, not application/octet-stream;
    - falls back to index.html for unknown paths, because the app is a
      client-routed SPA (that is what /about needs).

  Usage:
    node scripts/serve-build.js --root ../build          --prefix /webapp_ffherp --port 3001
    node scripts/serve-build.js --root ../build-ffherp.in --prefix ""             --port 3002
*/
const http = require("http");
const fs = require("fs");
const path = require("path");

const arg = (name, fallback = "") => {
  const i = process.argv.indexOf(`--${name}`);
  return i > -1 && process.argv[i + 1] !== undefined ? process.argv[i + 1] : fallback;
};

// --root is taken relative to where you run it, so the same script serves
// "build" from inside frontend/ and "../build-ffherp.in" from the repo root.
const ROOT = path.resolve(process.cwd(), arg("root", "build"));
const PREFIX = arg("prefix", "").replace(/\/$/, ""); // "" serves from the root
const PORT = Number(arg("port", "3001"));
const HOST = arg("host", "0.0.0.0");

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".map": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".txt": "text/plain; charset=utf-8",
  ".csv": "text/plain; charset=utf-8",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".mov": "video/quicktime",
  ".m4v": "video/x-m4v",
  ".mp3": "audio/mpeg",
  ".pdf": "application/pdf",
};

const send = (res, code, text) => {
  res.writeHead(code, { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" });
  res.end(text);
};

http
  .createServer((req, res) => {
    let url = decodeURIComponent((req.url || "/").split("?")[0]);

    // strip the configured prefix, so the same script serves either shape
    if (PREFIX) {
      if (url === PREFIX) url = "/";
      else if (url.startsWith(PREFIX + "/")) url = url.slice(PREFIX.length);
      else if (!url.startsWith("/static/") && !/\.(png|jpg|jpeg|webp|svg|ico|woff2?|mp4|webm|mov|txt|json|js|css)$/i.test(url)) {
        // a route typed without the prefix still lands on the app
        url = "/";
      } else {
        return send(res, 404, "Not found");
      }
    }

    let file = path.join(ROOT, url);
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
    // client-routed SPA: anything unknown renders the app, exactly as the host must
    if (!fs.existsSync(file)) file = path.join(ROOT, "index.html");
    if (!fs.existsSync(file)) return send(res, 503, "No build found — run npm run build (or build:domain) first.");

    const type = TYPES[path.extname(file).toLowerCase()] || "application/octet-stream";
    const size = fs.statSync(file).size;
    const range = req.headers.range;

    if (range) {
      const m = /bytes=(\d*)-(\d*)/.exec(range) || [];
      const start = m[1] ? parseInt(m[1], 10) : 0;
      const end = m[2] ? parseInt(m[2], 10) : size - 1;
      if (start >= size || end >= size || start > end) {
        res.writeHead(416, { "Content-Range": `bytes */${size}` });
        return res.end();
      }
      res.writeHead(206, {
        "Content-Type": type,
        "Content-Range": `bytes ${start}-${end}/${size}`,
        "Accept-Ranges": "bytes",
        "Content-Length": end - start + 1,
        "Cache-Control": "no-store",
      });
      return fs.createReadStream(file, { start, end }).on("error", () => res.end()).pipe(res);
    }

    const stream = fs.createReadStream(file);
    stream.on("error", () => {
      if (!res.headersSent) send(res, 503, "The build is being rewritten — refresh in a moment.");
      else res.end();
    });
    res.writeHead(200, { "Content-Type": type, "Accept-Ranges": "bytes", "Content-Length": size, "Cache-Control": "no-store" });
    stream.pipe(res);
  })
  .listen(PORT, HOST, () => {
    console.log(`serving ${ROOT}`);
    console.log(`  at http://localhost:${PORT}${PREFIX || ""}/   (prefix: ${PREFIX || "none — root"})`);
  });
