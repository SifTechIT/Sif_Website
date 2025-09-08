import { useEffect, useState } from "react";

export default function InternshipProgramsPage() {
  return (
    <main>
      <HeroSlider />
      <Stats />
      <ProgramOverview />
      <ProgramAreas />
      <Benefits />
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
          <div className="w-10 h-10 rounded-full bg-emerald-500 relative grid place-items-center">
            <div className="w-6 h-4 border-2 border-white rounded-full" />
            <div className="absolute bottom-2 w-4 h-0.5 bg-white" />
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
          <button className="px-4 py-2 rounded-md bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition">
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
      badge: "🎓 Learning with Impact, Growing with Purpose",
      title: "Internship Programs",
      text: "Combine meaningful learning with social impact. Join young changemakers across education, health, technology, and community development initiatives.",
      ctas: [
        { href: "#impact", label: "See Our Impact", primary: true },
        { href: "#program-areas", label: "Explore Areas", primary: false },
      ],
      bg: "from-indigo-500 to-purple-700",
    },
    {
      badge: "🚀 Skills for the Future",
      title: "Career Ready",
      text: "Build portfolios that matter. Gain experience in project management, technology, research, and grassroots engagement with expert mentorship.",
      ctas: [
        { href: "#testimonials", label: "Intern Stories", primary: true },
        { href: "#benefits", label: "Benefits", primary: false },
      ],
      bg: "from-amber-500 to-amber-800",
    },
    {
      badge: "🌟 Mentorship & Growth",
      title: "Future Leaders",
      text: "Join our Internship Academy program with structured learning modules, alumni networks, and pathways to global opportunities.",
      ctas: [
        { href: "#future-roadmap", label: "Our Vision", primary: true },
        { href: "#get-involved", label: "Apply Now", primary: false },
      ],
      bg: "from-emerald-600 to-teal-600",
    },
  ];

  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="h-screen relative overflow-hidden mt-[72px]">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
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
      l: "Interns Mentored Across Programs",
      grad: "from-indigo-500 to-purple-700",
      invert: true,
    },
    { n: "6", l: "Program Areas Available" },
    { n: "95%", l: "Report Improved Confidence" },
    {
      n: "100%",
      l: "Portfolio Development Support",
      grad: "from-amber-500 to-amber-800",
      invert: true,
    },
  ];
  return (
    <section id="impact" className="py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Program Impact & Growth
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Measurable outcomes from our internship initiatives
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
            Why Internships Matter at SIF
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            The Internship Program at Sunyatee International Foundation offers
            young people the opportunity to combine learning with meaningful
            social impact. Our interns gain exposure across multiple domains
            while contributing to real community benefits.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Through structured mentorship and hands-on project work, interns
            develop practical skills in project management, communication,
            design, research, and grassroots engagement that enhance their
            career readiness.
          </p>
          <p className="text-lg text-gray-600">
            Every internship is purpose-driven work where participants don't
            just complete tasks—they contribute to causes like nutrition,
            mindfulness, farmer empowerment, and cultural heritage preservation.
          </p>
        </div>
        <div className="relative h-[420px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 grid place-items-center">
          <div className="w-52 h-52 rounded-full grid place-items-center text-5xl text-white bg-gradient-to-br from-indigo-500 to-emerald-500 animate-pulse">
            💡
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================= Program Areas ========================= */
function ProgramAreas() {
  const cards = [
    {
      icon: "💻",
      title: "IT & Design",
      text: "Website development, social media design, dashboard building, and creative campaigns. Work with modern tools and technologies while building digital solutions that amplify our social impact.",
      span: "lg:col-span-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white",
    },
    {
      icon: "🎓",
      title: "Education Support",
      text: "Assist in Child Education Centres, develop early learning modules, and create educational content that transforms young lives.",
      span: "lg:col-span-6 bg-gradient-to-br from-amber-100 to-orange-200",
    },
    {
      icon: "📊",
      title: "Research & Documentation",
      text: "Collect field data, prepare impact reports, and document transformation stories from our communities.",
      span: "lg:col-span-4 bg-gradient-to-br from-emerald-100 to-emerald-200",
    },
    {
      icon: "🤝",
      title: "Community Outreach",
      text: "Support awareness programs in health, women's empowerment, and rural engagement initiatives.",
      span: "lg:col-span-4 bg-gradient-to-br from-indigo-100 to-indigo-200",
    },
    {
      icon: "🏛️",
      title: "Cultural Preservation",
      text: "Contribute to projects like Palm Leaf Sutra Printing and Agamas Translations through research and communication.",
      span: "lg:col-span-4 bg-gradient-to-br from-pink-100 to-pink-200",
    },
    {
      icon: "🌐",
      title: "Future Opportunities",
      text: "Expanding into AI, digital storytelling, sustainability projects, and international exchange programs. Pioneer new domains as we grow our impact across communities and continents.",
      span: "lg:col-span-12 bg-gradient-to-br from-emerald-600 to-teal-600 text-white",
    },
  ];
  return (
    <section id="program-areas" className="py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Program Areas for Interns
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Diverse opportunities across all SIF initiatives and domains
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className={`rounded-3xl p-10 border border-gray-200 ${c.span}`}
            >
              <div
                className={`w-16 h-16 rounded-2xl grid place-items-center text-3xl mb-6 shadow ${
                  c.span.includes("text-white")
                    ? "bg-white/10 text-white"
                    : "bg-white text-emerald-600"
                }`}
              >
                {c.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{c.title}</h3>
              <p
                className={`${
                  c.span.includes("text-white")
                    ? "text-white/90"
                    : "text-gray-600"
                } leading-relaxed`}
              >
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= Benefits ========================= */
function Benefits() {
  const cards = [
    {
      icon: "🎯",
      title: "Practical Learning",
      text: "Apply academic knowledge to real-world projects that directly benefit communities and build tangible skills.",
    },
    {
      icon: "🛠️",
      title: "Skill Development",
      text: "Gain exposure to project management, communication, design, IT, research, and grassroots engagement.",
    },
    {
      icon: "👥",
      title: "Expert Mentorship",
      text: "Receive guidance from SIF leaders and project coordinators who ensure structured learning and personal growth.",
    },
    {
      icon: "💼",
      title: "Career Pathways",
      text: "Build strong portfolios, enhance CVs, and gain confidence in choosing future career directions.",
    },
    {
      icon: "🎨",
      title: "Creative Projects",
      text: "Contribute to publications like Sunyatimes, design campaigns, and manage social media presence.",
    },
    {
      icon: "🌱",
      title: "Personal Growth",
      text: "Develop confidence, leadership, and problem-solving skills while making a meaningful difference.",
    },
  ];
  return (
    <section id="benefits" className="py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            What You'll Gain
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Comprehensive development through meaningful work and mentorship
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-gray-200 overflow-hidden transition hover:-translate-y-3"
            >
              <div className="h-28 grid place-items-center text-5xl text-white bg-gradient-to-br from-emerald-600 to-amber-500">
                {c.icon}
              </div>
              <div className="p-8">
                <h3 className="text-lg font-bold mb-2">{c.title}</h3>
                <p className="text-gray-600 leading-relaxed">{c.text}</p>
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
      text: "At SIF, I didn't just learn about NGO work—I discovered my own strengths. Working on ODOC's impact dashboard gave me confidence in data analysis and project design.",
      avatar: "A",
      name: "Ananya Sharma",
      role: "IT Intern, 2024",
    },
    {
      text: "Supporting the Child Education Centre taught me patience, empathy, and how small actions create big change. This experience shaped my career path in education.",
      avatar: "R",
      name: "Rahul Kumar",
      role: "Education Intern, 2023",
    },
    {
      text: "The mentorship at SIF was incredible. I learned project management, improved my communication skills, and built a portfolio that helped me land my dream job.",
      avatar: "P",
      name: "Priya Patel",
      role: "Research Intern, 2024",
    },
  ];
  const [idx, setIdx] = useState(0);
  const count = slides.length;
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % count), 7000);
    return () => clearInterval(t);
  }, [count]);

  return (
    <section id="testimonials" className="py-28 bg-[#1f2937] text-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Voices from Our Interns
          </h2>
          <p className="text-lg md:text-xl text-white/70">
            Real stories from young professionals who started their journey with
            SIF
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-white/10 backdrop-blur">
          <div
            className="flex transition-transform duration-700"
            style={{
              transform: `translateX(-${idx * 100}%)`,
              width: `${count * 100}%`,
            }}
          >
            {slides.map((s, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 bg-white/[0.06] p-12 text-center"
              >
                <p className="text-2xl md:text-[32px] leading-snug italic mb-10">
                  “{s.text}”
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-emerald-500 grid place-items-center font-bold text-xl">
                    {s.avatar}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold">{s.name}</h4>
                    <p className="text-white/70 text-sm">{s.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 mt-6">
          <button
            className="w-12 h-12 rounded-full bg-white text-gray-700 grid place-items-center border border-gray-200 hover:scale-105 transition"
            onClick={() => setIdx((i) => (i - 1 + count) % count)}
            aria-label="Previous testimonial"
          >
            ‹
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-2 h-2 rounded-full transition ${
                  i === idx ? "bg-emerald-400 scale-110" : "bg-white/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            className="w-12 h-12 rounded-full bg-white text-gray-700 grid place-items-center border border-gray-200 hover:scale-105 transition"
            onClick={() => setIdx((i) => (i + 1) % count)}
            aria-label="Next testimonial"
          >
            ›
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
      icon: "school",
      title: "Apply for Internship",
      text: "Join our structured program with mentorship, real projects, and skill development opportunities across all our initiative areas.",
      cta: "Apply Now",
      grad: "from-indigo-500 to-purple-700",
      white: true,
    },
    {
      icon: "groups",
      title: "Volunteer Programs",
      text: "Start with shorter-term volunteer opportunities to experience our work and explore potential internship areas.",
      cta: "Get Involved",
    },
    {
      icon: "network_check",
      title: "Alumni Network",
      text: "Connect with our growing network of alumni interns who can provide guidance and mentorship for your career journey.",
      cta: "Connect",
    },
    {
      icon: "rocket_launch",
      title: "Future Academy",
      text: "Be part of our upcoming Internship Academy with learning modules, certifications, and international exchange opportunities.",
      cta: "Learn More",
      grad: "from-amber-500 to-amber-800",
      white: true,
    },
  ];
  return (
    <section id="get-involved" className="py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Join Our Community
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Multiple pathways to start your journey with SIF
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className={`rounded-3xl p-10 border ${
                c.grad
                  ? `bg-gradient-to-br ${c.grad} text-white border-transparent lg:col-span-6`
                  : "bg-white border-gray-200 lg:col-span-6"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-2xl grid place-items-center text-3xl mb-6 shadow ${
                  c.grad
                    ? "bg-white/10 text-white"
                    : "bg-gray-100 text-emerald-600"
                }`}
              >
                {/* Using emoji-style icons for portability */}
                <span>
                  {c.icon === "school" && "🎓"}
                  {c.icon === "groups" && "👥"}
                  {c.icon === "network_check" && "🕸️"}
                  {c.icon === "rocket_launch" && "🚀"}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{c.title}</h3>
              <p
                className={`${
                  c.grad ? "text-white/90" : "text-gray-600"
                } leading-relaxed mb-6`}
              >
                {c.text}
              </p>
              <a
                href="#"
                className={`inline-block px-5 py-3 rounded-xl font-semibold border transition ${
                  c.grad
                    ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
                    : "bg-emerald-600 border-emerald-600 text-white hover:bg-emerald-700"
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
    <footer className="bg-[#1f2937] text-white pt-20 pb-8">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p className="text-white/80">📍 80 Harrison Lane, FL 32547</p>
            <p className="text-white/80">📞 +1 555 87 89 56</p>
            <p className="text-white/80">📧 internships@sifworld.com</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Programs</h3>
            <ul className="space-y-1 text-white/70">
              <li>
                <a href="#" className="hover:text-white">
                  Farmer Empowerment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Child Education
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Sunya Meditation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Women Empowerment
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">For Interns</h3>
            <ul className="space-y-1 text-white/70">
              <li>
                <a href="#" className="hover:text-white">
                  Apply for Internship
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Volunteer Opportunities
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Alumni Network
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Future Academy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
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
        <div className="border-t border-white/10 pt-6 text-center text-white/60">
          <p>© 2025 Sunyatee International Foundation. All Rights Reserved.</p>
          <p>Empowering youth, building skills, creating future leaders</p>
        </div>
      </div>
    </footer>
  );
}
