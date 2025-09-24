import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../../assets/PalmLeafSutra/Banner.JPG";
import Missions from "../../assets/PalmLeafSutra/Mission.jpg";

export default function PalmLeafSutraPage() {
  return (
    <main>
      <Hero />
      <ArtisanStats />
      <Mission />
      <TraditionInnovation />
      <SacredTexts />
      <Timeline />
      <Impact />
      <GetInvolved />
    </main>
  );
}

/* ========================= Utilities ========================= */
function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}

function FadeIn({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ========================= Hero ========================= */
function Hero() {
  return (
    <section className="relative overflow-hidden h-screen bg-gradient-to-br from-amber-600 to-emerald-600 flex items-center text-white">
      <div
        className={
          "h-full w-full flex items-center justify-center text-center bg-center bg-cover"
        }
        style={{ backgroundImage: `url(${Banner})` }}
      >
        {/* Overlay */}
        <div
          className="pointer-events-none absolute inset-0 bg-black/30"
          aria-hidden="true"
        />
        <div className="container max-w-[900px] mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur text-sm font-medium mb-8">
            <span>🌿</span> Ancient Craftsmanship Meets Modern Technology
          </div>
          <h1 className="text-[clamp(3rem,8vw,5rem)]  opacity-90 font-extrabold leading-tight mb-2">
            Palm Leaf Sutra Printing
          </h1>
          {/* <p className="text-2xl font-semibold opacity-90 mb-4">
            Reviving India's Sacred Manuscript Tradition
          </p> */}
          <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-8">
            Starting with the Diamond Sutra, this initiative fuses ancestral
            craftsmanship with modern laser technology to preserve timeless
            wisdom while empowering artisans with sustainable livelihoods.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 opacity-90">
            <a
              href="#artisan-legacy"
              className="px-6 py-3 rounded-xl font-semibold bg-white text-amber-700 shadow hover:bg-gray-100"
            >
              Meet Our Artisans
            </a>
            <a
              href="#sacred-texts"
              className="px-6 py-3 rounded-xl font-semibold bg-white/10 border border-white/30 text-white hover:bg-white/20"
            >
              Explore Texts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================= Artisan Stats ========================= */
function ArtisanStats() {
  const cards = [
    {
      n: "800+",
      l: "Skilled Artisans Involved in Crafting Process",
      grad: "from-amber-600 to-amber-500",
      invert: true,
      span: "lg:col-span-6",
    },
    { n: "8", l: "Dedicated Employees", span: "lg:col-span-3" },
    {
      n: "1000+",
      l: "Years of Living Heritage",
      grad: "from-emerald-600 to-emerald-700",
      invert: true,
      span: "lg:col-span-3",
    },
  ];
  return (
    <section id="artisan-legacy" className="py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Artisan Legacy
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Empowering the keepers of Odisha's palm-leaf tradition for centuries
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {cards.map((c) => (
            <div
              key={c.l}
              className={`rounded-3xl p-10 border ${
                c.grad
                  ? `text-white bg-gradient-to-br ${c.grad} border-transparent`
                  : "bg-white border-gray-200"
              } ${c.span}`}
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

/* ========================= Mission ========================= */
function Mission() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Safeguarding, rejuvenating, and sharing India's palm-leaf manuscript
            heritage
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-extrabold mb-6">
              Preserving Wisdom for Future Generations
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              The Palm Leaf Sutra Printing Project revives one of India's most
              sacred traditions — the art of inscribing scriptures on palm
              leaves.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              This initiative represents more than cultural preservation; it's
              about creating sustainable livelihoods for artisan families while
              ensuring that ancient wisdom continues to guide future
              generations.
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Preserving ancient sutras and scriptures for future generations",
                "Empowering artisans with sustainable, fair employment",
                "Blending traditional handcraft with modern engraving technology",
                "Creating global awareness of India's manuscript culture",
              ].map((t) => (
                <li
                  key={t}
                  className="relative pl-8 text-gray-700 leading-relaxed text-lg"
                >
                  <span className="absolute left-0">🌿</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
            <img
              src={Missions}
              alt="circle"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================= Tradition Meets Innovation ========================= */
function TraditionInnovation() {
  const cards = [
    {
      icon: "✋",
      title: "Handcrafted Palm Leaves",
      text: "Each leaf is prepared with care, following ancient techniques of curing and polishing passed down through generations of artisans.",
      bg: "from-amber-50 to-orange-100",
    },
    {
      icon: "⚡",
      title: "Modern Laser Engraving",
      text: "Sutras are etched with precision and durability using advanced laser technology, ensuring they endure across generations.",
      bg: "from-indigo-100 to-indigo-200",
    },
    {
      icon: "📿",
      title: "Sacred Texts",
      text: "Beginning with the Diamond Sutra and expanding to include the complete collection of Buddhist and spiritual manuscripts.",
      bg: "from-emerald-100 to-emerald-200",
    },
  ];
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Tradition Meets Innovation
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Blending ancestral wisdom with modern precision for lasting
            preservation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <FadeIn key={c.title}>
              <div
                className={`rounded-3xl p-10 border border-gray-200 text-center bg-gradient-to-br ${c.bg} hover:-translate-y-2 transition`}
              >
                <div className="w-20 h-20 rounded-2xl bg-white grid place-items-center text-4xl mx-auto mb-6 shadow">
                  {c.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{c.title}</h3>
                <p className="text-gray-700 leading-relaxed">{c.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= Sacred Texts ========================= */
function SacredTexts() {
  const texts = [
    { icon: "💎", name: "Diamond Sutra" },
    { icon: "🧘", name: "Satipatthana Sutra" },
    { icon: "🌬️", name: "Maha Anapana Smriti" },
    { icon: "❤️", name: "Heart Sutra" },
    { icon: "🤝", name: "12 Commitments" },
    { icon: "📖", name: "Gita in 84 Verses" },
    { icon: "🗣️", name: "Nikayas" },
    { icon: "📚", name: "Agamas" },
  ];
  return (
    <section id="sacred-texts" className="py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Sacred Texts Collection
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Preserving the most important spiritual manuscripts for humanity
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {texts.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl p-6 text-center border border-gray-200 bg-gray-50 hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="text-2xl mb-2 text-amber-600">{t.icon}</div>
              <div className="text-sm font-semibold">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= Timeline ========================= */
function Timeline() {
  const rows = [
    {
      date: "5th Century BCE",
      title: "Ancient Origins",
      desc: "Palm-leaf writing emerges as the primary medium for India's sacred texts and scholarly works.",
    },
    {
      date: "4th–12th Centuries CE",
      title: "Golden Age of Manuscripts",
      desc: "The tradition flourishes in universities like Nalanda, preserving vast libraries of knowledge on palm leaves.",
    },
    {
      date: "19th Century",
      title: "Transition Period",
      desc: "Paper begins to replace palm leaves, but the Odisha tradition endures through dedicated artisan families.",
    },
    {
      date: "February 26, 2024",
      title: "Modern Revival",
      desc: "Sunyatee International Foundation launches the Palm Leaf Printing Project in Pune, blending tradition with technology.",
    },
    {
      date: "Future",
      title: "Global Expansion",
      desc: "Expanding to more texts, empowering artisans further, and inspiring global audiences with ancient wisdom.",
    },
  ];
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Journey Through Time
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            From ancient origins to modern revival of palm-leaf manuscript
            tradition
          </p>
        </div>
        {/* Desktop two-column alternating; mobile stacked */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-amber-600 -translate-x-1/2" />
          <div className="space-y-12">
            {rows.map((r, i) => (
              <FadeIn key={r.title}>
                <div
                  className={`md:grid md:grid-cols-2 md:gap-10 items-center ${
                    i % 2 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`${i % 2 ? "md:order-2" : ""} md:pl-8 md:pr-8`}
                  ></div>
                  <div
                    className={`${i % 2 ? "md:col-start-1" : "md:col-start-2"}`}
                  >
                    <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                      <div className="text-amber-600 font-bold mb-2">
                        {r.date}
                      </div>
                      <div className="text-xl font-semibold mb-1">
                        {r.title}
                      </div>
                      <p className="text-gray-600 leading-relaxed">{r.desc}</p>
                      <span className="hidden md:block absolute top-1/2 -translate-y-1/2 left-[-14px] w-3.5 h-3.5 rounded-full bg-amber-600 border-4 border-white shadow" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================= Impact ========================= */
function Impact() {
  const items = [
    {
      icon: "🏛️",
      title: "Cultural Restoration",
      desc: "Revival of a 1,000-year-old manuscript tradition, ensuring its survival for future generations to study and practice.",
    },
    {
      icon: "💎",
      title: "Diamond Sutra Preservation",
      desc: "Complete preservation of the Diamond Sutra through precision laser engraving on traditionally prepared palm leaves.",
    },
    {
      icon: "👨‍🎨",
      title: "Artisan Empowerment",
      desc: "Direct employment and sustainable livelihoods for 800+ skilled artisans preserving this ancient craft in Odisha.",
    },
    {
      icon: "💼",
      title: "Sustainable Employment",
      desc: "Creation of fair, sustainable jobs for local families, ensuring economic stability while preserving cultural heritage.",
    },
    {
      icon: "🌉",
      title: "Tradition-Technology Bridge",
      desc: "Successful integration of traditional craftsmanship with modern technology to safeguard world heritage.",
    },
    {
      icon: "🌍",
      title: "Global Awareness",
      desc: "Increasing international recognition and appreciation of India's manuscript culture and spiritual heritage.",
    },
  ];
  return (
    <section id="impact" className="py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Impact
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Measurable outcomes from preserving and reviving ancient manuscript
            traditions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl p-8 border border-gray-200 bg-gradient-to-br from-amber-50 to-emerald-50 hover:-translate-y-1 transition"
            >
              <div className="w-14 h-14 rounded-xl bg-amber-600 text-white grid place-items-center text-2xl mb-4">
                {it.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{it.title}</h3>
              <p className="text-gray-700 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= Get Involved ========================= */
function GetInvolved() {
  const cards = [
    {
      icon: "🧑‍🎨",
      title: "Support Artisans",
      desc: "Help artisans sustain their craft and livelihood by supporting our palm leaf printing initiatives and traditional skill preservation programs.",
      grad: "from-amber-600 to-amber-500",
      lightIcon: true,
      cta: "Support Now",
      href: "/contact-us",
    },
    {
      icon: "📜",
      title: "Cultural Preservation",
      desc: "Contribute to cultural preservation and global heritage by sponsoring manuscript digitization and preservation projects.",
      grad: "from-white to-white",
      cta: "Contribute",
      href: "/",
    },
    {
      icon: "📚",
      title: "Spread Wisdom",
      desc: "Ensure that timeless wisdom of sutras continues to inspire generations through education and awareness programs.",
      grad: "from-emerald-600 to-emerald-700",
      lightIcon: true,
      cta: "Get Involved",
      href: "/join-us",
    },
  ];
  return (
    <section id="get-involved" className="py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Join the Legacy
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Be part of preserving the world's oldest living manuscript tradition
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className={`rounded-3xl p-10 border border-gray-200 bg-gradient-to-br ${
                c.grad
              } ${c.grad.includes("white") ? "text-gray-900" : "text-white"}`}
            >
              <div
                className={`w-20 h-20 rounded-2xl grid place-items-center text-4xl mx-auto mb-6 ${
                  c.grad.includes("white")
                    ? "bg-amber-600 text-white"
                    : "bg-white/10 border border-white/20"
                }`}
              >
                <span className="material-icons">{c.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center">{c.title}</h3>
              <p
                className={`leading-relaxed ${
                  c.grad.includes("white") ? "text-gray-700" : "text-white/90"
                } text-center`}
              >
                {c.desc}
              </p>
              <div className="text-center mt-6">
                <Link
                  to={c.href}
                  className={`inline-block px-5 py-2.5 rounded-xl font-semibold border ${
                    c.grad.includes("white")
                      ? "bg-amber-600 text-white border-amber-600 hover:bg-amber-700"
                      : "bg-white/10 border-white/30 text-white hover:bg-white/20"
                  }`}
                >
                  {c.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
