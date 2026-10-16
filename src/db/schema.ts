import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

/**
 * Booking enquiries submitted through /book (and the /api/enquiries route).
 * Rows are only created after server-side validation passes, so a "received"
 * confirmation always reflects a row that actually exists.
 */
export const enquiries = pgTable("enquiries", {
  id: uuid("id").primaryKey().defaultRandom(),
  reference: text("reference").notNull().unique(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  eventType: text("event_type").notNull(),
  eventDate: text("event_date"),
  location: text("location"),
  audience: text("audience"),
  message: text("message").notNull(),
  website: text("website"), // honeypot — must stay empty
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type Enquiry = typeof enquiries.$inferSelect;
export type NewEnquiry = typeof enquiries.$inferInsert;
