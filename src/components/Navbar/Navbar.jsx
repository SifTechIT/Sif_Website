import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Logo.png";

const ACTIVITIES_COLUMNS = [
  {
    title: "Mindfulness & Health",
    color: "indigo",
    headingClass: "text-indigo-600",
    items: [
      {
        label: "Sunya Meditation",
        href: "/meditation",
        desc: "Mindfulness & online practice",
        chipClass:
          "bg-indigo-50 text-indigo-600 group-hover/item:bg-indigo-600 group-hover/item:text-white",
        icon: <i className="fas fa-om text-xs" />,
      },
      {
        label: "Child Education",
        href: "/child-education",
        desc: "Special needs therapy",
        chipClass:
          "bg-pink-50 text-pink-600 group-hover/item:bg-pink-600 group-hover/item:text-white",
        icon: <i className="fas fa-child text-xs" />,
      },
      {
        label: "Rural Health & Awareness",
        href: "/rural-health-awareness",
        chipClass:
          "bg-pink-50 text-pink-600 group-hover/item:bg-pink-600 group-hover/item:text-white",
        desc: "Camps, nutrition, hygiene, well-being.",
        icon: <i className="fas fa-child text-xs" />,
      },
      {
        label: "ODOC – One Dollar One Child",
        href: "/onedollar-onechild",
        chipClass:
          "bg-pink-50 text-pink-600 group-hover/item:bg-pink-600 group-hover/item:text-white",
        desc: "Spirulina nutrition at $1/child.",
        icon: <i className="fas fa-child text-xs" />,
      },
    ],
  },
  {
    title: "Livelihoods",
    color: "emerald",
    headingClass: "text-emerald-600",
    items: [
      {
        label: "Farmer Empowerment",
        href: "/farmer-empowerment",
        desc: "Noni & soil testing",
        chipClass:
          "bg-emerald-50 text-emerald-600 group-hover/item:bg-emerald-600 group-hover/item:text-white",
        icon: <i className="fas fa-seedling text-xs" />,
      },
      {
        label: "Women Skill Centers",
        href: "/women-empowerment",
        desc: "SHGs & Textiles",
        chipClass:
          "bg-rose-50 text-rose-600 group-hover/item:bg-rose-600 group-hover/item:text-white",
        icon: <i className="fas fa-female text-xs" />,
      },
    ],
  },
  {
    title: "Heritage & CSR",
    color: "amber",
    headingClass: "text-amber-600",
    items: [
      {
        label: "Agamas & Sutras",
        href: "/agamas-translations",
        desc: "Palm-leaf & Translations",
        chipClass:
          "bg-amber-50 text-amber-600 group-hover/item:bg-amber-600 group-hover/item:text-white",
        icon: <i className="fas fa-scroll text-xs" />,
      },

      {
        label: "Internship Academy",
        href: "/internships-education",
        desc: "Learning with Impact",
        chipClass:
          "bg-blue-50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white",
        icon: <i className="fas fa-graduation-cap text-xs" />,
      },
      {
        label: "Brick House",
        href: "/brick-house",
        desc: "High-impact programs with companies.",
        chipClass:
          "bg-blue-50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white",
        icon: <i className="fas fa-graduation-cap text-xs" />,
      },
      {
        label: "Palm Leaf Sutra Printing",
        href: "/palm-leaf-sutra-printing",
        desc: "High-impact programs with companies.",
        chipClass:
          "bg-blue-50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white",
        icon: <i className="fas fa-graduation-cap text-xs" />,
      },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [activitiesOpen, setActivitiesOpen] = useState(false);

  const navRef = useRef(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setAboutOpen(false);
    setActivitiesOpen(false);
  }, [location.pathname]);

  // Close on click outside
  useEffect(() => {
    function onDown(e) {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) {
        setMobileOpen(false);
        setAboutOpen(false);
        setActivitiesOpen(false);
      }
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  return (
    <nav
      ref={navRef}
      className="sticky top-0 left-0 right-0 z-[100] border-b border-gray-100 bg-white/70 backdrop-blur-xl backdrop-saturate-150"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="SIFworld Logo"
            className="h-12 w-9 object-cover"
          />
          <div className="text-xl font-bold tracking-tighter uppercase">
            SIF<span className="font-light text-gray-400">world</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center space-x-10 text-[13px] font-medium text-gray-600 lg:flex">
          <Link to="/" className="transition hover:text-black">
            Home
          </Link>

          {/* About dropdown */}
          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-1 py-4 transition hover:text-black"
            >
              About
              <ChevronDown className="h-3 w-3 opacity-50 transition-transform group-hover:rotate-180" />
            </button>

            <div className="absolute left-0 top-full invisible w-52 translate-y-2 rounded-2xl border border-gray-100 bg-white p-2 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <Link
                to="/about-us"
                className="block rounded-xl px-4 py-3 transition hover:bg-gray-50"
              >
                About Us
              </Link>
              <Link
                to="/impact-stories"
                className="block rounded-xl px-4 py-3 transition hover:bg-gray-50"
              >
                Impact Stories
              </Link>
            </div>
          </div>

          {/* All activities mega menu */}
          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-1 py-4 transition hover:text-black"
            >
              All Activities
              <ChevronDown className="h-3 w-3 opacity-50 transition-transform group-hover:rotate-180" />
            </button>

            <div className="absolute left-1/2 top-full invisible w-[920px] -translate-x-1/2 translate-y-2 rounded-[2rem] border border-gray-100 bg-white p-8 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="grid grid-cols-3 gap-8">
                {ACTIVITIES_COLUMNS.map((col) => (
                  <div key={col.title}>
                    <h4
                      className={[
                        "mb-4 text-[10px] font-bold uppercase tracking-widest",
                        col.headingClass,
                      ].join(" ")}
                    >
                      {col.title}
                    </h4>

                    <div className="space-y-4">
                      {col.items.map((it) => (
                        <MegaItem key={it.href + it.label} item={it} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link to="/gallery" className="transition hover:text-black">
            Gallery
          </Link>
          <Link to="/contact-us" className="transition hover:text-black">
            Contact Us
          </Link>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3 sm:gap-6">
          <Link
            to="/join-us"
            className="hidden rounded-full bg-black px-6 py-2 text-[11px] font-bold uppercase tracking-widest text-white shadow-lg shadow-zinc-200 transition hover:bg-zinc-800 sm:inline-flex"
          >
            Join Us
          </Link>

          {/* Mobile menu button */}
          <button
            className="text-gray-600 lg:hidden"
            aria-label="Menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <XIcon className="h-7 w-7" />
            ) : (
              <BarsIcon className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={[
          "lg:hidden relative border-t border-gray-100 bg-white/90 backdrop-blur-xl",
          mobileOpen ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0",
          "transition-opacity duration-300",
        ].join(" ")}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 max-h-[76vh] overflow-y-auto overscroll-contain">
          <div className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            <NavMobileLink to="/" onClick={() => setMobileOpen(false)}>
              Home
            </NavMobileLink>

            {/* About accordion */}
            <button
              type="button"
              className="flex items-center justify-between rounded-xl px-3 py-3 hover:bg-gray-50"
              onClick={() => setAboutOpen((v) => !v)}
            >
              <span>About</span>
              <ChevronDown
                className={[
                  "h-4 w-4 opacity-60 transition-transform",
                  aboutOpen ? "rotate-180" : "",
                ].join(" ")}
              />
            </button>
            <div
              className={[
                "grid overflow-hidden pl-3 transition-all duration-300",
                aboutOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0",
              ].join(" ")}
            >
              <div className="min-h-0">
                <NavMobileLink
                  to="/about-us"
                  onClick={() => setMobileOpen(false)}
                >
                  About Us
                </NavMobileLink>
                <NavMobileLink
                  to="/impact-stories"
                  onClick={() => setMobileOpen(false)}
                >
                  Impact Stories
                </NavMobileLink>
              </div>
            </div>

            {/* Activities accordion */}
            <button
              type="button"
              className="flex items-center justify-between rounded-xl px-3 py-3 hover:bg-gray-50"
              onClick={() => setActivitiesOpen((v) => !v)}
            >
              <span>All Activities</span>
              <ChevronDown
                className={[
                  "h-4 w-4 opacity-60 transition-transform",
                  activitiesOpen ? "rotate-180" : "",
                ].join(" ")}
              />
            </button>

            <div
              className={[
                "grid overflow-hidden transition-all duration-300",
                activitiesOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0",
              ].join(" ")}
            >
              <div className="min-h-0">
                {/* Mobile activities list */}
                <div className="mt-2 space-y-6 rounded-2xl border border-gray-100 bg-white p-4">
                  {ACTIVITIES_COLUMNS.map((col) => (
                    <div key={col.title}>
                      <h4
                        className={[
                          "mb-3 text-[10px] font-bold uppercase tracking-widest",
                          col.headingClass,
                        ].join(" ")}
                      >
                        {col.title}
                      </h4>

                      <div className="space-y-3">
                        {col.items.map((it) => (
                          <Link
                            key={it.href + it.label}
                            to={it.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-start gap-3 rounded-xl px-2 py-2 hover:bg-gray-50"
                          >
                            <div
                              className={[
                                "flex h-8 w-8 items-center justify-center rounded-lg",
                                it.chipClass,
                              ].join(" ")}
                            >
                              {it.icon}
                            </div>
                            <div>
                              <p className="font-semibold text-black">
                                {it.label}
                              </p>
                              <p className="text-[11px] leading-snug text-gray-400">
                                {it.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <NavMobileLink to="/gallery" onClick={() => setMobileOpen(false)}>
              Gallery
            </NavMobileLink>
            <NavMobileLink
              to="/contact-us"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </NavMobileLink>

            <Link
              to="/join-us"
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-white shadow-lg shadow-zinc-200 transition hover:bg-zinc-800"
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavMobileLink({ to, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="rounded-xl px-3 py-3 hover:bg-gray-50"
    >
      {children}
    </Link>
  );
}

function MegaItem({ item }) {
  return (
    <Link to={item.href} className="group/item flex items-start gap-3">
      <div
        className={[
          "flex h-8 w-8 items-center justify-center rounded-lg transition",
          item.chipClass,
        ].join(" ")}
      >
        {item.icon}
      </div>

      <div>
        <p className="font-semibold text-black">{item.label}</p>
        <p className="text-[11px] leading-snug text-gray-400">{item.desc}</p>
      </div>
    </Link>
  );
}

/** Icons */
function ChevronDown({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
function BarsIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}
function XIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}
