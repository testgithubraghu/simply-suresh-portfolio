import { z } from "zod";

export const eventTypes = [
  "Birthday party",
  "School / college programme",
  "Corporate or stage show",
  "Wedding / family function",
  "Trust / foundation event",
  "Public or community event",
  "Other",
] as const;

export const audienceBands = [
  "Under 50 guests",
  "50 – 150 guests",
  "150 – 500 guests",
  "500+ guests",
  "Not sure yet",
] as const;

export const bookingSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please tell us your name.")
    .max(80, "That name looks a little long."),
  email: z
    .string()
    .trim()
    .min(1, "An email address is needed for the reply.")
    .email("That email address doesn't look right."),
  phone: z
    .string()
    .trim()
    .max(20, "Please keep the phone number short.")
    .refine((v) => v === "" || /^[+()\-\s\d]{7,20}$/.test(v), "Use digits, spaces and + ( ) - only.")
    .optional()
    .or(z.literal("")),
  eventType: z.enum(eventTypes, { message: "Choose the kind of event." }),
  eventDate: z.string().trim().max(40, "That date looks unusual.").optional().or(z.literal("")),
  location: z.string().trim().max(120, "Please keep the venue / city short.").optional().or(z.literal("")),
  audience: z.enum(audienceBands).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(20, "A sentence or two about the occasion helps us reply properly.")
    .max(2000, "Please keep the message under 2000 characters."),
  // Honeypot: unconstrained here so bots pass parsing and are then rejected
  // explicitly by the route; humans never see or fill this field.
  website: z.string().optional(),
});

export type BookingInput = z.infer<typeof bookingSchema>;

export type BookingFieldErrors = Partial<Record<keyof BookingInput, string>>;
