import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { z } from "zod";
import { Arrow } from "./arrow";
import { tours, ksh, getTour } from "@/data/tours";
import { tourImage } from "@/data/tour-images";
import { contact } from "@/data/site";

const steps = ["Experience", "When & who", "Your details", "Review"] as const;

const detailSchema = z.object({
  name: z.string().trim().min(1, "Please tell us your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().min(6, "Enter a phone or WhatsApp number").max(40),
});

type Form = {
  slug: string;
  date: string;
  groupSize: number;
  name: string;
  email: string;
  phone: string;
  notes: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function BookingWizard() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState<Form>({
    slug: "",
    date: "",
    groupSize: 2,
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const tour = form.slug ? getTour(form.slug) : undefined;
  const set = (patch: Partial<Form>) => setForm((f) => ({ ...f, ...patch }));

  function validateStep(s: number): boolean {
    const next: Record<string, string> = {};
    if (s === 0 && !form.slug) next["slug"] = "Choose an experience to continue";
    if (s === 1) {
      if (!form.date) next["date"] = "Choose a preferred date";
      if (!form.groupSize || form.groupSize < 1) next["groupSize"] = "At least one guest";
    }
    if (s === 2) {
      const parsed = detailSchema.safeParse(form);
      if (!parsed.success)
        for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function go(to: number) {
    if (to > step && !validateStep(step)) return;
    setDir(to > step ? 1 : -1);
    setErrors({});
    setStep(to);
  }

  function submit() {
    if (!validateStep(2)) {
      setStep(2);
      return;
    }
    setSent(true);
  }

  const progress = ((step + 1) / steps.length) * 100;

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="rounded-[8px] bg-pine p-24 text-paper md:p-32"
      >
        <span className="flex h-48 w-48 items-center justify-center rounded-full bg-paper/15">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h2 className="section-heading-sm mt-24">Enquiry noted, karibu</h2>
        <p className="mt-16 max-w-[520px] text-body text-mist">
          Thank you{form.name ? `, ${form.name.split(" ")[0]}` : ""}. A ComTouch guide will confirm
          boat transport, guide and dance availability and send the full cost breakdown for{" "}
          <span className="text-paper">{tour?.title ?? "your experience"}</span>. You can also reach
          the office directly.
        </p>
        <div className="mt-24 flex flex-wrap gap-16 text-body">
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            className="btn-filled bg-paper text-ink"
          >
            Call {contact.phone}
          </a>
          <a
            href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="btn-outline text-paper"
          >
            WhatsApp us <Arrow />
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="rounded-[8px] ring-1 ring-mist">
      {/* Progress header */}
      <div className="border-b border-mist p-20 md:p-24">
        <div className="flex items-center justify-between">
          <p className="label-overline text-smoke">
            Step {step + 1} of {steps.length}
          </p>
          <p className="text-[13px] font-medium text-pine">{steps[step]}</p>
        </div>
        <div className="mt-12 h-[6px] w-full overflow-hidden rounded-full bg-mist">
          <motion.div
            className="h-full rounded-full bg-leaf"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: EASE }}
          />
        </div>
        <ol className="mt-16 hidden grid-cols-4 gap-8 sm:grid">
          {steps.map((label, i) => (
            <li key={label}>
              <button
                onClick={() => i < step && go(i)}
                disabled={i > step}
                className={`flex w-full items-center gap-8 text-left text-[12px] ${
                  i <= step ? "text-ink" : "text-smoke"
                } ${i < step ? "cursor-pointer" : ""}`}
              >
                <span
                  className={`flex h-22 w-22 flex-none items-center justify-center rounded-full text-[11px] ${
                    i < step
                      ? "bg-leaf text-paper"
                      : i === step
                        ? "bg-pine text-paper"
                        : "bg-mist text-smoke"
                  }`}
                >
                  {i < step ? "✓" : i + 1}
                </span>
                <span className="truncate">{label}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>

      {/* Step body. Each step remounts on `key={step}` and animates in; no exit
          animation, so advancing never depends on a prior animation finishing. */}
      <div className="overflow-hidden p-20 md:p-24">
        <motion.div
          key={step}
          initial={reduce ? false : { opacity: 0, x: dir * 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          {step === 0 && (
            <div>
              <h2 className="text-subheading text-ink">Which experience calls to you?</h2>
              <p className="mt-6 text-[13px] text-smoke">
                Pick one to start. You can tell us more in a moment.
              </p>
              {errors["slug"] && <p className="mt-12 text-[12px] text-coral">{errors["slug"]}</p>}
              <ul className="mt-20 grid max-h-[420px] gap-8 overflow-y-auto pr-2 sm:grid-cols-2">
                {tours.map((t) => {
                  const on = form.slug === t.slug;
                  return (
                    <li key={t.slug}>
                      <button
                        onClick={() => set({ slug: t.slug })}
                        className={`flex w-full items-center gap-12 rounded-[8px] p-8 text-left ring-1 transition-all ${
                          on ? "bg-pine/5 ring-pine" : "ring-mist hover:ring-pewter"
                        }`}
                      >
                        <img
                          src={tourImage(t.slug)}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          className="h-56 w-56 flex-none rounded-[6px] object-cover"
                        />
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-[14px] font-medium text-ink">
                            {t.title}
                          </span>
                          <span className="block text-[12px] text-smoke">
                            {t.category} · {t.duration}
                          </span>
                          <span className="block text-[12px] text-pine">Group {ksh(t.total)}</span>
                        </span>
                        <span
                          className={`flex h-20 w-20 flex-none items-center justify-center rounded-full border ${
                            on ? "border-pine bg-pine text-paper" : "border-mist text-transparent"
                          }`}
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path
                              d="M5 13l4 4L19 7"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {step === 1 && (
            <div className="max-w-[440px]">
              <h2 className="text-subheading text-ink">When would you like to come?</h2>
              <label className="mt-20 block">
                <span className="label-overline text-smoke">Preferred date</span>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => set({ date: e.target.value })}
                  className="mt-8 w-full rounded-[6px] border border-mist bg-paper px-12 py-12 text-body"
                />
                {errors["date"] && (
                  <span className="mt-6 block text-[12px] text-coral">{errors["date"]}</span>
                )}
              </label>

              <div className="mt-20">
                <span className="label-overline text-smoke">Group size</span>
                <div className="mt-8 flex items-center gap-16">
                  <button
                    onClick={() => set({ groupSize: Math.max(1, form.groupSize - 1) })}
                    className="flex h-44 w-44 items-center justify-center rounded-full border border-mist text-heading-sm text-pine transition-colors hover:bg-mist"
                    aria-label="Fewer guests"
                  >
                    −
                  </button>
                  <span className="w-40 text-center text-heading-sm font-light">
                    {form.groupSize}
                  </span>
                  <button
                    onClick={() => set({ groupSize: Math.min(60, form.groupSize + 1) })}
                    className="flex h-44 w-44 items-center justify-center rounded-full border border-mist text-heading-sm text-pine transition-colors hover:bg-mist"
                    aria-label="More guests"
                  >
                    +
                  </button>
                  <span className="text-[13px] text-smoke">
                    guest{form.groupSize > 1 ? "s" : ""}
                  </span>
                </div>
              </div>

              <p className="mt-20 rounded-[10px] bg-leaf/[0.08] p-16 text-[13px] text-pine">
                Booking Ngoma ya Mulungu (late March)? Reserve between January and February, spaces
                are limited.
              </p>
            </div>
          )}

          {step === 2 && (
            <div className="max-w-[460px]">
              <h2 className="text-subheading text-ink">How can the guide reach you?</h2>
              {(
                [
                  { name: "name", label: "Full name", type: "text" },
                  { name: "email", label: "Email", type: "email" },
                  { name: "phone", label: "Phone / WhatsApp", type: "tel" },
                ] as const
              ).map((f) => (
                <label key={f.name} className="mt-16 block">
                  <span className="label-overline text-smoke">{f.label}</span>
                  <input
                    type={f.type}
                    value={form[f.name]}
                    onChange={(e) => set({ [f.name]: e.target.value })}
                    className="mt-8 w-full rounded-[6px] border border-mist bg-paper px-12 py-12 text-body"
                  />
                  {errors[f.name] && (
                    <span className="mt-6 block text-[12px] text-coral">{errors[f.name]}</span>
                  )}
                </label>
              ))}
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-subheading text-ink">Does this look right?</h2>
              <div className="mt-20 grid gap-16 md:grid-cols-2">
                <div className="overflow-hidden rounded-[8px] ring-1 ring-mist">
                  {tour && (
                    <img
                      src={tourImage(tour.slug)}
                      alt={tour.title}
                      className="aspect-[16/10] w-full object-cover"
                    />
                  )}
                  <dl className="space-y-8 p-16 text-[13px]">
                    <Row k="Experience" v={tour?.title ?? "Not chosen"} />
                    <Row k="Date" v={form.date || "To confirm"} />
                    <Row
                      k="Group size"
                      v={`${form.groupSize} guest${form.groupSize > 1 ? "s" : ""}`}
                    />
                    <Row k="Basis" v={tour?.basis ?? "Not chosen"} />
                    <div className="flex items-center justify-between border-t border-mist pt-8">
                      <dt className="text-pewter">Group price from</dt>
                      <dd className="text-subheading text-pine">
                        {tour ? ksh(tour.total) : "To confirm"}
                      </dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <label className="block">
                    <span className="label-overline text-smoke">
                      Anything else (dietary needs, mobility, arrival time)
                    </span>
                    <textarea
                      value={form.notes}
                      onChange={(e) => set({ notes: e.target.value })}
                      rows={6}
                      maxLength={1000}
                      className="mt-8 w-full rounded-[6px] border border-mist bg-paper px-12 py-12 text-body"
                    />
                  </label>
                  <p className="mt-12 text-[12px] text-smoke">
                    No payment is taken online. Your details are only used to arrange the trip.
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Footer controls */}
      <div className="flex items-center justify-between gap-16 border-t border-mist p-20 md:p-24">
        <button
          onClick={() => go(step - 1)}
          disabled={step === 0}
          className={`text-[13px] font-medium ${
            step === 0 ? "invisible" : "text-pewter hover:text-ink"
          }`}
        >
          ← Back
        </button>
        {step < steps.length - 1 ? (
          <button onClick={() => go(step + 1)} className="btn-filled">
            Continue <Arrow />
          </button>
        ) : (
          <button onClick={submit} className="btn-filled">
            Send enquiry <Arrow />
          </button>
        )}
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between gap-16">
      <dt className="text-smoke">{k}</dt>
      <dd className="truncate text-right text-ink">{v}</dd>
    </div>
  );
}
