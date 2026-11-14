import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** Shared branded Open Graph card. */
export function ogImage(eyebrow: string, title: string) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "linear-gradient(135deg,#040e45 0%,#0b1851 55%,#2a3aba 100%)", color: "white", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 34, fontWeight: 700 }}>
          <div style={{ width: 44, height: 44, borderRadius: 10, background: "#90ceff" }} />
          AcadoAI
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, letterSpacing: 4, textTransform: "uppercase", color: "#90ceff" }}>{eyebrow}</div>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, marginTop: 20, maxWidth: 1000 }}>{title}</div>
        </div>
        <div style={{ fontSize: 26, color: "rgba(255,255,255,0.7)" }}>acadoai.com</div>
      </div>
    ),
    ogSize,
  );
}
