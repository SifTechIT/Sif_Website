import { useEffect, useState } from "react";

export default function AgamasTranslationsPage() {
  return (
    <main>
      <HeroSlider />
      <Stats />
      <ProgramOverview />
      <WhyMatters />
      <FocusAreas />
      <TranslationLanguages />
      <ImpactFuture />
      <GetInvolved />
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
      className={`fixed top-0 inset-x-0 z-50 border-b transition-all backdrop-blur-xl ${
        scrolled ? "bg-white/95 border-gray-200" : "bg-white/80 border-gray-200"
      }`}
    >
      <nav className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between relative">
        <div className="hidden md:flex items-center">
          <ul className="flex gap-8 text-[15px] text-gray-600">
            <li>
              <a className="hover:text-gray-900" href="#programs">
                Programs
              </a>
            </li>
            <li>
              <a className="hover:text-gray-900" href="#impact">
                Impact
              </a>
            </li>
          </ul>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-600 grid place-items-center">
            <span className="text-white text-xl">📜</span>
          </div>
          <span className="text-[20px] font-extrabold tracking-tight">SIF</span>
        </div>
        <div className="flex items-center gap-4 ml-auto">
          <ul className="hidden md:flex gap-8 text-[15px] text-gray-600">
            <li>
              <a className="hover:text-gray-900" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-gray-900" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <button className="px-4 py-2 rounded-md bg-amber-600 text-white text-sm font-semibold hover:bg-amber-700 transition">
            Donate
          </button>
          <button
            className="md:hidden text-2xl text-gray-800"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}

/* ========================= Hero Slider ========================= */
function HeroSlider() {
  const slides = [
    {
      badge: "📜 Preserving Ancient Wisdom for Future Generations",
      title: "Agamas & Translations",
      text: "Preserving, translating, and reviving ancient Indian spiritual and philosophical texts in Pali, Sanskrit, Prakrit, and Tamil—making timeless wisdom accessible to humanity.",
      ctas: [
        { href: "#impact", label: "See Our Progress", primary: true },
        { href: "#focus-areas", label: "Explore Texts", primary: false },
      ],
      bg: "from-amber-600 to-amber-800",
    },
    {
      badge: "🌏 Global Translation Network",
      title: "Universal Access",
      text: "Bridging centuries through translation—from Chinese to Spanish, English to Hindi, and beyond—so sacred knowledge reaches the world.",
      ctas: [
        {
          href: "#translation-languages",
          label: "View Languages",
          primary: true,
        },
        { href: "#get-involved", label: "Join Mission", primary: false },
      ],
      bg: "from-indigo-700 to-amber-600",
    },
    {
      badge: "🌿 Palm-leaf to Digital Archives",
      title: "Cultural Preservation",
      text: "Reviving palm-leaf printing while building open digital archives so fragile manuscripts endure for scholars, practitioners, and communities.",
      ctas: [
        { href: "#why-matters", label: "Why It Matters", primary: true },
        { href: "#impact-future", label: "Our Vision", primary: false },
      ],
      bg: "from-orange-700 to-amber-500",
    },
  ];

  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="h-screen relative overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === idx ? "opacity-100" : "opacity-0"
          } bg-gradient-to-br ${s.bg} flex items-center`}
        >
          <div className="container mx-auto max-w-[800px] px-6 text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur text-sm font-medium mb-8">
              <span>{s.badge}</span>
            </div>
            <h1 className="text-[clamp(3rem,8vw,5rem)] font-extrabold leading-tight mb-4">
              {s.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10">
              {s.text}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {s.ctas.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className={`px-6 py-3 rounded-xl font-semibold text-base transition shadow ${
                    c.primary
                      ? "bg-white text-amber-700 hover:bg-gray-100"
                      : "bg-white/10 border border-white/30 text-white hover:bg-white/20"
                  }`}
                >
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-2 h-2 rounded-full transition ${
              i === idx ? "bg-white scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

/* ========================= Stats ========================= */
function Stats() {
  const cards = [
    {
      n: "50+",
      l: "Manuscripts Digitized",
      grad: "from-amber-600 to-amber-800",
      invert: true,
    },
    { n: "15+", l: "Languages Supported" },
    { n: "200+", l: "Pages Translated" },
    {
      n: "10+",
      l: "Partner Institutions",
      grad: "from-indigo-700 to-amber-700",
      invert: true,
    },
  ];
  return (
    <section id="impact" className="py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Preservation Progress
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Measurable impact in safeguarding ancient wisdom for future
            generations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => (
            <div
              key={c.l}
              className={`rounded-2xl p-10 border ${
                c.grad
                  ? `text-white bg-gradient-to-br ${c.grad} border-transparent`
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="text-6xl font-black mb-2">{c.n}</div>
              <div
                className={`text-sm font-semibold ${
                  c.invert ? "text-white/90" : "text-gray-700"
                }`}
              >
                {c.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= Program Overview ========================= */
function ProgramOverview() {
  return (
    <section id="overview" className="py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Preserving Ancient Wisdom
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            The Agamas & Translations initiative is dedicated to preserving,
            translating, and reviving ancient Indian spiritual and philosophical
            texts written in Pali, Sanskrit, Prakrit, and Tamil.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Many survive only on fragile palm-leaf manuscripts. These timeless
            teachings on mindfulness, compassion, governance, and human
            flourishing are universal resources for humanity.
          </p>
          <p className="text-lg text-gray-600">
            By translating them into modern languages—including Chinese,
            Spanish, English, and Hindi—we make them accessible to
            practitioners, scholars, and communities worldwide.
          </p>
        </div>
        <div className="relative h-[420px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 grid place-items-center">
          <div className="w-52 h-52 rounded-full grid place-items-center text-5xl text-white bg-gradient-to-br from-amber-600 to-indigo-700 animate-spin-slow">
            🕉️
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================= Why It Matters ========================= */
function WhyMatters() {
  const cards = [
    {
      icon: "🏛️",
      title: "Cultural Preservation",
      text: "Palm-leaf manuscripts and early scriptures are part of the world's intangible heritage—safeguarding India's civilizational identity and humanity's spiritual wisdom.",
      bg: "from-amber-100 to-orange-100",
    },
    {
      icon: "🌍",
      title: "Universal Relevance",
      text: "Teachings from the Agamas and Pali texts address questions of suffering, ethics, and liberation that remain relevant today, transcending cultures.",
      bg: "from-indigo-100 to-indigo-200",
    },
    {
      icon: "🌉",
      title: "Bridging Past & Future",
      text: "Translation bridges centuries, ensuring ancient wisdom can inspire new generations of practitioners, researchers, and leaders.",
      bg: "from-emerald-100 to-emerald-200",
    },
    {
      icon: "📚",
      title: "Inclusive Knowledge",
      text: "Making texts available in multiple languages democratizes access, removing barriers of geography, language, or specialized scholarship.",
      bg: "from-pink-100 to-rose-100",
    },
  ];
  return (
    <section id="why-matters" className="py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Why It Matters
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Safeguarding humanity's spiritual and philosophical heritage for
            future generations
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className={`rounded-3xl p-10 border border-gray-200 lg:col-span-6 bg-gradient-to-br ${c.bg}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white grid place-items-center text-3xl mb-6 shadow">
                {c.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{c.title}</h3>
              <p className="text-gray-700 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= Focus Areas ========================= */
function FocusAreas() {
  const cards = [
    {
      icon: "🌿",
      title: "Palm-leaf Sutra Printing",
      text: "Reviving the craft of printing sacred sutras on palm leaves—blending authenticity with modern preservation.",
      grad: "from-emerald-100 to-green-200",
    },
    {
      icon: "📖",
      title: "Agamas & Sutras",
      text: "Collecting, translating, and publishing Buddhist and Jain Agamas, many of which remain untranslated for modern readers.",
      grad: "from-amber-100 to-amber-200",
    },
    {
      icon: "🔤",
      title: "Pali Translations",
      text: "Rendering early Buddhist texts (Nikayas and discourses) into modern languages with scholarly accuracy.",
      grad: "from-indigo-100 to-indigo-200",
    },
    {
      icon: "📜",
      title: "Ancient History Texts",
      text: "Translating works illuminating India's intellectual, social, and spiritual history—philosophy, law, and governance.",
      grad: "from-orange-100 to-amber-100",
    },
    {
      icon: "💻",
      title: "Digital Archives",
      text: "Building open-access libraries for global study, research, and practice.",
      grad: "from-gray-100 to-gray-200",
    },
    {
      icon: "🌏",
      title: "Global Language Network",
      text: "Translations across Chinese, Spanish, English, Hindi, and more—bringing wisdom across cultures.",
      grad: "from-pink-100 to-rose-100",
    },
  ];
  return (
    <section id="focus-areas" className="py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Key Focus Areas
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Comprehensive approach to preserving and sharing ancient wisdom
            traditions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((c) => (
            <div
              key={c.title}
              className={`rounded-2xl border border-gray-200 overflow-hidden transition hover:-translate-y-2 bg-gradient-to-br ${c.grad}`}
            >
              <div className="h-52 grid place-items-center text-6xl text-white bg-gradient-to-br from-amber-600 to-indigo-700">
                {c.icon}
              </div>
              <div className="p-8 bg-white/70 backdrop-blur">
                <h3 className="text-lg font-bold mb-2">{c.title}</h3>
                <p className="text-gray-700 leading-relaxed">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= Translation Languages ========================= */
function TranslationLanguages() {
  const langs = [
    { flag: "🇨🇳", name: "Chinese" },
    { flag: "🇬🇧", name: "English" },
    { flag: "🇪🇸", name: "Spanish" },
    { flag: "🇮🇳", name: "Hindi" },
    { flag: "🇫🇷", name: "French" },
    { flag: "🇩🇪", name: "German" },
    { flag: "🇯🇵", name: "Japanese" },
    { flag: "🌍", name: "+ Many More" },
  ];
  return (
    <section id="translation-languages" className="py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Supported Languages
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Making ancient wisdom accessible across linguistic and cultural
            boundaries
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {langs.map((l) => (
            <div
              key={l.name}
              className="rounded-xl border border-gray-200 p-6 text-center bg-white hover:shadow-lg transition"
            >
              <div className="text-3xl mb-2">{l.flag}</div>
              <div className="text-base font-semibold">{l.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= Impact & Future ========================= */
function ImpactFuture() {
  const impact = [
    "Revival of palm-leaf printing as a cultural and spiritual practice",
    "Initial translations of select sutras into English, Hindi, and other languages",
    "Growing partnerships with scholars, monasteries, and research institutions",
    "Community workshops and publications introducing sutras in accessible language",
    "Digital preservation of fragile manuscript collections",
  ];
  const future = [
    "Expand translation teams to cover all major Agamas and Nikayas systematically",
    "Create parallel translations for scholars and practitioners globally",
    "Build community study centers rooted in these authentic texts",
    "Publish books, digital editions, and open archives for global audiences",
    "Train new translators through fellowships and residencies",
    "Establish the Amaravati Buddhist Centre as a hub for practice and study",
  ];
  return (
    <section id="impact-future" className="py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Impact & Future Vision
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Building on our achievements while expanding access to ancient
            wisdom
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="rounded-3xl p-10 border border-gray-200 bg-gradient-to-br from-amber-100 to-orange-100">
            <div className="w-20 h-20 rounded-2xl bg-white grid place-items-center text-4xl shadow mb-6">
              📊
            </div>
            <h3 className="text-2xl font-bold mb-4">Impact So Far</h3>
            <ul className="space-y-3 text-gray-700">
              {impact.map((i) => (
                <li key={i} className="pl-6 relative">
                  <span className="absolute left-0">•</span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl p-10 border border-gray-200 bg-gradient-to-br from-indigo-100 to-indigo-200">
            <div className="w-20 h-20 rounded-2xl bg-white grid place-items-center text-4xl shadow mb-6">
              🚀
            </div>
            <h3 className="text-2xl font-bold mb-4">Roadmap Ahead</h3>
            <ul className="space-y-3 text-gray-700">
              {future.map((i) => (
                <li key={i} className="pl-6 relative">
                  <span className="absolute left-0">•</span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================= Get Involved ========================= */
function GetInvolved() {
  const cards = [
    {
      icon: "translate",
      title: "Become a Translator",
      desc: "Join our team of scholars working on Pali, Sanskrit, Prakrit, Tamil, Chinese, and modern language translations.",
      cta: "Apply Now",
      grad: "from-amber-600 to-amber-800",
      invert: true,
    },
    {
      icon: "school",
      title: "Research Partnership",
      desc: "Collaborate as an academic institution, monastery, or research center to expand access to invaluable texts.",
      cta: "Partner With Us",
    },
    {
      icon: "volunteer_activism",
      title: "Support Digitization",
      desc: "Help with digital archiving, manuscript preservation, or community outreach for global access.",
      cta: "Get Involved",
    },
    {
      icon: "favorite",
      title: "Fund Preservation",
      desc: "Sponsor digitization, translation projects, or the establishment of study centers.",
      cta: "Sponsor",
      grad: "from-indigo-700 to-amber-700",
      invert: true,
    },
  ];
  return (
    <section id="get-involved" className="py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Join Our Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Support the preservation and translation of ancient wisdom
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {cards.map((c, i) => (
            <div
              key={i}
              className={`rounded-3xl p-10 border overflow-hidden ${
                c.grad
                  ? `bg-gradient-to-br ${c.grad} text-white border-transparent lg:col-span-6`
                  : "bg-white border-gray-200 lg:col-span-6"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-2xl ${
                  c.grad ? "bg-white/10" : "bg-gray-100"
                } grid place-items-center text-3xl mb-6 shadow`}
              >
                {iconEmoji(c.icon)}
              </div>
              <h3 className="text-2xl font-bold mb-3">{c.title}</h3>
              <p
                className={`${
                  c.grad ? "text-white/90" : "text-gray-700"
                } leading-relaxed mb-6`}
              >
                {c.desc}
              </p>
              <a
                href="#"
                className={`inline-block px-5 py-2 rounded-xl font-semibold ${
                  c.grad
                    ? "bg-white/10 border border-white/30 text-white hover:bg-white/20"
                    : "bg-amber-600 text-white hover:bg-amber-700"
                }`}
              >
                {c.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function iconEmoji(name) {
  switch (name) {
    case "translate":
      return "🈯";
    case "school":
      return "🎓";
    case "volunteer_activism":
      return "🤝";
    case "favorite":
      return "❤️";
    default:
      return "✨";
  }
}

/* ========================= Footer ========================= */
function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[1280px] mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <p className="text-white/70">📍 80 Harrison Lane, FL 32547</p>
          <p className="text-white/70">📞 +1 555 87 89 56</p>
          <p className="text-white/70">📧 translations@sifworld.com</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Programs</h3>
          <ul className="space-y-2 text-white/70">
            <li>
              <a href="#overview" className="hover:text-white">
                Agamas & Translations
              </a>
            </li>
            <li>
              <a href="#focus-areas" className="hover:text-white">
                Palm-leaf Printing
              </a>
            </li>
            <li>
              <a href="#focus-areas" className="hover:text-white">
                Digital Archives
              </a>
            </li>
            <li>
              <a href="#impact-future" className="hover:text-white">
                Amaravati Centre
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Get Involved</h3>
          <ul className="space-y-2 text-white/70">
            <li>
              <a href="#get-involved" className="hover:text-white">
                Become Translator
              </a>
            </li>
            <li>
              <a href="#get-involved" className="hover:text-white">
                Research Partnership
              </a>
            </li>
            <li>
              <a href="#get-involved" className="hover:text-white">
                Support Digitization
              </a>
            </li>
            <li>
              <a href="#get-involved" className="hover:text-white">
                Fund Preservation
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <ul className="space-y-2 text-white/70">
            <li>
              <a href="#" className="hover:text-white">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-white/60 text-sm">
        <p>© 2025 Sunyatee International Foundation. All Rights Reserved.</p>
        <p>
          Preserving ancient wisdom, bridging past and future through
          translation and cultural preservation
        </p>
      </div>
    </footer>
  );
}

/* ========================= Utilities ========================= */
// Add a slow spin utility via Tailwind's arbitrary values (no config needed)
// Using inline style via className for slower spin
const style = document?.createElement?.("style");
if (style) {
  style.innerHTML = `@keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } } .animate-spin-slow { animation: spin-slow 20s linear infinite; }`;
  document.head.appendChild(style);
}
