import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

export async function getDb() {
  // Keep the native Cloudflare module lazy. This lets the deployable Worker be
  // inspected by Node during artifact validation without trying to resolve the
  // workerd-only `cloudflare:` protocol before a database request exists.
  const { env } = await import("cloudflare:workers");
  if (!env.DB) {
    throw new Error(
      "Cloudflare D1 binding `DB` is unavailable. Set the `d1` field in .openai/hosting.json to `DB` or let your control plane inject the real binding values before using the database."
    );
  }

  return drizzle(env.DB, { schema });
}
