import { useEffect, useState } from "react";
import Banner1 from "../../assets/Internship/Banner1.jpg";
import Banner2 from "../../assets/Internship/Banner2.jpg";
import Banner3 from "../../assets/Internship/Banner3.jpg";
import Career from "../../assets/Internship/Career.jpeg";
import Creative from "../../assets/Internship/Creative.jpeg";
import Growth from "../../assets/Internship/Growth.png";
import Internship from "../../assets/Internship/Internship.jpg";
import Mentorship from "../../assets/Internship/Mentorship.jpg";
import Practical from "../../assets/Internship/Practical.jpeg";
import Skill from "../../assets/Internship/Skill.jpg";
export default function InternshipProgramsPage() {
  return (
    <main>
      <header className="hero-section px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-6 bg-blue-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-blue-700 border border-blue-200">
            🎓 Learning with Impact, Growing with Purpose
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1] text-gradient">
            Internship
            <br />
            Programs.
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-500 max-w-3xl mx-auto leading-relaxed mb-12">
            Combine meaningful learning with social impact. Join young
            changemakers across education, health, technology, and community
            development.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="bg-black text-white px-10 py-4 rounded-full font-semibold shadow-lg">
              See Our Impact
            </button>
            <button className="bg-white border border-gray-200 text-gray-600 px-10 py-4 rounded-full font-semibold">
              Explore Areas
            </button>
          </div>
        </div>
      </header>

      <section className="py-24 px-6 bg-zinc-900 text-white rounded-[4rem] mx-4 my-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-4">
              Program Impact & Growth
            </h2>
            <h3 className="text-3xl font-bold">
              Empowering the Next Generation
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold accent-blue mb-2">50+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Interns
                <br />
                Mentored
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-blue mb-2">6</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Program Areas
                <br />
                Available
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-blue mb-2">95%</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Report Improved
                <br />
                Confidence
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-blue mb-2">100%</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Portfolio
                <br />
                Support
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="rounded-[3rem] bg-blue-50 aspect-square flex items-center justify-center text-blue-200 overflow-hidden relative border border-blue-100 shadow-inner">
            <i className="fas fa-graduation-cap text-9xl opacity-20"></i>
            <div className="absolute bottom-10 px-8 text-center">
              <p className="text-[10px] uppercase tracking-widest font-bold text-blue-600">
                Career-Ready Portfolios
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-blue-600 font-bold tracking-tight text-sm uppercase mb-4">
              Why SIF?
            </h2>
            <h3 className="text-4xl font-bold tracking-tight mb-6 text-gradient">
              Education Meets Empathy.
            </h3>
            <p className="text-lg text-gray-500 leading-relaxed mb-6">
              Our program offers young people the opportunity to combine
              learning with meaningful social impact. Every internship is
              purpose-driven work where participants don't just complete
              tasks—they contribute to global causes.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Gain exposure across multiple domains while contributing to
              nutrition, mindfulness, farmer empowerment, and cultural heritage
              preservation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gradient">
              Program Areas
            </h2>
            <p className="text-gray-500 mt-2">
              Diverse opportunities across all SIF domains.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bento-card col-span-1 md:col-span-2 p-10 bg-zinc-900 text-white border-none">
              <div className="text-3xl mb-6">💻</div>
              <h4 className="text-xl font-bold mb-3">IT & Design</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Website development, social media design, dashboard building,
                and creative campaigns.
              </p>
            </div>
            <div className="bento-card p-10">
              <div className="text-3xl mb-6">🎓</div>
              <h4 className="text-lg font-bold mb-2">Education</h4>
              <p className="text-gray-500 text-xs">
                Assist in Child Education Centres and develop learning modules.
              </p>
            </div>
            <div className="bento-card p-10">
              <div className="text-3xl mb-6">📊</div>
              <h4 className="text-lg font-bold mb-2">Research</h4>
              <p className="text-gray-500 text-xs">
                Collect field data and prepare global impact reports.
              </p>
            </div>
            <div className="bento-card p-10">
              <div className="text-3xl mb-6">🤝</div>
              <h4 className="text-lg font-bold mb-2">Outreach</h4>
              <p className="text-gray-500 text-xs">
                Support awareness programs in health and rural engagement.
              </p>
            </div>
            <div className="bento-card p-10">
              <div className="text-3xl mb-6">🏛️</div>
              <h4 className="text-lg font-bold mb-2">Heritage</h4>
              <p className="text-gray-500 text-xs">
                Contribute to Palm Leaf Sutra Printing through research.
              </p>
            </div>
            <div className="bento-card col-span-1 md:col-span-2 p-10 bg-blue-600 text-white border-none flex flex-col justify-between">
              <div>
                <div className="text-3xl mb-6">🌐</div>
                <h4 className="text-xl font-bold mb-3">Future Opportunities</h4>
                <p className="text-blue-100 text-sm">
                  Expanding into AI, digital storytelling, sustainability
                  projects, and international exchange.
                </p>
              </div>
              <div className="mt-8 text-[10px] uppercase tracking-widest font-bold">
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center">
          Comprehensive Development.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex gap-6">
            <div className="text-blue-600 text-xl font-bold">01</div>
            <div>
              <h4 className="font-bold mb-2">Expert Mentorship</h4>
              <p className="text-sm text-gray-500">
                Receive guidance from SIF leaders ensuring structured,
                high-value learning.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-blue-600 text-xl font-bold">02</div>
            <div>
              <h4 className="font-bold mb-2">Portfolio Building</h4>
              <p className="text-sm text-gray-500">
                Apply academic knowledge to real-world projects that enhance
                your CV.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-blue-600 text-xl font-bold">03</div>
            <div>
              <h4 className="font-bold mb-2">Personal Growth</h4>
              <p className="text-sm text-gray-500">
                Develop confidence and leadership while making a meaningful
                difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-zinc-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16">Voices from Our Interns</h2>
          <div className="mb-12">
            <p className="text-2xl font-light italic text-gray-600 mb-8 leading-relaxed">
              "At SIF, I didn't just learn about NGO work—I discovered my own
              strengths. Working on ODOC's impact dashboard gave me confidence
              in data analysis."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                A
              </div>
              <div className="text-left">
                <div className="font-bold text-sm">Ananya Sharma</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest">
                  IT Intern, 2024
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2">
            <span className="testimonial-dot active"></span>
            <span className="testimonial-dot"></span>
            <span className="testimonial-dot"></span>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gradient">
            Start Your Journey.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bento-card p-10 bg-blue-50/50 border-blue-100">
            <i className="fas fa-file-signature text-blue-600 mb-6"></i>
            <h4 className="font-bold mb-2">Apply for Internship</h4>
            <p className="text-xs text-gray-500 mb-6">
              Join our structured program with real-world projects.
            </p>
            <button className="text-[10px] font-bold uppercase tracking-widest text-blue-600">
              Apply Now {">"}
            </button>
          </div>
          <div className="bento-card p-10">
            <i className="fas fa-users text-blue-600 mb-6"></i>
            <h4 className="font-bold mb-2">Volunteer</h4>
            <p className="text-xs text-gray-500 mb-6">
              Start with shorter-term opportunities to experience our work.
            </p>
            <button className="text-[10px] font-bold uppercase tracking-widest text-blue-600">
              Get Involved {">"}
            </button>
          </div>
          <div className="bento-card p-10">
            <i className="fas fa-network-wired text-blue-600 mb-6"></i>
            <h4 className="font-bold mb-2">Alumni Network</h4>
            <p className="text-xs text-gray-500 mb-6">
              Connect with former interns for guidance and mentorship.
            </p>
            <button className="text-[10px] font-bold uppercase tracking-widest text-blue-600">
              Connect {">"}
            </button>
          </div>
          <div className="bento-card p-10 bg-zinc-900 text-white border-none">
            <i className="fas fa-award text-blue-400 mb-6"></i>
            <h4 className="font-bold mb-2">Future Academy</h4>
            <p className="text-xs text-zinc-500 mb-6">
              Get certifications and global exchange opportunities.
            </p>
            <button className="text-[10px] font-bold uppercase tracking-widest text-white underline">
              Learn More
            </button>
          </div>
        </div>
      </section>

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

function HeroSlider() {
  const slides = [
    {
      image: Banner1,
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
      image: Banner2,
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
      image: Banner3,
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
    <section className="h-screen relative overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={"h-full w-full flex items-center bg-center bg-cover"}
            style={{ backgroundImage: `url(${s.image})` }}
          >
            {/* Overlay */}
            <div
              className="pointer-events-none absolute inset-0 bg-black/30"
              aria-hidden="true"
            />
            <div className="container mx-auto max-w-[800px] px-6 text-center text-white">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur text-sm font-medium mb-8">
                <span>{s.badge}</span>
              </div>
              <h1 className="text-[clamp(3rem,8vw,5rem)] opacity-90 font-extrabold leading-tight mb-4">
                {s.title}
              </h1>
              <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-10">
                {s.text}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4  opacity-90">
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
        <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
          <img
            src={Internship}
            alt="circle"
            className="w-full h-full object-cover"
          />
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
      image: Practical,
      icon: "🎯",
      title: "Practical Learning",
      text: "Apply academic knowledge to real-world projects that directly benefit communities and build tangible skills.",
    },
    {
      image: Skill,
      icon: "🛠️",
      title: "Skill Development",
      text: "Gain exposure to project management, communication, design, IT, research, and grassroots engagement.",
    },
    {
      image: Mentorship,
      icon: "👥",
      title: "Expert Mentorship",
      text: "Receive guidance from SIF leaders and project coordinators who ensure structured learning and personal growth.",
    },
    {
      image: Career,
      icon: "💼",
      title: "Career Pathways",
      text: "Build strong portfolios, enhance CVs, and gain confidence in choosing future career directions.",
    },
    {
      image: Creative,
      icon: "🎨",
      title: "Creative Projects",
      text: "Contribute to publications like Sunyatimes, design campaigns, and manage social media presence.",
    },
    {
      image: Growth,
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-gray-200 overflow-hidden transition hover:-translate-y-3"
            >
              <div className="h-52 w-full bg-gray-100 flex items-center justify-center">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-cover "
                />
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

        <div className="relative overflow-hidden rounded-3xl">
          <div
            className="whitespace-nowrap transition-transform duration-700"
            style={{ transform: `translateX(-${idx * 100}%)` }}
          >
            {slides.map((s, i) => (
              <div key={i} className="inline-block align-top w-full">
                <div className="bg-white/5 border border-white/10 backdrop-blur p-12 text-center">
                  <p className="text-2xl md:text-[32px] leading-snug italic mb-10 text-wrap">
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
      icon: "school",
      title: "Apply for Internship",
      text: "Join our structured program with mentorship, real projects, and skill development opportunities across all our initiative areas.",
      cta: "Apply Now",
      grad: "from-indigo-500 to-purple-700",
      white: true,
      href: "/join-us",
    },
    {
      icon: "groups",
      title: "Volunteer Programs",
      text: "Start with shorter-term volunteer opportunities to experience our work and explore potential internship areas.",
      cta: "Get Involved",
      href: "/join-us",
    },
    {
      icon: "network_check",
      title: "Alumni Network",
      text: "Connect with our growing network of alumni interns who can provide guidance and mentorship for your career journey.",
      cta: "Connect",
      href: "/contact-us",
    },
    {
      icon: "rocket_launch",
      title: "Future Academy",
      text: "Be part of our upcoming Internship Academy with learning modules, certifications, and international exchange opportunities.",
      cta: "Learn More",
      grad: "from-amber-500 to-amber-800",
      white: true,
      href: "/",
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
