import { useEffect, useMemo, useRef, useState } from "react";

export default function ImpactStoriesPage() {
  return (
    <main>
      <Hero />
      <FeaturedStories />
      <StoriesWithFilter />
      <Stats />
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
      className={`fixed top-0 inset-x-0 z-50 border-b transition-all backdrop-blur-xl ${
        scrolled ? "bg-white/95 border-gray-200" : "bg-white/80 border-gray-200"
      }`}
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
          <div className="w-10 h-10 rounded-full bg-emerald-500 grid place-items-center relative overflow-hidden">
            <div className="w-6 h-4 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-white" />
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
          <button className="px-4 py-2 rounded-md bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition">
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

/* ========================= Hero ========================= */
function Hero() {
  return (
    <section className="mt-[72px] bg-gradient-to-br from-emerald-500 to-emerald-700 text-white text-center py-40">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur text-sm font-medium mb-8">
          <span>📈</span>
          <span>Real Stories, Real Impact</span>
        </div>
        <h1 className="text-[clamp(3rem,8vw,5rem)] font-extrabold leading-tight mb-4">
          Impact Stories
        </h1>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed">
          Discover how SIF initiatives are transforming lives across
          communities. From farmers securing their livelihoods to children
          gaining confidence, these are the stories that drive our mission
          forward.
        </p>
      </div>
    </section>
  );
}

/* ========================= Featured Stories ========================= */
function FeaturedStories() {
  const cards = [
    {
      icon: "🌾",
      title: "From Uncertainty to Security",
      text: "Farmers in Siddipet shifted from low-margin crops to Noni under SIF's buy-back model, eliminating income uncertainty and farming with confidence.",
      span: "lg:col-span-8 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white",
    },
    {
      icon: "👩‍🧵",
      title: "Hands that Earn",
      text: "Women learned Kimono stitching, combining heritage with livelihood, gaining respect and financial independence.",
      span: "lg:col-span-4 bg-gradient-to-br from-pink-500 to-pink-700 text-white",
    },
    {
      icon: "👓",
      title: "Vision for Learning",
      text: "Eye camps provided free spectacles to children, improving learning outcomes instantly and preventing school dropouts.",
      span: "lg:col-span-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white",
    },
    {
      icon: "🎒",
      title: "Kindness in Action",
      text: "Children learned empathy through sharing snacks and playing games that reinforced respect and collaboration.",
      span: "lg:col-span-6 bg-gradient-to-br from-amber-500 to-orange-600 text-white",
    },
  ];
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Featured Transformations
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Highlighted stories that showcase the depth and breadth of our
            impact
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className={`rounded-3xl p-10 border border-gray-200 ${c.span}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 grid place-items-center text-3xl mb-6 shadow">
                {c.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{c.title}</h3>
              <p className="leading-relaxed opacity-90">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= Stories + Filter ========================= */
const ALL_STORIES = [
  // Farmer Empowerment
  {
    category: "farmer",
    color: "from-emerald-600 to-emerald-700",
    emoji: "🌾",
    title: "Secured Livelihoods with Noni",
    desc: "Farmers in Siddipet shifted from low-margin crops to Noni under SIF's buy-back model, eliminating income uncertainty.",
    quote:
      '"Before, we sold our produce in distress. Now, we know the price in advance and farm with confidence."',
    author: "– Ravi, Farmer",
  },
  {
    category: "farmer",
    color: "from-emerald-600 to-emerald-700",
    emoji: "🧪",
    title: "Soil Testing Saves a Season",
    desc: "After soil testing showed nutrient gaps, SIF introduced bio-fertilizers, preventing crop loss and saving dozens of acres.",
  },
  {
    category: "farmer",
    color: "from-emerald-600 to-emerald-700",
    emoji: "🏠",
    title: "Youth Return to Farming",
    desc: "With modern training and assured income, rural youth who migrated to cities are returning to their family farms.",
  },
  {
    category: "farmer",
    color: "from-emerald-600 to-emerald-700",
    emoji: "👩‍🌾",
    title: "Women Farmers Take Lead",
    desc: "Women in farmer families now co-manage plots, gaining financial literacy and confidence in agricultural decisions.",
  },

  // Women Empowerment
  {
    category: "women",
    color: "from-pink-500 to-pink-700",
    emoji: "💼",
    title: "From Homemaker to Entrepreneur",
    desc: "A women's self-help group trained by SIF now produces eco-friendly bags sold in local markets.",
  },
  {
    category: "women",
    color: "from-pink-500 to-pink-700",
    emoji: "🧵",
    title: "Kimono to Community Pride",
    desc: "Women learned Kimono stitching, combining heritage with livelihood.",
    quote:
      '"I never thought my hands could earn. Today my work is respected in the market."',
    author: "– Lakshmi, Artisan",
  },
  {
    category: "women",
    color: "from-pink-500 to-pink-700",
    emoji: "💰",
    title: "Financial Independence through SHGs",
    desc: "Dozens of women now run small savings groups, handling loans and income collectively.",
  },
  {
    category: "women",
    color: "from-pink-500 to-pink-700",
    emoji: "🎤",
    title: "Confidence Beyond Income",
    desc: "Training in public speaking and leadership has enabled women to represent their SHGs in government forums.",
  },

  // Rural Health
  {
    category: "health",
    color: "from-blue-600 to-blue-800",
    emoji: "👓",
    title: "Preventing School Dropouts",
    desc: "Eye camps provided free spectacles to children, improving learning outcomes instantly.",
  },
  {
    category: "health",
    color: "from-blue-600 to-blue-800",
    emoji: "🩸",
    title: "Breaking Menstrual Taboos",
    desc: "Girls attended school regularly after SIF distributed dignity kits and conducted health sessions.",
  },
  {
    category: "health",
    color: "from-blue-600 to-blue-800",
    emoji: "😷",
    title: "COVID Relief Beyond PPE",
    desc: "During the pandemic, oxygen concentrators and hygiene kits reached hundreds of families.",
  },
  {
    category: "health",
    color: "from-blue-600 to-blue-800",
    emoji: "🧘",
    title: "Mindfulness for Health Workers",
    desc: "Local ASHA workers trained in Sunya reported better focus and lower stress while serving their communities.",
  },

  // Child Education
  {
    category: "education",
    color: "from-amber-500 to-orange-600",
    emoji: "🎲",
    title: "The Food Bingo Lesson",
    desc: "Children learned kindness through sharing snacks and playing games that reinforced empathy.",
  },
  {
    category: "education",
    color: "from-amber-500 to-orange-600",
    emoji: "🤝",
    title: "Conflict Cards Build Respect",
    desc: "Older kids reflected on real-life disputes and learned respectful responses.",
  },
  {
    category: "education",
    color: "from-amber-500 to-orange-600",
    emoji: "🎯",
    title: "Mindfulness Play Enhances Focus",
    desc: "Stick-color matching games boosted concentration and patience in young children.",
  },
  {
    category: "education",
    color: "from-amber-500 to-orange-600",
    emoji: "👨‍👩‍👧",
    title: "Parental Pride",
    desc: "Parents report positive behavioral changes in their children.",
    quote:
      '"My child now helps with chores and homework, and speaks politely at home."',
    author: "– Parent, Siddipet",
  },

  // ODOC
  {
    category: "odoc",
    color: "from-violet-600 to-violet-700",
    emoji: "⚡",
    title: "Energy to Learn",
    desc: "Spirulina supplementation reduced fatigue, improving school attendance among children.",
  },
  {
    category: "odoc",
    color: "from-violet-600 to-violet-700",
    emoji: "🩸",
    title: "Tackling Anemia",
    desc: "Weekly BMI checks showed anemia levels decreasing among girls receiving supplementation.",
  },
  {
    category: "odoc",
    color: "from-violet-600 to-violet-700",
    emoji: "🤝",
    title: "Community Confidence",
    desc: "Families shared improved trust in nutrition after seeing visible health gains.",
  },
  {
    category: "odoc",
    color: "from-violet-600 to-violet-700",
    emoji: "📊",
    title: "Transparency in Action",
    desc: "Live dashboards showed bottle distribution, building donor confidence in program effectiveness.",
  },

  // Sunya
  {
    category: "sunya",
    color: "from-cyan-600 to-cyan-700",
    emoji: "💼",
    title: "Corporate Calm",
    desc: "An IT company reported reduced stress levels after Sunya training sessions for employees.",
  },
  {
    category: "sunya",
    color: "from-cyan-600 to-cyan-700",
    emoji: "💕",
    title: "Healing Relationships",
    desc: "A couple used Sunya meditation practices to rebuild empathy and communication.",
  },
  {
    category: "sunya",
    color: "from-cyan-600 to-cyan-700",
    emoji: "📚",
    title: "Students Gain Focus",
    desc: "Teens practicing Sunya before exams reported less anxiety and better scores.",
  },
  {
    category: "sunya",
    color: "from-cyan-600 to-cyan-700",
    emoji: "🌍",
    title: "Global Retreats Inspire Change",
    desc: "International retreat participants find clarity and purpose.",
    quote: '"I came to Bodh Gaya confused, I left with clarity."',
    author: "– Retreat Participant",
  },

  // Palm Leaf Sutra
  {
    category: "palm",
    color: "from-orange-600 to-orange-700",
    emoji: "🎨",
    title: "Artisans Revive Pride",
    desc: "800 artisans in Odisha now have sustainable incomes by reviving palm-leaf work.",
  },
  {
    category: "palm",
    color: "from-orange-600 to-orange-700",
    emoji: "📜",
    title: "Diamond Sutra Lives Again",
    desc: "Ancient text preserved through laser engraving, now shared worldwide with new generations.",
  },
  {
    category: "palm",
    color: "from-orange-600 to-orange-700",
    emoji: "👥",
    title: "Youth Join the Craft",
    desc: "Young artisans learn modern engraving techniques, bridging tradition and technology.",
  },
  {
    category: "palm",
    color: "from-orange-600 to-orange-700",
    emoji: "🌐",
    title: "Global Recognition",
    desc: "Scholars, monks, and cultural bodies applauded the revival of palm-leaf sutra printing traditions.",
  },
];

function StoriesWithFilter() {
  const tabs = [
    { id: "all", label: "All Stories" },
    { id: "farmer", label: "Farmer Empowerment" },
    { id: "women", label: "Women Empowerment" },
    { id: "health", label: "Rural Health" },
    { id: "education", label: "Child Education" },
    { id: "odoc", label: "ODOC" },
    { id: "sunya", label: "Sunya Meditation" },
    { id: "palm", label: "Palm Leaf Sutra" },
  ];

  const [active, setActive] = useState("all");
  const stories = useMemo(
    () =>
      ALL_STORIES.filter((s) =>
        active === "all" ? true : s.category === active
      ),
    [active]
  );

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            All Impact Stories
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Filter by program to explore specific transformations
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition ${
                active === t.id
                  ? "bg-emerald-500 border-emerald-500 text-white"
                  : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {stories.map((s, i) => (
            <article
              key={`${s.title}-${i}`}
              className="rounded-2xl overflow-hidden border border-gray-200 transition hover:-translate-y-2 bg-white"
            >
              <div
                className={`h-52 grid place-items-center text-5xl text-white bg-gradient-to-br ${s.color}`}
              >
                {s.emoji}
              </div>
              <div className="p-8">
                <span className="inline-block text-xs font-semibold tracking-wider uppercase bg-gray-100 text-gray-600 px-3 py-1 rounded-full mb-3">
                  {labelFromCategory(s.category)}
                </span>
                <h3 className="text-xl font-bold mb-2 leading-snug">
                  {s.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                {s.quote && (
                  <blockquote className="bg-gray-50 border-l-4 border-emerald-500 p-4 mt-4 rounded-r-md italic text-gray-800">
                    {s.quote}
                    <div className="font-semibold text-sm text-gray-600 mt-2">
                      {s.author}
                    </div>
                  </blockquote>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function labelFromCategory(cat) {
  switch (cat) {
    case "farmer":
      return "Farmer Empowerment";
    case "women":
      return "Women Empowerment";
    case "health":
      return "Rural Health";
    case "education":
      return "Child Education";
    case "odoc":
      return "ODOC";
    case "sunya":
      return "Sunya Meditation";
    case "palm":
      return "Palm Leaf Sutra";
    default:
      return cat;
  }
}

/* ========================= Stats ========================= */
function Stats() {
  const items = [
    { value: 1000, suffix: "+", label: "Lives Directly Impacted" },
    { value: 25, suffix: "+", label: "Stories of Transformation" },
    { value: 7, suffix: "", label: "Program Areas Active" },
    { value: 100, suffix: "%", label: "Community-Driven Approach" },
  ];

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setVisible(true));
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-28 bg-[#1f2937] text-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Impact by the Numbers
          </h2>
          <p className="text-lg md:text-xl text-white/70">
            Quantifying the transformation across all our initiatives
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((it) => (
            <div key={it.label} className="text-center">
              <div className="text-[3.25rem] md:text-[4rem] font-black mb-2 bg-clip-text text-transparent bg-gradient-to-br from-emerald-400 to-amber-400">
                {visible ? (
                  <CountUp to={it.value} suffix={it.suffix} />
                ) : (
                  <span>0{it.suffix}</span>
                )}
              </div>
              <div className="text-sm font-semibold opacity-80">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({ to, suffix }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let current = 0;
    const frames = 30;
    const step = to / frames;
    const timer = setInterval(() => {
      current += step;
      if (current >= to) {
        current = to;
        clearInterval(timer);
      }
      setN(Math.floor(current));
    }, 50);
    return () => clearInterval(timer);
  }, [to]);
  return (
    <span>
      {n}
      {suffix}
    </span>
  );
}

/* ========================= Footer ========================= */
function Footer() {
  return (
    <footer className="bg-[#1f2937] text-white pt-20 pb-8">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-white/70">📍 80 Harrison Lane, FL 32547</p>
            <p className="text-white/70">📞 +1 555 87 89 56</p>
            <p className="text-white/70">📧 stories@sifworld.com</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Programs</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#farmer-empowerment" className="hover:text-white">
                  Farmer Empowerment
                </a>
              </li>
              <li>
                <a href="#women-empowerment" className="hover:text-white">
                  Women Empowerment
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-white">
                  Child Education
                </a>
              </li>
              <li>
                <a href="#health" className="hover:text-white">
                  Rural Health
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Impact</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#" className="hover:text-white">
                  All Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Success Metrics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Community Voices
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Annual Reports
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
            Transforming lives, building communities, creating lasting change
          </p>
        </div>
      </div>
    </footer>
  );
}
