import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import NoniCultivate from "../../assets/noni_cultivate.jpg";
import Navbar from "../Navbar/Navbar";
import AboutSIFSection from "./About";
import FeaturesSection from "./Feature";
/**
 * SIFworld.com – Landing Page UI (Single-File React Component)
 * ------------------------------------------------------------
 * - TailwindCSS-based responsive layout
 * - Hero slider (auto + manual)
 * - Pillars/Objectives Tabs
 * - Activities carousel
 * - Sunyatimes section with inline preview + Download
 * - Testimonials carousel
 * - CTA + Footer
 *
 * How to use:
 * 1) Ensure TailwindCSS is configured in your project (https://tailwindcss.com/docs/guides/vite)
 * 2) Drop this file into your React app (e.g., src/pages/SIFLandingPage.jsx)
 * 3) Import and render <SIFLandingPage />
 * 4) Replace placeholder images and links where noted.
 */

// ---------- Mock Data (replace with CMS / API as needed) ----------
const HERO_SLIDES = [
  {
    title: "Awakening Peace. Empowering Communities.",
    sub: "Mindfulness, farmer empowerment, women’s leadership, and cultural revival — powered by Sunya.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    cta: { text: "Join the Movement", href: "#cta" },
  },
  {
    title: "Sunya Meditation: From Stillness to Strength",
    sub: "A step-by-step belt pathway to clarity, resilience, and liberation.",
    image:
      "https://images.unsplash.com/photo-1549877452-9c387954fbc6?q=80&w=1600&auto=format&fit=crop",
    cta: { text: "Explore Sunya", href: "#sunya" },
  },
  {
    title: "One Dollar One Child (ODOC)",
    sub: "Spirulina nutrition for children. A global community initiative.",
    image:
      "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=1600&auto=format&fit=crop",
    cta: { text: "Support ODOC", href: "#odoc" },
  },
];

const PILLARS = [
  {
    key: "mindfulness",
    title: "Mindfulness & Sunya",
    blurb:
      "Spread Sunya globally through retreats, belt certifications, and online programs for all ages.",
    points: [
      "7-Belt pathway: awareness → liberation",
      "Global retreats + 40+ country telecasts",
      "Corporate, youth & special-needs programs",
    ],
  },
  {
    key: "farmers",
    title: "Farmer Empowerment",
    blurb:
      "Sustainable agriculture with soil testing, noni cultivation, training, and buy-back schemes.",
    points: [
      "Noni cultivation in Siddipet (buy-back with DXN)",
      "Soil testing & modern best practices",
      "Market linkage & farmer coordination groups",
    ],
  },
  {
    key: "women",
    title: "Women’s Empowerment",
    blurb:
      "Skill training, SHGs, eco-products, textiles, and entrepreneurship for economic independence.",
    points: [
      "Kimono / zafu / eco-products skills",
      "Income generation & leadership",
      "Awareness campaigns & community impact",
    ],
  },
  {
    key: "csr",
    title: "CSR & Relief",
    blurb:
      "Health, water, PPE, oxygen concentrators, special-needs therapy, and rural awareness drives.",
    points: [
      "Ausum Kids therapy & inclusion",
      "Water treatment in Nagpur",
      "Pandemic relief (PPE, oxygen, masks)",
    ],
  },
  {
    key: "agamas",
    title: "Agamas & Translations",
    blurb:
      "Reviving heritage via palm-leaf printing, sutra translations, and the Amaravati Buddhist Centre.",
    points: [
      "Palm-leaf sutra printing",
      "Agamas & sutra translations",
      "ABC: study & meditation hub",
    ],
  },
];

const ACTIVITIES = [
  {
    title: "Sunya Mega Retreats",
    desc: "Immersive global gatherings in Bodh Gaya & Lumbini, telecast to 40+ countries.",
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Noni Cultivation Project",
    desc: "High-value crop + buy-back assurance improving farmer incomes and soil health.",
    image: NoniCultivate,
  },
  {
    title: "Women Skill Centers",
    desc: "From textiles to eco-products, SHGs powering dignity, resilience, and income.",
    image:
      "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Rural Health & Awareness",
    desc: "Preventive health camps, nutrition, hygiene, mental well-being & Sunya workshops.",
    image:
      "https://images.unsplash.com/photo-1512061942530-1f2b99246584?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Agamas & Sutras",
    desc: "Translations + palm-leaf printing to preserve timeless Indian & Buddhist wisdom.",
    image:
      "https://images.unsplash.com/photo-1526312426976-593c128eea49?q=80&w=1600&auto=format&fit=crop",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Sunya helped our team reduce stress and sharpen focus. Productivity and harmony rose together.",
    author: "Ananya Gupta",
    role: "HR Lead, Pune",
  },
  {
    quote:
      "With SIF’s guidance, our farmers moved to sustainable crops with stable buy-back. Lives changed.",
    author: "Ramesh Kumar",
    role: "Farmer Coordinator, Siddipet",
  },
  {
    quote:
      "The women’s training center made me financially independent. I feel confident and respected.",
    author: "Sushama",
    role: "Women Empowerment Beneficiary",
  },
];

// Replace with your actual magazine PDF asset (public/sunyatimes-2024.pdf for example)
const SUNYATIMES_PDF = "/sunyatimes-annual.pdf"; // TODO: set correct path in your app

// ---------- Helpers ----------
function useInterval(callback, delay) {
  const savedRef = useRef(callback);
  useEffect(() => {
    savedRef.current = callback;
  }, [callback]);
  useEffect(() => {
    if (delay == null) return;
    const id = setInterval(() => savedRef.current?.(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

// ---------- Basic Carousel (fade/slide) ----------
function HeroSlider({ slides = HERO_SLIDES, interval = 5000 }) {
  const [active, setActive] = useState(0);
  const length = slides.length;
  useInterval(() => setActive((i) => (i + 1) % length), interval);

  return (
    <div className="relative h-[68vh] md:h-[82vh] w-full overflow-hidden rounded-3xl shadow-2xl">
      {slides.map((s, i) => {
        const isActive = i === active;
        return (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={!isActive}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${s.image})` }}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 flex h-full items-center justify-start p-6 sm:p-12">
              <div className="max-w-3xl text-white">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight drop-shadow-lg">
                  {s.title}
                </h1>
                <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl">
                  {s.sub}
                </p>
                <div className="mt-8">
                  <a
                    href={s.cta.href}
                    className="inline-flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 text-neutral-900 font-medium shadow hover:bg-white transition"
                  >
                    {s.cta.text}
                    <svg
                      width="18"
                      height="18"
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
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2.5 w-2.5 rounded-full border border-white/70 transition ${
              active === i ? "bg-white" : "bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// ---------- Tabs ----------
function PillarsTabs({ items = PILLARS }) {
  const [active, setActive] = useState(items[0]?.key);
  const activeItem = useMemo(
    () => items.find((i) => i.key === active),
    [active, items]
  );
  return (
    <div className="w-full">
      <div className="no-scrollbar relative flex w-full gap-2 overflow-x-auto rounded-xl bg-neutral-100 p-2 dark:bg-neutral-900/40">
        {items.map((p) => (
          <button
            key={p.key}
            onClick={() => setActive(p.key)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
              p.key === active
                ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                : "bg-white text-neutral-700 hover:bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-neutral-200/60 bg-white/70 p-6 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/50">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold tracking-tight">
              {activeItem?.title}
            </h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
              {activeItem?.blurb}
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-neutral-700 dark:text-neutral-200">
              {activeItem?.points?.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-sky-50 p-6 text-sm shadow-inner dark:from-neutral-800 dark:to-neutral-800/40">
            <p className="font-medium">Quick Links</p>
            <div className="mt-3 grid gap-2">
              <a className="hover:underline" href="#sunya">
                Sunya Meditation
              </a>
              <a className="hover:underline" href="#activities">
                Activities
              </a>
              <a className="hover:underline" href="#odoc">
                ODOC
              </a>
              <a className="hover:underline" href="#sunyatimes">
                Sunyatimes
              </a>
              <a className="hover:underline" href="#cta">
                Volunteer / CSR
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- Horizontal Cards Carousel ----------
function ActivitiesCarousel({ items = ACTIVITIES }) {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

  useInterval(() => setIndex((i) => (i + 1) % items.length), 4500);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const cardWidth = el.firstChild?.getBoundingClientRect?.().width || 320;
    el.scrollTo({ left: index * (cardWidth + 16), behavior: "smooth" });
  }, [index]);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="no-scrollbar flex gap-4 overflow-x-auto pb-2"
      >
        {items.map((a, i) => (
          <div
            key={i}
            className="min-w-[280px] sm:min-w-[340px] md:min-w-[420px] rounded-2xl border border-neutral-200 bg-white shadow hover:shadow-lg transition dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div
              className="h-44 w-full rounded-t-2xl bg-cover bg-center"
              style={{ backgroundImage: `url(${a.image})` }}
            />
            <div className="p-5">
              <h4 className="text-lg font-semibold">{a.title}</h4>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                {a.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute -bottom-6 left-1/2 flex -translate-x-1/2 gap-1.5">
        {items.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-6 rounded-full transition ${
              i === index
                ? "bg-neutral-900 dark:bg-white"
                : "bg-neutral-300 dark:bg-neutral-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ---------- Testimonials Carousel ----------
function Testimonials() {
  const [i, setI] = useState(0);
  useInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 5000);
  const t = TESTIMONIALS[i];
  return (
    <div className="rounded-3xl border border-neutral-200/60 bg-white/60 p-8 text-center shadow backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/60">
      <svg
        className="mx-auto mb-4 h-8 w-8 opacity-70"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V22h8V11.17A5.17 5.17 0 0 0 4.83 6H7.17zm10 0A5.17 5.17 0 0 0 12 11.17V22h8V11.17A5.17 5.17 0 0 0 14.83 6h2.34z" />
      </svg>
      <p className="mx-auto max-w-3xl text-lg leading-relaxed text-neutral-800 dark:text-neutral-100">
        “{t.quote}”
      </p>
      <div className="mt-4 text-sm text-neutral-600 dark:text-neutral-300">
        <span className="font-medium">{t.author}</span> · {t.role}
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {TESTIMONIALS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              idx === i
                ? "bg-neutral-900 dark:bg-white"
                : "bg-neutral-300 dark:bg-neutral-600"
            }`}
            aria-label={`Show testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// ---------- Header / Nav ----------
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 w-full border-b border-neutral-200/60 bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-emerald-400 to-sky-500 shadow" />
          <span className="font-semibold tracking-tight">SIFworld</span>
        </a>
        {/* <nav className="hidden items-center gap-6 md:flex">
          <Link
            to="home"
            className="rounded-lg px-3 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="rounded-lg px-3 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800"
          >
            About Us
          </Link>
          <a href="#sunya" className="hover:text-emerald-600">
            Sunya
          </a>
          <a href="#activities" className="hover:text-emerald-600">
            Activities
          </a>
          <a href="#sunyatimes" className="hover:text-emerald-600">
            Sunyatimes
          </a>
          <a href="#odoc" className="hover:text-emerald-600">
            ODOC
          </a>
          <a
            href="#cta"
            className="rounded-full bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800"
          >
            Get Involved
          </a>
        </nav> */}
        <Navbar />
        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
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
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden">
          <div className="mx-4 mb-3 rounded-2xl border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-900">
            <div className="grid gap-2">
              <Link
                to="home"
                className="rounded-lg px-3 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800"
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="rounded-lg px-3 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800"
              >
                About Us
              </Link>
              <a
                href="#sunya"
                className="rounded-lg px-3 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800"
              >
                Sunya
              </a>
              <a
                href="#activities"
                className="rounded-lg px-3 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800"
              >
                Activities
              </a>
              <a
                href="#sunyatimes"
                className="rounded-lg px-3 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800"
              >
                Sunyatimes
              </a>
              <a
                href="#odoc"
                className="rounded-lg px-3 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800"
              >
                ODOC
              </a>
              <a
                href="#cta"
                className="rounded-lg bg-neutral-900 px-3 py-2 text-white"
              >
                Get Involved
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// ---------- Footer ----------
// function Footer() {
//   return (
//     <footer className="mt-20 border-t border-neutral-200/60 bg-white/70 py-10 dark:border-neutral-800 dark:bg-neutral-950/40">
//       <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-4">
//         <div>
//           <div className="flex items-center gap-2">
//             <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-emerald-400 to-sky-500 shadow" />
//             <span className="font-semibold">SIFworld</span>
//           </div>
//           <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
//             Creating Peace, Prosperity & Mindful Communities since 2019.
//           </p>
//         </div>
//         <div>
//           <p className="font-medium">Explore</p>
//           <ul className="mt-2 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
//             <li>
//               <a className="hover:underline" href="#sunya">
//                 Sunya Meditation
//               </a>
//             </li>
//             <li>
//               <a className="hover:underline" href="#activities">
//                 Activities
//               </a>
//             </li>
//             <li>
//               <a className="hover:underline" href="#odoc">
//                 ODOC
//               </a>
//             </li>
//             <li>
//               <a className="hover:underline" href="#sunyatimes">
//                 Sunyatimes
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <p className="font-medium">Initiatives</p>
//           <ul className="mt-2 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
//             <li>Farmer Empowerment</li>
//             <li>Women Empowerment</li>
//             <li>CSR & Relief</li>
//             <li>Agamas & Translations</li>
//           </ul>
//         </div>
//         <div>
//           <p className="font-medium">Contact</p>
//           <ul className="mt-2 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
//             <li>Hyderabad · Nagpur · Global</li>
//             <li>
//               <a className="hover:underline" href="mailto:hello@sifworld.com">
//                 hello@sifworld.com
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="mx-auto mt-8 max-w-7xl px-4 text-xs text-neutral-500 sm:px-6">
//         © {new Date().getFullYear()} Sunyatee International Foundation
//       </div>
//     </footer>
//   );
// }

// ---------- Page ----------
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-neutral-50 to-white text-neutral-900 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-950 dark:text-white">
      {/* <Navbar /> */}

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6">
        {/* Hero */}
        <HeroSlider />

        {/* Pillars / Tabs */}
        <section id="activities" className="mt-16">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-sm uppercase tracking-wider text-emerald-600">
                Activities
              </p>
              <h2 className="mt-1 text-3xl font-semibold tracking-tight">
                What We Do
              </h2>
            </div>
          </div>
          <ActivitiesCarousel />
        </section>
        <AboutSIFSection />
        <FeaturesSection />
        <section id="pillars" className="mt-16">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-sm uppercase tracking-wider text-emerald-600">
                Our Objectives
              </p>
              <h2 className="mt-1 text-3xl font-semibold tracking-tight">
                Keys to Impact
              </h2>
            </div>
          </div>
          <PillarsTabs />
        </section>

        {/* Activities Carousel */}

        {/* Sunya Section */}
        <section
          id="sunya"
          className="mt-16 rounded-3xl bg-gradient-to-br from-emerald-50 to-sky-50 p-8 shadow-inner dark:from-neutral-900 dark:to-neutral-900/60"
        >
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-3xl font-semibold tracking-tight">
                Sunya Meditation
              </h3>
              <p className="mt-3 text-neutral-700 dark:text-neutral-300">
                Sunya is the wisdom of emptiness: a practical path to clarity,
                balance, and liberation. Our 7-belt pathway guides practitioners
                from self-awareness to mastery through retreats, online
                programs, and community practice.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                <li>• 7-Belt progression · Red → Violet</li>
                <li>• International mega retreats · 40+ country telecasts</li>
                <li>• Corporate, youth & special-needs adaptations</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#cta"
                  className="rounded-full bg-neutral-900 px-5 py-2.5 text-white hover:bg-neutral-800"
                >
                  Join a Retreat
                </a>
                <a
                  href="#sunyatimes"
                  className="rounded-full bg-white px-5 py-2.5 text-neutral-900 shadow hover:bg-neutral-50 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
                >
                  Read Stories
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-2 shadow dark:border-neutral-800 dark:bg-neutral-950">
              <div className="aspect-video w-full overflow-hidden rounded-xl">
                {/* Replace with your video/embed */}
                <img
                  alt="Sunya Practice"
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1515542622106-78bda8ba0e5a?q=80&w=1600&auto=format&fit=crop"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sunyatimes (PDF download + inline preview) */}
        <section id="sunyatimes" className="mt-16">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-sm uppercase tracking-wider text-emerald-600">
                Sunyatimes
              </p>
              <h2 className="mt-1 text-3xl font-semibold tracking-tight">
                Our Annual Voice of Transformation
              </h2>
              <p className="mt-2 max-w-2xl text-neutral-700 dark:text-neutral-300">
                Stories of change across farmers, women, children, and
                communities. Download the latest edition or read inline.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href={SUNYATIMES_PDF}
                download
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <path d="M7 10l5 5 5-5" />
                  <path d="M12 15V3" />
                </svg>
                Download PDF
              </a>
              <a
                href={SUNYATIMES_PDF}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-neutral-900 shadow hover:bg-neutral-50 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
              >
                Open in New Tab
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow dark:border-neutral-800 dark:bg-neutral-950">
            {/*
              NOTE: For robust inline PDF preview, consider pdf.js or an <object> fallback.
              Place the actual PDF in /public and set SUNYATIMES_PDF accordingly.
            */}
            <object
              data={SUNYATIMES_PDF}
              type="application/pdf"
              className="h-[70vh] w-full"
            >
              <p className="p-6 text-sm">
                Inline preview unavailable.{" "}
                <a
                  className="underline"
                  href={SUNYATIMES_PDF}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open the PDF
                </a>
                .
              </p>
            </object>
          </div>
        </section>

        {/* ODOC */}
        <section
          id="odoc"
          className="mt-16 rounded-3xl bg-gradient-to-br from-yellow-50 to-rose-50 p-8 shadow-inner dark:from-neutral-900 dark:to-neutral-900/60"
        >
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-3xl font-semibold tracking-tight">
                One Dollar One Child (ODOC)
              </h3>
              <p className="mt-3 text-neutral-700 dark:text-neutral-300">
                Spirulina nutrition for vulnerable children at just $1 per
                child. Launched at the Sunya Mega Retreat, ODOC is a growing
                movement supported by global Sunyatees and partners to fight
                malnutrition with dignity.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#cta"
                  className="rounded-full bg-neutral-900 px-5 py-2.5 text-white hover:bg-neutral-800"
                >
                  Sponsor a Child
                </a>
                <a
                  href="#activities"
                  className="rounded-full bg-white px-5 py-2.5 text-neutral-900 shadow hover:bg-neutral-50 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
                >
                  See Impact
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="aspect-square overflow-hidden rounded-xl"
                >
                  <img
                    alt="ODOC"
                    className="h-full w-full object-cover"
                    src={`https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=800&auto=format&fit=crop`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="mt-16">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-wider text-emerald-600">
              Testimonials
            </p>
            <h2 className="mt-1 text-3xl font-semibold tracking-tight">
              What People Say
            </h2>
          </div>
          <Testimonials />
        </section>

        {/* CTA */}
        <section
          id="cta"
          className="mt-16 rounded-3xl bg-neutral-900 px-8 py-12 text-white"
        >
          <div className="grid items-center gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-semibold tracking-tight">
                Be part of SIF’s journey.
              </h3>
              <p className="mt-2 text-white/80">
                Volunteer, partner via CSR, or support ODOC. Together, let’s
                make peace and prosperity a lived reality.
              </p>
            </div>
            <div className="flex gap-3 md:justify-end">
              <a
                href="#"
                className="rounded-full bg-white px-5 py-2.5 text-neutral-900 hover:bg-neutral-100"
              >
                Careers
              </a>
              <a
                href="#"
                className="rounded-full bg-white px-5 py-2.5 text-neutral-900 hover:bg-neutral-100"
              >
                Interns
              </a>
              <a
                href="#"
                className="rounded-full bg-white px-5 py-2.5 text-neutral-900 hover:bg-neutral-100"
              >
                Volunteer
              </a>
              <a
                href="#"
                className="rounded-full bg-emerald-500 px-5 py-2.5 text-neutral-900 hover:bg-emerald-400"
              >
                Support
              </a>
            </div>
          </div>
        </section>
      </main>
      {/* 
      <Footer /> */}
    </div>
  );
}
