import activitiesColors from "@/lib/activies";
import { scrollToSection } from "@/lib/scrollToSection";
import { UsersIcon } from "lucide-react";
import { Link } from "react-router-dom";
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
import { BentoBox, BentoCard } from "../ui/bento-card";
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
                  "inline-block px-4 py-1.5 mb-6  rounded-full text-[10px] font-bold uppercase tracking-widest " +
                  bgColor
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
        <div className="max-w-6xl mx-auto bg-zinc-900 text-white section-gap rounded-[2.5rem]">
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

      <section className="section-gap" id="Foundations">
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

      <section id="programs" className="section-gap">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="subheading ">The Noni Project - Siddipet.</h2>
            <p className="text-gray-500 mt-4 text-lg">
              A flagship initiative launched in 2022, transforming lives through
              sustainable cultivation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <BentoBox className="md:col-span-7  text-white  flex flex-col justify-between h-[450px] overflow-hidden">
              <div
                className="relative bg-cover bg-center w-full h-full p-12"
                style={{ backgroundImage: `url(${Banner2})` }}
              >
                <div className="absolute inset-0 bg-black/60" />
                <div className="z-10 relative my-4">
                  <h3 className="text-3xl font-bold mt-4 mb-4">
                    DXN Partnership & Buy-back
                  </h3>
                  <p className="text-white max-w-sm">
                    SIF facilitated the supply of Noni plants from DXN and
                    established a comprehensive buy-back scheme to ensure
                    financial security.
                  </p>
                </div>

                <Link
                  to="#"
                  className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium w-fit relative "
                >
                  View Schedule
                </Link>
              </div>
            </BentoBox>

            <BentoBox className="md:col-span-5 bg-gray-50 p-10 flex flex-col justify-between h-[450px]">
              <div>
                <div
                  className={`w-12 h-12 bg-white rounded-[2.5rem] flex items-center justify-center mb-6 shadow-sm ${textColor}`}
                >
                  <UsersIcon className={`h-5 w-5 ${textColor}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">Dedicated Support</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Comprehensive soil testing conducted to ensure optimal growing
                  conditions and long-term land health.
                </p>
              </div>

              <Link to="#" className={`${textColor} font-medium text-sm`}>
                Learn more &gt;
              </Link>
            </BentoBox>

            <BentoBox className="md:col-span-4 bg-white p-8 border border-gray-100">
              <h4 className="font-bold mb-2">Scientific Soil Management</h4>
              <p className="text-gray-500 text-sm mb-4">
                Technical training on plantation techniques, irrigation methods,
                and organic farming standards.
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
                style={{ backgroundImage: `url(${Banner3})` }}
              >
                <div className="absolute inset-0 bg-black/60" />
                <h4 className="font-bold mb-2 relative">Trainers Program</h4>
                <p className="text-sm mb-4 relative">
                  Join our certified facilitator program and spread the
                  practice.
                </p>
                <span className="text-white text-xs relative font-bold uppercase tracking-widest underline underline-offset-4">
                  Apply Now
                </span>
              </div>
            </BentoBox>
          </div>
        </div>
      </section>
      <Interventions />

      <TestimonialsCarousel testimonials={DEFAULT_TESTIMONIALS} />

      <section className="section-gap max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2
            className={`text-[10px] uppercase tracking-[0.3em]  font-bold mb-4 ${textColor}`}
          >
            Start Your Journey
          </h2>
          <h3 className="subheading text-gradient">Join Our Mission.</h3>
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
    <section id="interventions" className="section-gap bg-white">
      <div className="max-w-6xl mx-auto ">
        <h2 className="subheading mb-16">Our Interventions & Activities.</h2>

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

const cards = [
  {
    icon: "📅",
    title: "Partner Farmer",
    description: "Join our network and benefit from training and linkages.",
    buttonText: "Find Events",
    href: "/",
  },
  {
    icon: "📍",
    title: "Corporate Partner",
    description: "Collaborate on buy-back schemes or community development.",
    buttonText: "Request Visit",
    href: "/contact-us",
  },
  {
    icon: "🎓",
    title: "Education",
    description: "Support our farmer education programs or volunteer.",
    buttonText: "Apply Now",
    href: "/join-us",
  },
  {
    icon: "❤️",
    title: "Sponsor a Farm",
    description: "Help expand our program by funding training workshops.",
    buttonText: "Sponsor",
    href: "/join-us",
  },
];
