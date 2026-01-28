import { scrollToSection } from "@/lib/scrollToSection";
import SunyaMeditation from "../../assets/RuralHealth/Stress_Relief.jpg";
import banner from "../../assets/RuralHealth/banner.jpg";
import bento1 from "../../assets/RuralHealth/bento1.jpg";
import bento2 from "../../assets/RuralHealth/bento2.jpg";
import MissionCard from "../ui/MissionCard";
import TestimonialsCarousel from "../ui/TestimonialsCarousel";

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
                className="inline-block px-4 py-1.5 mb-6 rounded-full text-[10px] font-bold uppercase tracking-widest
          bg-white/20 backdrop-blur border border-white/30"
              >
                Healthcare for Underserved Communities
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
                Rural Health &amp; Awareness.
              </h1>
              <p className="text-xl md:text-2xl  font-light mb-10 max-w-2xl mx-auto text-white">
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
      <section className="relative mx-4 -mt-30 z-56 mb-8">
        <div className="max-w-6xl mx-auto bg-zinc-900 text-white py-24 px-6 rounded-[2rem]">
          <div className="text-center mb-16">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-4">
              Young Lives Impact
            </h2>
            <h3 className="text-3xl font-bold"> Health Impact Metrics</h3>
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

      <section className="pb-24 px-6" id="initiative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-blue-600 font-bold tracking-tight text-sm uppercase mb-4">
                The Initiative
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gradient">
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

      <section className="py-24 px-6 bg-[#fbfbfd]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight">Focus Areas.</h2>
            <p className="text-gray-500 mt-4 text-lg">
              Addressing multiple dimensions of rural wellness.
            </p>
          </div>

          <div className="bento-grid">
            <div
              className="bento-card col-span-4 md:col-span-2 md:row-span-2 bg-zinc-900 text-white p-12 flex flex-col justify-end min-h-[400px]"
              style={{
                backgroundImage: `url(${bento1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute top-12 left-12 text-5xl">🏥</div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">
                  Preventive Health Camps
                </h3>
                <p className=" text-lg leading-relaxed mb-8">
                  Regular camps covering general check-ups, maternal care, eye
                  care, and early detection via mobile medical units.
                </p>
                <button className="bg-white text-black px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  View Schedule
                </button>
              </div>
            </div>

            <div className="bento-card col-span-4 md:col-span-2 p-10 flex flex-col justify-between bg-blue-50/50">
              <div className="flex justify-between items-start">
                <div className="text-4xl">🥗</div>
                <span className="text-[9px] font-bold uppercase tracking-widest bg-blue-600 text-white px-3 py-1 rounded-full">
                  Vitality
                </span>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Nutrition & Hygiene</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Educational sessions on balanced diets, safe water practices,
                  and sanitation protocols.
                </p>
              </div>
            </div>

            <div className="bento-card col-span-2 md:col-span-1 p-8 flex flex-col justify-center text-center">
              <div className="text-3xl mb-4">🧘</div>
              <h4 className="text-lg font-bold mb-2">Mental Health</h4>
              <p className="text-gray-500 text-xs">
                Integrating Sunya meditation for stress reduction and clarity.
              </p>
            </div>

            <div
              className="bento-card col-span-2 md:col-span-1 p-8 flex flex-col justify-center text-center bg-blue-600 text-white border-none"
              style={{
                backgroundImage: `url(${bento2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="text-3xl mb-4">🤝</div>
              <h4 className="text-lg font-bold mb-2">Strategic Partners</h4>
              <p className="text-white text-xs">
                Collaborating with doctors and NGOs for sustainable impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-16">
            Key Interventions.
          </h2>
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
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gradient">
            Join Our Health Mission.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {healthMissionCards.map((card, index) => (
            <MissionCard key={index} {...card} />
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
    action: "Register Now",
  },
  {
    icon: "🏢",
    title: "Corporate Partners",
    description: "Sponsor mobile units or health education via CSR.",
    action: "Partner With Us",
  },
  {
    icon: "🎓",
    title: "Health Educator",
    description: "Volunteer to teach hygiene and wellness in rural schools.",
    action: "Get Involved",
  },
  {
    icon: "❤️",
    title: "Sponsor a Camp",
    description: "Fund medical supplies to bring healthcare to more villages.",
    action: "Sponsor",
  },
];
