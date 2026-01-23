import { useEffect, useState } from "react";
import AusumKids from "../../assets/AusumKids/Ausum_kids.jpg";
import Banner1 from "../../assets/AusumKids/Banner1.jpg";
import Banner2 from "../../assets/AusumKids/Banner2.jpg";
import Banner3 from "../../assets/AusumKids/Banner3.jpg";
import CommunityBuilding from "../../assets/AusumKids/CommunityBuilding.jpg";
import ExpressiveGames from "../../assets/AusumKids/Expressive_Games.jpeg";
import MindfulnessSession from "../../assets/AusumKids/MindfulnessSession.jpeg";
import OpenCircles from "../../assets/AusumKids/Open_Circles.jpeg";
import ResolutionCards from "../../assets/AusumKids/Resolution_Cards.jpeg";
import StoryTelling from "../../assets/AusumKids/StoryTelling.jpg";
import SunyaMeditation from "../../assets/Home/Sunya_Meditation.JPG";

export default function ChildEducationCentresPage() {
  return (
    <main>
      <section className="hero-gradient   relative w-full  ">
        <div className="relative min-h-[90vh] sm:min-h-[660px] w-full mx-auto   ">
          <div
            className="absolute inset-0 bg-cover bg-center w-full h-full "
            style={{ backgroundImage: `url(${SunyaMeditation})` }}
          >
            <div className="absolute inset-0 bg-black/60" />

            <div className="max-w-4xl mx-auto text-center flex  flex-col justify-center items-center h-full  relative z-10 text-white">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
                Child Education Centres.
              </h1>
              <p className="text-xl md:text-2xl  font-light mb-10 max-w-2xl mx-auto text-white">
                Creating environments where children learn, play, and grow
                holistically through early learning, mindfulness, and behavioral
                development.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition w-full sm:w-auto">
                  See Our Impact
                </button>
                <a
                  href="#"
                  className="text-white hover:underline font-medium text-lg"
                >
                  Our Programs
                  <i className="fas fa-chevron-right text-xs ml-1"></i>
                  {/* <ChevronRight className="w-4 h-4" /> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-4 -mt-30 z-56 mb-8">
        <div className="max-w-6xl mx-auto bg-zinc-900 text-white py-24 px-6 rounded-[2rem]">
          <div className="text-center mb-16">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-4">
              Young Lives Impact
            </h2>
            <h3 className="text-3xl font-bold">Measurable Outcomes</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">500+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Children Positively
                <br />
                Impacted
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">15+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Active Education
                <br />
                Centres
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">100+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Trained
                <br />
                Facilitators
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">25+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Communities
                <br />
                Served
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-purple-600 font-bold tracking-tight text-sm uppercase mb-4">
                Foundations for Life
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gradient">
                Holistic Growth.
              </h3>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                Our centres are safe, nurturing spaces where children build a
                strong foundation for both education and life. We focus on early
                learning, behavioral development, and mindful awareness.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                These hubs bring together children, parents, and facilitators,
                creating supportive environments where every child's voice is
                heard and valued.
              </p>
            </div>
            <div className="rounded-[3rem] bg-purple-soft aspect-square flex items-center justify-center text-purple-300 overflow-hidden relative shadow-inner">
              <i className="fas fa-child text-9xl opacity-20"></i>
              <div className="absolute bottom-10 text-center">
                <p className="text-[10px] uppercase tracking-widest font-bold text-purple-400">
                  Creative Learning Environments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-gradient">
              Development Focus Areas
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A comprehensive approach addressing multiple dimensions of child
              growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bento-card col-span-1 md:col-span-2 md:row-span-2 bg-zinc-900 text-white p-12 flex flex-col justify-end min-h-[450px]">
              <div className="absolute top-12 left-12 text-5xl">📖</div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">
                  Early Learning & Literacy
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  Age-appropriate language and cognitive activities through
                  engaging, play-based methods.
                </p>
                <button className="bg-white text-black px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Learn More
                </button>
              </div>
            </div>

            <div className="bento-card col-span-1 md:col-span-2 p-10 flex flex-col justify-between bg-purple-50/50 border-purple-100">
              <div className="flex justify-between items-start">
                <div className="text-4xl">🧘</div>
                <span className="text-[9px] font-bold uppercase tracking-widest bg-purple-600 text-white px-3 py-1 rounded-full">
                  Mindfulness
                </span>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Kids' Sunya Programs</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Simple, playful practices that enhance concentration,
                  patience, and self-awareness.
                </p>
              </div>
            </div>

            <div className="bento-card p-8 flex flex-col justify-center text-center">
              <div className="text-3xl mb-4">🎨</div>
              <h4 className="font-bold mb-2">Creative Learning</h4>
              <p className="text-gray-500 text-xs">
                Storytelling and art that encourage collaboration and
                self-expression.
              </p>
            </div>

            <div className="bento-card p-8 flex flex-col justify-center text-center bg-purple-600 text-white border-none">
              <div className="text-3xl mb-4">🤗</div>
              <h4 className="font-bold mb-2 text-white">Inclusive Spaces</h4>
              <p className="text-purple-100 text-xs">
                Equal opportunities for learning where every voice is respected.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-16 text-gradient">
          Key Interventions & Activities.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12">
          <div className="border-t border-gray-100 pt-6">
            <h4 className="font-bold mb-3">Opening Circles</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Children start by sharing something about friends, building an
              environment of respect and belonging.
            </p>
          </div>
          <div className="border-t border-gray-100 pt-6">
            <h4 className="font-bold mb-3">Expressive Games</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Kindness and empathy practiced through Food Bingo, story
              enactments, and snack-sharing.
            </p>
          </div>
          <div className="border-t border-gray-100 pt-6">
            <h4 className="font-bold mb-3">Conflict Resolution Cards</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Older children reflect on real-life situations to develop
              respectful responses.
            </p>
          </div>
          <div className="border-t border-gray-100 pt-6">
            <h4 className="font-bold mb-3">Daily Mindfulness</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Grounding through Sunya meditation to develop calmness and focus.
            </p>
          </div>
          <div className="border-t border-gray-100 pt-6">
            <h4 className="font-bold mb-3">Storytelling & Role-Play</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Interactive sessions that develop language skills and social
              understanding.
            </p>
          </div>
          <div className="border-t border-gray-100 pt-6">
            <h4 className="font-bold mb-3">Community Building</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Strengthening support networks by bringing together children,
              parents, and facilitators.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-zinc-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gradient">
              Voices from Our Centres
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="border-l-2 border-purple-600 pl-8">
              <p className="text-xl font-light italic text-gray-600 mb-6">
                "My daughter comes home excited about her 'mindfulness time' and
                practices being kind to her younger brother. The changes are
                remarkable."
              </p>
              <div className="font-bold text-sm">Priya Sharma</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">
                Parent of Participant
              </div>
            </div>
            <div className="border-l-2 border-purple-600 pl-8">
              <p className="text-xl font-light italic text-gray-600 mb-6">
                "Children who were shy and withdrawn now participate actively.
                The opening circles have built their confidence beautifully."
              </p>
              <div className="font-bold text-sm">Teacher Coordinator</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">
                Rural Education Centre
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gradient">
            Join Our Development Mission.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bento-card p-8 bg-purple-50/50 border-purple-100">
            <i className="fas fa-chalkboard-teacher text-purple-600 mb-6 text-xl"></i>
            <h4 className="font-bold mb-2">Facilitator</h4>
            <p className="text-xs text-gray-500 mb-6">
              Train to deliver Little Sunyatee programs in your community.
            </p>
            <button className="text-[10px] font-bold uppercase tracking-widest text-purple-600">
              Apply Now {">"}
            </button>
          </div>
          <div className="bento-card p-8">
            <i className="fas fa-hands-helping text-purple-600 mb-6 text-xl"></i>
            <h4 className="font-bold mb-2">Volunteer</h4>
            <p className="text-xs text-gray-500 mb-6">
              Support our centres through programs or administration.
            </p>
            <button className="text-[10px] font-bold uppercase tracking-widest text-purple-600">
              Get Involved {">"}
            </button>
          </div>
          <div className="bento-card p-8">
            <i className="fas fa-users text-purple-600 mb-6 text-xl"></i>
            <h4 className="font-bold mb-2">Parent Workshops</h4>
            <p className="text-xs text-gray-500 mb-6">
              Extend behavioral practices into your home environment.
            </p>
            <button className="text-[10px] font-bold uppercase tracking-widest text-purple-600">
              Register {">"}
            </button>
          </div>
          <div className="bento-card p-8 bg-zinc-900 text-white border-none">
            <i className="fas fa-heart text-purple-400 mb-6 text-xl"></i>
            <h4 className="font-bold mb-2">Sponsor a Centre</h4>
            <p className="text-xs text-zinc-500 mb-6">
              Establish new centres with materials and funding.
            </p>
            <button className="text-[10px] font-bold uppercase tracking-widest text-white underline">
              Sponsor Now
            </button>
          </div>
        </div>
      </section>
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

/* ========================= Hero Slider ========================= */
function HeroSlider() {
  const slides = [
    {
      image: Banner1,

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
      image: Banner2,
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
      image: Banner3,
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
              <div className="flex flex-wrap opacity-90 items-center justify-center gap-4">
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
        <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
          <img
            src={AusumKids}
            alt="circle"
            className="w-full h-full object-cover"
          />
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
      image: OpenCircles,
      icon: "👥",
      title: "Opening Circles",
      text: "Children begin each session by sharing something about their friends, creating an environment of respect, belonging, and visibility.",
    },
    {
      image: ExpressiveGames,
      icon: "🎲",
      title: "Expressive Games",
      text: "Activities like Food Bingo, story enactments, and snack-sharing games where children practice kindness, empathy, and communication.",
    },
    {
      image: ResolutionCards,
      icon: "🃏",
      title: "Conflict Resolution Cards",
      text: "Older children explore real-life situations using cards that help them reflect on conflict resolution and respectful responses.",
    },
    {
      image: MindfulnessSession,
      icon: "🧘",
      title: "Daily Mindfulness Sessions",
      text: "Grounding through Sunya meditation, helping children develop calmness, focus, and self-regulation skills.",
    },
    {
      image: StoryTelling,
      icon: "📖",
      title: "Storytelling & Role-Play",
      text: "Interactive storytelling sessions and role-playing activities that develop language skills, creativity, and social understanding.",
    },
    {
      image: CommunityBuilding,
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
              <div className="h-52 w-full bg-gray-100 flex items-center justify-center">
                <img
                  src={it.image}
                  alt={it.title}
                  className="h-full w-full object-cover "
                />
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
                    <div className="min-w-12 min-h-12 w-16 h-16 rounded-full grid place-items-center bg-gradient-to-br from-blue-600 to-teal-500 text-lg sm:text-xl md:text-2xl font-bold shrink-0">
                      {s.avatar}
                    </div>
                    <div className="text-left">
                      <h4 className="text-sm sm:text-base font-semibold">
                        {s.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-white/70">
                        {s.role}
                      </p>
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
  const items = [
    {
      icon: "🏫",
      title: "Become a Facilitator",
      text: "Train to become a certified facilitator and help deliver our Little Sunyatee programs and mindfulness education to children in your community.",
      cta: "Apply Now",
      grad: "from-orange-500 to-orange-700",
      invert: true,
    },
    {
      icon: "🙋‍♀️",
      title: "Volunteer Support",
      text: "Support our centres through volunteer activities, help with children's programs, or assist with administrative and operational needs.",
      cta: "Get Involved",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Parent Workshops",
      text: "Join our parent education programs to extend behavioral and mindfulness practices into your home environment.",
      cta: "Register",
    },
    {
      icon: "❤️",
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
