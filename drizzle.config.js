import { defineConfig } from 'drizzle-kit'

const config = defineConfig({
  strict: true,
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://user:password@localhost:5432/mydatabase"
  },
  migrations: {
    table: 'tb_migrations',
    schema: 'public',
    prefix: 'timestamp'
  },
  schema: 'src/infra/db/schema.ts',
  out: 'src/infra/db/migrations'
})

export default config