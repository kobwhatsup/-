import type { Config } from 'drizzle-kit';

export default {
  schema: './src/lib/db/schema.ts',
  driver: 'better-sqlite',
  dbCredentials: {
    url: 'local.db'
  },
  verbose: true,
  strict: true
} satisfies Config;