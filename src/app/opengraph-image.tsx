import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#fbfaf8",
          color: "#1a1917",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 4, textTransform: "uppercase", color: "#6b6862" }}>
          {site.jobTitle}
        </div>
        <div style={{ fontSize: 68, lineHeight: 1.1, maxWidth: 980 }}>
          I took a rental-operations SaaS from its first commit to a production marketplace.
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30 }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#b4441c" }} />
          {site.name} · cainglet.vercel.app
        </div>
      </div>
    ),
    size,
  );
}
