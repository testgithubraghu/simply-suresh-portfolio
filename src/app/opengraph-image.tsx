import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = "Simply Suresh performing a restored-newspaper routine on stage in Bengaluru";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

/**
 * Branded Open Graph card: real performance frame + Ondo palette typography.
 * Generated at request time so shares always carry an authentic image.
 */
export default async function OpenGraphImage() {
  const photo = await readFile(path.join(process.cwd(), "public/images/youtube/paper-tear-magic.jpg"));
  const photoUrl = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#FFFFFF",
          fontFamily: "sans-serif",
          color: "#000000",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 560, padding: "56px 48px 48px 64px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "#EE7B39",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
              }}
            >
              <svg width={20} height={20} viewBox="0 0 24 24">
                <path
                  d="M12 1.5c.9 4.9 2.3 7.6 4.2 9.1 1.6 1.3 3.6 1.9 6.3 2.4-4.9.9-7.6 2.3-9.1 4.2-1.3 1.6-1.9 3.6-2.4 6.3-.9-4.9-2.3-7.6-4.2-9.1C5.2 13.1 3.2 12.5.5 12c4.9-.9 7.6-2.3 9.1-4.2C10.9 6.2 11.5 4.2 12 1.5Z"
                  fill="#FFFFFF"
                />
              </svg>
            </div>
            <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: 4 }}>SIMPLY SURESH</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: 5, color: "#EE7B39" }}>
              LIVE MAGIC &amp; ENTERTAINMENT
            </span>
            <span style={{ fontSize: 62, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1.5 }}>
              A little wonder.
              <br />
              <span style={{ color: "#EE7B39" }}>A lasting memory.</span>
            </span>
            <span style={{ fontSize: 19, color: "#626262", lineHeight: 1.5 }}>
              Magician &amp; entertainer · {site.region}
            </span>
          </div>

          <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: 3, color: "#626262" }}>{site.descriptor}</span>
        </div>

        <div style={{ position: "relative", width: 640, height: "100%", display: "flex" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photoUrl} alt="" width={640} height={630} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              padding: "18px 24px",
              background: "rgba(29,29,29,0.82)",
              color: "#FFFFFF",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Performance frame · the artist&apos;s YouTube channel
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
