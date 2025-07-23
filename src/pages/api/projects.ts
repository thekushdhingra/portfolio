import { ProjectType } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectType[] | { error_msg: string; error: unknown }>
) {
  try {
    const response = await fetch(
      "https://api.airtable.com/v0/appFNA33xiN0SbTHf/tblnbs34h3JQ6BHqM",
      {
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        },
      }
    );
    const data = await response.json();
    res.status(200).json(data.records);
  } catch (error) {
    res
      .status(500)
      .json({ error_msg: "Failed to fetch projects", error: error });
  }
}
