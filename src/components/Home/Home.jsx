import activitiesColors from "@/lib/activies";
import { scrollToSection } from "@/lib/scrollToSection";
import { ChevronRight, HandHeart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Banner2 from "../../assets/BrickHouse/Banner2.jpg";
import Agamas from "../../assets/Home/Agamas_ac.jpeg";
import AusumKids from "../../assets/Home/Ausum_Kids_ac.jpg";
import Awareness from "../../assets/Home/Awareness.jpeg";
import CSR from "../../assets/Home/CSR_ac.png";
import Education from "../../assets/Home/Education_ac.jpg";
import Farmer from "../../assets/Home/Farmer_ac.jpeg";
import ODOC from "../../assets/Home/ODOC_ac.jpeg";
import SunyaMeditation from "../../assets/Home/Sunya_Meditation.jpeg";
import SunyaMeditation1 from "../../assets/Home/Sunya_meditation_ac.JPG";
import Women from "../../assets/Home/Women_ac.jpg";
import palm from "../../assets/Home/palm.jpeg";
import TestimonialsCarousel from "../ui/TestimonialsCarousel";
import { Card } from "../ui/card";

const DEFAULT_TESTIMONIALS = [
  {
    quote:
      "After joining the Noni Project, my income grew from ₹18,000 to ₹1,80,000 per year. Today, I can support my family with dignity and confidence.",
    highlight: "₹1,80,000",
    name: "Nagireddy",
    role: "Farmer, Siddipet",
    avatarText: "N",
    accent: "text-blue-600",
  },
  {
    quote:
      "SIF gave me skills and independence. I can now support my children’s education and live with self-respect.",
    highlight: "",
    name: "Sandiri Sushama",
    role: "Single Mother, Telangana",
    avatarText: "S",
    accent: "text-emerald-600",
  },
  {
    quote:
      "During COVID, when my husband lost his income, SIF’s training and support helped me stabilize my family financially.",
    highlight: "",
    name: "Harika",
    role: "Mother of Two",
    avatarText: "H",
    accent: "text-indigo-600",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-neutral-50 to-white text-neutral-900 overflow-x-hidden">
      <section className="hero-gradient relative w-full">
        <div className="relative min-h-[90vh] sm:min-h-[680px] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${SunyaMeditation})` }}
          >
            <div className="absolute inset-0 bg-black/60" />

            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-full relative">
              <div className="flex h-full flex-col items-center justify-center text-center text-white">
                <h1 className="heading mb-6 text-white">
                  Awakening Peace.
                  <br />
                  Empowering Communities.
                </h1>

                <p className="hero-desc mb-10 max-w-2xl text-white">
                  Mindfulness, farmer empowerment, and cultural revival —
                  powered by Sunya.
                </p>

                <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row sm:gap-6">
                  <button
                    onClick={() => scrollToSection("activities")}
                    className="w-full rounded-full bg-black px-8 py-3 font-semibold text-white transition sm:w-auto"
                  >
                    Explore Sunya
                  </button>
                </div>
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">45k+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Sunya Certificates
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">26+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Active Projects
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">300+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Global Volunteers
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <div className="subheading font-bold mb-2">45k+</div>
            <div className="text-gray-500 font-medium">Sunya Certificates</div>
            <p className="mt-4 text-sm text-gray-400">
              Global practitioners achieving mental clarity and liberation.
            </p>
          </Card>
          <Card>
            <div className="subheading font-bold mb-2">26+</div>
            <div className="text-gray-500 font-medium">Active Projects</div>
            <p className="mt-4 text-sm text-gray-400">
              Impactful initiatives spanning health, livelihoods, and heritage.
            </p>
          </Card>
          <Card>
            <div className="subheading font-bold mb-2">300+</div>
            <div className="text-gray-500 font-medium">Global Volunteers</div>
            <p className="mt-4 text-sm text-gray-400">
              A dedicated workforce driving change across 40+ countries.
            </p>
          </Card>
        </div>
      </section>
      <section className="py-24 px-6 bg-white" id="xyz">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-4">
                About SIF
              </h2>
              <h3 className="subheading mb-6">
                Sunyatee International Foundation.
              </h3>
              <p className="text-xl text-gray-500 font-light leading-relaxed">
                A global NGO advancing mindful living, farmer & women
                empowerment, cultural revival, and community well-being—all
                guided by the wisdom of Sunya.
              </p>
              <div className="mt-10 md:flex space-x-6 space-y-6 ">
                <div>
                  <Link
                    to="about-us"
                    className="bg-black text-white px-6 py-3 rounded-full  text-sm font-medium hover:bg-gray-800 transition"
                  >
                    Explore Our Work
                  </Link>
                </div>
                <div>
                  <Link
                    to="csr-partnership"
                    className="text-black border border-gray-300 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition"
                  >
                    Partner via CSR
                  </Link>
                </div>
              </div>
            </div>

            <Card>
              <h4 className="text-2xl font-bold mb-8 italic text-gray-400">
                Our Vision
              </h4>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 flex-shrink-0 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mr-4">
                    <i className="fas fa-brain"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">
                      Sunya-centered transformation
                    </h5>
                    <p className="text-gray-500 text-sm">
                      Personal clarity as the root of collective peace.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 flex-shrink-0 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mr-4">
                    <i className="fas fa-seedling"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">Dignified Livelihoods</h5>
                    <p className="text-gray-500 text-sm">
                      Resilient communities through sustainable farming and
                      skill sets.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 flex-shrink-0 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mr-4">
                    <i className="fas fa-scroll"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">Heritage Preserved</h5>
                    <p className="text-gray-500 text-sm">
                      Ancient wisdom shared for future generations.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-[#fbfbfd]">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="subheading font-bold tracking-tight mb-6">
            Our Mission.
          </h2>
          <p className="text-gray-500 hero-desc max-w-3xl mx-auto font-light leading-relaxed">
            Spread Sunya meditation globally; empower farmers and women through
            training; and revive cultural wisdom through high-impact CSR
            partnerships.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <div className="mb-4 text-blue-600">
              <i className="fas fa-circle-notch fa-2x"></i>
            </div>
            <h4 className="text-2xl font-bold mb-3">Sunya Programs</h4>
            <p className="text-gray-500 leading-relaxed mb-6">
              A structured 7-belt pathway to mental clarity, resilience, and
              liberation. Available via global retreats, corporate modules, and
              youth workshops.
            </p>
            <ul className="text-sm text-gray-400 space-y-2 mb-8">
              <li>
                <i className="fas fa-check text-blue-500 mr-2"></i> 7-Belt
                pathway: awareness → liberation
              </li>
              <li>
                <i className="fas fa-check text-blue-500 mr-2"></i> Global
                retreats & 40+ country telecasts
              </li>
              <li>
                <i className="fas fa-check text-blue-500 mr-2"></i>{" "}
                Special-needs inclusion programs
              </li>
            </ul>
            <Link
              to="#"
              className="text-blue-600 font-medium hover:underline flex items-center "
            >
              View Programs <ChevronRight className="w-4 h-4" />
            </Link>
          </Card>

          <Card>
            <div className="mb-4 text-green-600">
              <HandHeart className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold mb-3">Livelihoods & CSR</h4>
            <p className="text-gray-500 leading-relaxed mb-6">
              Creating economic stability through farmer buy-back programs,
              women's skill centers, and the ODOC nutrition initiative.
            </p>
            <ul className="text-sm text-gray-400 space-y-2 mb-8">
              <li>
                <i className="fas fa-check text-green-500 mr-2"></i> Noni
                cultivation & farmer training
              </li>
              <li>
                <i className="fas fa-check text-green-500 mr-2"></i> ODOC:
                Spirulina nutrition at $1/child
              </li>
              <li>
                <i className="fas fa-check text-green-500 mr-2"></i> High-impact
                corporate partnerships
              </li>
            </ul>
            <Link
              to="#"
              className="text-green-600 font-medium hover:underline flex items-center"
            >
              Explore Initiatives <ChevronRight className="w-4 h-4" />
            </Link>
          </Card>
        </div>
      </section>
      <section className="py-24 px-6 bg-white" id="activities">
        <div className="mx-auto max-w-6xl p-4">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-wider text-emerald-600">
              Activities
            </p>
            <h2 className="mt-1 subheading">Our Activities</h2>
            <p className="mt-2 max-w-2xl text-neutral-700 dark:text-neutral-300">
              Explore how we serve communities through meditation, empowerment,
              health, heritage, and education.
            </p>
          </div>
          <div
            className="
             grid lg:grid-cols-3 gap-8 md:grid-cols-2 grid-cols-1 overflow-x-auto
            "
          >
            {items.map((it) => (
              <ServiceCard key={it.id} item={it} />
            ))}
            <div className="shrink-0 overflow-hidden rounded-md border p-0 shadow-none flex items-center justify-center bg-[#2b245d]  cursor-pointer">
              <div className="text-white font-medium flex items-center ">
                Know More <ChevronRight className="w-5 h-5 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimonialsCarousel testimonials={DEFAULT_TESTIMONIALS} />
    </div>
  );
}

function ServiceCard({ item }) {
  const navigation = useNavigate();

  return (
    <div className="group shrink-0 overflow-hidden rounded-md border shadow-none transition-all duration-300 hover:-translate-y-1 ">
      <div className="cursor-pointer" onClick={() => navigation(item.href)}>
        {/* Image */}
        <div className="relative h-[190px] overflow-hidden bg-white">
          <img
            src={item.img}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />
        </div>

        {/* Content */}
        <div
          className={`flex pt-10 w-full h-[175px] transition-all duration-300 ${item.top}`}
        >
          <div className="w-full px-6">
            <div className="text-[32px] font-bold leading-none text-white transition-transform duration-300 group-hover:-translate-y-1">
              {item.title}
            </div>

            <div className="mt-2 text-xs tracking-wide text-white/70 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 opacity-80 translate-y-1">
              {item.desc}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const items = [
  {
    id: "sunyaMeditation",
    top: activitiesColors.sunyaMeditation.bg,
    title: "Sunya Meditation Programs",
    desc: "Structured 7-belt pathway, retreats, and online practice to build clarity and resilience.",
    img: SunyaMeditation1,
    href: "/meditation",
  },
  {
    id: "farmerEmpowerment",
    top: activitiesColors.farmerEmpowerment.bg,
    title: "Farmer Empowerment",
    desc: "Soil testing, noni cultivation, training & buy-back support to boost farmer incomes.",
    img: Farmer,
    href: "/farmer-empowerment",
  },
  {
    id: "womenSkillCenters",
    top: activitiesColors.womenSkillCenters.bg,
    title: "Women’s Skill Centers",
    desc: "Textiles, eco-products, and SHG-led entrepreneurship for livelihood and dignity.",
    img: Women,
    href: "/women-empowerment",
  },
  {
    id: "ruralHealthAwareness",
    top: activitiesColors.ruralHealthAwareness.bg,
    title: "Rural Health & Awareness",
    desc: "Preventive health camps, nutrition & hygiene sessions, mental well-being workshops.",
    img: Awareness,
    href: "/rural-health-awareness",
  },

  {
    id: "oDOCOneDollarOneChild",
    top: activitiesColors.oDOCOneDollarOneChild.bg,
    title: "One Dollar One Child",
    desc: "Spirulina nutrition at $1 per child—community-driven malnutrition intervention.",
    img: ODOC,
    href: "/onedollar-onechild",
  },
  {
    id: "childEducation",
    top: activitiesColors.childEducation.bg,
    title: "Ausum Kids",
    desc: "Therapy & inclusion programs for children on the spectrum and their caregivers.",
    img: AusumKids,
    href: "/child-education",
  },
  {
    id: "agamasAndSutras",
    top: activitiesColors.agamasAndSutras.bg, // deep navy/black
    title: "Agamas & Translations",
    desc: "Palm-leaf sutra printing and scripture translations preserving timeless wisdom.",
    img: Agamas,
    href: "/agamas-translations",
  },
  {
    id: "internshipAcademy",
    top: activitiesColors.internshipAcademy.bg, // amber
    title: "Internships & Education",
    desc: "Hands-on training in IT, design, agritech, and management for youth and volunteers.",
    img: Education,
    href: "/internships-education",
  },
  {
    id: "brickHouse",
    top: activitiesColors.brickHouse.bg, // green
    title: "Brick house ",
    desc: "Sustainable housing solutions using eco-friendly materials and techniques.",
    img: Banner2,
    href: "/brick-house",
  },
  {
    id: "palmLeafSutraPrinting",
    top: activitiesColors.palmLeafSutraPrinting.bg, // same purple scheme
    title: "Palm Leaf Sutra Printing",
    desc: "Preserving ancient wisdom through traditional palm-leaf manuscript printing techniques.",
    img: palm,
    href: "/palm-leaf-sutra-printing",
  },
  {
    id: "csr",
    top: activitiesColors.csr.bg,
    title: "CSR Partnerships",
    desc: "Design and execution of high-impact CSR programs in health, education, and livelihoods.",
    img: CSR,
    href: "/csr-partnership",
  },
];
