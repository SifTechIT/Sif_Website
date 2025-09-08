/**
 * AboutSIFSectionDark
 * --------------------
 * - Dark purple gradient background (SIF-friendly)
 * - Left: logo, headline, short about + stat chips
 * - Right: Vision & Mission in glass cards
 * - Soft glow accents + subtle grid pattern overlay
 *
 * Usage:
 *   <AboutSIFSectionDark logoSrc="/logo-sif-dark-purple.svg" />
 *   // If no logoSrc provided, it shows a placeholder monogram.
 */

export default function AboutSIFSectionDark({
  logoSrc,
  title = "Sunyatee International Foundation",
  about = `Sunyatee International Foundation (SIF) is a global NGO advancing mindful living,
  farmer & women empowerment, cultural revival, and community well-being—guided by Sunya.`,
  stats = [
    { k: "45k+", v: "Sunya Certificates" },
    { k: "26+", v: "Projects" },
    { k: "300+", v: "Volunteers" },
  ],
}) {
  return (
    <section
      id="about"
      className="
        relative mt-20 overflow-hidden
        rounded-3xl
        bg-[#2f2760]
        text-white
      "
    >
      {/* Decorative: subtle pattern grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Decorative: glow blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* LEFT: Brand + About + Stats */}
          <div>
            {/* Logo / Monogram */}
            <div className="mb-6 flex items-center gap-3">
              <div
                className="
                  inline-flex h-12 w-12 items-center justify-center
                  rounded-2xl bg-white/10 shadow backdrop-blur
                  ring-1 ring-white/15
                "
              >
                {logoSrc ? (
                  <img
                    src={logoSrc}
                    alt="SIF Logo"
                    className="h-8 w-8 object-contain"
                  />
                ) : (
                  <span className="text-lg font-semibold tracking-wider">
                    SIF
                  </span>
                )}
              </div>
              <div className="text-sm uppercase tracking-widest text-fuchsia-200/90">
                About SIF
              </div>
            </div>

            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              {title}
            </h2>

            <p className="mt-4 max-w-prose text-violet-100/90">{about}</p>

            {/* Stat chips */}
            <div className="mt-6 flex flex-wrap gap-3">
              {stats.map((s) => (
                <div
                  key={s.v}
                  className="
                    inline-flex items-center gap-2 rounded-full
                    border border-white/10 bg-white/5 px-3 py-1.5
                    text-sm text-violet-100/90
                    shadow-sm backdrop-blur
                  "
                >
                  <span className="text-base font-semibold text-white">
                    {s.k}
                  </span>
                  <span className="opacity-80">{s.v}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#features"
                className="
                  inline-flex items-center gap-2 rounded-full
                  bg-white px-5 py-2.5 text-sm font-medium text-violet-900
                  shadow transition hover:bg-violet-50
                "
              >
                Explore Our Work
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#cta"
                className="
                  inline-flex items-center gap-2 rounded-full
                  border border-white/15 bg-white/10 px-5 py-2.5 text-sm
                  font-medium text-white shadow-sm backdrop-blur
                  transition hover:bg-white/15
                "
              >
                Partner via CSR
              </a>
            </div>
          </div>

          {/* RIGHT: Vision & Mission (glass cards) */}
          <div className="space-y-4">
            {/* Vision */}
            <div
              className="
                rounded-2xl border border-white/10
                bg-white/5 p-6 shadow-lg backdrop-blur
              "
            >
              <div className="mb-2 text-sm uppercase tracking-wider text-fuchsia-200/90">
                Vision
              </div>
              <h3 className="text-xl font-semibold">
                A Peaceful, Prosperous, Mindful World
              </h3>
              <p className="mt-2 text-violet-100/90">
                We envision inclusive communities living with clarity,
                compassion, and harmony—where mindful action shapes health,
                livelihoods, and culture for generations.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-violet-100/90">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-fuchsia-400" />
                  Sunya-centered personal transformation
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                  Dignified livelihoods and resilient communities
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-400" />
                  Heritage preserved, knowledge shared
                </li>
              </ul>
            </div>

            {/* Mission */}
            <div
              className="
                rounded-2xl border border-white/10
                bg-white/5 p-6 shadow-lg backdrop-blur
              "
            >
              <div className="mb-2 text-sm uppercase tracking-wider text-fuchsia-200/90">
                Mission
              </div>
              <h3 className="text-xl font-semibold">
                From Inner Clarity to Collective Impact
              </h3>
              <p className="mt-2 text-violet-100/90">
                Spread Sunya meditation globally; empower farmers and women
                through training and market linkages; advance rural health and
                education; and revive cultural wisdom through translations and
                palm-leaf printing— with transparent, high-impact CSR
                partnerships.
              </p>

              {/* mini feature row */}
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-medium">Sunya Programs</p>
                  <p className="mt-1 text-xs text-violet-100/80">
                    7-belt pathway, retreats & youth/corporate modules
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-medium">Livelihoods & CSR</p>
                  <p className="mt-1 text-xs text-violet-100/80">
                    Farmer buy-back, women skill centers, ODOC nutrition
                  </p>
                </div>
              </div>

              {/* <div className="mt-5">
                <a
                  href="#sunyatimes"
                  className="
                    inline-flex items-center gap-2 rounded-full
                    bg-fuchsia-500/90 px-4 py-2 text-sm font-medium text-white
                    shadow transition hover:bg-fuchsia-500
                  "
                >
                  Read Sunyatimes
                </a>
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </section>
  );
}
