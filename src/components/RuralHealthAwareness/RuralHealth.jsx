import { useEffect, useState } from "react";

export default function RuralHealthPage() {
  return (
    <main>
      <HeroSlider />
      <Stats />
      <ProgramOverview />
      <ProgramFocus />
      <Interventions />
      <Testimonials />
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
        {/* left */}
        <div className="hidden md:flex items-center">
          <ul className="flex gap-8 text-[15px] text-gray-600">
            <li>
              <a className="hover:text-gray-900" href="#program-focus">
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

        {/* center logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 relative overflow-hidden grid place-items-center">
            <span className="text-white text-xl">🏥</span>
          </div>
          <span className="text-[20px] font-extrabold tracking-tight">SIF</span>
        </div>

        {/* right */}
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
          <button className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 active:translate-y-px transition">
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
      badge: "🏥 Preventive Healthcare for Rural Communities",
      title: "Rural Health & Awareness",
      text: "Bringing comprehensive healthcare, nutrition education, and wellness awareness to underserved villages. Building healthier, informed, and resilient communities.",
      ctas: [
        { href: "#impact", label: "See Our Impact", primary: true },
        { href: "#program-focus", label: "Our Programs", primary: false },
      ],
      bg: "from-blue-600 to-blue-800",
    },
    {
      badge: "🧠 Mental Health & Mindfulness",
      title: "Holistic Wellness",
      text: "Integrating Sunya meditation with health education to address both physical and mental well-being in rural communities across India.",
      ctas: [
        { href: "#testimonials", label: "Community Stories", primary: true },
        { href: "#interventions", label: "Our Methods", primary: false },
      ],
      bg: "from-teal-500 to-emerald-500",
    },
    {
      badge: "🚀 Scaling Healthcare Access",
      title: "Future Ready",
      text: "Expanding to 50+ villages annually with mobile health units, telehealth services, and digital health tracking for maximum community impact.",
      ctas: [
        { href: "#future-roadmap", label: "Our Vision", primary: true },
        { href: "#get-involved", label: "Join Mission", primary: false },
      ],
      bg: "from-emerald-500 to-blue-600",
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
                      ? "bg-white text-blue-700 hover:bg-gray-100"
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
      n: "5,000+",
      l: "Rural Beneficiaries Reached",
      grad: "from-blue-600 to-blue-800",
    },
    { n: "25+", l: "Villages Currently Served" },
    { n: "200+", l: "Health Camps Conducted" },
    {
      n: "50+",
      l: "Target Villages by 2026",
      grad: "from-teal-500 to-emerald-500",
    },
  ];

  return (
    <section id="impact" className="py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Health Impact Metrics
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Measurable outcomes from our rural health and awareness initiatives
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
              <div className="text-5xl md:text-6xl font-black tracking-tight mb-2">
                {c.n}
              </div>
              <div
                className={`text-sm font-semibold ${
                  c.grad ? "text-white/90" : "text-gray-700"
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
            The Rural Health & Awareness program is dedicated to bringing
            preventive healthcare, nutrition education, and wellness awareness
            to underserved villages across India.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Our comprehensive approach addresses both physical and mental
            well-being, making rural communities healthier, more informed, and
            resilient. We believe that health education is as important as
            healthcare itself.
          </p>
          <p className="text-lg text-gray-600">
            Through partnerships with medical professionals, NGOs, and
            government health departments, we create sustainable healthcare
            models that empower communities to take charge of their wellness.
          </p>
        </div>
        <div className="relative h-[420px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 grid place-items-center">
          <div className="w-52 h-52 rounded-full grid place-items-center text-5xl text-white bg-gradient-to-br from-blue-600 to-teal-500 animate-pulse select-none">
            ❤️
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================= Program Focus ========================= */
function ProgramFocus() {
  const cards = [
    {
      icon: "🏥",
      title: "Preventive Health Camps",
      text: "Regular camps in villages covering general check-ups, maternal and child health, eye care, and early detection of common diseases through mobile medical units.",
      span: "lg:col-span-6 bg-gradient-to-br from-blue-100 to-blue-200",
    },
    {
      icon: "🥗",
      title: "Nutrition & Hygiene Awareness",
      text: "Educational sessions on balanced diets, safe drinking water practices, sanitation protocols, and healthy cooking methods for sustainable wellness.",
      span: "lg:col-span-6 bg-gradient-to-br from-emerald-100 to-emerald-200",
    },
    {
      icon: "🧘",
      title: "Mental Health & Mindfulness",
      text: "Workshops integrating Sunya meditation techniques for stress reduction, emotional balance, and mental clarity in rural communities.",
      span: "lg:col-span-6 bg-gradient-to-br from-amber-100 to-amber-200",
    },
    {
      icon: "📢",
      title: "Special Health Campaigns",
      text: "Targeted drives around menstrual hygiene, seasonal disease prevention, vaccination awareness, and health crisis preparedness.",
      span: "lg:col-span-6 bg-gradient-to-br from-rose-100 to-pink-200",
    },
    {
      icon: "🤝",
      title: "Strategic Partnerships",
      text: "Collaboration with volunteer doctors, local NGOs, CSR partners, and government health departments to maximize community impact and create sustainable healthcare models for long-term wellness.",
      span: "lg:col-span-12 bg-gradient-to-br from-indigo-100 to-indigo-200",
    },
  ];

  return (
    <section id="program-focus" className="py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Program Focus Areas
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Comprehensive health initiatives addressing multiple dimensions of
            rural wellness
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
      icon: "🚐",
      title: "Village Health Camps",
      text: "Mobile medical units and periodic check-ups conducted by volunteer doctors, bringing healthcare directly to remote villages.",
    },
    {
      icon: "🏫",
      title: "School Health Education",
      text: "Age-appropriate modules on hygiene, nutrition, and healthy habits delivered to children in rural schools.",
    },
    {
      icon: "👩",
      title: "Women's Health Programs",
      text: "Special focus on adolescent girls and women with awareness on menstrual health, maternal care, and anemia prevention.",
    },
    {
      icon: "🎒",
      title: "Essential Kit Distribution",
      text: "Distribution of hygiene kits, water filters, basic PPE, and health essentials to families in need.",
    },
    {
      icon: "🚪",
      title: "Community Awareness Drives",
      text: "Door-to-door campaigns and village meetings to spread key health messages and encourage preventive care.",
    },
    {
      icon: "📊",
      title: "Health Tracking & Follow-up",
      text: "Systematic monitoring of health outcomes and follow-up care to ensure sustainable improvements in community wellness.",
    },
  ];

  return (
    <section id="interventions" className="py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Key Interventions & Activities
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Comprehensive on-ground initiatives bringing healthcare directly to
            rural communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-gray-200 overflow-hidden transition hover:-translate-y-3"
            >
              <div className="h-48 grid place-items-center text-6xl text-white bg-gradient-to-br from-blue-600 to-teal-500 select-none">
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
      text: '"Before SIF\'s awareness drive, many in our village ignored basic hygiene. Now our children follow safe practices, and women openly discuss health issues without hesitation."',
      avatar: "C",
      name: "Community Volunteer",
      role: "Rural Telangana",
    },
    {
      text: '"The mobile health camps brought medical care to our doorstep. Early detection saved my mother\'s life, and now our entire family prioritizes preventive health check-ups."',
      avatar: "R",
      name: "Rajesh Kumar",
      role: "Village Health Beneficiary",
    },
    {
      text: "\"SIF's women's health programs gave us courage to seek proper care. The menstrual hygiene awareness changed how we approach health in our community.\"",
      avatar: "S",
      name: "Sita Devi",
      role: "Women's Health Advocate",
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
            Voices from Rural Communities
          </h2>
          <p className="text-lg md:text-xl text-white/70">
            Real stories of health transformation in underserved villages
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
                    <div className="w-16 h-16 rounded-full grid place-items-center bg-gradient-to-br from-blue-600 to-teal-500 text-2xl font-bold">
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
                  i === idx ? "bg-teal-400 scale-110" : "bg-white/30"
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
      icon: "🩺",
      title: "Volunteer Doctor",
      text: "Join our medical camps as a volunteer healthcare professional and provide essential medical services to underserved rural communities.",
      cta: "Register Now",
    },
    {
      icon: "🏢",
      title: "Corporate Health Partnerships",
      text: "Partner with us through CSR initiatives to sponsor health camps, provide medical equipment, or support health education programs.",
      cta: "Partner With Us",
    },
    {
      icon: "🎓",
      title: "Health Education Volunteer",
      text: "Support our awareness campaigns by volunteering to teach hygiene, nutrition, and wellness practices in rural schools and communities.",
      cta: "Get Involved",
    },
    {
      icon: "❤️",
      title: "Sponsor Health Camps",
      text: "Fund mobile health units, medical supplies, or health education materials to bring comprehensive healthcare to more rural villages.",
      cta: "Sponsor",
    },
  ];

  return (
    <section id="get-involved" className="py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Join Our Health Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Multiple ways to support rural health and wellness initiatives
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className={`rounded-3xl p-10 border border-gray-200 bg-white transition hover:-translate-y-2 ${
                i === 0
                  ? "lg:col-span-6 text-white bg-gradient-to-br from-blue-600 to-blue-800 border-transparent"
                  : i === 3
                  ? "lg:col-span-6 text-white bg-gradient-to-br from-teal-500 to-emerald-600 border-transparent"
                  : "lg:col-span-6"
              }`}
            >
              <div
                className={`${
                  i === 0 || i === 3 ? "bg-white/20" : "bg-gray-100"
                } w-16 h-16 rounded-2xl grid place-items-center text-3xl mb-6`}
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
                    ? "bg-white text-blue-700 hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
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
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-white/70">📍 80 Harrison Lane, FL 32547</p>
            <p className="text-white/70">📞 +1 555 87 89 56</p>
            <p className="text-white/70">📧 health@sifworld.com</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Programs</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#" className="hover:text-white">
                  Rural Health & Awareness
                </a>
              </li>
              <li>
                <a href="#program-focus" className="hover:text-white">
                  Mobile Health Camps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Sunya Meditation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Farmer Empowerment
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Get Involved</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#" className="hover:text-white">
                  Volunteer Doctor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Health Education
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Sponsor Health Camp
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Community Outreach
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
        <div className="border-t border-white/10 pt-6 text-center text-white/60">
          <p>© 2025 Sunyatee International Foundation. All Rights Reserved.</p>
          <p>
            Bringing healthcare, wellness, and hope to rural communities across
            India
          </p>
        </div>
      </div>
    </footer>
  );
}
