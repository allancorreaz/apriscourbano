import { getPublicSettings } from "../../../admin-service";

export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json(await getPublicSettings(), {
    headers: {
      "cache-control": "public, max-age=60, stale-while-revalidate=300",
    },
  });
}

