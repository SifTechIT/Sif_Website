import activitiesColors from "@/lib/activies";
import { scrollToSection } from "@/lib/scrollToSection";
import WomenStitching from "../../assets/women_stitching.JPG";
import Banner1 from "../../assets/WomenEmpowerment/banner1.jpeg";
import { BentoCard } from "../ui/bento-card";
import TestimonialsCarousel from "../ui/TestimonialsCarousel";
export default function WomenEmpowermentPage() {
  const DEFAULT_TESTIMONIALS = [
    {
      quote:
        "I stitched 200 school uniforms this year. For the first time, my children saw me as someone who makes things that matter.",
      highlight: "",
      name: "Rajitha",
      role: "Production Unit Member, Siddipet",
      avatarText: "R",
      accent: "text-blue-600",
    },
    {
      quote:
        "I came in as a silent learner. Today, I train others. This place gave me a future I didn't know I could have.",
      highlight: "",
      name: "Sucharitha",
      role: "Team Leader, Apparel Division",
      avatarText: "S",
      accent: "text-emerald-600",
    },
    {
      quote:
        "I paid for my daughter's classes with the money I earned. It felt like I sewed our dreams into every garment.",
      highlight: "",
      name: "Jyoti",
      role: "Home-based Tailor, Siddipet",
      avatarText: "J",
      accent: "text-indigo-600",
    },
  ];
  const textColor = activitiesColors.womenSkillCenters.text;
  const bgColor = activitiesColors.womenSkillCenters.bg;
  return (
    <main>
      <section className="hero-gradient relative w-full">
        <div className="relative min-h-[90vh] sm:min-h-[680px] w-full mx-auto   ">
          <div
            className="absolute inset-0 bg-cover bg-center w-full h-full "
            style={{ backgroundImage: `url(${Banner1})` }}
          >
            <div className="absolute inset-0 bg-black/60" />

            <div className="max-w-4xl mx-auto text-center flex  flex-col justify-center items-center h-full  relative z-10 text-white">
              <h1 className="heading mb-6 text-white">She Leads, We Rise.</h1>
              <p className="hero-desc mb-10 max-w-2xl mx-auto text-white">
                Rewriting the story of rural women through skill development,
                meditation, and sustainable livelihood programs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button
                  onClick={() => scrollToSection("mission")}
                  className="bg-black text-white px-8 py-3 rounded-full font-semibold  transition w-full sm:w-auto"
                >
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative mx-4 -mt-30 z-56 mb-8">
        <div className="max-w-6xl mx-auto bg-zinc-900 text-white section-gap rounded-[2.5rem]">
          <div className="text-center mb-16">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-4">
              Young Lives Impact
            </h2>
            <h3 className="subheading">Collective Impact 2024–25</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">250+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Women Trained
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">10k+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Garments Produced
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">100+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Micro-Enterprises
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">500+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Practicing Sunya
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">100%</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                On-Time Delivery
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">50+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Leadership Roles
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap bg-gray-50/50" id="mission">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="subheading tracking-tight">
              The Mission Behind the Movement
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm font-bold text-pink-600 border border-pink-100">
                1
              </div>
              <h4 className="font-bold mb-3">Inner Strength</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Sunya workshops that bring clarity, calm, and self-awareness to
                transform lives from within.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm font-bold text-pink-600 border border-pink-100">
                2
              </div>
              <h4 className="font-bold mb-3">Livelihood Training</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Comprehensive training in tailoring and entrepreneurship to
                create sustainable income.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm font-bold text-pink-600 border border-pink-100">
                3
              </div>
              <h4 className="font-bold mb-3">Holistic Well-being</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Health programs including free medical check-ups and physical
                wellness initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2
                className={
                  " font-bold tracking-tight text-sm uppercase mb-4 " +
                  textColor
                }
              >
                Production Spotlight
              </h2>
              <h3 className="text-4xl font-bold tracking-tight mb-6">
                Siddipet: Stitching Strength.
              </h3>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                Women once bound by circumstance now lead production units and
                contribute to real-world supply chains with pride.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-gray-700 text-sm">
                  <i className="fas fa-check text-pink-500"></i> Kimono and Zafu
                  cushion production
                </li>
                <li className="flex items-center gap-3 text-gray-700 text-sm">
                  <i className="fas fa-check text-pink-500"></i> Bulk uniform
                  stitching for government projects
                </li>
                <li className="flex items-center gap-3 text-gray-700 text-sm">
                  <i className="fas fa-check text-pink-500"></i> Home-based work
                  opportunities
                </li>
              </ul>
              <div className="flex gap-12 border-t border-gray-100 pt-8">
                <div>
                  <div className="text-3xl font-bold">250+</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">
                    Women Trained
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold">10K+</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">
                    Garments Made
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[3rem] bg-gray-100 h-[500px] flex items-center justify-center text-gray-400 overflow-hidden relative">
              <img
                src={WomenStitching}
                alt="Sewing"
                className="w-full h-full object-cover absolute top-0 left-0"
              />
            </div>
          </div>
        </div>
      </section>

      <TestimonialsCarousel testimonials={DEFAULT_TESTIMONIALS} />

      <section className="section-gap max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2
            className={`text-[10px] uppercase tracking-[0.3em]  font-bold mb-4 ${textColor}`}
          >
            Start Your Journey
          </h2>
          <h3 className="subheading text-gradient">Be Part of Her Journey.</h3>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Multiple pathways to experience, share, and support the practice of
            Sunya meditation globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <BentoCard key={index} {...card} btnColor={bgColor} />
          ))}
        </div>
      </section>
    </main>
  );
}

const cards = [
  {
    icon: "📅",
    title: "Partner with SIF",
    description: "Collaborate on rural empowerment projects.",
    buttonText: "Find Events",
    href: "/",
  },
  {
    icon: "📍",
    title: "Order Apparel",
    description: "Support production through direct orders.",
    buttonText: "Request Visit",
    href: "/contact-us",
  },
  {
    icon: "🎓",
    title: "Fund Training",
    description: "Invest in skill development and empowerment.",
    buttonText: "Apply Now",
    href: "/join-us",
  },
  {
    icon: "❤️",
    title: "Sponsor a Machine",
    description: "Provide the tools for sustainable livelihood.",
    buttonText: "Sponsor",
    href: "/join-us",
  },
];
