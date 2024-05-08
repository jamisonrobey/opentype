import {
  english10k,
  english1k,
  english450k,
  english5k,
  esperanto10k,
  esperanto1k,
  esperanto25k,
  filipino1k,
  hindi1k,
  indonesian10k,
  indonesian1k,
  spanish10k,
  spanish1k,
} from "@/lib/schema";
import { PgTable } from "drizzle-orm/pg-core";

export type LanguageOptionType = {
  language: string;
  table: PgTable;
};

export const LanguageOptions: LanguageOptionType[] = [
  { language: "english 1k", table: english1k },
  { language: "english 5k", table: english5k },
  { language: "english 10k", table: english10k },
  { language: "english 450k", table: english450k },
  { language: "esperanto 1k", table: esperanto1k },
  { language: "esperanto 10k", table: esperanto10k },
  { language: "filipino 25k", table: filipino1k },
  { language: "hindi 1k", table: hindi1k },
  { language: "indonesian 1k", table: indonesian1k },
  { language: "indonesian 10k", table: indonesian10k },
  { language: "spanish 1k", table: spanish1k },
  { language: "spanish 10k", table: spanish10k },
];
