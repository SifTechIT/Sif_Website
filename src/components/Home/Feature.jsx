import { Link } from "react-router-dom";
import Agamas from "../../assets/Home/Agamas_ac.jpeg";
import AusumKids from "../../assets/Home/Ausum_Kids_ac.jpg";
import Awareness from "../../assets/Home/Awareness.jpeg";
import CSR from "../../assets/Home/CSR_ac.png";
import Education from "../../assets/Home/Education_ac.jpg";
import Farmer from "../../assets/Home/Farmer_ac.jpeg";
import ODOC from "../../assets/Home/ODOC_ac.jpeg";
import SunyaMeditation from "../../assets/Home/Sunya_meditation_ac.JPG";
import Women from "../../assets/Home/Women_ac.jpg";

const DEFAULT_SERVICES = [
  {
    key: "sunya",
    title: "Sunya Meditation Programs",
    desc: "Structured 7-belt pathway, retreats, and online practice to build clarity and resilience.",
    img: SunyaMeditation,
    href: "/meditation",
  },
  {
    key: "farmer",
    title: "Farmer Empowerment",
    desc: "Soil testing, noni cultivation, training & buy-back support to boost farmer incomes.",
    img: Farmer,
    href: "/farmer-empowerment",
  },
  {
    key: "women",
    title: "Women’s Skill Centers",
    desc: "Textiles, eco-products, and SHG-led entrepreneurship for livelihood and dignity.",
    img: Women,
    href: "/women-empowerment",
  },
  {
    key: "health",
    title: "Rural Health & Awareness",
    desc: "Preventive health camps, nutrition & hygiene sessions, mental well-being workshops.",
    img: Awareness,
    href: "/rural-health-awareness",
  },
  {
    key: "csr",
    title: "CSR Partnerships",
    desc: "Design and execution of high-impact CSR programs in health, education, and livelihoods.",
    img: CSR,
    href: "/csr-partnership",
  },
  {
    key: "odoc",
    title: "One Dollar One Child",
    desc: "Spirulina nutrition at $1 per child—community-driven malnutrition intervention.",
    img: ODOC,
    href: "/onedollar-onechild",
  },
  {
    key: "ausum",
    title: "Ausum Kids",
    desc: "Therapy & inclusion programs for children on the spectrum and their caregivers.",
    img: AusumKids,
    href: "/child-education",
  },
  {
    key: "agamas",
    title: "Agamas & Translations",
    desc: "Palm-leaf sutra printing and scripture translations preserving timeless wisdom.",
    img: Agamas,
    href: "/agamas-translations",
  },
  {
    key: "education",
    title: "Internships & Education",
    desc: "Hands-on training in IT, design, agritech, and management for youth and volunteers.",
    img: Education,
    href: "/internships-education",
  },
];

function ServiceCard({ s }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
      {/* Top image */}
      <div className="relative">
        <div className="aspect-[16/9] w-full overflow-hidden">
          <img
            src={s.img}
            alt={s.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
          {s.desc}
        </p>

        <div className="mt-4">
          <Link
            to={s.href}
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
          >
            Know more
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
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function ServicesGridSection({
  items = DEFAULT_SERVICES,
  title = "Our Activities",
  subtitle = "Explore how we serve communities through meditation, empowerment, health, heritage, and education.",
}) {
  return (
    <section id="services" className="mt-30 mx-auto max-w-7xl px-4 sm:px-6">
      {/* Heading */}
      <div className="mb-6">
        <p className="text-sm uppercase tracking-wider text-emerald-600">
          Activities
        </p>
        <h2 className="mt-1 text-3xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-2 max-w-2xl text-neutral-700 dark:text-neutral-300">
          {subtitle}
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.slice(0, 9).map((s) => (
          <ServiceCard key={s.key} s={s} />
        ))}
      </div>
    </section>
  );
}
