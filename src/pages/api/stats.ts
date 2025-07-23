import type { NextApiRequest, NextApiResponse } from "next";

import type { StatsType } from "@/types";

const fetchWakatimeStats = async ({
  username,
  api_domain,
}: {
  username: string;
  api_domain?: string;
}) => {
  if (!username) {
    return { error: "Missing username", status: 400 };
  }

  const domain = api_domain ? api_domain.replace(/\/$/gi, "") : "wakatime.com";
  const url = `https://${domain}/api/v1/users/${username}/stats?is_including_today=true`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      return {
        error: `Failed to fetch WakaTime stats for '${username}'`,
        status: res.status,
      };
    }

    const json = await res.json();
    return json.data;
  } catch (err: any) {
    return { error: err?.message || "Unknown error", status: 500 };
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const result = await fetchWakatimeStats({
    username: "964",
    api_domain: "hackatime.hackclub.com",
  });

  if ("error" in result && "status" in result) {
    return res.status(result.status).json({ error: result.error });
  }

  return res.status(200).json({ waka: result } as StatsType);
}
