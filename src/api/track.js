export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const PIXEL_ID = process.env.PIXEL_ID; // сложи си твоето Pixel ID
  const ACCESS_TOKEN = process.env.ACCESS_TOKEN; // от Events Manager -> Generate Access Token

  const eventData = {
    data: [
      {
        event_name: req.body.event_name || "PageView",
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: req.body.url,
        event_id: req.body.event_id || undefined, // за deduplication
        user_data: {
          // пример: ако пращаш имейл, хешни го със SHA256
          em: req.body.email ? [sha256(req.body.email)] : [],
        },
        custom_data: req.body.custom_data || {},
      },
    ],
  };

  const response = await fetch(
    `https://graph.facebook.com/v20.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    }
  );

  const result = await response.json();
  return res.status(200).json(result);
}

// helper за SHA256
import crypto from "crypto";
function sha256(str) {
  return crypto.createHash("sha256").update(str).digest("hex");
}
