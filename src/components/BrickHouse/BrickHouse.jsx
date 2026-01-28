import { scrollToSection } from "@/lib/scrollToSection";
import Banner1 from "../../assets/BrickHouse/Banner1.jpg";
import Banner2 from "../../assets/BrickHouse/Banner2.jpg";
import Banner3 from "../../assets/BrickHouse/Banner3.jpg";
import BrickHouse from "../../assets/BrickHouse/Brick_House.jpg";
export default function BrickHouseProjectPage() {
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
              <div className="inline-block px-4 py-1.5 mb-6 bg-orange-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-orange-800 border border-orange-200">
                🏛️ Reviving Ancient Indian Traditions & Knowledge Systems
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
                The Brick House Project.
              </h1>
              <p className="text-xl md:text-2xl  font-light mb-10 max-w-2xl mx-auto text-white">
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
        <div className="max-w-6xl mx-auto bg-zinc-900 text-white py-24 px-6 rounded-[2rem]">
          <div className="text-center mb-16">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-4">
              Heritage Preservation Progress
            </h2>
            <h3 className="text-3xl font-bold">
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

      <section className="py-24 px-6" id="Foundations">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-orange-800 font-bold tracking-tight text-sm uppercase mb-4">
                The Vision
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gradient">
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

      <section className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gradient">
              Why Heritage Matters
            </h2>
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

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gradient">
              Key Focus Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div
              className="bento-card col-span-1 md:col-span-2 md:row-span-2 bg-zinc-900 text-white p-12 flex flex-col justify-end min-h-[450px]"
              style={{
                backgroundImage: `url(${Banner2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute top-12 left-12 text-5xl">🏛️</div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">
                  Community Hubs (Brick Houses)
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  Establishing meditation halls, libraries, and cultural centers
                  inspired by ancient design principles for modern use.
                </p>
                <button className="bg-white text-black px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Visit a Center
                </button>
              </div>
            </div>

            <div className="bento-card col-span-1 md:col-span-2 p-10 flex flex-col justify-between bg-orange-50/50 border-orange-100">
              <div className="flex justify-between items-start">
                <div className="text-4xl">🏗️</div>
                <span className="text-[9px] font-bold uppercase tracking-widest bg-orange-800 text-white px-3 py-1 rounded-full">
                  Innovation
                </span>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">
                  Architectural Revival
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Reinterpreting ancient brick and stone architecture for
                  eco-friendly and sustainable building.
                </p>
              </div>
            </div>

            <div className="bento-card p-8 flex flex-col justify-center text-center">
              <div className="text-3xl mb-4">🌿</div>
              <h4 className="font-bold mb-2">Living Heritage</h4>
              <p className="text-gray-500 text-xs">
                Creating eco-villages and festivals that bring ancient practices
                into contemporary life.
              </p>
            </div>

            <div
              className="bento-card p-8 flex flex-col justify-center text-center bg-orange-800 text-white border-none"
              style={{
                backgroundImage: `url(${Banner3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="text-3xl mb-4">🧱</div>
              <h4 className="font-bold mb-2 text-white">Each Brick</h4>
              <p className="text-orange-100 text-xs">
                Every text and practice preserved strengthens our collective
                house.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-zinc-50 border-y border-gray-100">
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

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gradient">
            Build Heritage With Us.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bento-card p-10 bg-orange-50/50 border-orange-100">
            <i className="fas fa-camera-retro accent-brick mb-6 text-xl"></i>
            <h4 className="font-bold mb-2">Documentation</h4>
            <p className="text-xs text-gray-500 mb-6">
              Help document ancient architecture or crafts in your region.
            </p>
            <button className="text-[10px] font-bold uppercase tracking-widest text-orange-800">
              Volunteer Now{" >"}
            </button>
          </div>
          <div className="bento-card p-10">
            <i className="fas fa-handshake accent-brick mb-6 text-xl"></i>
            <h4 className="font-bold mb-2">Research Partners</h4>
            <p className="text-xs text-gray-500 mb-6">
              Collaborate as an academic institution or heritage expert.
            </p>
            <button className="text-[10px] font-bold uppercase tracking-widest text-orange-800">
              Partner With Us{" >"}
            </button>
          </div>
          <div className="bento-card p-10">
            <i className="fas fa-users-cog accent-brick mb-6 text-xl"></i>
            <h4 className="font-bold mb-2">Community</h4>
            <p className="text-xs text-gray-500 mb-6">
              Participate in cultural education and craft workshops.
            </p>
            <button className="text-[10px] font-bold uppercase tracking-widest text-orange-800">
              Join Programs{" >"}
            </button>
          </div>
          <div className="bento-card p-10 bg-zinc-900  border-none">
            <i className="fas fa-university accent-brick mb-6 text-xl"></i>
            <h4 className="font-bold mb-2">Sponsor a Center</h4>
            <p className="text-xs text-zinc-500 mb-6">
              Fund the establishment of a Brick House community hub.
            </p>
            <button className="text-[10px] font-bold uppercase tracking-widest text-orange-800">
              Sponsor Now{" >"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
