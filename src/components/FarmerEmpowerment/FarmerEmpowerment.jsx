import activitiesColors from "@/lib/activies";
import { scrollToSection } from "@/lib/scrollToSection";
import Banner1 from "../../assets/FarmerEmpowerment/Banner1.jpeg";
import Banner2 from "../../assets/FarmerEmpowerment/Banner2.jpeg";
import Banner3 from "../../assets/FarmerEmpowerment/Banner3.jpeg";
import Crop from "../../assets/FarmerEmpowerment/crop.jpeg";
import {
  default as FarmerGroups,
  default as Market,
} from "../../assets/FarmerEmpowerment/Farmer_Groups.jpeg";
import SoilTesting from "../../assets/FarmerEmpowerment/Soil_Testing.jpeg";
import Technology from "../../assets/FarmerEmpowerment/Technology.jpeg";
import Training from "../../assets/FarmerEmpowerment/Training.jpeg";
import TestimonialsCarousel from "../ui/TestimonialsCarousel";

export default function FarmerEmpowermentPage() {
  const textColor = activitiesColors.farmerEmpowerment.text;
  const bgColor = activitiesColors.farmerEmpowerment.bg;
  const DEFAULT_TESTIMONIALS = [
    {
      quote:
        "With SIF's guidance, we moved to sustainable crops with stable buy-back. Our lives changed as farming became less of a gamble and more of a reliable livelihood.",
      highlight: "",
      avatarText: "F",
      name: "Farmer Coordinator",
      role: "Siddipet, Telangana",
    },
    {
      quote:
        "The DXN partnership gave us confidence. Knowing our Noni harvest has a guaranteed buyer removed all our market worries. We can focus on quality farming.",
      highlight: "",
      avatarText: "R",
      name: "Ravi Kumar",
      role: "Noni Farmer, Siddipet",
    },
    {
      quote:
        "SIF's training on organic practices not only improved our soil health but also reduced our input costs. Sustainable farming is now our reality.",
      highlight: "",
      avatarText: "S",
      name: "Sunitha Devi",
      role: "Progressive Farmer, Telangana",
    },
  ];
  return (
    <main>
      <section className="hero-gradient   relative w-full  ">
        <div className="relative min-h-[90vh] sm:min-h-[680px] w-full mx-auto   ">
          <div
            className="absolute inset-0 bg-cover bg-center w-full h-full "
            style={{ backgroundImage: `url(${Banner3})` }}
          >
            <div className="absolute inset-0 bg-black/60" />

            <div className="max-w-4xl mx-auto text-center flex  flex-col justify-center items-center h-full  relative z-10 text-white">
              <div
                className={
                  "inline-block px-4 py-1.5 mb-6 bg-green-50  rounded-full text-[10px] font-bold uppercase tracking-widest " +
                  textColor
                }
              >
                🌾 Sustainable Agriculture, Resilient Communities
              </div>
              <h1 className="heading mb-6 text-white">Farmer Empowerment.</h1>
              <p className="hero-desc mb-10 max-w-2xl mx-auto text-white">
                Transforming rural livelihoods through sustainable agriculture,
                modern training, and assured market linkages.
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

      <section className="relative mx-4 -mt-30 z-56 mb-8">
        <div className="max-w-6xl mx-auto bg-zinc-900 text-white py-24 px-6 rounded-[2.5rem]">
          <div className="text-center mb-16">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-4">
              Young Lives Impact
            </h2>
            <h3 className="subheading"> Real Impact, Real Numbers</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">21</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Farmers in Siddipet
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">55</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Acres Under Noni
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">100%</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Buy-back Guarantee
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">200+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Expansion Planned
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6" id="Foundations">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="rounded-[2.5rem] bg-gray-100 aspect-square flex items-center justify-center text-gray-400 overflow-hidden relative">
              <img
                src={Banner1}
                alt="Farmer Empowerment"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2
                className={
                  " font-bold tracking-tight text-sm uppercase mb-4 " +
                  textColor
                }
              >
                Foundation
              </h2>
              <h3 className="subheading mb-6">Program Overview.</h3>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                The Farmer Empowerment program is a cornerstone initiative of
                SIF, designed to improve farmer livelihoods through modern
                training, soil health management, and assured market linkages.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Through partnerships with industry leaders like{" "}
                <strong>DXN</strong>, we ensure that farmers have guaranteed
                buyers for their produce, removing the uncertainty that often
                plagues agricultural income.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6 bg-[#fbfbfd]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="subheading">The Noni Project - Siddipet.</h2>
            <p className="text-gray-500 mt-4 text-lg">
              A flagship initiative launched in 2022, transforming lives through
              sustainable cultivation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div
              className="md:col-span-8 bento-card bg-zinc-900 text-white p-12 flex flex-col justify-between min-h-[400px] rounded-[2.5rem]"
              style={{
                backgroundImage: `url(${Banner2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div>
                <div className="text-3xl mb-6">🤝</div>
                <h3 className="text-3xl font-bold mb-4">
                  DXN Partnership & Buy-back
                </h3>
                <p className=" max-w-md">
                  SIF facilitated the supply of Noni plants from DXN and
                  established a comprehensive buy-back scheme to ensure
                  financial security.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                  Join Program
                </button>
              </div>
            </div>

            <div className="md:col-span-4 bento-card p-10 flex flex-col">
              <div className="text-2xl mb-4">👨‍🌾</div>
              <h4 className="text-xl font-bold mb-3">Dedicated Support</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                A dedicated field coordinator supports farmers in day-to-day
                cultivation activities and problem-solving.
              </p>
            </div>

            <div className="md:col-span-4 bento-card p-10 flex flex-col">
              <div className="text-2xl mb-4">🎓</div>
              <h4 className="text-xl font-bold mb-3">Comprehensive Training</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Technical training on plantation techniques, irrigation methods,
                and organic farming standards.
              </p>
            </div>

            <div className="md:col-span-8 bento-card p-10 flex flex-col md:flex-row gap-12 items-center border-green-100 bg-green-50/30">
              <div className="text-5xl">🧪</div>
              <div>
                <h4 className="text-xl font-bold mb-3">
                  Scientific Soil Management
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Comprehensive soil testing conducted to ensure optimal growing
                  conditions and long-term land health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Interventions />

      <TestimonialsCarousel testimonials={DEFAULT_TESTIMONIALS} />

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight mb-16 text-center">
          Join Our Mission.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bento-card p-10 flex flex-col justify-between">
            <div>
              <div className="text-2xl mb-6">🧑‍🌾</div>
              <h4 className="font-bold mb-3">Partner Farmer</h4>
              <p className="text-sm text-gray-500">
                Join our network and benefit from training and linkages.
              </p>
            </div>
            <button className="mt-8 text-xs font-bold uppercase tracking-widest text-green-700">
              Apply Now →
            </button>
          </div>
          <div className="bento-card p-10 flex flex-col justify-between bg-zinc-900  border-none">
            <div>
              <div className="text-2xl mb-6">🏢</div>
              <h4 className="font-bold mb-3">Corporate Partner</h4>
              <p className="text-sm text-zinc-400">
                Collaborate on buy-back schemes or community development.
              </p>
            </div>
            <button className="mt-8 text-xs font-bold uppercase tracking-widest  text-green-700  ">
              Partner With Us →
            </button>
          </div>
          <div className="bento-card p-10 flex flex-col justify-between">
            <div>
              <div className="text-2xl mb-6">🎓</div>
              <h4 className="font-bold mb-3">Education</h4>
              <p className="text-sm text-gray-500">
                Support our farmer education programs or volunteer.
              </p>
            </div>
            <button className="mt-8 text-xs font-bold uppercase tracking-widest text-green-700">
              Learn More →
            </button>
          </div>
          <div className="bento-card p-10 flex flex-col justify-between border-green-200 bg-green-50/50">
            <div>
              <div className="text-2xl mb-6">❤️</div>
              <h4 className="font-bold mb-3">Sponsor a Farm</h4>
              <p className="text-sm text-gray-700">
                Help expand our program by funding training workshops.
              </p>
            </div>
            <button className="mt-8 text-xs font-bold uppercase tracking-widest text-green-700">
              Sponsor →
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ========================= Interventions ========================= */
function Interventions() {
  const items = [
    {
      image: SoilTesting,
      icon: "🧪",
      title: "Soil Testing & Fertility Management",
      text: "Scientific soil assessment and application of bio-fertilizers and organic manures to enhance soil health and productivity.",
    },
    {
      image: Training,
      icon: "🎓",
      title: "Training Workshops",
      text: "Practical sessions on crop rotation, organic inputs, pest management, and modern irrigation methods.",
    },
    {
      image: Crop,
      icon: "🌿",
      title: "Crop Diversification",
      text: "Encouraging farmers to experiment with medicinal and high-value crops to reduce dependency on conventional farming.",
    },
    {
      image: FarmerGroups,
      icon: "👥",
      title: "Farmer Groups & Coordination",
      text: "Forming small farmer groups for collective bargaining, bulk procurement of inputs, and shared learning experiences.",
    },
    {
      image: Technology,
      icon: "📱",
      title: "Technology Integration",
      text: "Exploring mobile-based monitoring systems for field-level updates, alerts, and productivity tracking.",
    },
    {
      image: Market,
      icon: "💰",
      title: "Market Linkages",
      text: "Establishing direct connections with buyers and ensuring assured procurement through strategic partnerships.",
    },
  ];

  return (
    <section id="interventions" className="mt-30 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight mb-16">
          Our Interventions & Activities.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-[2.5rem] border border-gray-200 overflow-hidden transition hover:-translate-y-3"
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
