import { useEffect, useMemo, useRef, useState } from "react";

// If you're using Next.js, you can move the <Head> font link there.
// For CRA/Vite, add Inter in index.html or via @import in your CSS.

export default function SunyaLanding() {
  return (
    <main>
      <Hero />
      <Stats />
      <WhatIsSunya />
      <Benefits />
      <Activities />
      <Testimonials />
      <GetInvolved />
    </main>
  );
}

/* ========================= Hero ========================= */
function Hero() {
  const slides = useMemo(
    () => [
      {
        badge: "🧘‍♂️ Ancient Wisdom, Modern Practice",
        title: "Sunya Meditation",
        desc: "Experience the transformative power of NOTHING. Discover inner peace through ancient wisdom revived for the modern world.",
        ctas: [
          { href: "#benefits", label: "Discover Benefits", variant: "primary" },
          { href: "#activities", label: "View Programs", variant: "secondary" },
        ],
        bg: "from-indigo-500 to-indigo-600",
      },
      {
        badge: "🌿 Find Your Center",
        title: "Inner Peace Awaits",
        desc: "In a world of noise, discover silence. Sunya brings you back to stillness, clarity, and purpose through conscious emptiness.",
        ctas: [
          { href: "#testimonials", label: "Read Stories", variant: "primary" },
          { href: "#get-involved", label: "Join Today", variant: "secondary" },
        ],
        bg: "from-emerald-500 to-indigo-500",
      },
      {
        badge: "✨ Transform Your Life",
        title: "Meet Yourself",
        desc: "Practiced by thousands worldwide, Sunya forms the cornerstone of personality development and mindful living. Start your journey today.",
        ctas: [
          { href: "#stats", label: "See Impact", variant: "primary" },
          { href: "#what-is-sunya", label: "Learn More", variant: "secondary" },
        ],
        bg: "from-indigo-600 to-emerald-500",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      5000
    );
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="h-screen relative overflow-hidden " aria-label="Hero">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ${
            index === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`h-full w-full bg-gradient-to-br ${s.bg} flex items-center`}
          >
            <div className="max-w-[1280px] mx-auto px-6 w-full">
              <div className="text-white max-w-3xl mx-auto text-center animate-[slideUp_800ms_cubic-bezier(0.4,0,0.2,1)]">
                <div className="inline-flex items-center gap-2 mb-8 rounded-full border border-white/20 bg-white/10 backdrop-blur px-4 py-1.5 text-sm font-medium">
                  <span>{s.badge.split(" ")[0]}</span>
                  <span>{s.badge.split(" ").slice(1).join(" ")}</span>
                </div>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight mb-4">
                  {s.title}
                </h1>
                <p className="text-lg md:text-xl/8 opacity-90 mb-10">
                  {s.desc}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {s.ctas.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      className={
                        c.variant === "primary"
                          ? "inline-block rounded-xl bg-white text-indigo-600 font-semibold px-6 py-3 shadow hover:shadow-xl transition active:translate-y-px"
                          : "inline-block rounded-xl border border-white/40 bg-white/10 text-white font-semibold px-6 py-3 backdrop-blur hover:bg-white/20 transition"
                      }
                    >
                      {c.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition transform ${
              index === i ? "bg-white scale-110" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

/* ========================= Stats ========================= */
function Stats() {
  const ref = useFadeIn();

  const stats = [
    {
      label: "Meditation Retreats Conducted",
      value: "300+",
      variant: "gradient",
    },
    { label: "Lives Transformed", value: "5,000+" },
    { label: "Countries Active", value: "4" },
    { label: "Partner Organizations", value: "50+", variant: "green" },
  ];

  return (
    <section id="stats" className="py-28 bg-gray-50" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader
          title="Impact at Scale"
          subtitle="Real numbers from our global Sunya meditation community"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-3xl border p-10 transition hover:-translate-y-2 hover:shadow-2xl ${
                s.variant === "gradient"
                  ? "bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-transparent"
                  : s.variant === "green"
                  ? "bg-gradient-to-br from-emerald-500 to-emerald-700 text-white border-transparent"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="text-5xl font-black tracking-tight mb-2">
                {s.value}
              </div>
              <div
                className={`${
                  s.variant ? "opacity-90" : "text-gray-600"
                } font-semibold`}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= What is Sunya ========================= */
function WhatIsSunya() {
  const ref = useFadeIn();

  return (
    <section id="what-is-sunya" className="py-28 bg-white" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
            What is Sunya Meditation?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Sunya is a transformative practice that helps you reconnect with
            your true self by consciously letting go of thoughts, judgments, and
            external influences.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            In a world full of noise and distractions, Sunya represents zero,
            emptiness, or simply... NOTHING. It's not just a technique—it's a
            way of life that leads to internal alignment, peace, and
            transformation.
          </p>
          <p className="text-lg text-gray-600">
            Sunya is not an escape. It's a return—to simplicity, to self, and to
            truth. In a world that constantly tells you to be more, Sunya
            invites you to just be.
          </p>
        </div>

        <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
          <div className="w-52 h-52 rounded-full bg-gradient-to-br from-indigo-500 to-emerald-500 flex items-center justify-center animate-[breathe_4s_ease-in-out_infinite]">
            <span className="text-6xl text-white">🕯️</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================= Benefits ========================= */
function Benefits() {
  const ref = useFadeIn();
  const cards = [
    {
      icon: "🌟",
      title: "Personality Development",
      text: "Cultivate discipline, confidence, and emotional intelligence through regular practice. Build the foundation for a more centered and purposeful life.",
      bg: "from-amber-100 to-orange-100",
    },
    {
      icon: "🧠",
      title: "Mental Clarity & Balance",
      text: "Say goodbye to overthinking, stress, and anxiety. Experience mental clarity and emotional balance that enhances your daily life and decision-making.",
      bg: "from-violet-200 to-indigo-100",
    },
    {
      icon: "❤️",
      title: "Improved Relationships",
      text: "By knowing yourself better, you connect better with others. Develop deeper, more meaningful relationships based on understanding and compassion.",
      bg: "from-rose-100 to-rose-200",
    },
    {
      icon: "💫",
      title: "Purposeful Living",
      text: "Sunya centers you—bringing focus to your actions and meaning to your life. Discover your true purpose and live with intention and clarity.",
      bg: "from-emerald-100 to-green-200",
    },
  ];

  return (
    <section id="benefits" className="py-28 bg-gray-50" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader
          title="Why Practice Sunya?"
          subtitle="Discover the transformative benefits that await you on this journey"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {cards.map((c) => (
            <div
              key={c.title}
              className={`rounded-3xl p-10 border transition hover:-translate-y-2 hover:shadow-2xl bg-gradient-to-br ${c.bg} border-gray-200/70`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow flex items-center justify-center text-3xl mb-6">
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

/* ========================= Activities (Carousel) ========================= */
function Activities() {
  const ref = useFadeIn();

  const slides = [
    [
      {
        icon: "🪷",
        title: "Foundation Course",
        desc: "A 3-day beginner-level meditation and self-awareness workshop conducted in communities, colleges, and NGOs.",
        tags: ["3 Days", "Beginner", "Group Sessions"],
      },
      {
        icon: "🧘",
        title: "Residential Retreats",
        desc: "Multi-day silent retreats (3, 7, or 10 days) in serene environments with expert guidance for deep practice.",
        tags: ["Silent Retreat", "7-10 Days", "Deep Practice"],
      },
      {
        icon: "🎙️",
        title: "Online Sessions",
        desc: "Free guided meditations every weekend through Zoom and YouTube live for global accessibility.",
        tags: ["Free", "Weekly", "Global Access"],
      },
    ],
    [
      {
        icon: "🏫",
        title: "School Programs",
        desc: "Introduction to Sunya for students and teachers to enhance focus and reduce exam anxiety.",
        tags: ["Students", "Teachers", "Focus Training"],
      },
      {
        icon: "🫂",
        title: "Transformation Circles",
        desc: "Small group gatherings focused on emotional healing and life-purpose discovery in supportive environments.",
        tags: ["Small Groups", "Healing Focus", "Life Purpose"],
      },
      {
        icon: "📚",
        title: "Trainers Program",
        desc: "Train-the-trainer initiative to build certified facilitators in different regions and languages.",
        tags: ["Certification", "Train Trainers", "Multilingual"],
      },
    ],
  ];

  const [i, setI] = useState(0);
  const total = slides.length;

  const next = () => setI((v) => (v + 1) % total);
  const prev = () => setI((v) => (v - 1 + total) % total);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="activities" className="py-28 bg-white" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader
          title="Core Activities"
          subtitle="Comprehensive programs designed to deepen your Sunya meditation practice"
        />

        <div className="relative mt-16 overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${i * 100}%)` }}
          >
            {slides.map((group, gi) => (
              <div
                key={gi}
                className="shrink-0 basis-full grid md:grid-cols-3 gap-8"
              >
                {group.map((card) => (
                  <ActivityCard key={card.title} {...card} />
                ))}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="h-12 w-12 rounded-full border bg-white text-gray-600 hover:bg-indigo-500 hover:text-white transition grid place-items-center"
              aria-label="Previous"
            >
              ‹
            </button>
            <div className="flex gap-2">
              {Array.from({ length: total }).map((_, di) => (
                <button
                  key={di}
                  onClick={() => setI(di)}
                  className={`h-2 w-2 rounded-full ${
                    i === di ? "bg-indigo-600 scale-110" : "bg-gray-300"
                  } transition`}
                  aria-label={`Go to slide ${di + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="h-12 w-12 rounded-full border bg-white text-gray-600 hover:bg-indigo-500 hover:text-white transition grid place-items-center"
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ActivityCard({ icon, title, desc, tags }) {
  return (
    <div className="rounded-2xl border border-gray-200 overflow-hidden transition hover:-translate-y-3 hover:shadow-2xl bg-white">
      <div className="h-52 bg-gradient-to-br from-indigo-500 to-emerald-500 grid place-items-center text-5xl text-white">
        {icon}
      </div>
      <div className="p-8">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ========================= Testimonials ========================= */
function Testimonials() {
  const ref = useFadeIn();
  const slides = [
    {
      text: '"Sunya gave me more than peace—it gave me direction in life. I found clarity I never knew existed."',
      avatar: "K",
      name: "Kavitha",
      title: "Teacher, Bangalore",
    },
    {
      text: '"Only with Sunya did I find a method to completely let go. The practice of NOTHING taught me everything."',
      avatar: "A",
      name: "Arif",
      title: "Software Engineer, Hyderabad",
    },
    {
      text: '"We introduced Sunya to 120 girls. The impact was immediate—confidence, calmness, and smiles."',
      avatar: "N",
      name: "NGO Partner",
      title: "Women's Shelter, Mumbai",
    },
  ];

  const [i, setI] = useState(0);
  const total = slides.length;

  const next = () => setI((v) => (v + 1) % total);
  const prev = () => setI((v) => (v - 1 + total) % total);

  useEffect(() => {
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-28 bg-gray-900 text-white"
      ref={ref}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader
          title="Voices of Transformation"
          subtitle="Real stories from those who discovered the power of Sunya meditation"
          invert
        />

        <div className="relative mt-16 overflow-hidden rounded-3xl">
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${i * 100}%)` }}
          >
            {slides.map((t, ti) => (
              <div
                key={ti}
                className="shrink-0 basis-full bg-white/5 backdrop-blur border border-white/10 px-6 md:px-16 py-12 md:py-16 text-center"
              >
                <p className="text-2xl md:text-3xl font-medium italic leading-snug mb-10">
                  {t.text}
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-emerald-500 grid place-items-center font-bold text-2xl">
                    {t.avatar}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold">{t.name}</h4>
                    <p className="text-white/70 text-sm">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="h-12 w-12 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition grid place-items-center"
              aria-label="Previous testimonial"
            >
              ‹
            </button>
            <div className="flex gap-2">
              {Array.from({ length: total }).map((_, di) => (
                <button
                  key={di}
                  onClick={() => setI(di)}
                  className={`h-2 w-2 rounded-full ${
                    i === di ? "bg-white scale-110" : "bg-white/40"
                  } transition`}
                  aria-label={`Go to testimonial ${di + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="h-12 w-12 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition grid place-items-center"
              aria-label="Next testimonial"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================= Get Involved ========================= */
function GetInvolved() {
  const ref = useFadeIn();
  const cards = [
    {
      title: "Join a Workshop",
      icon: "event",
      text: "Experience transformative meditation through our Foundation Course or immersive residential retreats.",
      cta: "Find Events",
      variant: "indigo",
    },
    {
      title: "Invite Us",
      icon: "location_on",
      text: "Bring Sunya meditation to your school, office, or community center with customized programs.",
      cta: "Request Visit",
    },
    {
      title: "Become a Trainer",
      icon: "school",
      text: "Join our certified trainer program and help spread Sunya practices in your region and language.",
      cta: "Apply Now",
    },
    {
      title: "Sponsor a Retreat",
      icon: "favorite",
      text: "Support meditation retreats for underserved communities, bringing peace to those who need it most.",
      cta: "Sponsor",
      variant: "green",
    },
  ];

  return (
    <section id="get-involved" className="py-28 bg-gray-50" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader
          title="Get Involved"
          subtitle="Multiple pathways to experience and support Sunya meditation"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {cards.map((c) => (
            <div
              key={c.title}
              className={`rounded-3xl border p-10 transition hover:-translate-y-2 hover:shadow-2xl overflow-hidden ${
                c.variant === "indigo"
                  ? "bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-transparent"
                  : c.variant === "green"
                  ? "bg-gradient-to-br from-emerald-500 to-emerald-700 text-white border-transparent"
                  : "bg-white border-gray-200"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-2xl grid place-items-center text-3xl mb-6 ${
                  c.variant ? "bg-white/10" : "bg-gray-100 text-indigo-600"
                }`}
                aria-hidden
              >
                {/* Using emoji fallback instead of material icons for simplicity */}
                <span>
                  {c.icon === "event" && "📅"}
                  {c.icon === "location_on" && "📍"}
                  {c.icon === "school" && "🎓"}
                  {c.icon === "favorite" && "❤️"}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{c.title}</h3>
              <p
                className={`${
                  c.variant ? "opacity-90" : "text-gray-700"
                } leading-relaxed mb-6`}
              >
                {c.text}
              </p>
              <a
                href="#"
                className={`${
                  c.variant
                    ? "inline-block rounded-xl border border-white/30 bg-white/10 px-5 py-2 font-semibold hover:bg-white/20"
                    : "inline-block rounded-xl bg-indigo-600 text-white px-5 py-2 font-semibold hover:bg-indigo-700"
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

/* ========================= Shared: Section Header ========================= */
function SectionHeader({ title, subtitle, invert = false }) {
  return (
    <div className="text-center mb-16">
      <h2
        className={`font-extrabold tracking-tight mb-4 ${
          invert ? "text-white" : "text-gray-900"
        } text-4xl md:text-5xl`}
      >
        {title}
      </h2>
      <p
        className={`${
          invert ? "text-white/70" : "text-gray-600"
        } max-w-xl mx-auto text-lg`}
      >
        {subtitle}
      </p>
    </div>
  );
}

/* ========================= Hook: Fade-in on View ========================= */
function useFadeIn() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    el.classList.add("opacity-0", "translate-y-8");

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.remove("opacity-0", "translate-y-8");
            el.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}

/* ========================= Keyframes (Tailwind) ========================= */
// Add these to your tailwind.config.js under theme.extend:
// extend: {
//   keyframes: {
//     breathe: {
//       '0%, 100%': { transform: 'scale(1)' },
//       '50%': { transform: 'scale(1.05)' },
//     },
//     slideUp: {
//       from: { opacity: '0', transform: 'translateY(32px)' },
//       to: { opacity: '1', transform: 'translateY(0)' },
//     },
//   },
//   animation: {
//     breathe: 'breathe 4s ease-in-out infinite',
//     slideUp: 'slideUp 0.8s cubic-bezier(0.4,0,0.2,1)',
//   },
// }
