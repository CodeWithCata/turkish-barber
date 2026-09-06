import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#111113",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        <p
          style={{
            color: "#D4AF37",
            fontSize: 24,
            letterSpacing: 8,
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Medgidia
        </p>
        <p
          style={{
            color: "#F4F4F6",
            fontSize: 76,
            fontWeight: "bold",
            margin: "12px 0 0 0",
            textAlign: "center",
          }}
        >
          Turkish Barber
        </p>
        <p
          style={{
            color: "#9E9EA8",
            fontSize: 32,
            marginTop: 24,
            textAlign: "center",
          }}
        >
          Tuns clasic, fade & bărbierit tradițional turcesc
        </p>
      </div>
    ),
    { ...size }
  );
}

