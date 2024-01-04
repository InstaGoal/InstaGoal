import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: any) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "";
  const result = searchParams.get("result") ?? "";
  const playerEnter = searchParams.get("playerEnter") ?? "";
  const playerOut = searchParams.get("playerOut") ?? "";
  const player = searchParams.get("player") ?? "";
  const minute = searchParams.get("minute") ?? "";
  const backgroundPath = searchParams.get("backgroundPath") ?? "";

  const fontHeartResponse = await fetch(
    new URL("../../../../public/HEART__.ttf", import.meta.url)
  );
  const fontHeartData = await fontHeartResponse.arrayBuffer();

  const fontMontResponse = await fetch(
    new URL("../../../../public/MONT-BLACK__.ttf", import.meta.url)
  );

  const fontMontData = await fontMontResponse.arrayBuffer();

  const imageData = await fetch(backgroundPath).then((res) =>
    res.arrayBuffer()
  );

  const imageDataArray = Array.from(new Uint8Array(imageData));
  const imageDataString = imageDataArray
    .map((byte) => String.fromCharCode(byte))
    .join("");
  const base64ImageData = btoa(imageDataString);

  return new ImageResponse(
    (
      <div style={{ display: "flex" }}>
        <img src={`data:image/svg+xml;base64,${base64ImageData}`} />
        {title && (
          <div
            style={{
              position: "absolute",
              fontSize: 70,
              color: "#ececec",
              width: "100%",
              height: "100%",
              top: "705px",
              textAlign: "center",
              justifyContent: "center",
              fontFamily: '"Montserrat"',
            }}
          >
            {title}
          </div>
        )}

        {result && (
          <div
            style={{
              position: "absolute",
              fontSize: 120,
              color: "#00000",
              width: "100%",
              height: "100%",
              top: "1030px",
              left: "40px",
              textAlign: "center",
              justifyContent: "center",
              fontFamily: '"Montserrat"',
              letterSpacing: 80,
            }}
          >
            {result}
          </div>
        )}
        {player && (
          <div
            style={{
              position: "absolute",
              fontSize: 34,
              color: "white",
              width: "100%",
              height: "100%",
              top: "850px",
              textAlign: "center",
              justifyContent: "center",
              fontFamily: '"Montserrat"',
              letterSpacing: 2,
              fontWeight: 800,
            }}
          >
            {player}
          </div>
        )}

        {playerEnter && (
          <div
            style={{
              position: "absolute",
              fontSize: 55,
              color: "white",
              width: "100%",
              height: "100%",
              top: "670px",
              left: "10px",
              textAlign: "center",
              justifyContent: "center",
              fontFamily: '"Montserrat"',
              letterSpacing: 2,
              fontWeight: 800,
            }}
          >
            {playerEnter}
          </div>
        )}

        {playerOut && (
          <div
            style={{
              position: "absolute",
              fontSize: 55,
              color: "white",
              width: "100%",
              height: "100%",
              top: "910px", left: "10px",
              textAlign: "center",
              justifyContent: "center",
              fontFamily: '"Montserrat"',
              letterSpacing: 2,
              fontWeight: 800,
            }}
          >
            {playerOut}
          </div>
        )}

        {minute && (
          <div
            style={{
              position: "absolute",
              fontSize: 30,
              color: "00000",
              width: "100%",
              height: "100%",
              top: "805px",
              textAlign: "center",
              justifyContent: "center",
              fontFamily: '"Montserrat"',
              letterSpacing: 2,
              fontWeight: 800,
            }}
          >
            {minute}
          </div>
        )}
      </div>
    ),
    {
      width: 1080,
      height: 1920,
      fonts: [
        {
          name: "Heathergreen",
          data: fontHeartData,
          style: "normal",
        },
        {
          name: "Montserrat",
          data: fontMontData,
          style: "normal",
        },
      ],
    }
  );
}
