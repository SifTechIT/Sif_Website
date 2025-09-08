import { useEffect, useRef, useState } from "react";

/**
 * SIFNavbar – Sticky + Mega Menu (Our Activities)
 * -----------------------------------------------
 * - Sticky on scroll (adds subtle shadow + backdrop blur)
 * - Desktop: hover/focus mega menu for "Our Activities"
 * - Mobile: slide-down menu with collapsible Activities panel
 * - Accessible: focusable, Escape to close, keyboard-friendly
 *
 * Usage:
 *   <SIFNavbar />
 *
 * Tailwind: requires backdrop-blur utilities enabled (default in v3)
 */

const ACTIVITIES_COLUMNS = [
  {
    title: "Mindfulness",
    items: [
      {
        label: "Sunya Meditation",
        href: "/meditation",
        desc: "7-belt pathway, retreats, online practice.",
      },
      {
        label: "Corporate & Youth",
        href: "#sunya-corporate",
        desc: "Stress, focus & leadership modules.",
      },
    ],
  },
  {
    title: "Livelihoods",
    items: [
      {
        label: "Farmer Empowerment",
        href: "/farmer-empowerment",
        desc: "Noni cultivation, soil testing, buy-back.",
      },
      {
        label: "Women Skill Centers",
        href: "/women-empowerment",
        desc: "SHGs, textiles, eco-products, income.",
      },
    ],
  },
  {
    title: "Health & Inclusion",
    items: [
      {
        label: "Rural Health & Awareness",
        href: "/rural-health-awareness",
        desc: "Camps, nutrition, hygiene, well-being.",
      },
      {
        label: "Ausum Kids",
        href: "/child-education",
        desc: "Therapy & inclusion for special needs.",
      },
      {
        label: "ODOC – One Dollar One Child",
        href: "/onedollar-onechild",
        desc: "Spirulina nutrition at $1/child.",
      },
    ],
  },
  {
    title: "Heritage & CSR",
    items: [
      {
        label: "Agamas & Translations",
        href: "/agamas-translations",
        desc: "Palm-leaf printing, cultural revival.",
      },
      {
        label: "Brick House",
        href: "/brick-house",
        desc: "High-impact programs with companies.",
      },
      {
        label: "Palm Leaf Sutra Printing",
        href: "/palm-leaf-sutra-printing",
        desc: "High-impact programs with companies.",
      },
      {
        label: "CSR Partnerships",
        href: "#csr",
        desc: "High-impact programs with companies.",
      },
      {
        label: "Internships & Education",
        href: "/internships-education",
        desc: "Hands-on training & apprenticeships.",
      },
    ],
  },
];

export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);
  const [openMega, setOpenMega] = useState(false);
  const [stuck, setStuck] = useState(false);
  const navRef = useRef(null);

  // Sticky shadow on scroll
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mega on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenMega(false);
        setOpenMobile(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-50 w-full border-b transition
        ${
          stuck
            ? "border-neutral-200/60 bg-white/75 backdrop-blur shadow-sm dark:border-neutral-800 dark:bg-neutral-950/60"
            : "border-transparent bg-white/70 backdrop-blur dark:bg-neutral-950/40"
        }
      `}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-emerald-400 to-sky-500 shadow" />
          <span className="font-semibold tracking-tight">SIFworld</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link to="/" className="hover:text-emerald-600">
            Home
          </Link>
          <Link to="/about-us" className="hover:text-emerald-600">
            About
          </Link>
          {/* Mega menu trigger */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMega(true)}
            onMouseLeave={() => setOpenMega(false)}
          >
            <button
              onFocus={() => setOpenMega(true)}
              className="inline-flex items-center gap-1 hover:text-emerald-600 focus:outline-none"
              aria-expanded={openMega}
              aria-haspopup="true"
            >
              Our Activities
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className={`transition ${openMega ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {/* Mega menu panel */}
            {openMega && (
              <div
                onMouseEnter={() => setOpenMega(true)}
                className="absolute left-1/2 mt-3 w-[800px] -translate-x-1/2 rounded-2xl border border-neutral-200 bg-white p-5 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900"
                role="menu"
              >
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {ACTIVITIES_COLUMNS.map((col) => (
                    <div key={col.title}>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                        {col.title}
                      </p>
                      <ul className="space-y-2">
                        {col.items.map((it) => (
                          <li key={it.label}>
                            <Link
                              href={it.to}
                              className="block rounded-lg p-2 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                              role="menuitem"
                            >
                              <div className="text-sm font-medium">
                                {it.label}
                              </div>
                              <div className="text-xs text-neutral-500 dark:text-neutral-400">
                                {it.desc}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Footer row in mega */}
                <div className="mt-4 flex items-center justify-between rounded-xl bg-neutral-50 p-3 text-sm dark:bg-neutral-800/60">
                  <span className="text-neutral-600 dark:text-neutral-300">
                    Looking to partner?
                  </span>
                  <Link
                    to="#csr"
                    className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-3 py-1.5 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900"
                  >
                    CSR Programs
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link to="/gallery" className="hover:text-emerald-600">
            Gallery
          </Link>
          <Link to="/#sunyatimes" className="hover:text-emerald-600">
            Sunyatimes
          </Link>
          <Link to="/odoc" className="hover:text-emerald-600">
            ODOC
          </Link>
          <Link to="/impact-stories" className="hover:text-emerald-600">
            Impact Stories
          </Link>
          <Link to="/contact-us" className="hover:text-emerald-600">
            Contact
          </Link>
          <Link to="/join-us" className="hover:text-emerald-600">
            Join Us
          </Link>
          <Link
            to="/#cta"
            className="rounded-full bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900"
          >
            Get Involved
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpenMobile((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={openMobile}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {openMobile ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M3 12h18" />
                <path d="M3 6h18" />
                <path d="M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {openMobile && (
        <div className="md:hidden">
          <div className="mx-4 mb-4 rounded-2xl border border-neutral-200 bg-white p-3 shadow dark:border-neutral-800 dark:bg-neutral-900">
            <div className="grid gap-2">
              <Link
                to="/"
                className="rounded-lg px-3 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800"
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="rounded-lg px-3 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800"
              >
                About
              </Link>
              {/* Collapsible Activities */}
              <details className="rounded-lg">
                <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800">
                  <span>Our Activities</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="opacity-70"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="mt-2 space-y-3 rounded-lg border border-neutral-100 p-2 dark:border-neutral-800">
                  {ACTIVITIES_COLUMNS.map((col) => (
                    <div key={col.title}>
                      <p className="px-2 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                        {col.title}
                      </p>
                      <ul className="mt-1">
                        {col.items.map((it) => (
                          <li key={it.label}>
                            <Link
                              to={it.href}
                              className="block rounded-md px-2 py-1.5 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800"
                            >
                              {it.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </details>

              <Link
                to="/#sunyatimes"
                className="rounded-lg px-3 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800"
              >
                Sunyatimes
              </Link>
              <Link
                to="/#odoc"
                className="rounded-lg px-3 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800"
              >
                ODOC
              </Link>
              <Link
                to="/#cta"
                className="rounded-lg bg-neutral-900 px-3 py-2 text-center text-white dark:bg-white dark:text-neutral-900"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
