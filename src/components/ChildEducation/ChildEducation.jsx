import { useEffect, useState } from "react";

export default function ChildEducationCentresPage() {
  return (
    <main>
      <HeroSlider />
      <Stats />
      <ProgramOverview />
      <ProgramFocus />
      <Activities />
      <SpecialActivities />
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
          <div className="w-10 h-10 rounded-full bg-orange-500 grid place-items-center relative">
            <span className="text-white text-xl">📚</span>
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
          <button className="px-4 py-2 rounded-md bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition">
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
      badge: "🌟 Safe, Nurturing Learning Spaces",
      title: "Child Education Centres",
      text: "Creating safe, nurturing spaces where children learn, play, and grow holistically. Building strong foundations for education, mindfulness, and life through early learning and behavioral development.",
      ctas: [
        { href: "#impact", label: "See Our Impact", primary: true },
        { href: "#program-focus", label: "Our Programs", primary: false },
      ],
      bg: "from-orange-500 to-orange-700",
    },
    {
      badge: "🧘 Little Sunyatee Mindfulness",
      title: "Kids' Sunya Programs",
      text: "Introducing mindfulness and meditation through simple, playful practices. Helping children develop concentration, patience, emotional intelligence, and self-awareness from an early age.",
      ctas: [
        { href: "#activities", label: "View Activities", primary: true },
        { href: "#testimonials", label: "Success Stories", primary: false },
      ],
      bg: "from-yellow-400 to-orange-500",
    },
    {
      badge: "🎨 Creative & Expressive Learning",
      title: "Holistic Development",
      text: "Through storytelling, role-play, art, and group games, we encourage imagination, collaboration, and social skills. Every child's voice is valued in our inclusive learning environment.",
      ctas: [
        {
          href: "#special-activities",
          label: "Special Programs",
          primary: true,
        },
        { href: "#get-involved", label: "Join Us", primary: false },
      ],
      bg: "from-blue-500 to-pink-500",
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
                      ? "bg-white text-orange-600 hover:bg-gray-100"
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
      n: "500+",
      l: "Children Positively Impacted",
      grad: "from-orange-500 to-orange-700",
      invert: true,
    },
    { n: "15+", l: "Active Education Centres" },
    { n: "100+", l: "Trained Facilitators" },
    {
      n: "25+",
      l: "Communities Served",
      grad: "from-blue-500 to-pink-500",
      invert: true,
    },
  ];
  return (
    <section id="impact" className="py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Impact on Young Lives
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Measurable outcomes from our child education and development
            programs
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
            Creating Foundations for Life
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Our Child Education Centres are safe, nurturing spaces where
            children can learn, play, and grow holistically. We focus on early
            learning, behavioral development, mindfulness, and social skills.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Every child builds a strong foundation for both education and life
            through our comprehensive approach that values creativity, emotional
            intelligence, and mindful awareness.
          </p>
          <p className="text-lg text-gray-600">
            These centres serve as community hubs that bring together children,
            parents, and facilitators, creating supportive environments where
            every child's voice is heard and valued.
          </p>
        </div>
        <div className="relative h-[420px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 grid place-items-center">
          <div className="w-52 h-52 rounded-full grid place-items-center text-5xl text-white bg-gradient-to-br from-orange-500 to-yellow-400 animate-bounce">
            📚
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
      icon: "📖",
      title: "Early Learning & Literacy",
      text: "Age-appropriate language, numeracy, and cognitive activities that help children prepare for formal schooling through engaging, play-based learning methods.",
      span: "lg:col-span-6 bg-gradient-to-br from-orange-100 to-orange-200",
    },
    {
      icon: "🧘",
      title: "Kids' Sunya Programs",
      text: "Introducing mindfulness and meditation through simple, playful practices that enhance concentration, patience, and self-awareness in children.",
      span: "lg:col-span-6 bg-gradient-to-br from-yellow-100 to-yellow-200",
    },
    {
      icon: "🎭",
      title: "Little Sunyatee Behavioral Course",
      text: "Specially designed program that builds emotional intelligence, empathy, and respectful behavior through interactive games and guided reflection.",
      span: "lg:col-span-6 bg-gradient-to-br from-blue-100 to-blue-200",
    },
    {
      icon: "🎨",
      title: "Creative & Expressive Learning",
      text: "Storytelling, role-play, art, and group games that encourage imagination, collaboration, and creative self-expression.",
      span: "lg:col-span-6 bg-gradient-to-br from-pink-100 to-pink-200",
    },
    {
      icon: "🤗",
      title: "Safe & Inclusive Spaces",
      text: "Centres that value every child's voice and provide equal opportunities for learning, play, and social connection, creating supportive environments where children feel heard and respected.",
      span: "lg:col-span-12 bg-gradient-to-br from-emerald-100 to-emerald-200",
    },
  ];
  return (
    <section id="program-focus" className="py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Program Focus Areas
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Comprehensive development approach addressing multiple dimensions of
            child growth
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

/* ========================= Activities ========================= */
function Activities() {
  const items = [
    {
      icon: "👥",
      title: "Opening Circles",
      text: "Children begin each session by sharing something about their friends, creating an environment of respect, belonging, and visibility.",
    },
    {
      icon: "🎲",
      title: "Expressive Games",
      text: "Activities like Food Bingo, story enactments, and snack-sharing games where children practice kindness, empathy, and communication.",
    },
    {
      icon: "🃏",
      title: "Conflict Resolution Cards",
      text: "Older children explore real-life situations using cards that help them reflect on conflict resolution and respectful responses.",
    },
    {
      icon: "🧘",
      title: "Daily Mindfulness Sessions",
      text: "Grounding through Sunya meditation, helping children develop calmness, focus, and self-regulation skills.",
    },
    {
      icon: "📖",
      title: "Storytelling & Role-Play",
      text: "Interactive storytelling sessions and role-playing activities that develop language skills, creativity, and social understanding.",
    },
    {
      icon: "🤝",
      title: "Community Building",
      text: "Activities that bring together children, parents, and facilitators to strengthen community bonds and support networks.",
    },
  ];
  return (
    <section id="activities" className="py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Key Interventions & Activities
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Engaging, developmentally appropriate activities that nurture growth
            and learning
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-gray-200 overflow-hidden transition hover:-translate-y-3"
            >
              <div className="h-48 grid place-items-center text-6xl text-white bg-gradient-to-br from-orange-500 to-yellow-400">
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

/* ========================= Special Activities ========================= */
function SpecialActivities() {
  const items = [
    {
      icon: "🌈",
      title: "Color Matching with Sticks",
      text: "A mindful activity that enhances visual perception, attention to detail, and concentration by recreating color patterns.",
      list: [
        "Develops visual discrimination skills",
        "Enhances focus and attention span",
        "Builds patience through mindful observation",
        "Encourages systematic thinking",
      ],
      grad: "from-amber-100 to-amber-200",
    },
    {
      icon: "🧩",
      title: "Pattern & Memory Games",
      text: "Engaging activities that strengthen fine motor skills, patience, and mindful presence through pattern recognition and memory challenges.",
      list: [
        "Improves working memory capacity",
        "Develops pattern recognition abilities",
        "Enhances fine motor coordination",
        "Cultivates mindful awareness",
      ],
      grad: "from-blue-100 to-blue-200",
    },
  ];
  return (
    <section id="special-activities" className="py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Special Mindfulness Play
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Structured activities that combine fun with essential skill-building
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((it) => (
            <div
              key={it.title}
              className={`rounded-3xl p-10 border border-gray-200 bg-gradient-to-br ${it.grad}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white grid place-items-center text-3xl mb-6 shadow">
                {it.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{it.title}</h3>
              <p className="text-gray-700 mb-4">{it.text}</p>
              <ul className="space-y-2">
                {it.list.map((li) => (
                  <li key={li} className="text-gray-600 pl-5 relative">
                    <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-orange-500"></span>
                    {li}
                  </li>
                ))}
              </ul>
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
      text: '"The day was filled with laughter, empathy, and joyful social learning. Children played, meditated, and shared openly. It\'s a space where they learn not just ABCs, but also kindness and self-awareness."',
      avatar: "F",
      name: "Facilitator",
      role: "Child Education Centre",
    },
    {
      text: '"My daughter comes home excited about her \u201cmindfulness time\u201d and practices being kind to her younger brother. The behavioral changes we see at home are remarkable."',
      avatar: "P",
      name: "Priya Sharma",
      role: "Parent of Centre Participant",
    },
    {
      text: '"Children who were shy and withdrawn now participate actively. The opening circles and expressive games have built their confidence and social skills beautifully."',
      avatar: "T",
      name: "Teacher Coordinator",
      role: "Rural Education Centre",
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
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Voices from Our Centres
          </h2>
          <p className="text-gray-400">
            Stories of growth, learning, and transformation from our child
            education community
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-700"
            style={{
              transform: `translateX(-${idx * 100}%)`,
              width: `${slides.length * 100}%`,
            }}
          >
            {slides.map((s, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 bg-white/5 p-12 text-center"
              >
                <p className="text-2xl italic mb-8">{s.text}</p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center font-bold text-xl">
                    {s.avatar}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold">{s.name}</h4>
                    <p className="text-gray-300 text-sm">{s.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-3 h-3 rounded-full ${
                i === idx ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= Get Involved ========================= */
function GetInvolved() {
  const items = [
    {
      icon: "school",
      title: "Become a Facilitator",
      text: "Train to become a certified facilitator and help deliver our Little Sunyatee programs and mindfulness education to children in your community.",
      cta: "Apply Now",
      grad: "from-orange-500 to-orange-700",
      invert: true,
    },
    {
      icon: "volunteer_activism",
      title: "Volunteer Support",
      text: "Support our centres through volunteer activities, help with children's programs, or assist with administrative and operational needs.",
      cta: "Get Involved",
    },
    {
      icon: "family_restroom",
      title: "Parent Workshops",
      text: "Join our parent education programs to extend behavioral and mindfulness practices into your home environment.",
      cta: "Register",
    },
    {
      icon: "favorite",
      title: "Sponsor a Centre",
      text: "Help establish new Child Education Centres or support existing ones with materials, training, and operational funding.",
      cta: "Sponsor",
      grad: "from-blue-500 to-pink-500",
      invert: true,
    },
  ];
  return (
    <section id="get-involved" className="py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Join Our Child Development Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Multiple ways to support early childhood education and mindfulness
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className={`rounded-3xl p-10 border ${
                it.grad
                  ? `text-white bg-gradient-to-br ${it.grad} border-transparent`
                  : "bg-white border-gray-200"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-2xl grid place-items-center text-3xl mb-6 ${
                  it.grad ? "bg-white/20" : "bg-gray-100 text-orange-600"
                }`}
              >
                <span className="material-icons">{it.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{it.title}</h3>
              <p
                className={`mb-6 ${
                  it.grad ? "text-white/90" : "text-gray-600"
                }`}
              >
                {it.text}
              </p>
              <a
                href="#"
                className={`inline-block px-5 py-2 rounded-xl font-semibold ${
                  it.grad
                    ? "bg-white text-orange-600"
                    : "bg-orange-500 text-white"
                }`}
              >
                {it.cta}
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
    <footer className="bg-gray-900 text-white pt-20 pb-8">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p className="text-gray-300">📍 80 Harrison Lane, FL 32547</p>
            <p className="text-gray-300">📞 +1 555 87 89 56</p>
            <p className="text-gray-300">📧 children@sifworld.com</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Programs</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#child-education" className="hover:text-white">
                  Child Education Centres
                </a>
              </li>
              <li>
                <a href="#little-sunyatee" className="hover:text-white">
                  Little Sunyatee Program
                </a>
              </li>
              <li>
                <a href="#sunya" className="hover:text-white">
                  Sunya Meditation
                </a>
              </li>
              <li>
                <a href="#mindfulness" className="hover:text-white">
                  Kids' Mindfulness
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Get Involved</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Become Facilitator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Volunteer Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Parent Workshops
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Sponsor Centre
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <ul className="space-y-2 text-gray-300">
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
        <div className="border-t border-white/10 pt-6 text-center text-gray-400">
          <p>© 2025 Sunyatee International Foundation. All Rights Reserved.</p>
          <p>
            Nurturing young minds through mindful education, creativity, and
            compassionate learning
          </p>
        </div>
      </div>
    </footer>
  );
}
