import { useEffect, useState } from "react";

export default function FarmerEmpowermentPage() {
  return (
    <main>
      <HeroSlider />
      <Stats />
      <ProgramOverview />
      <NoniProject />
      <Interventions />
      <Testimonials />
      <GetInvolved />
    </main>
  );
}

/* ========================= Hero Slider ========================= */
function HeroSlider() {
  const slides = [
    {
      badge: "🌾 Sustainable Agriculture, Resilient Communities",
      title: "Farmer Empowerment",
      text: "Transforming rural livelihoods through sustainable agriculture, modern training, and assured market linkages. Building resilient farming communities for the future.",
      ctas: [
        { href: "#impact", label: "See Our Impact", primary: true },
        { href: "#noni-project", label: "Learn About Noni", primary: false },
      ],
      bg: "from-emerald-500 to-emerald-700",
    },
    {
      badge: "🤝 Partnership with DXN",
      title: "Assured Income",
      text: "Through our buy-back scheme with DXN, farmers gain financial security and confidence. Experience the power of guaranteed market linkages.",
      ctas: [
        { href: "#testimonials", label: "Farmer Stories", primary: true },
        { href: "#get-involved", label: "Join Program", primary: false },
      ],
      bg: "from-amber-400 to-amber-700",
    },
    {
      badge: "🚀 Scaling Impact",
      title: "Future Ready",
      text: "From 21 farmers to 200+ acres. Join our mission to expand sustainable farming practices across Telangana and beyond.",
      ctas: [
        { href: "#future-roadmap", label: "Our Vision", primary: true },
        { href: "#interventions", label: "Our Methods", primary: false },
      ],
      bg: "from-emerald-700 to-amber-500",
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
          aria-hidden={i !== idx}
        >
          <div className="container mx-auto max-w-[800px] px-6 text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur text-sm font-medium mb-8">
              <span>{s.badge}</span>
            </div>
            <h1 className="text-[clamp(3rem,8vw,5rem)] font-extrabold leading-tight tracking-[-0.025em] mb-4">
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
                  className={`inline-block px-6 py-3 rounded-xl font-semibold text-base transition shadow ${
                    c.primary
                      ? "bg-white text-emerald-600 hover:bg-gray-100"
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

      {/* dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
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
      n: "21",
      l: "Farmers Empowered in Siddipet",
      grad: "from-emerald-500 to-emerald-700",
      invert: true,
    },
    { n: "55", l: "Acres Under Noni Cultivation" },
    { n: "100%", l: "Buy-back Guarantee Coverage" },
    {
      n: "200+",
      l: "Acres Planned for Expansion",
      grad: "from-amber-400 to-amber-800",
      invert: true,
    },
  ];

  return (
    <section id="impact" className="py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Real Impact, Real Numbers
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Measurable outcomes from our farmer empowerment initiatives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => (
            <div
              key={c.l}
              className={`rounded-2xl p-10 border transition transform hover:-translate-y-2 ${
                c.grad
                  ? `text-white bg-gradient-to-br ${c.grad} border-transparent`
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="text-6xl font-black tracking-tight mb-2">
                {c.n}
              </div>
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
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Program Overview
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            The Farmer Empowerment program is a cornerstone initiative of SIF,
            designed to improve farmer livelihoods through sustainable
            agriculture, modern training, soil health management, and assured
            market linkages.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Our focus extends beyond crop yields to creating resilient farming
            communities that can thrive economically and socially. We believe in
            empowering farmers with knowledge, technology, and market access.
          </p>
          <p className="text-lg text-gray-600">
            Through partnerships with industry leaders like DXN, we ensure that
            farmers have guaranteed buyers for their produce, removing the
            uncertainty that often plagues agricultural income.
          </p>
        </div>
        <div className="relative h-[420px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 grid place-items-center">
          <div className="w-52 h-52 rounded-full grid place-items-center text-5xl text-white bg-gradient-to-br from-emerald-500 to-amber-500 animate-pulse select-none">
            🌱
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================= Noni Project ========================= */
function NoniProject() {
  const cards = [
    {
      icon: "🤝",
      title: "DXN Partnership & Buy-back Scheme",
      text: "SIF facilitated the supply of Noni plants from DXN and established a comprehensive buy-back scheme where harvested fruits are procured by DXN, providing farmers with complete financial security and removing market uncertainties.",
      span: "lg:col-span-8 bg-gradient-to-br from-amber-50 to-orange-200",
    },
    {
      icon: "👨‍🌾",
      title: "Dedicated Support",
      text: "A dedicated field coordinator was appointed to support farmers in day-to-day cultivation activities and maintain strong linkages with all stakeholders.",
      span: "lg:col-span-4 bg-gradient-to-br from-emerald-100 to-emerald-200",
    },
    {
      icon: "🎓",
      title: "Comprehensive Training",
      text: "Farmers received extensive technical training on plantation techniques, irrigation methods, pruning practices, and organic farming approaches to maximize productivity.",
      span: "lg:col-span-6 bg-gradient-to-br from-indigo-100 to-indigo-200",
    },
    {
      icon: "🧪",
      title: "Scientific Soil Management",
      text: "Comprehensive soil testing was conducted to ensure optimal growing conditions and implement best practices for sustainable Noni cultivation.",
      span: "lg:col-span-6 bg-gradient-to-br from-rose-100 to-pink-200",
    },
  ];

  return (
    <section id="noni-project" className="py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            The Noni Project - Siddipet
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            A flagship initiative launched in 2022, transforming lives through
            sustainable Noni cultivation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className={`rounded-3xl p-10 border border-gray-200 bg-white ${c.span} transition hover:-translate-y-2`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white grid place-items-center shadow text-3xl mb-6">
                {c.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{c.title}</h3>
              <p className="text-gray-600 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= Interventions ========================= */
function Interventions() {
  const items = [
    {
      icon: "🧪",
      title: "Soil Testing & Fertility Management",
      text: "Scientific soil assessment and application of bio-fertilizers and organic manures to enhance soil health and productivity.",
    },
    {
      icon: "🎓",
      title: "Training Workshops",
      text: "Practical sessions on crop rotation, organic inputs, pest management, and modern irrigation methods.",
    },
    {
      icon: "🌿",
      title: "Crop Diversification",
      text: "Encouraging farmers to experiment with medicinal and high-value crops to reduce dependency on conventional farming.",
    },
    {
      icon: "👥",
      title: "Farmer Groups & Coordination",
      text: "Forming small farmer groups for collective bargaining, bulk procurement of inputs, and shared learning experiences.",
    },
    {
      icon: "📱",
      title: "Technology Integration",
      text: "Exploring mobile-based monitoring systems for field-level updates, alerts, and productivity tracking.",
    },
    {
      icon: "💰",
      title: "Market Linkages",
      text: "Establishing direct connections with buyers and ensuring assured procurement through strategic partnerships.",
    },
  ];

  return (
    <section id="interventions" className="py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Our Interventions & Activities
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Comprehensive approaches to sustainable farming and community
            empowerment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-gray-200 overflow-hidden transition hover:-translate-y-3"
            >
              <div className="h-48 grid place-items-center text-6xl text-white bg-gradient-to-br from-emerald-500 to-amber-500 select-none">
                {it.icon}
              </div>
              <div className="p-8">
                <h3 className="text-lg font-bold mb-2">{it.title}</h3>
                <p className="text-gray-600 leading-relaxed">{it.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= Testimonials ========================= */
function Testimonials() {
  const slides = [
    {
      text: '"With SIF\'s guidance, we moved to sustainable crops with stable buy-back. Our lives changed as farming became less of a gamble and more of a reliable livelihood."',
      avatar: "F",
      name: "Farmer Coordinator",
      role: "Siddipet, Telangana",
    },
    {
      text: '"The DXN partnership gave us confidence. Knowing our Noni harvest has a guaranteed buyer removed all our market worries. We can focus on quality farming."',
      avatar: "R",
      name: "Ravi Kumar",
      role: "Noni Farmer, Siddipet",
    },
    {
      text: '"SIF\'s training on organic practices not only improved our soil health but also reduced our input costs. Sustainable farming is now our reality."',
      avatar: "S",
      name: "Sunitha Devi",
      role: "Progressive Farmer, Telangana",
    },
  ];

  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="py-28 bg-gray-900 text-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Voices from the Field
          </h2>
          <p className="text-lg md:text-xl text-white/70">
            Real stories from farmers whose lives have been transformed
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl">
          <div
            className="whitespace-nowrap transition-transform duration-700"
            style={{ transform: `translateX(-${idx * 100}%)` }}
          >
            {slides.map((s, i) => (
              <div key={i} className="inline-block align-top w-full">
                <div className="bg-white/5 border border-white/10 backdrop-blur p-12 text-center">
                  <p className="text-2xl md:text-[32px] leading-snug italic mb-10">
                    {s.text}
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 rounded-full grid place-items-center bg-gradient-to-br from-emerald-500 to-amber-500 text-2xl font-bold">
                      {s.avatar}
                    </div>
                    <div className="text-left">
                      <h4 className="text-base font-semibold">{s.name}</h4>
                      <p className="text-sm text-white/70">{s.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* controls */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            onClick={() =>
              setIdx((i) => (i - 1 + slides.length) % slides.length)
            }
            className="w-12 h-12 rounded-full bg-white text-gray-700 border border-gray-200 grid place-items-center hover:scale-105 transition"
            aria-label="Previous testimonial"
          >
            ◀
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-2 h-2 rounded-full transition ${
                  i === idx ? "bg-emerald-400 scale-110" : "bg-white/30"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setIdx((i) => (i + 1) % slides.length)}
            className="w-12 h-12 rounded-full bg-white text-gray-700 border border-gray-200 grid place-items-center hover:scale-105 transition"
            aria-label="Next testimonial"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}

/* ========================= Get Involved ========================= */
function GetInvolved() {
  const cards = [
    {
      icon: "🧑‍🌾",
      title: "Become a Partner Farmer",
      text: "Join our network of progressive farmers and benefit from training, market linkages, and technical support for sustainable agriculture.",
      cta: "Apply Now",
    },
    {
      icon: "🏢",
      title: "Corporate Partnerships",
      text: "Partner with us to create buy-back schemes, provide training, or support farmer community development initiatives.",
      cta: "Partner With Us",
    },
    {
      icon: "🎓",
      title: "Training & Education",
      text: "Support our farmer education programs or volunteer to share knowledge in sustainable agriculture and modern farming techniques.",
      cta: "Get Involved",
    },
    {
      icon: "❤️",
      title: "Sponsor a Farm",
      text: "Help expand our program by sponsoring farmers, funding training workshops, or supporting infrastructure development.",
      cta: "Sponsor",
    },
  ];

  return (
    <section id="get-involved" className="py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Join Our Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Multiple ways to support and participate in farmer empowerment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className={`rounded-3xl p-10 border border-gray-200 bg-white transition hover:-translate-y-2 ${
                i === 0
                  ? "lg:col-span-6 text-white bg-gradient-to-br from-emerald-500 to-emerald-700 border-transparent"
                  : i === 3
                  ? "lg:col-span-6 text-white bg-gradient-to-br from-amber-500 to-amber-800 border-transparent"
                  : "lg:col-span-6"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-2xl grid place-items-center text-3xl mb-6 ${
                  i === 0 || i === 3 ? "bg-white/20" : "bg-gray-100"
                }`}
              >
                {c.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{c.title}</h3>
              <p
                className={`leading-relaxed ${
                  i === 0 || i === 3 ? "text-white/90" : "text-gray-600"
                }`}
              >
                {c.text}
              </p>
              <a
                href="#"
                className={`inline-block mt-6 px-5 py-2.5 rounded-xl font-semibold transition ${
                  i === 0 || i === 3
                    ? "bg-white text-emerald-700 hover:bg-gray-100"
                    : "bg-emerald-500 text-white hover:bg-emerald-600"
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
