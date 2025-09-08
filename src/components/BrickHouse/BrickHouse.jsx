import { useEffect, useState } from "react";

export default function BrickHouseProjectPage() {
  return (
    <main>
      <HeroSlider />
      <Stats />
      <ProgramOverview />
      <WhyMatters />
      <FocusAreas />
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
      className={`fixed top-0 inset-x-0 z-50 border-b transition-all ${
        scrolled ? "bg-white/95 border-gray-200" : "bg-white/80 border-gray-200"
      } backdrop-blur-xl`}
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
            <span className="text-white text-xl">🏛️</span>
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
          <button className="px-4 py-2 rounded-md bg-amber-600 text-white text-sm font-semibold hover:bg-orange-600 transition">
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
      badge: "🏛️ Reviving Ancient Indian Traditions & Knowledge Systems",
      title: "Brick House Project",
      text: "Building enduring foundations for cultural preservation. From architectural heritage to intellectual treasures, safeguarding what is timeless while reinterpreting it for today's world.",
      ctas: [
        { href: "#impact", label: "See Our Impact", primary: true },
        { href: "#focus-areas", label: "Explore Projects", primary: false },
      ],
      bg: "from-amber-700 to-orange-700",
    },
    {
      badge: "🧱 Each Brick Strengthens Heritage",
      title: "Enduring Foundations",
      text: "Just as each brick contributes to a strong house, each preserved text, tradition, and practice strengthens the collective heritage of humanity.",
      ctas: [
        { href: "#why-matters", label: "Why It Matters", primary: true },
        { href: "#get-involved", label: "Join Mission", primary: false },
      ],
      bg: "from-yellow-600 to-rose-600",
    },
    {
      badge: "🌱 Revival of Indian Traditions (IT)",
      title: "Ancient IT",
      text: "True innovation for the future lies in re-learning from the past. Reviving Indian traditions in philosophy, ecology, health, architecture, and governance for modern applications.",
      ctas: [
        { href: "#impact-future", label: "Our Vision", primary: true },
        { href: "#focus-areas", label: "Learn More", primary: false },
      ],
      bg: "from-emerald-600 to-amber-600",
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
      n: "25+",
      l: "Heritage Sites Documented",
      grad: "from-amber-700 to-orange-700",
      invert: true,
    },
    { n: "100+", l: "Ancient Manuscripts Preserved" },
    { n: "50+", l: "Community Workshops Conducted" },
    {
      n: "5+",
      l: "Brick House Centers Planned",
      grad: "from-yellow-600 to-rose-600",
      invert: true,
    },
  ];
  return (
    <section id="impact" className="py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Heritage Preservation Progress
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Measurable impact in safeguarding and reviving ancient Indian
            traditions
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
              <div className="text-5xl font-black mb-2">{c.n}</div>
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
            Building on Ancient Foundations
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            The Brick House Project is rooted in the vision of reviving ancient
            Indian traditions, knowledge systems, and cultural practices, while
            blending them with modern needs and applications.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            From architectural heritage to intellectual treasures, we safeguard
            what is timeless and reinterpret it for today's world. Each
            preserved text, tradition, or practice strengthens humanity's
            collective heritage.
          </p>
          <p className="text-lg text-gray-600">
            Progress does not mean abandoning the past. By reviving Indian
            traditions, texts, and architecture, we lay bricks for a house where
            wisdom, culture, and sustainability can live together.
          </p>
        </div>
        <div className="relative h-[420px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 grid place-items-center">
          <div className="w-52 h-52 rounded-2xl grid place-items-center text-5xl text-white bg-gradient-to-br from-amber-700 to-orange-600 animate-pulse relative">
            <div className="absolute -top-5 left-8 right-8 h-5 rounded-t-xl bg-rose-600" />
            🧱
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
      title: "Cultural Continuity",
      text: "Ancient Indian architecture, rituals, and knowledge systems form the backbone of our civilizational identity. Preserving them keeps the cultural DNA alive for future generations.",
      span: "lg:col-span-6 bg-gradient-to-br from-amber-50 to-orange-100",
    },
    {
      icon: "🧘",
      title: "Spiritual Relevance",
      text: "These traditions carry vital insights into mindfulness, healing, ethics, and community living that remain essential for modern societies seeking meaning and balance.",
      span: "lg:col-span-6 bg-gradient-to-br from-emerald-50 to-green-100",
    },
    {
      icon: "💡",
      title: "Revival of IT (Indian Traditions)",
      text: "True innovation for the future lies in re-learning from the past — ancient philosophy, ecology, health systems, architecture, and governance hold solutions for contemporary challenges.",
      span: "lg:col-span-6 bg-gradient-to-br from-indigo-50 to-blue-100",
    },
    {
      icon: "🌍",
      title: "Global Heritage",
      text: "What India safeguards enriches the world. Ancient practices hold universal lessons in sustainability, simplicity, and wisdom that transcend cultural boundaries.",
      span: "lg:col-span-6 bg-gradient-to-br from-pink-50 to-rose-100",
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
            Preserving cultural DNA while unlocking ancient wisdom for modern
            challenges
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className={`rounded-3xl p-10 border border-gray-200 ${c.span}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white grid place-items-center text-3xl mb-6 shadow">
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

/* ========================= Focus Areas ========================= */
function FocusAreas() {
  const focus = [
    {
      icon: "🏗️",
      title: "Architectural Revival",
      text: "Documenting and reinterpreting ancient Indian brick and stone architecture, ensuring eco-friendly designs and sustainable building practices are not lost to time.",
    },
    {
      icon: "📜",
      title: "Manuscript Preservation",
      text: "Safeguarding palm-leaf and handmade paper texts that hold invaluable knowledge of medicine, agriculture, astronomy, and philosophy.",
    },
    {
      icon: "📚",
      title: "Knowledge Translation",
      text: "Making ancient systems of Ayurveda, Siddha, Yoga, Buddhist and Jain Agamas accessible through modern publications and translations.",
    },
    {
      icon: "🎨",
      title: "Cultural Education",
      text: "Programs for youth and communities that integrate traditional crafts, rituals, and wisdom into experiential learning and modern education.",
    },
    {
      icon: "🏛️",
      title: "Community Hubs (Brick Houses)",
      text: "Establishing meditation halls, libraries, and cultural centers inspired by ancient design principles but equipped for modern community use.",
    },
    {
      icon: "🌿",
      title: "Living Heritage Projects",
      text: "Creating eco-villages, traditional design schools, and cultural festivals that bring ancient practices into contemporary life.",
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
            Comprehensive approach to cultural preservation and knowledge
            revival
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focus.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-gray-200 overflow-hidden transition hover:-translate-y-3"
            >
              <div className="h-52 grid place-items-center text-6xl text-white bg-gradient-to-br from-amber-700 to-orange-600">
                {f.icon}
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.text}</p>
              </div>
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
    "Revival of palm-leaf sutra printing using laser technology as a bridge between heritage and innovation",
    "Documentation of ancient architectural practices and their application in eco-conscious community buildings",
    "Awareness workshops in villages and schools on Indian history, values, and knowledge systems",
    "Collaborations with scholars, monks, and architects to bring ancient wisdom into present-day projects",
    "Digital preservation of fragile manuscript collections and architectural blueprints",
  ];
  const future = [
    "Build dedicated Brick House Centres across India — hubs of culture, meditation, and heritage preservation",
    "Expand translation and preservation of ancient Indian texts across Ayurveda, architecture, astronomy, and governance",
    "Partner with universities and cultural institutions to create open-access digital archives",
    "Develop living heritage projects: eco-villages, traditional design schools, and cultural festivals",
    "Train new generation of heritage preservationists through fellowships and workshops",
    "Create sustainable tourism models around heritage sites and traditional crafts",
  ];
  return (
    <section id="impact-future" className="py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Impact & Future Vision
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Building on our achievements while expanding cultural preservation
            efforts
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="rounded-3xl p-10 bg-gradient-to-br from-amber-50 to-orange-100 border border-amber-200">
            <div className="w-20 h-20 rounded-2xl bg-white grid place-items-center text-4xl shadow mb-6">
              📊
            </div>
            <h3 className="text-2xl font-bold mb-4">Impact So Far</h3>
            <ul className="space-y-3 list-disc pl-5 text-gray-700">
              {impact.map((i, idx) => (
                <li key={idx}>{i}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl p-10 bg-gradient-to-br from-indigo-50 to-blue-100 border border-indigo-200">
            <div className="w-20 h-20 rounded-2xl bg-white grid place-items-center text-4xl shadow mb-6">
              🚀
            </div>
            <h3 className="text-2xl font-bold mb-4">Future Roadmap</h3>
            <ul className="space-y-3 list-disc pl-5 text-gray-700">
              {future.map((i, idx) => (
                <li key={idx}>{i}</li>
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
      icon: "account_balance",
      title: "Heritage Documentation",
      text: "Help document ancient architecture, traditional crafts, or manuscript collections in your region. Contribute to preserving India's cultural heritage for future generations.",
      primary: true,
      cta: "Get Involved",
    },
    {
      icon: "school",
      title: "Research Partnership",
      text: "Collaborate with us as an academic institution, cultural organization, or heritage expert to advance knowledge translation and preservation efforts.",
      cta: "Partner With Us",
    },
    {
      icon: "groups",
      title: "Community Programs",
      text: "Organize or participate in cultural education workshops, traditional craft sessions, or heritage awareness programs in your community.",
      cta: "Join Programs",
    },
    {
      icon: "favorite",
      title: "Fund Brick House Centers",
      text: "Support the establishment of Brick House Centers — community hubs that serve as libraries, meditation halls, and cultural preservation centers.",
      accent: true,
      cta: "Sponsor",
    },
  ];
  return (
    <section id="get-involved" className="py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Build Heritage With Us
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Multiple ways to support the preservation and revival of ancient
            Indian traditions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {cards.map((c, idx) => (
            <div
              key={c.title}
              className={`rounded-3xl p-10 border transition hover:-translate-y-2 ${
                idx === 0
                  ? "lg:col-span-6 text-white bg-gradient-to-br from-amber-700 to-orange-700 border-transparent"
                  : idx === 3
                  ? "lg:col-span-6 text-white bg-gradient-to-br from-yellow-600 to-rose-600 border-transparent"
                  : "lg:col-span-6 bg-white border-gray-200"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-2xl grid place-items-center text-3xl mb-6 shadow ${
                  idx === 0 || idx === 3
                    ? "bg-white/10 border border-white/20"
                    : "bg-gray-50"
                }`}
              >
                <span className="material-icons">{c.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{c.title}</h3>
              <p
                className={`leading-relaxed ${
                  idx === 0 || idx === 3 ? "text-white/90" : "text-gray-600"
                }`}
              >
                {c.text}
              </p>
              <a
                href="#"
                className={`inline-block mt-6 px-5 py-2.5 rounded-xl font-semibold ${
                  idx === 0 || idx === 3
                    ? "bg-white/10 border border-white/30 text-white hover:bg-white/20"
                    : "bg-amber-600 text-white hover:bg-orange-600"
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

/* ========================= Footer ========================= */
function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[1280px] mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="font-bold mb-4">Contact</h3>
          <ul className="space-y-2 text-white/70">
            <li>📍 80 Harrison Lane, FL 32547</li>
            <li>📞 +1 555 87 89 56</li>
            <li>📧 heritage@sifworld.com</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Programs</h3>
          <ul className="space-y-2 text-white/70">
            <li>
              <a href="#" className="hover:text-white">
                Brick House Project
              </a>
            </li>
            <li>
              <a href="#focus-areas" className="hover:text-white">
                Architectural Revival
              </a>
            </li>
            <li>
              <a href="#focus-areas" className="hover:text-white">
                Manuscript Preservation
              </a>
            </li>
            <li>
              <a href="#focus-areas" className="hover:text-white">
                Cultural Education
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Get Involved</h3>
          <ul className="space-y-2 text-white/70">
            <li>
              <a href="#get-involved" className="hover:text-white">
                Heritage Documentation
              </a>
            </li>
            <li>
              <a href="#get-involved" className="hover:text-white">
                Research Partnership
              </a>
            </li>
            <li>
              <a href="#get-involved" className="hover:text-white">
                Community Programs
              </a>
            </li>
            <li>
              <a href="#get-involved" className="hover:text-white">
                Fund Centers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Follow Us</h3>
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
      <div className="border-t border-white/10 py-6 text-center text-white/60">
        <p>© 2025 Sunyatee International Foundation. All Rights Reserved.</p>
        <p className="mt-1">
          Building enduring foundations where wisdom, culture, and
          sustainability live together
        </p>
      </div>
    </footer>
  );
}
