import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'

export const tb_customers = pgTable('customers', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  updatedAt: timestamp('updated_at').notNull().$onUpdate(() => new Date()),
  createdAt: timestamp('created_at').notNull().defaultNow()
})

