import activitiesColors from "@/lib/activies";
import { scrollToSection } from "@/lib/scrollToSection";
import { UsersIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Banner1 from "../../assets/BrickHouse/Banner1.jpg";
import Banner2 from "../../assets/BrickHouse/Banner2.jpg";
import Banner3 from "../../assets/BrickHouse/Banner3.jpg";
import BrickHouse from "../../assets/BrickHouse/Brick_House.jpg";
import { BentoBox, BentoCard } from "../ui/bento-card";
export default function BrickHouseProjectPage() {
  const textColor = activitiesColors.brickHouse.text;
  const bgColor = activitiesColors.brickHouse.bg;
  return (
    <main>
      <section className="hero-gradient   relative w-full  ">
        <div className="relative min-h-[90vh] sm:min-h-[680px] w-full mx-auto   ">
          <div
            className="absolute inset-0 bg-cover bg-center w-full h-full "
            style={{ backgroundImage: `url(${Banner1})` }}
          >
            <div className="absolute inset-0 bg-black/60" />

            <div className="max-w-4xl mx-auto text-center flex  flex-col justify-center items-center h-full  relative z-10 text-white">
              <div
                className={
                  "inline-block px-4 py-1.5 mb-6  rounded-full text-[10px] font-bold uppercase tracking-widest  " +
                  bgColor
                }
              >
                🏛️ Reviving Ancient Indian Traditions & Knowledge Systems
              </div>
              <h1 className="heading mb-6 text-white">
                The Brick House Project.
              </h1>
              <p className="hero-desc mb-10 max-w-2xl mx-auto text-white">
                Building enduring foundations for cultural preservation.
                Safeguarding what is timeless while reinterpreting it for
                today’s world.
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
        <div className="max-w-6xl mx-auto bg-zinc-900 text-white section-gap rounded-[2rem]">
          <div className="text-center mb-16">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-4">
              Heritage Preservation Progress
            </h2>
            <h3 className="subheading">
              Safeguarding and Reviving Ancient Traditions
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">25+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Heritage Sites
                <br />
                Documented
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">100+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Ancient Manuscripts
                <br />
                Preserved
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">50+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Community Workshops
                <br />
                Conducted
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">5+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Brick House
                <br />
                Centers Planned
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
                className={
                  " font-bold tracking-tight text-sm uppercase mb-4 " +
                  textColor
                }
              >
                The Vision
              </h2>
              <h3 className="subheading mb-6 text-gradient">
                Building on Foundations.
              </h3>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                The Brick House Project is rooted in reviving ancient Indian
                traditions, knowledge systems, and cultural practices, blending
                them with modern needs.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Progress does not mean abandoning the past. By reviving Indian
                traditions, texts, and architecture, we lay bricks for a house
                where wisdom, culture, and sustainability live together.
              </p>
            </div>
            <div className="rounded-[3rem] bg-brick-soft aspect-square flex items-center justify-center text-orange-200 overflow-hidden relative shadow-inner">
              <img src={BrickHouse} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="subheading">Why Heritage Matters</h2>
            <p className="text-gray-500 mt-4">
              Preserving cultural DNA while unlocking ancient wisdom for modern
              challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl mb-4">🏛️</div>
              <h4 className="font-bold mb-2">Cultural Continuity</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Keeping civilizational identity alive for future generations
                through architecture and rituals.
              </p>
            </div>
            <div>
              <div className="text-2xl mb-4">🧘</div>
              <h4 className="font-bold mb-2">Spiritual Relevance</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Vital insights into mindfulness, ethics, and community living
                for modern balance.
              </p>
            </div>
            <div>
              <div className="text-2xl mb-4">💡</div>
              <h4 className="font-bold mb-2">Indian Traditions (IT)</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Ancient philosophy, ecology, and governance holding solutions
                for today's challenges.
              </p>
            </div>
            <div>
              <div className="text-2xl mb-4">🌍</div>
              <h4 className="font-bold mb-2">Global Heritage</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Universal lessons in sustainability and wisdom that transcend
                all cultural boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="section-gap">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="subheading ">Key Focus Areas</h2>
            <p className="text-gray-500 mt-4 text-lg">
              Designed to deepen your practice at every stage.
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
                    Community Hubs (Brick Houses)
                  </h3>
                  <p className="text-white max-w-sm">
                    Establishing meditation halls, libraries, and cultural
                    centers inspired by ancient design principles for modern
                    use.
                  </p>
                </div>

                <Link
                  to="#"
                  className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium w-fit relative "
                >
                  Visit a Center
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
                <h3 className="text-xl font-bold mb-3">
                  Architectural Revival
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Reinterpreting ancient brick and stone architecture for
                  eco-friendly and sustainable building.
                </p>
              </div>

              <Link to="#" className={`${textColor} font-medium text-sm`}>
                Learn more &gt;
              </Link>
            </BentoBox>

            <BentoBox className="md:col-span-4 bg-white p-8 border border-gray-100">
              <h4 className="font-bold mb-2">Living Heritage</h4>
              <p className="text-gray-500 text-sm mb-4">
                Creating eco-villages and festivals that bring ancient practices
                into contemporary life.
              </p>
              <span
                className={`${textColor} text-xs font-bold uppercase tracking-widest `}
              >
                Join Live
              </span>
            </BentoBox>

            <BentoBox className="md:col-span-4 bg-white p-8 border border-gray-100">
              <h4 className="font-bold mb-2">Each Brick</h4>
              <p className="text-gray-500 text-sm mb-4">
                Every text and practice preserved strengthens our collective
                house.
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

      <section className="section-gap bg-zinc-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                <span className="accent-brick">📊</span> Impact So Far
              </h3>
              <ul className="space-y-6">
                <li className="border-b border-gray-200/50 pb-4 text-sm text-gray-500">
                  • Revival of palm-leaf sutra printing via laser technology
                </li>
                <li className="border-b border-gray-200/50 pb-4 text-sm text-gray-500">
                  • Documentation of ancient architectural application in
                  eco-buildings
                </li>
                <li className="border-b border-gray-200/50 pb-4 text-sm text-gray-500">
                  • Rural workshops on Indian history, values, and knowledge
                  systems
                </li>
                <li className="border-b border-gray-200/50 pb-4 text-sm text-gray-500">
                  • Digital preservation of fragile manuscripts and blueprints
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                <span className="accent-brick">🚀</span> Future Roadmap
              </h3>
              <ul className="space-y-6">
                <li className="border-b border-gray-200/50 pb-4 text-sm text-gray-500">
                  • Build dedicated Brick House Centres across India
                </li>
                <li className="border-b border-gray-200/50 pb-4 text-sm text-gray-500">
                  • Expand preservation to Ayurveda, Astronomy, and Governance
                </li>
                <li className="border-b border-gray-200/50 pb-4 text-sm text-gray-500">
                  • Develop Living Heritage projects: eco-villages and design
                  schools
                </li>
                <li className="border-b border-gray-200/50 pb-4 text-sm text-gray-500">
                  • Train a new generation of heritage preservationists via
                  fellowships
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2
            className={`text-[10px] uppercase tracking-[0.3em]  font-bold mb-4 ${textColor}`}
          >
            Start Your Journey
          </h2>
          <h3 className="subheading text-gradient">Build Heritage With Us.</h3>
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
    title: "Documentation",
    description: "Help document ancient architecture or crafts in your region.",
    buttonText: "Find Events",
    href: "/",
  },
  {
    icon: "📍",
    title: "Research Partners",
    description: "Collaborate as an academic institution or heritage expert.",
    buttonText: "Request Visit",
    href: "/contact-us",
  },
  {
    icon: "🎓",
    title: "Community",
    description: "Participate in cultural education and craft workshops.",
    buttonText: "Apply Now",
    href: "/join-us",
  },
  {
    icon: "❤️",
    title: "Sponsor a Center",
    description: "Fund the establishment of a Brick House community hub.",
    buttonText: "Sponsor",
    href: "/join-us",
  },
];
