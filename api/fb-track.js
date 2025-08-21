import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const PIXEL_ID = process.env.FB_PIXEL_ID;
  const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;

  const { event_name, email, url, event_id } = req.body;

  const response = await fetch(
    `https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: [
          {
            event_name: event_name || "PageView",
            event_time: Math.floor(Date.now() / 1000),
            action_source: "website",
            event_source_url: url || "https://koshercheto.com",
            user_data: {
              em: email
                ? [crypto.createHash("sha256").update(email).digest("hex")]
                : [],
            },
            event_id: event_id,
          },
        ],
      }),
    }
  );

  const fbResponse = await response.json();
  res.status(200).json(fbResponse);
}
