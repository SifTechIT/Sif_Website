import activitiesColors from "@/lib/activies";
import { scrollToSection } from "@/lib/scrollToSection";
import { UsersIcon } from "lucide-react";
import { Link } from "react-router-dom";
import SunyaMeditation from "../../assets/Agamas/banner.jpeg";
import banner2 from "../../assets/Agamas/banner2.jpeg";
import bento from "../../assets/Agamas/bento.jpeg";
import bento2 from "../../assets/Agamas/bento2.jpeg";
import bento3 from "../../assets/Agamas/bento3.jpeg";
import { BentoBox, BentoCard } from "../ui/bento-card";

export default function AgamasTranslationsPage() {
  const textColor = activitiesColors.agamasAndSutras.text;
  const bgColor = activitiesColors.agamasAndSutras.bg;
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
                  "inline-block px-4 py-1.5 mb-6  rounded-full text-[10px] font-bold uppercase tracking-widest " +
                  bgColor
                }
              >
                📜 Preserving Ancient Wisdom for Future Generations
              </div>
              <h1 className="heading mb-6 text-white">
                Agamas & Translations.
              </h1>
              <p className="hero-desc mb-10 max-w-2xl mx-auto text-white">
                Preserving, translating, and reviving ancient Indian spiritual
                and philosophical texts—making timeless wisdom accessible to
                humanity.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button
                  className="bg-black text-white px-10 py-4 rounded-full font-semibold hover:bg-zinc-800 transition shadow-lg"
                  onClick={() => scrollToSection("initiative")}
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
              Preservation Progress
            </h2>
            <h3 className="subheading">Safeguarding Civilizational Heritage</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">50+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Manuscripts
                <br />
                Digitized
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">15+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Languages
                <br />
                Supported
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">200+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Pages
                <br />
                Translated
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">10+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Partner
                <br />
                Institutions
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
                  " font-bold tracking-tight text-sm uppercase mb-4 " +
                  textColor
                }
              >
                The Initiative
              </h2>
              <h3 className="subheading mb-6 text-gradient">
                Bridging Past & Future.
              </h3>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                Many ancient teachings survive only on fragile palm-leaf
                manuscripts. These timeless lessons on mindfulness, compassion,
                and human flourishing are universal resources for all humanity.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                By translating Pali, Sanskrit, Prakrit, and Tamil into modern
                languages—including Chinese, Spanish, English, and Hindi—we make
                sacred knowledge accessible to the world.
              </p>
            </div>
            <div className="rounded-[2.5rem] bg-amber-50 aspect-square flex items-center justify-center text-amber-200 overflow-hidden relative shadow-inner">
              <img src={banner2} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="subheading">Why Preservation Matters</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl mb-4">🏛️</div>
              <h4 className="font-bold mb-2">Cultural Heritage</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Safeguarding India's civilizational identity and the world's
                intangible spiritual history.
              </p>
            </div>
            <div>
              <div className="text-2xl mb-4">🌍</div>
              <h4 className="font-bold mb-2">Universal Relevance</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Addressing suffering and ethics in a way that remains relevant
                across all cultures today.
              </p>
            </div>
            <div>
              <div className="text-2xl mb-4">🌉</div>
              <h4 className="font-bold mb-2">Bridging Centuries</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Ensuring ancient wisdom inspires new generations of
                practitioners and researchers.
              </p>
            </div>
            <div>
              <div className="text-2xl mb-4">📚</div>
              <h4 className="font-bold mb-2">Inclusive Knowledge</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Democratizing access by removing barriers of geography,
                language, and scholarship.
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
                style={{ backgroundImage: `url(${bento})` }}
              >
                <div className="absolute inset-0 bg-black/60" />
                <div className="z-10 relative my-4">
                  <h3 className="text-3xl font-bold mt-4 mb-4">
                    Palm-leaf Sutra Printing
                  </h3>
                  <p className="text-white max-w-sm">
                    Reviving the craft of printing sacred sutras on authentic
                    palm leaves, blending heritage with modern preservation.
                  </p>
                </div>

                <Link
                  to="#"
                  className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium w-fit relative "
                >
                  View Archive
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
                <h3 className="text-xl font-bold mb-3">Digital Libraries</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Building open-access repositories for global study, research,
                  and daily practice.
                </p>
              </div>

              <Link to="#" className={`${textColor} font-medium text-sm`}>
                Learn more &gt;
              </Link>
            </BentoBox>

            <BentoBox className="md:col-span-4 bg-white p-8 border border-gray-100">
              <h4 className="font-bold mb-2">Pali & Sanskrit</h4>
              <p className="text-gray-500 text-sm mb-4">
                Rendering early Buddhist texts into modern languages with
                accuracy.
              </p>
              <span
                className={`${textColor} text-xs font-bold uppercase tracking-widest `}
              >
                Join Live
              </span>
            </BentoBox>

            <BentoBox className="md:col-span-4 bg-white p-8 border border-gray-100">
              <h4 className="font-bold mb-2">Ancient History</h4>
              <p className="text-gray-500 text-sm mb-4">
                Works illuminating philosophy, law, and human governance.
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

      <section
        className="section-gap bg-zinc-950 text-white rounded-[2.5rem] mx-4 my-8 relative overflow-hidden"
        style={{
          backgroundImage: `url(${bento3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="subheading mb-12">Global Language Network</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="lang-tag">🇨🇳 Chinese</span>
            <span className="lang-tag">🇬🇧 English</span>
            <span className="lang-tag">🇪🇸 Spanish</span>
            <span className="lang-tag">🇮🇳 Hindi</span>
            <span className="lang-tag">🇫🇷 French</span>
            <span className="lang-tag">🇩🇪 German</span>
            <span className="lang-tag">🇯🇵 Japanese</span>
            <span className="lang-tag">+ Many More</span>
          </div>
          <p className=" text-sm">
            Bridging centuries through translation so sacred knowledge reaches
            every culture.
          </p>
        </div>
      </section>

      <section className="section-gap max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="accent-gold">📊</span> Impact So Far
            </h3>
            <ul className="space-y-6">
              <li className="border-b border-gray-100 pb-4 text-sm text-gray-500">
                • Revival of palm-leaf printing as a spiritual practice
              </li>
              <li className="border-b border-gray-100 pb-4 text-sm text-gray-500">
                • Initial translations of select sutras into major languages
              </li>
              <li className="border-b border-gray-100 pb-4 text-sm text-gray-500">
                • Partnerships with monasteries and research centers
              </li>
              <li className="border-b border-gray-100 pb-4 text-sm text-gray-500">
                • Digital preservation of fragile manuscript collections
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="accent-gold">🚀</span> Roadmap Ahead
            </h3>
            <ul className="space-y-6">
              <li className="border-b border-gray-100 pb-4 text-sm text-gray-500">
                • Systematic translation of all major Agamas & Nikayas
              </li>
              <li className="border-b border-gray-100 pb-4 text-sm text-gray-500">
                • Create parallel translations for global practitioners
              </li>
              <li className="border-b border-gray-100 pb-4 text-sm text-gray-500">
                • Establish the Amaravati Buddhist Centre as a study hub
              </li>
              <li className="border-b border-gray-100 pb-4 text-sm text-gray-500">
                • Train new translators through specialized fellowships
              </li>
            </ul>
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
          <h3 className="subheading text-gradient">Support Ancient Wisdom.</h3>
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
    title: "Become a Translator",
    description: "Join our team working on Pali, Sanskrit, and Tamil texts.",
    buttonText: "Find Events",
    href: "/",
  },
  {
    icon: "📍",
    title: "Research Partners",
    description: "Collaborate as an institution or research center.",
    buttonText: "Request Visit",
    href: "/contact-us",
  },
  {
    icon: "🎓",
    title: "Support Digitization",
    description: "Help with archiving and preservation for global access.",
    buttonText: "Apply Now",
    href: "/join-us",
  },
  {
    icon: "❤️",
    title: "Fund Preservation",
    description: "Sponsor translation projects or study centers.",
    buttonText: "Sponsor",
    href: "/join-us",
  },
];
