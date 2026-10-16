"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangle, CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { audienceBands, bookingSchema, eventTypes, type BookingInput } from "@/lib/validation";
import { defaultWhatsappMessage, whatsappLink } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { WhatsAppGlyph } from "@/components/ui/glyphs";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-tile border border-line bg-white px-5 py-4 text-[15px] text-ink placeholder:text-graphite/60 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25";

const labelClasses = "mb-2 block text-sm font-semibold tracking-tight text-ink";

export function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [reference, setReference] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: undefined,
      eventDate: "",
      location: "",
      audience: "",
      message: "",
      website: "",
    },
    mode: "onBlur",
  });

  const onSubmit = handleSubmit(async (values) => {
    setStatus("submitting");
    setServerError(null);
    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const body = (await res.json()) as { ok: boolean; reference?: string; error?: string };
      if (!res.ok || !body.ok) {
        setServerError(body.error ?? "Something went wrong on our side. Please try again, or reach us on WhatsApp.");
        setStatus("error");
        return;
      }
      setReference(body.reference ?? null);
      setStatus("success");
      reset();
    } catch {
      setServerError("We couldn't reach the booking service. Check your connection, or message us on WhatsApp.");
      setStatus("error");
    }
  });

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-card border border-line bg-white p-10 shadow-card md:p-12"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full bg-accent-wash text-accent">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-6 font-heading text-3xl font-bold text-ink">Enquiry received.</h3>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-graphite">
          Thank you — your enquiry has been recorded{reference ? <> under reference <strong className="text-ink">{reference}</strong></> : null}.
          Simply Suresh reviews every enquiry personally and replies by email or phone.
        </p>
        <p className="mt-4 text-sm text-graphite">
          Need an answer sooner? WhatsApp is usually the fastest route.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={whatsappLink(`${defaultWhatsappMessage} (Ref ${reference ?? ""})`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-btn bg-night px-7 text-[15px] font-semibold text-white hover:bg-charcoal"
          >
            <WhatsAppGlyph className="h-4 w-4 text-accent" /> Continue on WhatsApp
          </a>
          <Button
            variant="secondary"
            onClick={() => {
              setStatus("idle");
              setReference(null);
            }}
          >
            Send another enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-card border border-line bg-white p-8 shadow-card md:p-12">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Your name <span className="text-accent">*</span>
          </label>
          <input id="name" className={inputClasses} autoComplete="name" placeholder="e.g. Ananya Rao" {...register("name")} />
          <FieldError message={errors.name?.message} />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email <span className="text-accent">*</span>
          </label>
          <input id="email" type="email" className={inputClasses} autoComplete="email" placeholder="you@example.com" {...register("email")} />
          <FieldError message={errors.email?.message} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone <span className="text-graphite/60">(optional)</span>
          </label>
          <input id="phone" type="tel" className={inputClasses} autoComplete="tel" placeholder="+91 …" {...register("phone")} />
          <FieldError message={errors.phone?.message} />
        </div>
        <div>
          <label htmlFor="eventType" className={labelClasses}>
            Kind of event <span className="text-accent">*</span>
          </label>
          <select id="eventType" className={inputClasses} defaultValue="" {...register("eventType")}>
            <option value="" disabled>
              Choose an option
            </option>
            {eventTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <FieldError message={errors.eventType?.message} />
        </div>
        <div>
          <label htmlFor="eventDate" className={labelClasses}>
            Event date <span className="text-graphite/60">(optional)</span>
          </label>
          <input id="eventDate" type="date" className={inputClasses} {...register("eventDate")} />
          <FieldError message={errors.eventDate?.message} />
        </div>
        <div>
          <label htmlFor="location" className={labelClasses}>
            Venue / city <span className="text-graphite/60">(optional)</span>
          </label>
          <input id="location" className={inputClasses} placeholder="e.g. Bengaluru" {...register("location")} />
          <FieldError message={errors.location?.message} />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="audience" className={labelClasses}>
            Expected audience <span className="text-graphite/60">(optional)</span>
          </label>
          <select id="audience" className={inputClasses} defaultValue="" {...register("audience")}>
            <option value="">Not sure yet</option>
            {audienceBands.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className={labelClasses}>
            About the occasion <span className="text-accent">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            className={inputClasses}
            placeholder="Tell us what you're celebrating, the space you have, and anything you'd love to see in the show."
            {...register("message")}
          />
          <FieldError message={errors.message?.message} />
        </div>
      </div>

      {/* honeypot — hidden from people, attractive to bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      {status === "error" && serverError ? (
        <p role="alert" className="mt-6 flex items-start gap-3 rounded-tile bg-accent-wash px-5 py-4 text-sm font-semibold text-accent-deep">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
          {serverError}
        </p>
      ) : null}

      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending enquiry…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" /> Send enquiry
            </>
          )}
        </Button>
        <p className="text-[13px] leading-relaxed text-graphite">
          Your details are stored only to answer this enquiry. No mailing lists, no sharing — see the privacy policy.
        </p>
      </div>
    </form>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-2 text-[13px] font-semibold text-accent-deep">
      {message}
    </p>
  );
}
