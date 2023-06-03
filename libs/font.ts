export async function loadGoogleFont({
  family,
  weight,
  text,
}: {
  family: string;
  weight?: number;
  text?: string;
}) {
  const params = new URLSearchParams({
    family: `${family}${weight ? `:wght@${weight}` : ""}`,
  });
  if (text) {
    params.append("text", text);
  } else {
    params.append("subset", "latin");
  }

  const url = `https://fonts.googleapis.com/css2?${params.toString()}`;
  console.log(url);

  const css = await fetch(url).then((res) => res.text());

  const fontUrl = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  )?.[1];

  if (!fontUrl) {
    throw new Error("Font file not found in CSS fetched from Google Fonts");
  }

  return fetch(fontUrl).then((res) => res.arrayBuffer());
}

const GOOGLE_FONT_URL = "https://fonts.googleapis.com/css2";

export async function fetchFont(
  fontName: string,
  text: string
): Promise<ArrayBuffer> {
  const url = new URL(GOOGLE_FONT_URL);
  url.searchParams.set("family", fontName);
  url.searchParams.set("text", text);

  const cssRes = await fetch(url, {
    headers: {
      // ref: https://github.com/vercel/satori/blob/83d658542719c5cf0ea2354e782489f9e1e60a84/playground/pages/api/font.ts#L23C4-L25
      "User-Agent":
        "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
    },
  });
  if (!cssRes.ok) {
    throw new Error(`Failed to fetch font: ${cssRes.statusText}`);
  }
  const css = await cssRes.text();

  const resource = css.match(
    /src: url\((?<fontUrl>.+)\) format\('(?:opentype|truetype)'\)/u
  );

  const fontUrl = resource?.groups?.fontUrl;

  if (fontUrl == null) {
    throw new Error("Failed to parse font");
  }

  const fontRes = await fetch(fontUrl);
  if (!fontRes.ok) {
    throw new Error(`Failed to fetch font: ${fontRes.statusText}`);
  }

  return fontRes.arrayBuffer();
}
