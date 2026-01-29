import activitiesColors from "@/lib/activies";
import { scrollToSection } from "@/lib/scrollToSection";
import Banner from "../../assets/PalmLeafSutra/Banner.JPG";
import Missions from "../../assets/PalmLeafSutra/Mission.jpg";
import bento from "../../assets/PalmLeafSutra/bento.jpg";
import { BentoCard } from "../ui/bento-card";

export default function PalmLeafSutraPage() {
  const textColor = activitiesColors.palmLeafSutraPrinting.text;
  const bgColor = activitiesColors.palmLeafSutraPrinting.bg;
  return (
    <main>
      <section className="hero-gradient   relative w-full  ">
        <div className="relative min-h-[90vh] sm:min-h-[680px] w-full mx-auto   ">
          <div
            className="absolute inset-0 bg-cover bg-center w-full h-full "
            style={{ backgroundImage: `url(${Banner})` }}
          >
            <div className="absolute inset-0 bg-black/60" />

            <div className="max-w-4xl mx-auto text-center flex  flex-col justify-center items-center h-full  relative z-10 text-white">
              <div
                className={
                  "inline-block px-4 py-1.5 mb-6 rounded-full text-[10px] font-bold uppercase tracking-widest  " +
                  bgColor
                }
              >
                🌿 Ancient Craftsmanship Meets Modern Technology
              </div>
              <h1 className="heading mb-6 text-white">
                Palm Leaf Sutra Printing
              </h1>
              <p className="hero-desc mb-10 max-w-2xl mx-auto text-white">
                Starting with the Diamond Sutra, this initiative fuses ancestral
                craftsmanship with modern laser technology to preserve timeless
                wisdom while empowering artisans with sustainable livelihoods.
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
        <div className="max-w-6xl mx-auto bg-zinc-900 text-white section-gap rounded-[2rem]">
          <div className="text-center mb-16">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-4">
              Artisan Legacy
            </h2>
            <h3 className="subheading">Empowering Keepers of Tradition</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">800+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Skilled Artisans
                <br />
                Involved
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">1000+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Skilled Artisans
                <br />
                Involved
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">8</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Years of Living
                <br />
                Heritage
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap" id="mission">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2
                className={
                  " font-bold tracking-tight text-sm uppercase mb-4 " +
                  textColor
                }
              >
                The Mission
              </h2>
              <h3 className="subheading mb-6 text-gradient">
                Safeguarding Wisdom.
              </h3>
              <p className="text-lg text-gray-500 leading-relaxed mb-6">
                The Palm Leaf Sutra Printing Project revives one of India's most
                sacred traditions—the art of inscribing scriptures on palm
                leaves.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <i className="fas fa-check text-teal-500"></i> Empowering
                  artisans with fair, sustainable employment
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <i className="fas fa-check text-teal-500"></i> Blending
                  traditional handcraft with laser precision
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <i className="fas fa-check text-teal-500"></i> Creating global
                  awareness of manuscript culture
                </li>
              </ul>
            </div>
            <div className="rounded-[3rem] bg-teal-soft aspect-[4/3] flex items-center justify-center text-teal-200 overflow-hidden relative shadow-inner border border-teal-50">
              <img src={Missions} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="subheading">Tradition Meets Innovation</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bento-card p-10">
              <div className="text-2xl mb-6">✋</div>
              <h4 className="font-bold mb-3">Handcrafted Preparation</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Each leaf is cured and polished following ancient techniques
                passed down through generations in Odisha.
              </p>
            </div>
            <div className="bento-card p-10">
              <div className="text-2xl mb-6">⚡</div>
              <h4 className="font-bold mb-3">Laser Precision</h4>
              <p className="text-gray-500 text-xs leading-relaxed">
                Sutras are etched with durability using advanced laser
                technology, ensuring they endure for centuries.
              </p>
            </div>
            <div className="bento-card p-10">
              <div className="text-2xl mb-6">📿</div>
              <h4 className="font-bold mb-3">Sacred Medium</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                A complete collection of Buddhist and spiritual manuscripts
                restored to their original physical form.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="subheading">Sacred Texts Collection</h2>
          <p className="text-gray-500 mt-4">
            Preserving the most important spiritual manuscripts for humanity
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 border border-gray-100 rounded-3xl text-center hover:bg-teal-50 transition">
            <span className="block mb-3">💎</span>
            <span className="text-xs font-bold uppercase tracking-wider">
              Diamond Sutra
            </span>
          </div>
          <div className="p-6 border border-gray-100 rounded-3xl text-center hover:bg-teal-50 transition">
            <span className="block mb-3">🧘</span>
            <span className="text-xs font-bold uppercase tracking-wider">
              Satipatthana
            </span>
          </div>
          <div className="p-6 border border-gray-100 rounded-3xl text-center hover:bg-teal-50 transition">
            <span className="block mb-3">🌬️</span>
            <span className="text-xs font-bold uppercase tracking-wider">
              Anapana Smriti
            </span>
          </div>
          <div className="p-6 border border-gray-100 rounded-3xl text-center hover:bg-teal-50 transition">
            <span className="block mb-3">❤️</span>
            <span className="text-xs font-bold uppercase tracking-wider">
              Heart Sutra
            </span>
          </div>
          <div className="p-6 border border-gray-100 rounded-3xl text-center hover:bg-teal-50 transition">
            <span className="block mb-3">🤝</span>
            <span className="text-xs font-bold uppercase tracking-wider">
              12 Commitments
            </span>
          </div>
          <div className="p-6 border border-gray-100 rounded-3xl text-center hover:bg-teal-50 transition">
            <span className="block mb-3">📖</span>
            <span className="text-xs font-bold uppercase tracking-wider">
              Gita (84 Verses)
            </span>
          </div>
          <div className="p-6 border border-gray-100 rounded-3xl text-center hover:bg-teal-50 transition">
            <span className="block mb-3">🗣️</span>
            <span className="text-xs font-bold uppercase tracking-wider">
              Nikayas
            </span>
          </div>
          <div className="p-6 border border-gray-100 rounded-3xl text-center hover:bg-teal-50 transition">
            <span className="block mb-3">📚</span>
            <span className="text-xs font-bold uppercase tracking-wider">
              Agamas
            </span>
          </div>
        </div>
      </section>

      <section className="section-gap bg-zinc-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="subheading mb-12 text-center">
            Our Journey Through Time
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gray-300"></div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="md:text-right">
                <div className="text-teal-600 font-bold mb-1">
                  5th Century BCE
                </div>
                <h4 className="font-bold">Ancient Origins</h4>
                <p className="text-xs text-gray-500">
                  Palm-leaf emerges as the primary medium for India's sacred
                  texts.
                </p>
              </div>
              <div className="hidden md:block"></div>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="hidden md:block"></div>
              <div>
                <div className="text-teal-600 font-bold mb-1">
                  4th – 12th Century
                </div>
                <h4 className="font-bold">Golden Age</h4>
                <p className="text-xs text-gray-500">
                  Tradition flourishes in universities like Nalanda, preserving
                  vast libraries.
                </p>
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="md:text-right">
                <div className="text-teal-600 font-bold mb-1">Feb 26, 2024</div>
                <h4 className="font-bold">Modern Revival</h4>
                <p className="text-xs text-gray-500">
                  SIF launches the Palm Leaf Printing Project in Pune, blending
                  heritage with laser tech.
                </p>
              </div>
              <div className="hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap max-w-6xl mx-auto">
        <h2 className="subheading mb-12 text-center">Measurable Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="border-t border-gray-100 pt-8">
            <div className="text-teal-600 mb-4">
              <i className="fas fa-university"></i>
            </div>
            <h4 className="font-bold mb-2">Cultural Restoration</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Revival of a 1,000-year-old tradition, ensuring its survival for
              scholars and practitioners.
            </p>
          </div>
          <div className="border-t border-gray-100 pt-8">
            <div className="text-teal-600 mb-4">
              <i className="fas fa-user-check"></i>
            </div>
            <h4 className="font-bold mb-2">Artisan Empowerment</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Direct employment for 800+ skilled artisans in Odisha, providing
              sustainable livelihoods.
            </p>
          </div>
          <div className="border-t border-gray-100 pt-8">
            <div className="text-teal-600 mb-4">
              <i className="fas fa-globe"></i>
            </div>
            <h4 className="font-bold mb-2">Global Awareness</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Increasing international appreciation for India's spiritual
              heritage and manuscript culture.
            </p>
          </div>
        </div>
      </section>

      <section className="section-gap max-w-6xl mx-auto">
        <div
          className="bento-card bg-zinc-900 text-white p-16 text-center relative overflow-hidden"
          style={{
            backgroundImage: `url(${bento})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Join the Legacy</h2>
            <p className=" mb-10 max-w-xl mx-auto">
              Be part of preserving the world's oldest living manuscript
              tradition.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <button className="bg-teal-600 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest">
                Support Artisans
              </button>
              <button className="bg-transparent border border-zinc-700 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest">
                Sponsor a Text
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="section-gap max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2
            className={`text-[10px] uppercase tracking-[0.3em]  font-bold mb-4 ${textColor}`}
          >
            Final Call to Action
          </h2>
          <h3 className="subheading text-gradient">Join the Legacy.</h3>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Be part of preserving the world's oldest living manuscript tradition
            and empowering the artisans who keep it alive.
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
    title: "Support Artisans",
    description:
      "Help artisans sustain their craft and livelihood by supporting our palm leaf printing initiatives and traditional skill preservation programs.",
    buttonText: "Find Events",
    href: "/",
  },
  {
    icon: "📍",
    title: "Cultural Preservation",
    description:
      "Contribute to global heritage by sponsoring manuscript digitization and precision laser-engraving preservation projects.",
    buttonText: "Request Visit",
    href: "/contact-us",
  },
  {
    icon: "🎓",
    title: "Spread Wisdom",
    description:
      "Ensure that timeless wisdom of sutras continues to inspire generations through education and awareness programs worldwide.",
    buttonText: "Apply Now",
    href: "/join-us",
  },
  {
    icon: "❤️",
    title: "Sponsor a Retreat",
    description:
      "Support meditation retreats for underserved communities, bringing peace to those who need it most.",
    buttonText: "Sponsor",
    href: "/join-us",
  },
];
