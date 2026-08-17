import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

type D1Binding = Parameters<typeof drizzle>[0];

export function getDb(dbBinding?: D1Binding) {
  if (!dbBinding) {
    throw new Error(
      "Cloudflare D1 binding `DB` is unavailable. Pass the runtime D1 binding to getDb() when using the database."
    );
  }

  return drizzle(dbBinding, { schema });
}
