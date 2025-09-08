import { useEffect, useMemo, useRef, useState } from "react";

export default function ODOCPage() {
  return (
    <main>
      <Hero />
      <Stats />
      <MissionVision />
      <WhyODOC />
      <HowItWorks />
      <Leadership />
      <Benefits />
      <Support />
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
          <ul className="flex gap-8 text-[15px] text-gray-600 font-medium">
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
          <div className="w-10 h-10 rounded-full bg-emerald-600 grid place-items-center relative overflow-hidden">
            <div className="w-6 h-4 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-2 w-4 h-0.5 bg-white" />
          </div>
          <span className="text-[20px] font-extrabold tracking-tight">
            ODOC
          </span>
        </div>
        <div className="flex items-center gap-4 ml-auto">
          <ul className="hidden md:flex gap-8 text-[15px] text-gray-600 font-medium">
            <li>
              <a className="hover:text-gray-900" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-gray-900" href="#support">
                Support
              </a>
            </li>
          </ul>
          <button className="px-4 py-2 rounded-md bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition">
            Donate $1
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

/* ========================= Hero ========================= */
function Hero() {
  return (
    <section className="h-screen relative overflow-hidden bg-gradient-to-br from-emerald-600 to-sky-500 flex items-center">
      <div className="max-w-[900px] mx-auto px-6 text-center text-white">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur text-sm font-medium mb-8">
          <span>🌍</span>
          Global Nutrition Initiative by DXN & SIF
        </div>
        <h1 className="text-[clamp(3rem,8vw,5rem)] font-extrabold leading-tight mb-2">
          ODOC
        </h1>
        <p className="text-xl md:text-2xl font-semibold opacity-90 mb-4">
          One Dollar. One Child.
        </p>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10">
          Transforming lives through targeted nutrition intervention. Our goal:
          Combat malnutrition in 1 million children through Spirulina
          supplementation and comprehensive health monitoring.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#impact"
            className="px-6 py-3 rounded-xl font-semibold text-base bg-white text-emerald-600 shadow hover:bg-gray-100 transition"
          >
            See Live Impact
          </a>
          <a
            href="#support"
            className="px-6 py-3 rounded-xl font-semibold text-base bg-white/10 border border-white/30 text-white hover:bg-white/20 transition"
          >
            Support a Child
          </a>
        </div>
      </div>
    </section>
  );
}

/* ========================= Stats (Impact Dashboard) ========================= */
function Stats() {
  const targets = useMemo(() => [257, 797, 4, 100], []);
  const [values, setValues] = useState([0, 0, 0, 0]);
  const started = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            // animate numbers
            const duration = 2000; // ms
            const start = performance.now();
            const tick = (t) => {
              const p = Math.min(1, (t - start) / duration);
              setValues(
                targets.map((n, i) =>
                  i === 3 ? Math.round(n * p) : Math.round(n * p)
                )
              );
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (el) io.observe(el);
    return () => io.disconnect();
  }, [targets]);

  const cards = [
    {
      label: "Children Helped",
      grad: "from-emerald-600 to-emerald-800",
      invert: true,
    },
    { label: "Spirulina Bottles Distributed" },
    { label: "Partner Organizations" },
    {
      label: "Transparency in Reporting",
      grad: "from-sky-500 to-teal-600",
      invert: true,
      suffix: "%",
    },
  ];

  return (
    <section id="impact" ref={ref} className="py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Live Impact Dashboard
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Real numbers. Real transformation. 100% transparency in reporting.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <div
              key={c.label}
              className={`rounded-2xl p-10 border ${
                c.grad
                  ? `text-white bg-gradient-to-br ${c.grad} border-transparent`
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="text-6xl font-black mb-2">
                {values[i]}
                {c.suffix || (i === 3 ? "%" : "")}
              </div>
              <div
                className={`text-sm font-semibold ${
                  c.invert ? "text-white/90" : "text-gray-700"
                }`}
              >
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= Mission & Vision ========================= */
function MissionVision() {
  const Card = ({ icon, title, text, grad }) => (
    <div
      className={`rounded-3xl p-12 border border-gray-200 transition hover:-translate-y-1 ${grad}`}
    >
      <div className="w-20 h-20 rounded-2xl bg-white grid place-items-center text-4xl shadow mb-8">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 text-lg leading-7">{text}</p>
    </div>
  );
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Purpose
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Driving the global mission to eliminate childhood malnutrition
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            icon="🎯"
            title="Mission"
            grad="bg-gradient-to-br from-emerald-50 to-green-100"
            text="To create a world where no child suffers from malnutrition. By providing scientifically proven Spirulina supplementation, we deliver essential nutrients that fuel growth, enhance immunity, and unlock every child's potential."
          />
          <Card
            icon="🌟"
            title="Vision"
            grad="bg-gradient-to-br from-sky-50 to-blue-100"
            text="A future where every child has access to proper nutrition, the opportunity to thrive, and the dignity of good health — regardless of background or circumstance."
          />
        </div>
      </div>
    </section>
  );
}

/* ========================= Why ODOC ========================= */
function WhyODOC() {
  const cards = [
    {
      icon: "⚡",
      title: "Nutritional Excellence",
      text: "Spirulina provides complete protein, essential amino acids, vitamins, and minerals in highly bioavailable forms, delivering optimal nutrition for growing children.",
      grad: "from-amber-100 to-orange-200",
    },
    {
      icon: "📊",
      title: "Data-Driven Impact",
      text: "Comprehensive BMI tracking and health monitoring ensure measurable outcomes, providing transparent documentation of every child's progress.",
      grad: "from-indigo-100 to-indigo-200",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Community Education",
      text: "Families and communities are empowered with nutrition knowledge, creating lasting change that extends far beyond our program duration.",
      grad: "from-emerald-100 to-emerald-200",
    },
  ];
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Why ODOC?
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            A revolutionary approach to combating child malnutrition globally
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className={`rounded-3xl p-10 border border-gray-200 bg-gradient-to-br ${c.grad} transition hover:-translate-y-1`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white grid place-items-center text-3xl shadow mb-6">
                {c.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{c.title}</h3>
              <p className="text-gray-600 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= How It Works ========================= */
function HowItWorks() {
  const steps = [
    {
      n: 1,
      t: "Identification",
      d: "Children identified through schools and community partners.",
    },
    {
      n: 2,
      t: "Baseline Evaluation",
      d: "Initial BMI and health assessments recorded.",
    },
    {
      n: 3,
      t: "Daily Supplementation",
      d: "3 grams of DXN Spirulina administered daily.",
    },
    {
      n: 4,
      t: "Progress Monitoring",
      d: "Weekly checks to ensure safety and effectiveness.",
    },
    {
      n: 5,
      t: "Impact Assessment",
      d: "Comprehensive re-evaluation after 45 days to measure improvement.",
    },
  ];
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            How ODOC Works
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            A systematic, evidence-based approach to nutrition intervention
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-600 to-sky-500 text-white grid place-items-center text-3xl font-extrabold mx-auto mb-4 shadow-lg">
                {s.n}
              </div>
              <h3 className="text-base font-bold mb-1">{s.t}</h3>
              <p className="text-gray-600 text-sm leading-snug">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= Leadership ========================= */
function Leadership() {
  const leaders = [
    {
      i: "D",
      name: "Datuk Lim Siow Jin",
      title: "Guiding Principal & Visionary",
      desc: "Leading the global mission to eliminate childhood malnutrition through innovative Spirulina supplementation, with an unwavering commitment to reach 1 million children.",
      grad: "from-amber-100 to-orange-200",
    },
    {
      i: "R",
      name: "Dr. Rajesh Savera",
      title: "Program Director",
      desc: "Pioneering evidence-based nutrition interventions, ensuring measurable, sustainable improvements for vulnerable children worldwide.",
      grad: "from-indigo-100 to-indigo-200",
    },
  ];
  return (
    <section id="leadership" className="py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Leadership Vision
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Dedicated leaders driving global nutrition transformation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leaders.map((l) => (
            <div
              key={l.name}
              className={`rounded-3xl p-12 border border-gray-200 text-center bg-gradient-to-br ${l.grad} transition hover:-translate-y-1`}
            >
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-emerald-600 to-sky-500 text-white grid place-items-center text-4xl font-bold mx-auto mb-6 shadow-lg">
                {l.i}
              </div>
              <h3 className="text-xl font-bold mb-1">{l.name}</h3>
              <p className="text-emerald-700 font-semibold mb-3">{l.title}</p>
              <p className="text-gray-700">{l.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= Spirulina Benefits ========================= */
function Benefits() {
  const items = [
    {
      icon: "💪",
      t: "Complete Protein for Growth",
      d: "Provides all essential amino acids needed for muscle development and healthy growth in children.",
    },
    {
      icon: "🧠",
      t: "Iron-Rich for Cognitive Health",
      d: "High iron content prevents anemia and supports cognitive development and learning capacity.",
    },
    {
      icon: "🛡️",
      t: "Powerful Immunity Boost",
      d: "Rich in antioxidants that strengthen immune system and protect against infections.",
    },
    {
      icon: "⚡",
      t: "Enhanced Energy Levels",
      d: "Natural energy support for active, healthy childhoods and improved physical activity.",
    },
  ];
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Spirulina Health Benefits
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Nature's most complete superfood supporting optimal child
            development
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((b) => (
            <div
              key={b.t}
              className="rounded-2xl p-8 border border-gray-200 bg-gray-50 hover:shadow-xl transition"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-600 text-white grid place-items-center text-2xl mb-4">
                {b.icon}
              </div>
              <h3 className="text-lg font-bold mb-1">{b.t}</h3>
              <p className="text-gray-600">{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= Support ========================= */
function Support() {
  const cards = [
    {
      title: "Sponsor a Child",
      desc: "Fund a child's nutrition for just One Dollar. Your contribution provides life-changing Spirulina supplementation.",
      icon: "favorite",
      grad: "from-emerald-600 to-green-700",
      btn: "Donate $1",
    },
    {
      title: "Partner with Us",
      desc: "Join as an organizational partner to support schools, madrasas, and community centres in reaching vulnerable children.",
      icon: "business",
      grad: "",
      btn: "Partner Now",
    },
    {
      title: "Volunteer & Collaborate",
      desc: "Support field operations, monitoring, or community outreach as a volunteer contributor to our mission.",
      icon: "volunteer_activism",
      grad: "from-sky-500 to-teal-600",
      btn: "Get Involved",
    },
  ];
  return (
    <section id="support" className="py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Help Us Reach 1 Million Children
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Multiple ways to support our global nutrition mission
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className={`rounded-3xl p-10 border text-center ${
                c.grad
                  ? `text-white bg-gradient-to-br ${c.grad} border-transparent`
                  : "bg-white border-gray-200"
              }`}
            >
              <div
                className={`w-20 h-20 rounded-2xl grid place-items-center text-4xl mx-auto mb-6 ${
                  c.grad ? "bg-white/10" : "bg-emerald-600 text-white"
                }`}
              >
                {/* Using emoji fallback for Material icons */}
                {i === 0 ? "❤" : i === 1 ? "🏢" : "🙌"}
              </div>
              <h3 className="text-2xl font-bold mb-2">{c.title}</h3>
              <p
                className={`${c.grad ? "text-white/90" : "text-gray-600"} mb-6`}
              >
                {c.desc}
              </p>
              <a
                href="#"
                className={`inline-block px-5 py-2.5 rounded-xl font-semibold border transition ${
                  c.grad
                    ? "bg-white/10 border-white/20 hover:bg-white/20"
                    : "bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700"
                }`}
              >
                {c.btn}
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
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p className="text-white/80">📍 Global Initiative Headquarters</p>
            <p className="text-white/80">📞 +1 555 ODOC (6362)</p>
            <p className="text-white/80">📧 support@odocglobal.org</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Initiative</h3>
            <ul className="space-y-1 text-white/70">
              <li>
                <a href="#impact" className="hover:text-white">
                  Live Dashboard
                </a>
              </li>
              <li>
                <a href="#mission" className="hover:text-white">
                  Mission & Vision
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-white">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#reports" className="hover:text-white">
                  Impact Reports
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Get Involved</h3>
            <ul className="space-y-1 text-white/70">
              <li>
                <a href="#" className="hover:text-white">
                  Sponsor a Child
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Partner with Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Spread Awareness
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Our Impact</h3>
            <ul className="space-y-1 text-white/70">
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
        <div className="border-t border-white/10 pt-6 text-center text-white/60 space-y-1">
          <p>
            © 2025 ODOC - One Dollar One Child Initiative. A collaborative
            effort by DXN & SIF.
          </p>
          <p>
            Transforming lives, one child at a time, toward a malnutrition-free
            world
          </p>
        </div>
      </div>
    </footer>
  );
}
