// import { randomBytes } from "node:crypto";
// import { NextResponse } from "next/server";
// import { db } from "@/db";
// import { enquiries } from "@/db/schema";
// import { bookingSchema } from "@/lib/validation";

// export const runtime = "nodejs";

// function makeReference(): string {
//   const year = new Date().getFullYear();
//   const suffix = randomBytes(3).toString("hex").toUpperCase();
//   return `SS-${year}-${suffix}`;
// }

// export async function POST(request: Request) {
//   let payload: unknown;
//   try {
//     payload = await request.json();
//   } catch {
//     return NextResponse.json({ ok: false, error: "The request body could not be read." }, { status: 400 });
//   }

//   // Server-side validation — the client form is a convenience, not a guarantee.
//   const parsed = bookingSchema.safeParse(payload);
//   if (!parsed.success) {
//     const fieldErrors: Record<string, string> = {};
//     for (const issue of parsed.error.issues) {
//       const key = String(issue.path[0] ?? "");
//       if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
//     }
//     return NextResponse.json({ ok: false, fieldErrors }, { status: 422 });
//   }

//   const data = parsed.data;

//   // Honeypot: a filled hidden field means a bot; reject without pretending success.
//   if (data.website) {
//     return NextResponse.json({ ok: false, error: "Submission rejected as automated traffic." }, { status: 400 });
//   }

//   const reference = makeReference();

//   try {
//     await db.insert(enquiries).values({
//       reference,
//       name: data.name,
//       email: data.email,
//       phone: data.phone || null,
//       eventType: data.eventType,
//       eventDate: data.eventDate || null,
//       location: data.location || null,
//       audience: data.audience || null,
//       message: data.message,
//     });
//   } catch (error) {
//     console.error("enquiry insert failed", error);
//     return NextResponse.json(
//       { ok: false, error: "We couldn't store your enquiry just now. Please try again, or reach us on WhatsApp." },
//       { status: 503 },
//     );
//   }

//   return NextResponse.json({ ok: true, reference }, { status: 201 });
// }
