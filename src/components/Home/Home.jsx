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
import { Card, CardContent } from "../ui/card";

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
        <div className="relative min-h-[90vh] sm:min-h-[680px] w-full mx-auto   ">
          <div
            className="absolute inset-0 bg-cover bg-center w-full h-full "
            style={{ backgroundImage: `url(${SunyaMeditation})` }}
          >
            <div className="absolute inset-0 bg-black/60" />

            <div className="max-w-4xl mx-auto text-center flex  flex-col justify-center items-center h-full  relative z-10 text-white">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
                Awakening Peace.
                <br />
                Empowering Communities.
              </h1>
              <p className="text-xl md:text-2xl  font-light mb-10 max-w-2xl mx-auto text-white">
                Mindfulness, farmer empowerment, and cultural revival — powered
                by Sunya.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  to="/meditation"
                  className="bg-black text-white px-8 py-3 rounded-full font-semibold  transition w-full sm:w-auto"
                >
                  Explore Sunya
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm bento-card text-center">
            <div className="text-5xl font-bold mb-2">45k+</div>
            <div className="text-gray-500 font-medium">Sunya Certificates</div>
            <p className="mt-4 text-sm text-gray-400">
              Global practitioners achieving mental clarity and liberation.
            </p>
          </div>
          <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm bento-card text-center">
            <div className="text-5xl font-bold mb-2">26+</div>
            <div className="text-gray-500 font-medium">Active Projects</div>
            <p className="mt-4 text-sm text-gray-400">
              Impactful initiatives spanning health, livelihoods, and heritage.
            </p>
          </div>
          <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm bento-card text-center">
            <div className="text-5xl font-bold mb-2">300+</div>
            <div className="text-gray-500 font-medium">Global Volunteers</div>
            <p className="mt-4 text-sm text-gray-400">
              A dedicated workforce driving change across 40+ countries.
            </p>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-4">
                About SIF
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
                Sunyatee International Foundation.
              </h3>
              <p className="text-xl text-gray-500 font-light leading-relaxed">
                A global NGO advancing mindful living, farmer & women
                empowerment, cultural revival, and community well-being—all
                guided by the wisdom of Sunya.
              </p>
              <div className="mt-10 flex space-x-6">
                <Link
                  to="about-us"
                  className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition"
                >
                  Explore Our Work
                </Link>
                <Link
                  to="csr-partnership"
                  className="text-black border border-gray-300 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition"
                >
                  Partner via CSR
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 border border-gray-100">
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
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-[#fbfbfd]">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Our Mission.
          </h2>
          <p className="text-gray-500 text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Spread Sunya meditation globally; empower farmers and women through
            training; and revive cultural wisdom through high-impact CSR
            partnerships.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-[2.5rem] border border-gray-200 overflow-hidden group bento-card">
            <div className="p-10">
              <div className="mb-4 text-blue-600">
                <i className="fas fa-circle-notch fa-2x"></i>
              </div>
              <h4 className="text-2xl font-bold mb-3">Sunya Programs</h4>
              <p className="text-gray-500 leading-relaxed mb-6">
                A structured 7-belt pathway to mental clarity, resilience, and
                liberation. Available via global retreats, corporate modules,
                and youth workshops.
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
              <a href="#" className="text-blue-600 font-medium hover:underline">
                View Programs {">"}
              </a>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-gray-200 overflow-hidden group bento-card">
            <div className="p-10">
              <div className="mb-4 text-green-600">
                <i className="fas fa-hands-holding-circle fa-2x"></i>
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
                  <i className="fas fa-check text-green-500 mr-2"></i>{" "}
                  High-impact corporate partnerships
                </li>
              </ul>
              <a
                href="#"
                className="text-green-600 font-medium hover:underline"
              >
                Explore Initiatives {">"}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-black text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-16">
            Our Activities.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-3xl bg-zinc-900 h-[500px]">
              <div className="p-10 absolute z-10">
                <h3 className="text-3xl font-bold mb-2">Sunya Meditation</h3>
                <p className="text-gray-400 max-w-xs">
                  A 7-belt pathway from stillness to strength.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block text-blue-400 hover:underline"
                >
                  Learn more {">"}
                </a>
              </div>
              <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tl from-indigo-900 to-transparent opacity-50"></div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-zinc-900 h-[500px]">
              <div className="p-10 absolute z-10">
                <h3 className="text-3xl font-bold mb-2">Farmer Empowerment</h3>
                <p className="text-gray-400 max-w-xs">
                  Boosting income through Noni cultivation and soil testing.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block text-blue-400 hover:underline"
                >
                  Learn more {">"}
                </a>
              </div>
              <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tl from-green-900 to-transparent opacity-50"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-zinc-900 p-8 rounded-3xl">
              <h4 className="text-xl font-bold mb-2">ODOC</h4>
              <p className="text-gray-400 text-sm">
                One Dollar One Child. Spirulina nutrition at $1/child.
              </p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-3xl">
              <h4 className="text-xl font-bold mb-2">Women Skill Centers</h4>
              <p className="text-gray-400 text-sm">
                Empowering SHGs through textiles and eco-products.
              </p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-3xl">
              <h4 className="text-xl font-bold mb-2">Agamas</h4>
              <p className="text-gray-400 text-sm">
                Preserving heritage through Palm-leaf sutra printing.
              </p>
            </div>
          </div>
        </div>
      </section>
      <TestimonialsCarousel testimonials={DEFAULT_TESTIMONIALS} />
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-6xl p-4">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-wider text-emerald-600">
              Activities
            </p>
            <h2 className="mt-1 text-3xl font-semibold tracking-tight">
              Our Activities
            </h2>
            <p className="mt-2 max-w-2xl text-neutral-700 dark:text-neutral-300">
              Explore how we serve communities through meditation, empowerment,
              health, heritage, and education.
            </p>
          </div>
          <div
            className="
             grid grid-cols-3 gap-8
            "
          >
            {items.map((it) => (
              <ServiceCard key={it.id} item={it} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ item }) {
  const navigation = useNavigate();

  return (
    <Card className=" shrink-0 overflow-hidden rounded-none border p-0 shadow-none">
      <CardContent className="p-0">
        <div className="cursor-pointer" onClick={() => navigation(item.href)}>
          <div className={`relative h-[175px] ${item.top}`}>
            <div className="absolute left-7 top-16">
              <div className="text-[22px] font-medium leading-none text-white">
                {item.title}
              </div>
              <div className="mt-2  text-xs tracking-wide text-white/70">
                {item.desc}
              </div>
            </div>
          </div>
          <div className="relative h-[190px] bg-white">
            <img
              src={item.img}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const items = [
  {
    id: "implementation",
    top: "bg-[#4C0C3E]",
    title: "Sunya Meditation Programs",
    desc: "Structured 7-belt pathway, retreats, and online practice to build clarity and resilience.",
    img: SunyaMeditation1,
    href: "/meditation",
  },
  {
    id: "women",
    top: "bg-[#36A7D6]",
    title: "Farmer Empowerment",
    desc: "Soil testing, noni cultivation, training & buy-back support to boost farmer incomes.",
    img: Farmer,
    href: "/farmer-empowerment",
  },
  {
    id: "management",
    top: "bg-[#D85A33]",
    title: "Women’s Skill Centers",
    desc: "Textiles, eco-products, and SHG-led entrepreneurship for livelihood and dignity.",
    img: Women,
    href: "/women-empowerment",
  },
  {
    id: "health",
    top: "bg-[#1F6FEB]",
    title: "Rural Health & Awareness",
    desc: "Preventive health camps, nutrition & hygiene sessions, mental well-being workshops.",
    img: Awareness,
    href: "/rural-health-awareness",
  },
  {
    id: "csr",
    top: "bg-[#0F766E]",
    title: "CSR Partnerships",
    desc: "Design and execution of high-impact CSR programs in health, education, and livelihoods.",
    img: CSR,
    href: "/csr-partnership",
  },
  {
    id: "odoc",
    top: "bg-[#7C3AED]",
    title: "One Dollar One Child",
    desc: "Spirulina nutrition at $1 per child—community-driven malnutrition intervention.",
    img: ODOC,
    href: "/onedollar-onechild",
  },
  {
    id: "ausum",
    top: "bg-[#B91C1C]",
    title: "Ausum Kids",
    desc: "Therapy & inclusion programs for children on the spectrum and their caregivers.",
    img: AusumKids,
    href: "/child-education",
  },
  {
    id: "agamas",
    top: "bg-[#0B1220]", // deep navy/black
    title: "Agamas & Translations",
    desc: "Palm-leaf sutra printing and scripture translations preserving timeless wisdom.",
    img: Agamas,
    href: "/agamas-translations",
  },
  {
    id: "training",
    top: "bg-[#F59E0B]", // amber
    title: "Internships & Education",
    desc: "Hands-on training in IT, design, agritech, and management for youth and volunteers.",
    img: Education,
    href: "/internships-education",
  },
  {
    id: "brick-house",
    top: "bg-[#16A34A]", // green
    title: "Brick house ",
    desc: "Sustainable housing solutions using eco-friendly materials and techniques.",
    img: Banner2,
    href: "/brick-house",
  },
  {
    id: "Palm",
    top: "bg-[#4C0C3E]", // same purple scheme
    title: "Palm Leaf Sutra Printing",
    desc: "Preserving ancient wisdom through traditional palm-leaf manuscript printing techniques.",
    img: palm,
    href: "/palm-leaf-sutra-printing",
  },
];
