// Lucide-style inline icons (stroke 2, round caps) + a branded photo placeholder.
// Self-contained so the kit needs no external icon dependency. These match the
// Lucide icon set 1:1 in style — see README → ICONOGRAPHY.
const I = (p) => React.createElement("svg", {
  viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: p.sw || 2, strokeLinecap: "round", strokeLinejoin: "round",
  width: p.size || 22, height: p.size || 22, style: p.style, "aria-hidden": true,
}, p.children);

const ArrowRight = (p) => <I {...p}><path d="M5 12h14M13 6l6 6-6 6"/></I>;
const ChevronRight = (p) => <I {...p}><path d="M9 6l6 6-6 6"/></I>;
const Check = (p) => <I {...p} sw={2.4}><path d="M5 12l5 5L20 7"/></I>;
const User = (p) => <I {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></I>;
const Users = (p) => <I {...p}><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.5 3-5.5 6.5-5.5s6.5 2 6.5 5.5"/><path d="M17 5.2a3.5 3.5 0 0 1 0 6.8"/><path d="M18.5 14.5c2.4.5 4 2.3 4 5"/></I>;
const Whistle = (p) => <I {...p}><path d="M3 11h9l4-3v8a5 5 0 1 1-10 0"/><circle cx="8" cy="16" r="2.5"/><path d="M16 5l3-2"/></I>;
const Target = (p) => <I {...p}><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.5"/></I>;
const Trophy = (p) => <I {...p}><path d="M7 4h10v5a5 5 0 0 1-10 0V4Z"/><path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3"/><path d="M10 16h4M9 20h6M12 16v4"/></I>;
const Video = (p) => <I {...p}><rect x="2.5" y="6" width="13" height="12" rx="2"/><path d="M15.5 10l6-3v10l-6-3"/></I>;
const Star = (p) => React.createElement("svg", {viewBox:"0 0 24 24", fill:"currentColor", width:p.size||18, height:p.size||18, style:p.style, "aria-hidden":true}, <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 18.6 6.1 21l1.2-6.5L2.5 9.4l6.6-.9L12 2.5Z"/>);
const Quote = (p) => React.createElement("svg", {viewBox:"0 0 24 24", fill:"currentColor", width:p.size||40, height:p.size||40, style:p.style, "aria-hidden":true}, <path d="M7 7C4.8 8.3 4 10.3 4 12.8V17h5v-5H6.6c0-1.6.5-2.7 1.7-3.4L7 7Zm9 0c-2.2 1.3-3 3.3-3 5.8V17h5v-5h-2.4c0-1.6.5-2.7 1.7-3.4L16 7Z"/>);
const MapPin = (p) => <I {...p}><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></I>;
const Mail = (p) => <I {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></I>;
const Phone = (p) => <I {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l-1 6a2 2 0 0 1-2 1.7A15 15 0 0 1 3.3 6 2 2 0 0 1 5 4Z"/></I>;
const Clock = (p) => <I {...p}><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2"/></I>;
const Menu = (p) => <I {...p}><path d="M3 6h18M3 12h18M3 18h18"/></I>;
const Instagram = (p) => <I {...p}><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/></I>;
const X = (p) => <I {...p}><path d="M6 6l12 12M18 6L6 18"/></I>;

/** Branded photo placeholder — dark panel with monogram watermark. */
function PhotoSlot({ label = "PHOTO", ratio = "4 / 5", radius = "var(--radius-lg)", style }) {
  return (
    <div style={{
      position: "relative", aspectRatio: ratio, width: "100%", borderRadius: radius,
      background: "linear-gradient(150deg, #141922 0%, #0A0E15 100%)", overflow: "hidden",
      display: "grid", placeItems: "center", ...style,
    }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.07, display: "grid", placeItems: "center" }}>
        <svg viewBox="0 0 94 82" width="58%" height="58%" fill="none">
          <polygon points="18,46 36,46 22,80 4,80" fill="#2E86F0"/>
          <polygon points="45,24 63,24 49,80 31,80" fill="#fff"/>
          <polygon points="72,2 90,2 76,80 58,80" fill="#FFC629"/>
        </svg>
      </div>
      <span style={{
        position: "relative", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em",
        color: "rgba(255,255,255,0.45)", textTransform: "uppercase",
      }}>{label}</span>
    </div>
  );
}

Object.assign(window, {
  WCIcons: { ArrowRight, ChevronRight, Check, User, Users, Whistle, Target, Trophy, Video, Star, Quote, MapPin, Mail, Phone, Clock, Menu, Instagram, X },
  PhotoSlot,
});
