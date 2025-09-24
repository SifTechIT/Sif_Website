import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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
        href: "/csr-partnership",
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
  const [aboutOpen, setAboutOpen] = useState(false);
  const navRef = useRef(null);
  const timeoutRef = useRef(null);
  const aboutTimeoutRef = useRef(null);
  const [openActivities, setOpenActivities] = useState(false);
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMega(false);
    }, 300);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenMega(true);
  };

  const handleAboutMouseEnter = () => {
    if (aboutTimeoutRef.current) {
      clearTimeout(aboutTimeoutRef.current);
    }
    setAboutOpen(true);
  };

  const handleAboutMouseLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setAboutOpen(false);
    }, 500);
  };

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenMega(false);
        setOpenMobile(false);
        setAboutOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (aboutTimeoutRef.current) {
        clearTimeout(aboutTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        stuck
          ? "border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:border-slate-800/80 dark:bg-slate-950/90"
          : "border-transparent bg-white/80 backdrop-blur-md dark:bg-slate-950/50"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 shadow-lg shadow-emerald-500/25 transition-transform duration-200 group-hover:scale-105" />
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            SIFworld
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          >
            <button className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:text-emerald-600 focus:outline-none dark:text-slate-300 dark:hover:text-emerald-400">
              About
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className={`transition-transform duration-300 ${
                  aboutOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            <div
              className={`absolute left-1/2 mt-3 w-[320px] -translate-x-1/2 transition-all duration-500 ease-out z-50 ${
                aboutOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-2 opacity-0"
              }`}
              onMouseEnter={handleAboutMouseEnter}
              onMouseLeave={handleAboutMouseLeave}
            >
              <div className="rounded-2xl border border-slate-200/60 bg-white/95 px-6 py-4 shadow-2xl shadow-slate-900/10 backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-900/95 dark:shadow-slate-900/20">
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/impact-stories"
                      className="group block rounded-xl p-3 transition-all duration-200 hover:bg-slate-50/80 hover:shadow-sm dark:hover:bg-slate-800/50"
                      onClick={() => setAboutOpen(false)}
                    >
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                        Impact Stories
                      </div>
                      <div className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                        Inspiring transformations from the field.
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about-us"
                      className="group block rounded-xl p-3 transition-all duration-200 hover:bg-slate-50/80 hover:shadow-sm dark:hover:bg-slate-800/50"
                      onClick={() => setAboutOpen(false)}
                    >
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                        About Us
                      </div>
                      <div className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                        Learn more about SIF's vision & journey.
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              // onFocus={handleMouseEnter}
              // onBlur={() => {
              //   setTimeout(() => setOpenMega(false), 300);
              // }}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:text-emerald-600 focus:outline-none dark:text-slate-300 dark:hover:text-emerald-400"
              // aria-expanded={openMega}
              // aria-haspopup="true"
            >
              Our Activities
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className={`transition-transform duration-300 ${
                  openMega ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            <div
              className={`absolute left-1/2 mt-3 w-[900px] -translate-x-1/2 transition-all duration-500 ease-out ${
                openMega
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-4 opacity-0"
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              role="menu"
            >
              <div className="rounded-2xl border border-slate-200/60 bg-white/95 px-8 pt-8 pb-2 shadow-2xl shadow-slate-900/10 backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-900/95 dark:shadow-slate-900/20">
                <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                  {ACTIVITIES_COLUMNS.map((col, colIndex) => (
                    <div
                      key={col.title}
                      className={`transition-all duration-700 ease-out ${
                        openMega
                          ? "translate-y-0 opacity-100"
                          : "translate-y-6 opacity-0"
                      }`}
                      style={{ transitionDelay: `${colIndex * 100}ms` }}
                    >
                      <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {col.title}
                      </h3>
                      <ul className="space-y-1">
                        {col.items.map((item, itemIndex) => (
                          <li
                            key={item.label}
                            className={`transition-all duration-500 ease-out ${
                              openMega
                                ? "translate-x-0 opacity-100"
                                : "-translate-x-4 opacity-0"
                            }`}
                            style={{
                              transitionDelay: `${
                                colIndex * 100 + itemIndex * 50
                              }ms`,
                            }}
                          >
                            <Link
                              to={item.href}
                              className="group block rounded-xl px-3 py-2 transition-all duration-200 hover:bg-slate-50/80 hover:shadow-sm dark:hover:bg-slate-800/50"
                              role="menuitem"
                              onClick={() => setOpenMega(false)}
                            >
                              <div className="text-sm font-semibold text-slate-900 transition-colors duration-200 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                                {item.label}
                              </div>
                              <div className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                                {item.desc}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div
                  className={`mt-2 flex items-center justify-between rounded-xl bg-gradient-to-r from-slate-50 to-slate-100/50 p-4 transition-all duration-700 ease-out dark:from-slate-800/50 dark:to-slate-800/30 ${
                    openMega
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Looking to partner with us?
                    </span>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Explore our CSR partnership opportunities
                    </p>
                  </div>
                  <Link
                    to="#csr"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-slate-900/25 transition-all duration-200 hover:from-slate-800 hover:to-slate-700 hover:shadow-xl hover:shadow-slate-900/30 dark:from-white dark:to-slate-100 dark:text-slate-900 dark:shadow-white/10 dark:hover:shadow-white/20"
                    onClick={() => setOpenMega(false)}
                  >
                    CSR Programs
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link
            to="/gallery"
            className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
          >
            Gallery
          </Link>

          <Link
            to="/contact-us"
            className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
          >
            Contact
          </Link>
          <Link
            to="/sunyatimes"
            className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
          >
            Sunyatimes
          </Link>

          <Link
            to="/join-us"
            className="rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition-all duration-200 hover:from-emerald-700 hover:to-teal-700 hover:shadow-xl hover:shadow-emerald-600/30 dark:shadow-emerald-500/20 dark:hover:shadow-emerald-500/30"
          >
            Join Us
          </Link>
        </nav>

        <button
          className="rounded-lg p-2 text-slate-700 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white md:hidden"
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
            className="transition-transform duration-200"
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

      <div
        className={`absolute left-0 right-0 top-full z-40 transition-all duration-300 ease-out md:hidden ${
          openMobile
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="mx-4 mt-2 rounded-2xl border border-slate-200/60 bg-white/95 p-4 shadow-2xl shadow-slate-900/10 backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-900/95">
          <div className="grid gap-2">
            <Link
              to="/"
              className="rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-slate-50 dark:hover:bg-slate-800"
              onClick={() => setOpenMobile(false)}
            >
              Home
            </Link>

            <details className="rounded-xl">
              <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-slate-50 dark:hover:bg-slate-800">
                <span>About</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="opacity-70 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <div className="mt-2 rounded-xl border border-slate-100 bg-slate-50/50 p-3 dark:border-slate-800 dark:bg-slate-800/30">
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/impact-stories"
                      className="block rounded-lg px-3 py-2 text-sm transition-colors duration-200 hover:bg-white dark:hover:bg-slate-800"
                      onClick={() => setOpenMobile(false)}
                    >
                      Impact Stories
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about-us"
                      className="block rounded-lg px-3 py-2 text-sm transition-colors duration-200 hover:bg-white dark:hover:bg-slate-800"
                      onClick={() => setOpenMobile(false)}
                    >
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>
            </details>

            <div className="relative">
              <button
                className="inline-flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-slate-50 dark:hover:bg-slate-800"
                onClick={() => setOpenActivities(!openActivities)}
              >
                Our Activities
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className={`opacity-70 transition-transform duration-200 ${
                    openActivities ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {openActivities && (
                <div className="mt-2 max-h-96 overflow-y-auto rounded-xl border border-slate-100 bg-slate-50/50 p-3 dark:border-slate-800 dark:bg-slate-800/30">
                  <div className="space-y-4">
                    {ACTIVITIES_COLUMNS.map((col) => (
                      <div key={col.title}>
                        <p className="px-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          {col.title}
                        </p>
                        <ul className="mt-2 space-y-1">
                          {col.items.map((it) => (
                            <li key={it.label}>
                              <Link
                                to={it.href}
                                className="block rounded-lg px-3 py-2 text-sm transition-colors duration-200 hover:bg-white dark:hover:bg-slate-800"
                                onClick={() => {
                                  setOpenMobile(false);
                                  setOpenActivities(!openActivities);
                                }}
                              >
                                {it.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/gallery"
              className="rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-slate-50 dark:hover:bg-slate-800"
              onClick={() => setOpenMobile(false)}
            >
              Gallery
            </Link>

            <Link
              to="/contact-us"
              className="rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-slate-50 dark:hover:bg-slate-800"
              onClick={() => setOpenMobile(false)}
            >
              Contact
            </Link>
            <Link
              to="/sunyatimes"
              className="rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-slate-50 dark:hover:bg-slate-800"
              onClick={() => setOpenMobile(false)}
            >
              Sunyatimes
            </Link>
            <Link
              to="/join-us"
              className="rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:from-emerald-700 hover:to-teal-700"
              onClick={() => setOpenMobile(false)}
            >
              Join Us
            </Link>
          </div>
        </div>

        <div
          className="fixed inset-0 -z-10 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setOpenMobile(false)}
        />
      </div>
    </header>
  );
}
