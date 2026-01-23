import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Banner1 from "../../assets/ODOC/Banner1.jpeg";
export default function ODOCPage() {
  return (
    <main>
      <header className="hero-section px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-6 bg-green-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-green-700 border border-green-200">
            Global Nutrition Initiative by DXN & SIF
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1] text-gradient">
            One Dollar.
            <br />
            One Child.
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12">
            Combatting malnutrition for 1 million children through targeted
            Spirulina supplementation and comprehensive health monitoring.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="bg-black text-white px-10 py-4 rounded-full font-semibold shadow-lg">
              See Live Impact
            </button>
            <button className="bg-white border border-gray-200 text-gray-600 px-10 py-4 rounded-full font-semibold">
              Our Approach
            </button>
          </div>
        </div>
      </header>

      <section className="py-24 px-6 bg-zinc-900 text-white rounded-[4rem] mx-4 my-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-4">
              Live Impact Dashboard
            </h2>
            <h3 className="text-3xl font-bold">
              Real Transformation. 100% Transparency.
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold accent-green mb-2">50k+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Children
                <br />
                Helped
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-green mb-2">120k+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Spirulina Bottles
                <br />
                Distributed
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-green mb-2">85+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Partner
                <br />
                Organizations
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-green mb-2">100%</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Transparency
                <br />
                In Reporting
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 bg-green-50 rounded-[3rem] border border-green-100">
              <span className="text-2xl mb-4 block">🎯</span>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To create a world where no child suffers from malnutrition. By
                providing scientifically proven Spirulina supplementation, we
                deliver essential nutrients that fuel growth and unlock every
                child's potential.
              </p>
            </div>
            <div className="p-12 bg-zinc-50 rounded-[3rem] border border-gray-100">
              <span className="text-2xl mb-4 block">🌟</span>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A future where every child has access to proper nutrition and
                the dignity of good health — regardless of background or
                circumstance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gradient">
              Why ODOC?
            </h2>
            <p className="text-gray-500 mt-4">
              A revolutionary approach to global child nutrition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bento-card p-10">
              <div className="text-3xl mb-6">⚡</div>
              <h4 className="text-xl font-bold mb-4">Nutritional Excellence</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Spirulina provides complete protein, essential amino acids, and
                minerals in highly bioavailable forms.
              </p>
            </div>
            <div className="bento-card p-10 bg-zinc-900 text-white">
              <div className="text-3xl mb-6">📊</div>
              <h4 className="text-xl font-bold mb-4">Data-Driven Impact</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Comprehensive BMI tracking and health monitoring ensure
                measurable outcomes and transparent progress.
              </p>
            </div>
            <div className="bento-card p-10">
              <div className="text-3xl mb-6">👨‍👩‍👧‍👦</div>
              <h4 className="text-xl font-bold mb-4">Community Education</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Empowering families with nutrition knowledge to create lasting
                change far beyond program duration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center">
          A Systematic Approach.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="text-center">
            <div className="step-number mb-4">STEP 01</div>
            <h4 className="font-bold mb-2">Identification</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Children identified through schools and community partners.
            </p>
          </div>
          <div className="text-center">
            <div className="step-number mb-4">STEP 02</div>
            <h4 className="font-bold mb-2">Baseline Evaluation</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Initial BMI and health assessments recorded.
            </p>
          </div>
          <div className="text-center">
            <div className="step-number mb-4">STEP 03</div>
            <h4 className="font-bold mb-2">Daily Supplement</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              3 grams of DXN Spirulina administered daily.
            </p>
          </div>
          <div className="text-center">
            <div className="step-number mb-4">STEP 04</div>
            <h4 className="font-bold mb-2">Monitoring</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Weekly checks to ensure safety and effectiveness.
            </p>
          </div>
          <div className="text-center">
            <div className="step-number mb-4">STEP 05</div>
            <h4 className="font-bold mb-2">Assessment</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Comprehensive re-evaluation after 45 days.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-green-50/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">
            Nature's Most Complete Superfood.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-6">💪</div>
              <h4 className="font-bold mb-2">Growth</h4>
              <p className="text-xs text-gray-500">
                Complete protein for muscle and healthy growth.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-6">🧠</div>
              <h4 className="font-bold mb-2">Cognitive</h4>
              <p className="text-xs text-gray-500">
                Iron-rich content prevents anemia and supports brain health.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-6">🛡️</div>
              <h4 className="font-bold mb-2">Immunity</h4>
              <p className="text-xs text-gray-500">
                Antioxidants that protect against seasonal infections.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-6">⚡</div>
              <h4 className="font-bold mb-2">Energy</h4>
              <p className="text-xs text-gray-500">
                Natural support for active and healthy childhoods.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex items-start gap-8">
            <div className="w-20 h-20 bg-zinc-100 rounded-full flex-shrink-0 flex items-center justify-center text-2xl font-bold text-gray-400">
              D
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1">Datuk Lim Siow Jin</h4>
              <p className="text-xs text-green-600 font-bold uppercase tracking-widest mb-4">
                Guiding Principal
              </p>
              <p className="text-sm text-gray-500">
                Leading the global mission to eliminate childhood malnutrition
                through innovative supplementation.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-8">
            <div className="w-20 h-20 bg-zinc-100 rounded-full flex-shrink-0 flex items-center justify-center text-2xl font-bold text-gray-400">
              R
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1">Dr. Rajesh Savera</h4>
              <p className="text-xs text-green-600 font-bold uppercase tracking-widest mb-4">
                Program Director
              </p>
              <p className="text-sm text-gray-500">
                Pioneering evidence-based nutrition interventions and ensuring
                sustainable improvements worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gradient">
            Help Us Reach 1 Million Children.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bento-card p-10 flex flex-col justify-between">
            <div>
              <div className="text-2xl mb-6">❤️</div>
              <h4 className="font-bold mb-3">Sponsor a Child</h4>
              <p className="text-sm text-gray-500">
                Fund a child's nutrition for just One Dollar.
              </p>
            </div>
            <button className="mt-8 bg-green-600 text-white py-3 rounded-full text-xs font-bold uppercase tracking-widest">
              Donate $1 Now
            </button>
          </div>
          <div className="bento-card p-10 flex flex-col justify-between bg-zinc-900 text-white border-none">
            <div>
              <div className="text-2xl mb-6">🏢</div>
              <h4 className="font-bold mb-3">Partner With Us</h4>
              <p className="text-sm text-zinc-400">
                Join as an organizational partner for schools and centers.
              </p>
            </div>
            <button className="mt-8 bg-white text-black py-3 rounded-full text-xs font-bold uppercase tracking-widest">
              Partner Now
            </button>
          </div>
          <div className="bento-card p-10 flex flex-col justify-between">
            <div>
              <div className="text-2xl mb-6">🙌</div>
              <h4 className="font-bold mb-3">Volunteer</h4>
              <p className="text-sm text-gray-500">
                Support field operations, monitoring, or outreach.
              </p>
            </div>
            <button className="mt-8 border border-gray-200 text-black py-3 rounded-full text-xs font-bold uppercase tracking-widest">
              Get Involved
            </button>
          </div>
        </div>
      </section>

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

/* ========================= Hero ========================= */
function Hero() {
  return (
    <section className="h-screen relative overflow-hidden bg-gradient-to-br from-emerald-600 to-sky-500 flex items-center">
      <div
        className={"h-full w-full flex items-center bg-center bg-cover"}
        style={{ backgroundImage: `url(${Banner1})` }}
      >
        {/* Overlay */}
        <div
          className="pointer-events-none absolute inset-0 bg-black/30"
          aria-hidden="true"
        />
        <div className="max-w-[900px] mx-auto px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur text-sm font-medium mb-8">
            <span>🌍</span>
            Global Nutrition Initiative by DXN & SIF
          </div>
          <h1 className="text-[clamp(3rem,8vw,5rem)] opacity-90 font-extrabold leading-tight mb-2">
            ODOC
          </h1>
          {/* <p className="text-xl md:text-2xl font-semibold opacity-90 mb-4">
            One Dollar. One Child.
          </p> */}
          <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-10">
            Transforming lives through targeted nutrition intervention. Our
            goal: Combat malnutrition in 1 million children through Spirulina
            supplementation and comprehensive health monitoring.
          </p>
          <div className="flex flex-wrap opacity-90 items-center justify-center gap-4">
            <Link
              to={"/impact-stories"}
              className="px-6 py-3 rounded-xl font-semibold text-base bg-white text-emerald-600 shadow hover:bg-gray-100 transition"
            >
              See Live Impact
            </Link>
            <Link
              to={"/contact-us"}
              className="px-6 py-3 rounded-xl font-semibold text-base bg-white/10 border border-white/30 text-white hover:bg-white/20 transition"
            >
              Support a Child
            </Link>
          </div>
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
                  i === 3 ? Math.round(n * p) : Math.round(n * p),
                ),
              );
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 },
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
      href: "/",
    },
    {
      title: "Partner with Us",
      desc: "Join as an organizational partner to support schools, madrasas, and community centres in reaching vulnerable children.",
      icon: "business",
      grad: "",
      btn: "Partner Now",
      href: "/contact-us",
    },
    {
      title: "Volunteer & Collaborate",
      desc: "Support field operations, monitoring, or community outreach as a volunteer contributor to our mission.",
      icon: "volunteer_activism",
      grad: "from-sky-500 to-teal-600",
      btn: "Get Involved",
      href: "/join-us",
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
              <Link
                to={c.href}
                className={`inline-block px-5 py-2.5 rounded-xl font-semibold border transition ${
                  c.grad
                    ? "bg-white/10 border-white/20 hover:bg-white/20"
                    : "bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700"
                }`}
              >
                {c.btn}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
