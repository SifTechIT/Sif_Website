import { Quote as QuoteIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Nagireddy",
      role: "Farmer, Siddipet",
      text: "After joining the Noni Project, my income grew from ₹18,000 to ₹1,80,000 per year. Today, I can support my family with dignity and confidence.",
    },
    {
      name: "Sandiri Sushama",
      role: "Single Mother, Telangana",
      text: "SIF gave me skills and independence. I can now support my children’s education and live with self-respect.",
    },
    {
      name: "Harika",
      role: "Mother of Two",
      text: "During COVID, when my husband lost his income, SIF’s training and support helped me stabilize my family financially.",
    },
  ];

  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0]?.toUpperCase() ?? "")
      .join("")
      .slice(0, 2);

  return (
    <div className="mx-auto mt-30 max-w-7xl px-4 sm:px-6">
      <section
        id="testimonials"
        className="relative isolate overflow-hidden bg-neutral-950 py-20"
      >
        {/* Soft gradient + grid accent */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-70"
          style={{
            background:
              "radial-gradient(60rem 40rem at 20% -10%, rgba(124,58,237,0.18), transparent 40%), radial-gradient(50rem 40rem at 90% 10%, rgba(16,185,129,0.16), transparent 40%)",
            maskImage:
              "radial-gradient(80rem 40rem at 50% 10%, black 60%, transparent 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 80%, transparent)",
          }}
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Voices of Change
            </h2>
            <p className="mt-3 text-pretty text-neutral-400">
              Stories from people whose lives have been touched by SIF
              initiatives.
            </p>
          </div>

          {/* Mobile: horizontal scroll-snap carousel; Desktop: grid */}
          <div className="mt-12">
            <div className="flex gap-6 overflow-x-auto pb-3 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible sm:pb-0 snap-x snap-mandatory [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden">
              {testimonials.map((t) => (
                <article
                  key={t.name}
                  className="snap-center shrink-0 basis-[86%] sm:basis-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl/10 hover:bg-white/10 transition-colors"
                >
                  <div className="p-6">
                    {/* Quote icon */}
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                      {/* If lucide-react isn’t available, this will just be text */}
                      {QuoteIcon ? <QuoteIcon size={18} /> : <span>“</span>}
                    </div>

                    <p className="text-neutral-200 leading-relaxed">
                      “{t.text}”
                    </p>

                    {/* Divider */}
                    <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    {/* Person */}
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-emerald-500/80 to-purple-500/80 ring-1 ring-white/20">
                        <span className="flex h-full w-full items-center justify-center text-sm font-semibold text-white">
                          {getInitials(t.name)}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-white">
                          {t.name}
                        </p>
                        <p className="truncate text-xs text-neutral-400">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Dots for mobile carousel (pure CSS, optional) */}
            <div
              className="mt-6 flex justify-center gap-2 sm:hidden"
              aria-hidden="true"
            >
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-white/30"
                />
              ))}
            </div>
          </div>

          {/* CTA footer (optional) */}
          <div className="mt-12 flex items-center justify-center">
            <Link
              to={"/impact-stories"}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10"
            >
              Explore our impact
            </Link>
          </div>
        </div>

        {/* Motion reduce: tone down transitions for accessibility */}
        <style>{`
        @media (prefers-reduced-motion: reduce) {
          .transition-colors { transition: none; }
        }
      `}</style>
      </section>
    </div>
  );
}
