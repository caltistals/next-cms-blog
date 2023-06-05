import { convertDate } from "@/libs/convertDate";
import { fetchFont } from "@/libs/font";
import { getDetail } from "@/libs/microcms";
import { ImageResponse } from "next/server";

/** ImageResponse対応 */
export const runtime = "edge";
/** 有効期間 */
export const revalidate = 10;

/** 13.3.0現在ここを動的にはできない */
export const alt = "記事のアイキャッチ画像";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

type Params = {
  params: { postId: string };
};

export default async function og({ params }: Params) {
  const { title, createdAt } = await getDetail(params.postId);
  const name = "caltistals.dev";
  const mPlus1p = await fetchFont(
    "M PLUS Rounded 1c:wght@500",
    `${title ?? ""}${name}${convertDate(createdAt)}`
  );

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 70,
          backgroundImage: `url(${`data:image/svg+xml,${encodeURIComponent(
            '<svg id="visual" viewBox="0 0 1200 630" width="1200" height="630" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 45L109 58L218 45L327 45L436 58L545 64L655 102L764 45L873 83L982 102L1091 108L1200 70L1200 0L1091 0L982 0L873 0L764 0L655 0L545 0L436 0L327 0L218 0L109 0L0 0Z" fill="#00cc8e"></path><path d="M0 222L109 121L218 140L327 228L436 247L545 209L655 222L764 165L873 140L982 259L1091 253L1200 228L1200 68L1091 106L982 100L873 81L764 43L655 100L545 62L436 56L327 43L218 43L109 56L0 43Z" fill="#00b98a"></path><path d="M0 341L109 310L218 366L327 455L436 329L545 322L655 436L764 272L873 285L982 404L1091 436L1200 392L1200 226L1091 251L982 257L873 138L764 163L655 220L545 207L436 245L327 226L218 138L109 119L0 220Z" fill="#00a784"></path><path d="M0 436L109 354L218 455L327 499L436 366L545 379L655 505L764 373L873 360L982 486L1091 486L1200 436L1200 390L1091 434L982 402L873 283L764 270L655 434L545 320L436 327L327 453L218 364L109 308L0 339Z" fill="#00957c"></path><path d="M0 631L109 631L218 631L327 631L436 631L545 631L655 631L764 631L873 631L982 631L1091 631L1200 631L1200 434L1091 484L982 484L873 358L764 371L655 503L545 377L436 364L327 497L218 453L109 352L0 434Z" fill="#038373"></path></svg>'
          )}`})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          fontFamily: "M PLUS Rounded 1c",
          fontWeight: "bold",
        }}
      >
        <div
          style={{
            fontSize: 70,
            background: "white",
            width: "90%",
            height: "85%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            position: "relative",
          }}
        >
          <h2>{title}</h2>
          <div
            style={{
              display: "flex",
              position: "absolute",
              width: "100%",
              bottom: -30,
              paddingLeft: 30,
              paddingRight: 30,
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  fontSize: 40,
                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                {convertDate(createdAt)}
              </h2>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  fontSize: 40,
                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                🦆 caltistals.dev
              </h2>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      fonts: [
        {
          name: "M PLUS Rounded 1c",
          data: mPlus1p,
          style: "normal",
        },
      ],
    }
  );
}
