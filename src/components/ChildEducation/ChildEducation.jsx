import activitiesColors from "@/lib/activies";
import { scrollToSection } from "@/lib/scrollToSection";
import { Link } from "react-router-dom";
import banner from "../../assets/AusumKids/Banner1.jpg";
import bento1 from "../../assets/AusumKids/Banner2.jpg";
import bento2 from "../../assets/AusumKids/Banner3.jpg";
import CommunityBuilding from "../../assets/AusumKids/CommunityBuilding.jpg";
import ExpressiveGames from "../../assets/AusumKids/Expressive_Games.jpeg";
import Little_Sunyatee from "../../assets/AusumKids/Little_Sunyatee.jpeg";
import MindfulnessSession from "../../assets/AusumKids/MindfulnessSession.jpeg";
import OpenCircles from "../../assets/AusumKids/Open_Circles.jpeg";
import ResolutionCards from "../../assets/AusumKids/Resolution_Cards.jpeg";
import StoryTelling from "../../assets/AusumKids/StoryTelling.jpg";
import TestimonialsCarousel from "../ui/TestimonialsCarousel";
import { BentoBox, BentoCard } from "../ui/bento-card";
export default function ChildEducationCentresPage() {
  const DEFAULT_TESTIMONIALS = [
    {
      quote:
        "The day was filled with laughter, empathy, and joyful social learning. Children played, meditated, and shared openly. It's a space where they learn not just ABCs, but also kindness and self-awareness.",
      highlight: "",
      name: "Facilitator",
      role: "Child Education Centre",
      avatarText: "F",
      accent: "text-blue-600",
    },
    {
      quote:
        "My daughter comes home excited about her “mindfulness time” and practices being kind to her younger brother. The behavioral changes we see at home are remarkable.",
      highlight: "",
      name: "Priya Sharma",
      role: "Parent of Centre Participant",
      avatarText: "P",
      accent: "text-emerald-600",
    },
    {
      quote:
        "Children who were shy and withdrawn now participate actively. The opening circles and expressive games have built their confidence and social skills beautifully.",
      highlight: "",
      name: "Teacher Coordinator",
      role: "Rural Education Centre",
      avatarText: "T",
      accent: "text-indigo-600",
    },
  ];
  const textColor = activitiesColors.childEducation.text;
  const bgColor = activitiesColors.childEducation.bg;
  return (
    <main>
      <section className="hero-gradient   relative w-full  ">
        <div className="relative min-h-[90vh] sm:min-h-[680px] w-full mx-auto   ">
          <div
            className="absolute inset-0 bg-cover bg-center w-full h-full "
            style={{ backgroundImage: `url(${banner})` }}
          >
            <div className="absolute inset-0 bg-black/60" />

            <div className="max-w-4xl mx-auto text-center flex  flex-col justify-center items-center h-full  relative z-10 text-white">
              <h1 className="heading mb-6 text-white">
                Child Education Centres.
              </h1>
              <p className="hero-desc mb-10 max-w-2xl mx-auto text-white">
                Creating environments where children learn, play, and grow
                holistically through early learning, mindfulness, and behavioral
                development.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button
                  className="bg-black text-white px-10 py-4 rounded-full font-semibold hover:bg-zinc-800 transition shadow-lg"
                  onClick={() => scrollToSection("Foundations")}
                >
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-4 -mt-30 z-56 ">
        <div className="max-w-6xl mx-auto bg-zinc-900 text-white section-gap rounded-[2rem]">
          <div className="text-center mb-16">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-4">
              Young Lives Impact
            </h2>
            <h3 className="subheading">Measurable Outcomes</h3>
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

      <section className="section-gap" id="Foundations">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2
                className={`${textColor} font-bold tracking-tight text-sm uppercase mb-4`}
              >
                Foundations for Life
              </h2>
              <h3 className="subheading mb-6 ">Holistic Growth.</h3>
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
            <div
              className={`rounded-[3rem]  aspect-square flex items-center justify-center text-purple-300 overflow-hidden relative shadow-inner`}
            >
              <img
                src={Little_Sunyatee}
                alt="Child Education Centres"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="programs" className="section-gap">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="subheading ">Development Focus Areas</h2>
            <p className="text-gray-500 mt-4 text-lg">
              A comprehensive approach addressing multiple dimensions of child
              growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <BentoBox className="md:col-span-7  text-white  flex flex-col justify-between h-[450px] overflow-hidden">
              <div
                className="relative bg-cover bg-center w-full h-full p-12"
                style={{ backgroundImage: `url(${bento1})` }}
              >
                <div className="absolute inset-0 bg-black/60" />
                <div className="z-10 relative my-4">
                  <div className="text-4xl">📖</div>
                  <h3 className="text-3xl font-bold mt-4 mb-4">
                    Early Learning & Literacy
                  </h3>
                  <p className="text-white max-w-sm">
                    Age-appropriate language and cognitive activities through
                    engaging, play-based methods.
                  </p>
                </div>

                <Link
                  to="#"
                  className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium w-fit relative "
                >
                  Learn More
                </Link>
              </div>
            </BentoBox>

            <BentoBox className="md:col-span-5 bg-gray-50 p-10 flex flex-col justify-between h-[450px]">
              <div>
                <div className="text-4xl">🧘</div>
                <h3 className="subheading mb-3">Kids' Sunya Programs</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Simple, playful practices that enhance concentration,
                  patience, and self-awareness.
                </p>
              </div>

              <Link to="#" className={`${textColor} font-medium text-sm`}>
                Learn more &gt;
              </Link>
            </BentoBox>

            <BentoBox className="md:col-span-4 bg-white p-8 border border-gray-100">
              <h4 className="font-bold mb-2">Creative Learning</h4>
              <p className="text-gray-500 text-sm mb-4">
                Storytelling and art that encourage collaboration and
                self-expression.
              </p>
              <span
                className={`${textColor} text-xs font-bold uppercase tracking-widest `}
              >
                Join Live
              </span>
            </BentoBox>

            <BentoBox className="md:col-span-4 bg-white p-8 border border-gray-100">
              <h4 className="font-bold mb-2">School Programs</h4>
              <p className="text-gray-500 text-sm mb-4">
                Introduction to Sunya for students to enhance focus and focus.
              </p>
              <span
                className={`${textColor} text-xs font-bold uppercase tracking-widest`}
              >
                Explore
              </span>
            </BentoBox>

            <BentoBox className="md:col-span-4  text-white overflow-hidden">
              <div
                className="relative bg-cover bg-center w-full h-full p-8 "
                style={{ backgroundImage: `url(${bento2})` }}
              >
                <div className="absolute inset-0 bg-black/60" />
                <h4 className="font-bold mb-2 relative">Inclusive Spaces</h4>
                <p className="text-sm mb-4 relative">
                  Equal opportunities for learning where every voice is
                  respected.
                </p>
                <span className="text-white text-xs relative font-bold uppercase tracking-widest underline underline-offset-4">
                  Apply Now
                </span>
              </div>
            </BentoBox>
          </div>
        </div>
      </section>

      <Activities />
      <TestimonialsCarousel testimonials={DEFAULT_TESTIMONIALS} />
      <section className="section-gap max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gradient">
            Join Our Development Mission.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {missionCards.map((card, index) => (
            <BentoCard key={index} {...card} btnColor={bgColor} />
          ))}
        </div>
      </section>
    </main>
  );
}

const missionCards = [
  {
    icon: (
      <i className={`fas fa-chalkboard-teacher text-purple-600  text-xl`} />
    ),
    title: "Facilitator",
    description: "Train to deliver Little Sunyatee programs in your community.",
    buttonText: "Apply Now",
    href: "/",
  },
  {
    icon: <i className={`fas fa-hands-helping text-purple-600  text-xl`} />,
    title: "Volunteer",
    description: "Support our centres through programs or administration.",
    buttonText: "Get Involved",
    href: "/",
  },
  {
    icon: <i className={`fas fa-users text-purple-600  text-xl`} />,
    title: "Parent Workshops",
    description: "Extend behavioral practices into your home environment.",
    buttonText: "Register",
    href: "/",
  },
  {
    icon: <i className={`fas fa-heart text-purple-600  text-xl`} />,
    title: "Sponsor a Centre",
    description: "Establish new centres with materials and funding.",
    buttonText: "Sponsor Now",
    href: "/",
  },
];

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
    <section id="activities" className="section-gap bg-white">
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
