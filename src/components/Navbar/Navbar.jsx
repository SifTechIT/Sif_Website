import { Link } from "react-router-dom";

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
  return (
    <nav className="sticky inset-x-0 top-0 z-[100] border-b border-gray-100 bg-white/70 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
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
            <button className="flex items-center gap-1 py-4 transition hover:text-black">
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
            <button className="flex items-center gap-1 py-4 transition hover:text-black">
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
        <div className="flex items-center gap-6">
          <Link
            to="/join-us"
            className="rounded-full bg-black px-6 py-2 text-[11px] font-bold uppercase tracking-widest text-white shadow-lg shadow-zinc-200 transition hover:bg-zinc-800"
          >
            Join Us
          </Link>

          <button className="text-xl text-gray-600 lg:hidden" aria-label="Menu">
            <BarsIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
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

function OmIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c-2.8 0-5 2.2-5 5 0 1.6.7 2.9 1.9 3.9-.6.5-1.4.8-2.3.8v2c2 0 3.5-.7 4.5-1.9.6.2 1.2.3 1.9.3 3.3 0 6-2.7 6-6 0-2.8-2.2-5-5-5Zm0 2c1.7 0 3 1.3 3 3 0 2.2-1.8 4-4 4-1.7 0-3-1.3-3-3 0-2.2 1.8-4 4-4Zm-6.5 13.5c.9 2.6 3.4 4.5 6.5 4.5 3.9 0 7-3.1 7-7h-2c0 2.8-2.2 5-5 5-2.3 0-4.2-1.5-4.8-3.6l-1.7.6Z" />
    </svg>
  );
}
function SparkIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l1.2 5.2L18 9l-4.8 1.8L12 16l-1.2-5.2L6 9l4.8-1.8L12 2Zm7 10l.7 3-3 1.1L15.6 19l-1.1-3-3-1.1 3-1.1L15.6 11 16.7 14l3 1.1-3 .9Z" />
    </svg>
  );
}
function SeedlingIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 22v-7c-2.8 0-5-2.2-5-5V4h2v6c0 1.7 1.3 3 3 3V2c5 0 9 4 9 9 0 3.9-3.1 7-7 7v4h-2Z" />
    </svg>
  );
}
function FemaleIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm1 14.9V20h3v2h-3v2h-2v-2H8v-2h3v-3.1a8.9 8.9 0 0 0 2 0Z" />
    </svg>
  );
}
function PlusIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11 4h2v16h-2zM4 11h16v2H4z" />
    </svg>
  );
}
function ChildIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-7 20a7 7 0 0 1 14 0h-2a5 5 0 0 0-10 0H5Zm7-12c-3 0-6 2-6 5v1h12v-1c0-3-3-5-6-5Z" />
    </svg>
  );
}
function LeafIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4c-7 0-12 5-12 12 0 2.2.7 4.2 2 6-4.2-1-7-4.5-7-9 0-6 5-9 17-9v0Zm-9 9c-1.7 0-3 1.3-3 3 0 1.2.7 2.3 1.8 2.8.6-1.5 1.6-2.7 3.2-3.8-.4-1.1-1.5-1.8-2.9-1.8Z" />
    </svg>
  );
}
function ScrollIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2Zm2 6h8v2H8V9Zm0 4h8v2H8v-2Zm0 4h6v2H8v-2Z" />
    </svg>
  );
}
function BuildingIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 22V3h10v19H4Zm12 0V9h4v13h-4ZM6 6h2v2H6V6Zm0 4h2v2H6v-2Zm0 4h2v2H6v-2Zm4-8h2v2h-2V6Zm0 4h2v2h-2v-2Zm0 4h2v2h-2v-2Z" />
    </svg>
  );
}
function PrinterIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 7V3h10v4H7Zm10 12v-3H7v3H5v-7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v7h-2Z" />
    </svg>
  );
}
function HandshakeIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 12 4 8l2-2 4 4-2 2Zm8 0-2-2 4-4 2 2-4 4ZM9 13l2-2 2 2 2-2 2 2-2 2-2-2-2 2-2-2-2 2-2-2 2-2 2 2Zm-4 2 2 2 2-2 2 2 2-2 2 2 2-2 2 2-2 2-2-2-2 2-2-2-2 2-2-2-2 2-2-2 2-2Z" />
    </svg>
  );
}
function CapIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3Zm-7 9.7V16c0 2.2 3.1 4 7 4s7-1.8 7-4v-3.3l-7 3.8-7-3.8Z" />
    </svg>
  );
}
