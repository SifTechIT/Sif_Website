import activitiesColors from "@/lib/activies";
import { scrollToSection } from "@/lib/scrollToSection";
import { Link } from "react-router-dom";
import SunyaMeditation from "../../assets/RuralHealth/Stress_Relief.jpg";
import banner from "../../assets/RuralHealth/banner.jpg";
import bento1 from "../../assets/RuralHealth/bento1.jpg";
import bento2 from "../../assets/RuralHealth/bento2.jpg";
import TestimonialsCarousel from "../ui/TestimonialsCarousel";
import { BentoBox, BentoCard } from "../ui/bento-card";

const DEFAULT_TESTIMONIALS = [
  {
    quote:
      "Before SIF's awareness drive, many in our village ignored basic hygiene. Now our children follow safe practices, and women openly discuss health issues without hesitation.",
    highlight: "₹1,80,000",
    name: "Community Volunteer",
    role: "Rural Telangana",
    avatarText: "C",
    accent: "text-blue-600",
  },
  {
    quote:
      "The mobile health camps brought medical care to our doorstep. Early detection saved my mother's life, and now our entire family prioritizes preventive health check-ups.",
    highlight: "",
    name: "Rajesh Kumar",
    role: "Village Health Beneficiary",
    avatarText: "R",
    accent: "text-emerald-600",
  },
  {
    quote:
      "SIF's women's health programs gave us courage to seek proper care. The menstrual hygiene awareness changed how we approach health in our community.",
    highlight: "",
    name: "Sita Devi",
    role: "Women's Health Advocate",
    avatarText: "S",
    accent: "text-indigo-600",
  },
];

export default function RuralHealthPage() {
  const textColor = activitiesColors.ruralHealthAwareness.text;
  const bgColor = activitiesColors.ruralHealthAwareness.bg;
  return (
    <main>
      <section className="hero-gradient   relative w-full  ">
        <div className="relative min-h-[90vh] sm:min-h-[680px] w-full mx-auto   ">
          <div
            className="absolute inset-0 bg-cover bg-center w-full h-full "
            style={{ backgroundImage: `url(${SunyaMeditation})` }}
          >
            <div className="absolute inset-0 bg-black/60" />

            <div className="max-w-4xl mx-auto text-center flex  flex-col justify-center items-center h-full  relative z-10 text-white">
              <div
                className={
                  "inline-block px-4 py-1.5 mb-6 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur border border-white/30 " +
                  bgColor
                }
              >
                Healthcare for Underserved Communities
              </div>
              <h1 className="heading mb-6 text-white">
                Rural Health &amp; Awareness.
              </h1>
              <p className="hero-desc mb-10 max-w-2xl mx-auto text-white">
                Building healthier, informed, and resilient communities through
                comprehensive preventive care and nutrition education.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button
                  onClick={() => scrollToSection("initiative")}
                  className="bg-black text-white px-8 py-3 rounded-full font-semibold  transition w-full sm:w-auto"
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
            <h3 className="subheading"> Health Impact Metrics</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">
                5,000+
              </div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Beneficiaries Reached
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">25+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Villages Served
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">200+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Health Camps
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">50+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Target Villages 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap" id="initiative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2
                className={
                  "font-bold tracking-tight text-sm uppercase mb-4 " + textColor
                }
              >
                The Initiative
              </h2>
              <h3 className="subheading mb-6 text-gradient">
                Program Overview.
              </h3>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                Our comprehensive approach addresses both physical and mental
                well-being. We believe that health education is as important as
                healthcare itself, empowering communities to take charge of
                their own wellness.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Through partnerships with medical professionals, NGOs, and
                government departments, we create sustainable healthcare models
                that bring clinical excellence to the doorstep of rural India.
              </p>
            </div>
            <div className="rounded-[3rem] bg-gray-100 aspect-square flex items-center justify-center text-gray-400 overflow-hidden relative">
              <img
                src={banner}
                alt="Rural Health Banner"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="programs" className="section-gap">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="subheading ">Focus Areas.</h2>
            <p className="text-gray-500 mt-4 text-lg">
              Addressing multiple dimensions of rural wellness.
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
                  <h3 className="text-3xl font-bold mt-4 mb-4">
                    Preventive Health Camps
                  </h3>
                  <p className="text-white max-w-sm">
                    Regular camps covering general check-ups, maternal care, eye
                    care, and early detection via mobile medical units.
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
                <div className="text-4xl">🥗</div>
                <h3 className="text-xl font-bold mb-3">Nutrition & Hygiene</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Educational sessions on balanced diets, safe water practices,
                  and sanitation protocols.
                </p>
              </div>

              <Link to="#" className={`${textColor} font-medium text-sm`}>
                Learn more &gt;
              </Link>
            </BentoBox>

            <BentoBox className="md:col-span-4 bg-white p-8 border border-gray-100">
              <h4 className="font-bold mb-2">Mental Health</h4>
              <p className="text-gray-500 text-sm mb-4">
                Integrating Sunya meditation for stress reduction and clarity.
              </p>
              <span
                className={`${textColor} text-xs font-bold uppercase tracking-widest `}
              >
                Join Live
              </span>
            </BentoBox>

            <BentoBox className="md:col-span-4 bg-white p-8 border border-gray-100">
              <h4 className="font-bold mb-2">Strategic Partners</h4>
              <p className="text-gray-500 text-sm mb-4">
                Collaborating with doctors and NGOs for sustainable impact.
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

      <section className="section-gap">
        <div className="max-w-6xl mx-auto">
          <h2 className="subheading mb-16">Key Interventions.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12">
            <div>
              <h4 className="font-bold border-b border-gray-100 pb-4 mb-4">
                School Health Education
              </h4>
              <p className="text-sm text-gray-500">
                Hygiene and nutrition modules delivered to children in rural
                schools.
              </p>
            </div>
            <div>
              <h4 className="font-bold border-b border-gray-100 pb-4 mb-4">
                Women's Health Programs
              </h4>
              <p className="text-sm text-gray-500">
                Menstrual health awareness, maternal care, and anemia
                prevention.
              </p>
            </div>
            <div>
              <h4 className="font-bold border-b border-gray-100 pb-4 mb-4">
                Essential Kit Distribution
              </h4>
              <p className="text-sm text-gray-500">
                Providing hygiene kits, water filters, and PPE to families in
                need.
              </p>
            </div>
            <div>
              <h4 className="font-bold border-b border-gray-100 pb-4 mb-4">
                Community Awareness
              </h4>
              <p className="text-sm text-gray-500">
                Door-to-door campaigns to spread key health messages and
                preventive care.
              </p>
            </div>
            <div>
              <h4 className="font-bold border-b border-gray-100 pb-4 mb-4">
                Health Tracking
              </h4>
              <p className="text-sm text-gray-500">
                Systematic monitoring of outcomes to ensure long-term wellness.
              </p>
            </div>
            <div>
              <h4 className="font-bold border-b border-gray-100 pb-4 mb-4">
                Village Health Camps
              </h4>
              <p className="text-sm text-gray-500">
                Mobile units and periodic check-ups conducted by volunteer
                doctors.
              </p>
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
            Join Our Health Mission.
          </h2>
          <h3 className="subheading text-gradient">Get Involved.</h3>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Multiple pathways to experience, share, and support the practice of
            Sunya meditation globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {healthMissionCards.map((card, index) => (
            <BentoCard key={index} {...card} btnColor={bgColor} />
          ))}
        </div>
      </section>
    </main>
  );
}
const healthMissionCards = [
  {
    icon: "🩺",
    title: "Volunteer Doctor",
    description: "Join our camps and provide essential medical services.",
    buttonText: "Register Now",
    href: "/",
  },
  {
    icon: "🏢",
    title: "Corporate Partners",
    description: "Sponsor mobile units or health education via CSR.",
    buttonText: "Partner With Us",
    href: "/",
  },
  {
    icon: "🎓",
    title: "Health Educator",
    description: "Volunteer to teach hygiene and wellness in rural schools.",
    buttonText: "Get Involved",
    href: "/",
  },
  {
    icon: "❤️",
    title: "Sponsor a Camp",
    description: "Fund medical supplies to bring healthcare to more villages.",
    buttonText: "Sponsor",
    href: "/",
  },
];
