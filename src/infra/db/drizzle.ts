import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import * as schema from './schema'


export const pg = postgres(process.env.DATABASE_URL as string)
export const database = drizzle(pg, {
  schema,
  logger: true
})