import { timestamp } from "drizzle-orm/pg-core";

export const createdAt = timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow();

export const updatedAt = timestamp("updated_at", {
    withTimezone: true,
    precision: 3,
})
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date());

export const deletedAt = timestamp("deleted_at", {
    withTimezone: true,
    precision: 3,
}).defaultNow();

export const timestamps = {
    updatedAt: updatedAt,
    createdAt: createdAt,
    deletedAt: deletedAt,
};
