import { useEffect, useRef, useState } from "react";
import WomenStitching from "../../assets/women_stitching.JPG";
export default function WomenEmpowermentPage() {
  return (
    <main>
      <Hero />
      <Mission />
      <Projects />
      <Impact />
      <CTA />
    </main>
  );
}

/* ========================= Header ========================= */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[1000] border-b transition-all ${
        scrolled ? "bg-white/90" : "bg-white/80"
      } backdrop-saturate-150 backdrop-blur-xl border-black/10`}
    >
      <div className="max-w-[1200px] h-[52px] mx-auto flex items-center justify-between px-5 md:px-10">
        <div className="text-[21px] font-semibold tracking-[-0.01em]">
          Sunyatee International Foundation
        </div>
        <nav className="hidden md:flex items-center gap-8 text-[17px]">
          <a href="#home" className="hover:opacity-80">
            Home
          </a>
          <a href="#mission" className="hover:opacity-80">
            Mission
          </a>
          <a href="#projects" className="hover:opacity-80">
            Projects
          </a>
          <a href="#impact" className="hover:opacity-80">
            Impact
          </a>
        </nav>
        <a
          href="#get-involved"
          className="inline-flex items-center rounded-full bg-[#007aff] text-white px-4 py-2 text-[17px] hover:bg-[#0051d5] transition active:translate-y-px"
        >
          Get Involved
        </a>
      </div>
    </header>
  );
}

/* ========================= Hero ========================= */
function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center text-white bg-gradient-to-br from-[#667eea] to-[#764ba2] relative"
    >
      {/* Inline CSS for custom keyframes */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <div className="max-w-3xl px-5 md:px-10 pt-20">
        <p
          className="text-[19px]"
          style={{ animation: "fadeInUp 1s ease-out 0.3s forwards" }}
        >
          Women Empowerment at SIF
        </p>
        <h1
          className="text-[clamp(48px,6vw,80px)] font-semibold leading-[1.05] tracking-[-0.015em] mt-4"
          style={{ animation: "fadeInUp 1s ease-out 0.5s forwards" }}
        >
          She Leads, We Rise
        </h1>
        <h2
          className="text-[28px] font-normal leading-tight mt-4"
          style={{ animation: "fadeInUp 1s ease-out 0.7s forwards" }}
        >
          Transforming hesitation into confidence, silence into leadership
        </h2>
        <p
          className="text-[21px] text-white/90 leading-relaxed mt-6"
          style={{ animation: "fadeInUp 1s ease-out 0.9s forwards" }}
        >
          Across the heartlands of India—from Nagpur to Siddipet—we are
          rewriting the story of rural women through skill development,
          meditation, and sustainable livelihood programs.
        </p>
        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-6"
          style={{ animation: "fadeInUp 1s ease-out 1.1s forwards" }}
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-[17px] bg-white text-[#1d1d1f] hover:bg-[#f5f5f7] transition shadow-sm"
          >
            Explore Projects
          </a>
          <a
            href="#impact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-[17px] border-2 border-white text-white hover:bg-white/10 transition"
          >
            See Impact
          </a>
        </div>
      </div>
    </section>
  );
}

/* ========================= Mission ========================= */
function Mission() {
  return (
    <section id="mission" className="py-24 bg-[#f5f5f7]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[48px] font-semibold leading-tight text-[#1d1d1f] mb-4">
            The Mission Behind the Movement
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-[24px] leading-snug text-[#1d1d1f]">
              At SIF, we believe women are not just beneficiaries—they are
              builders of change.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {[
            {
              n: 1,
              t: "Inner Strength through Sunya Meditation",
              d: "MSV (Maha Samatha-Vipassana) workshops that bring clarity, calm, and self-awareness to transform lives from within.",
            },
            {
              n: 2,
              t: "Skill-Based Livelihood Training",
              d: "Comprehensive training in tailoring, garment production, and entrepreneurship to create sustainable income opportunities.",
            },
            {
              n: 3,
              t: "Emotional and Physical Well-being",
              d: "Holistic health programs including free medical check-ups and wellness initiatives for complete empowerment.",
            },
          ].map((p) => (
            <Reveal key={p.n}>
              <div className="bg-white p-10 rounded-[18px] text-center border border-[#e5e5e7] hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 grid place-items-center rounded-full bg-[#007aff] text-white text-[21px] font-semibold mx-auto mb-6">
                  {p.n}
                </div>
                <h3 className="text-[21px] font-semibold tracking-[-0.009em] mb-3">
                  {p.t}
                </h3>
                <p className="text-[17px] leading-relaxed text-[#86868b]">
                  {p.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= Projects (Tabs) ========================= */
function Projects() {
  const tabs = [
    { id: "siddipet", label: "Siddipet Production" },
    { id: "gati", label: "GATI Program" },
    { id: "health", label: "Health & Wellness" },
    { id: "research", label: "Research & Data" },
  ];
  const [active, setActive] = useState("siddipet");

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[48px] font-semibold leading-tight mb-4">
            Our Projects
          </h2>
          <p className="text-[21px] text-[#86868b] max-w-3xl mx-auto">
            Comprehensive initiatives designed to address the most pressing
            community needs through targeted programs.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 px-5 md:px-10 mb-16">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-6 py-3 rounded-full text-[17px] transition min-w-[120px] ${
                active === t.id
                  ? "bg-[#007aff] text-white"
                  : "bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e5e5e7]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Panels */}
        <div className="px-5 md:px-10">
          {active === "siddipet" && <SiddipetPanel />}
          {active === "gati" && <GatiPanel />}
          {active === "health" && <HealthPanel />}
          {active === "research" && <ResearchPanel />}
        </div>
      </div>
    </section>
  );
}

function SiddipetPanel() {
  return (
    <div className="animate-[fadeIn_500ms_ease]">
      <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
        <div className="project-info">
          <h3 className="text-[32px] font-semibold tracking-[-0.009em] mb-4">
            Siddipet: Stitching Strength, One Garment at a Time
          </h3>
          <p className="text-[21px] text-[#86868b] mb-6">
            In Siddipet, Telangana, transformation is tangible. Women once bound
            by circumstance now lead production units, stitch school uniforms,
            and contribute to real-world supply chains with pride.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Tailoring and garment finishing",
              "Fabric cutting and pattern making",
              "Kimono and Zafu cushion production",
              "Bulk order stitching for government projects",
              "Home-based work opportunities",
            ].map((f) => (
              <li
                key={f}
                className="flex items-center text-[17px] text-[#1d1d1f]"
              >
                <span className="text-[#007aff] font-semibold mr-3">✓</span>
                {f}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
            {[
              { n: "250+", l: "Women Trained" },
              { n: "10K+", l: "Garments Produced" },
              { n: "100+", l: "Home Workers" },
            ].map((s) => (
              <Reveal key={s.l}>
                <div className="text-center p-5 bg-[#f5f5f7] rounded-xl">
                  <span className="block text-[28px] font-semibold text-[#007aff] leading-none mb-1">
                    {s.n}
                  </span>
                  <span className="block text-sm text-[#86868b]">{s.l}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="h-[400px] rounded-[18px] text-6xl text-white grid place-items-center bg-gradient-to-br from-pink-300 to-rose-500 hover:scale-[1.02] transition-transform">
          <img
            src={WomenStitching}
            alt="Sewing"
            className="w-full h-full object-cover rounded-[18px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            q: "\"I stitched 200 school uniforms this year. For the first time, my children saw me not just as 'amma'—but as someone who makes things that matter.\"",
            a: "Rajitha",
            r: "Production Unit Member, Siddipet",
          },
          {
            q: '"I came in as a silent learner. Today, I train others. This place gave me a future I didn\'t know I could have."',
            a: "Sucharitha",
            r: "Team Leader, Apparel Division",
          },
          {
            q: '"I paid for my daughter\'s classes with the money I earned. It felt like I sewed our dreams into every garment."',
            a: "Jyoti",
            r: "Home-based Tailor, Siddipet",
          },
        ].map((t, i) => (
          <Reveal key={i}>
            <div className="p-8 bg-[#f5f5f7] rounded-[18px] border-l-4 border-[#007aff]">
              <p className="text-[19px] italic mb-3">{t.q}</p>
              <div className="text-[17px] font-semibold">{t.a}</div>
              <div className="text-sm text-[#86868b] mt-1">{t.r}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function GatiPanel() {
  return (
    <div className="animate-[fadeIn_500ms_ease]">
      <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
        <div className="h-[400px] rounded-[18px] text-6xl text-white grid place-items-center bg-gradient-to-br from-sky-400 to-cyan-300 hover:scale-[1.02] transition-transform">
          🚀
        </div>
        <div>
          <h3 className="text-[32px] font-semibold tracking-[-0.009em] mb-4">
            GATI: Awakening Young Entrepreneurs
          </h3>
          <p className="text-[21px] text-[#86868b] mb-6">
            In Nagpur and nearby districts, the Growth Awareness and Training
            Initiative (GATI) is igniting ambition in young women through
            transformative workshops.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Sunya meditation for inner clarity",
              "Personality and leadership training",
              "Business ideation and communication skills",
              "Micro-enterprise development",
              "Two-day intensive workshops",
            ].map((f) => (
              <li key={f} className="flex items-center text-[17px]">
                <span className="text-[#007aff] font-semibold mr-3">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-3 gap-4">
            {[
              { n: "50+", l: "Young Women" },
              { n: "2", l: "Day Workshop" },
              { n: "25+", l: "New Enterprises" },
            ].map((s) => (
              <div
                key={s.l}
                className="text-center p-5 bg-[#f5f5f7] rounded-xl"
              >
                <span className="block text-[28px] font-semibold text-[#007aff] leading-none mb-1">
                  {s.n}
                </span>
                <span className="block text-sm text-[#86868b]">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HealthPanel() {
  return (
    <div className="animate-[fadeIn_500ms_ease]">
      <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h3 className="text-[32px] font-semibold tracking-[-0.009em] mb-4">
            Health & Healing with Dignity
          </h3>
          <p className="text-[21px] text-[#86868b] mb-6">
            We care for the woman beyond the worker. Our comprehensive health
            programs ensure that women are not only heard—but healed and whole.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Free health check-up camps",
              "Blood pressure screening",
              "Hemoglobin testing",
              "Blood sugar monitoring",
              "BMI and general wellness",
            ].map((f) => (
              <li key={f} className="flex items-center text-[17px]">
                <span className="text-[#007aff] font-semibold mr-3">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-3 gap-4">
            {[
              { n: "1,200+", l: "Women Screened" },
              { n: "100%", l: "Free Service" },
              { n: "4", l: "Key Metrics" },
            ].map((s) => (
              <div
                key={s.l}
                className="text-center p-5 bg-[#f5f5f7] rounded-xl"
              >
                <span className="block text-[28px] font-semibold text-[#007aff] leading-none mb-1">
                  {s.n}
                </span>
                <span className="block text-sm text-[#86868b]">{s.l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-[400px] rounded-[18px] text-6xl text-white grid place-items-center bg-gradient-to-br from-emerald-400 to-teal-300 hover:scale-[1.02] transition-transform">
          🏥
        </div>
      </div>
    </div>
  );
}

function ResearchPanel() {
  return (
    <div className="animate-[fadeIn_500ms_ease]">
      <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
        <div className="h-[400px] rounded-[18px] text-6xl text-white grid place-items-center bg-gradient-to-br from-rose-400 to-yellow-300 hover:scale-[1.02] transition-transform">
          📊
        </div>
        <div>
          <h3 className="text-[32px] font-semibold tracking-[-0.009em] mb-4">
            Self-Help Group Research for Smarter Action
          </h3>
          <p className="text-[21px] text-[#86868b] mb-6">
            We're not just acting—we're listening. SIF conducted an on-ground
            research survey of women-led SHGs in rural Nagpur, identifying real
            challenges, strengths, and gaps.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "On-ground SHG research survey",
              "Rural Nagpur focus area",
              "Challenge and strength identification",
              "Women Empowerment Dashboard development",
              "Data-driven program guidance",
            ].map((f) => (
              <li key={f} className="flex items-center text-[17px]">
                <span className="text-[#007aff] font-semibold mr-3">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-3 gap-4">
            {[
              { n: "500+", l: "Women Surveyed" },
              { n: "1", l: "Dashboard Created" },
              { n: "100%", l: "Data Driven" },
            ].map((s) => (
              <div
                key={s.l}
                className="text-center p-5 bg-[#f5f5f7] rounded-xl"
              >
                <span className="block text-[28px] font-semibold text-[#007aff] leading-none mb-1">
                  {s.n}
                </span>
                <span className="block text-sm text-[#86868b]">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========================= Impact ========================= */
function Impact() {
  const data = [
    {
      icon: "👩‍🏫",
      n: "250+",
      label: "Women Trained",
      d: "In tailoring, kimono & cushion stitching",
    },
    {
      icon: "🧵",
      n: "10,000+",
      label: "Garments Produced",
      d: "Across Siddipet & Nagpur centers",
    },
    {
      icon: "💰",
      n: "100+",
      label: "Micro-Enterprises",
      d: "Home-based earners empowered",
    },
    {
      icon: "🧘‍♀️",
      n: "500+",
      label: "Women Meditating",
      d: "MSV meditation practitioners",
    },
    {
      icon: "📦",
      n: "100%",
      label: "On-Time Delivery",
      d: "Government uniform orders",
    },
    {
      icon: "💬",
      n: "50+",
      label: "Leadership Roles",
      d: "Embraced by former trainees",
    },
  ];

  return (
    <section id="impact" className="py-24 bg-[#1d1d1f] text-[#f5f5f7]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[48px] font-semibold leading-tight mb-4 text-[#f5f5f7]">
            Our Collective Impact (2024–25)
          </h2>
          <p className="text-[21px] text-[#a1a1a6] max-w-3xl mx-auto">
            Measurable change across communities, creating ripple effects of
            empowerment and sustainable development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((c) => (
            <Reveal key={c.label}>
              <div className="text-center p-8 rounded-[18px] bg-white/5 border border-white/10">
                <span className="text-4xl mb-4 block">{c.icon}</span>
                <span className="text-[36px] font-semibold text-[#007aff] block mb-2">
                  {c.n}
                </span>
                <div className="text-[17px] font-medium mb-2">{c.label}</div>
                <div className="text-sm text-[#a1a1a6]">{c.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= CTA ========================= */
function CTA() {
  const cardClick = (action) => {
    alert(
      `Thank you for your interest in: ${action}. Our team will contact you within 24 hours with more details about how you can make a difference.`
    );
  };

  const cards = [
    {
      icon: "💡",
      title: "Sponsor a Sewing Machine",
      text: "Provide the tools for sustainable livelihood and independence",
    },
    {
      icon: "🤝",
      title: "Fund a Woman's Training",
      text: "Invest in skill development and long-term empowerment",
    },
    {
      icon: "🧵",
      title: "Order Custom Apparel",
      text: "Support our production units through direct orders",
    },
    {
      icon: "📣",
      title: "Partner with SIF",
      text: "Collaborate on rural production and empowerment projects",
    },
  ];

  return (
    <section
      id="get-involved"
      className="py-24 text-white bg-gradient-to-br from-indigo-400 to-purple-700 text-center"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="mb-16">
          <h2 className="text-[32px] md:text-[48px] font-semibold leading-tight mb-4 text-white">
            Be Part of Her Journey
          </h2>
          <p className="text-[21px] text-white/80 max-w-3xl mx-auto">
            Join us in building a world where every woman lives with voice,
            value, and vision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {cards.map((c) => (
            <Reveal key={c.title}>
              <button
                onClick={() => cardClick(c.title)}
                className="w-full text-left p-8 rounded-[18px] bg-white/10 border border-white/20 backdrop-blur hover:-translate-y-1 hover:bg-white/15 transition cursor-pointer"
              >
                <span className="block text-3xl mb-3">{c.icon}</span>
                <h3 className="text-[19px] font-semibold mb-2">{c.title}</h3>
                <p className="text-[17px] text-white/80">{c.text}</p>
              </button>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-full bg-white text-[#1d1d1f] text-[17px] hover:bg-[#f5f5f7] transition shadow"
          >
            Get Involved Today
          </a>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-full border-2 border-white text-white text-[17px] hover:bg-white/10 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

/* ========================= Footer ========================= */
function Footer() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-10 text-center">
        <p className="text-sm text-[#86868b] leading-relaxed">
          © 2024 Sunyatee International Foundation. All rights reserved.
        </p>
        <p className="text-sm text-[#86868b] leading-relaxed">
          Making a difference, one life at a time.
        </p>
      </div>
    </footer>
  );
}

/* ========================= Reveal-on-scroll helper ========================= */
function Reveal({ children }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("opacity-0", "translate-y-6");

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.remove("opacity-0", "translate-y-6");
            el.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="transition duration-700 ease-out will-change-transform"
    >
      {children}
    </div>
  );
}

/* ========================= Tailwind keyframes (add to config) ========================= */
// In tailwind.config.js, extend animations used above:
// theme: { extend: {
//   keyframes: {
//     fadeInUp: { to: { opacity: '1', transform: 'translateY(0)' } },
//     fadeIn: { from: { opacity: '0', transform: 'translateY(20px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
//   },
//   animation: {
//     fadeInUp: 'fadeInUp 1s ease-out forwards',
//     fadeIn: 'fadeIn 0.5s ease-in-out',
//   }
// } }
