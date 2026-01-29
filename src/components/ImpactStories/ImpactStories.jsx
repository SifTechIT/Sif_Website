import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SoilTest from "../../assets/FarmerEmpowerment/Soil_Testing.jpeg";
import Covidppe from "../../assets/ImpactStories/COVID_PPE.png";
import CommunityConfidence from "../../assets/ImpactStories/Community_Confidence.png";
import ConfidenceBeyondIncome from "../../assets/ImpactStories/Confidence_Beyond_Income.png";
import ConflictCards from "../../assets/ImpactStories/Conflict_Cards.jpg";
import CorporateCalm from "../../assets/ImpactStories/Corporate_Calm.JPG";
import DiamondSutraLives from "../../assets/ImpactStories/Diamond_Sutra_Lives.jpg";
import EnergyLearn from "../../assets/ImpactStories/Energy_Learn.jpeg";
import FinancialIndependenceSHG from "../../assets/ImpactStories/Financial_Independence_SHG.JPG";
import FoodBingoLesson from "../../assets/ImpactStories/Food_Bingo_Lesson.png";
import GlobalRecognition from "../../assets/ImpactStories/Global_Recognition.jpg";
import GlobalRetreats from "../../assets/ImpactStories/Global_Retreats.JPG";
import HealingRelationships from "../../assets/ImpactStories/Healing.png";
import HomemakerToEntrepreneur from "../../assets/ImpactStories/HomemakerToEntrepreneur.jpg";
import KimonoCommunityPride from "../../assets/ImpactStories/KimonoCommunityPride.png";
import MindfulnessPlay from "../../assets/ImpactStories/Mindfulness_Play.png";
import ParentalPride from "../../assets/ImpactStories/Parental_Pride.jpg";
import SecureLivehoods from "../../assets/ImpactStories/SecureLivelihoods.jpg";
import StudentsGainFocus from "../../assets/ImpactStories/Students_Gain_Focus.JPG";
import SunyaMeditation from "../../assets/ImpactStories/Sunya_Meditation.jpeg";
import TacklingAnemia from "../../assets/ImpactStories/Tackling_Anemia.jpeg";
import TransparencyAction from "../../assets/ImpactStories/Transparency_Action.jpeg";
import WomenFarmer from "../../assets/ImpactStories/WomenFarmer.jpg";
import YouthFarm from "../../assets/ImpactStories/YouthFarm.png";
import YouthCraft from "../../assets/ImpactStories/Youth_Craft.jpg";
import bento1 from "../../assets/ImpactStories/bento1.jpeg";
import bento2 from "../../assets/ImpactStories/bento2.jpeg";

export default function ImpactStoriesPage() {
  return (
    <main>
      <section className="hero-gradient   relative w-full  ">
        <div className="relative min-h-[90vh] sm:min-h-[680px] w-full mx-auto   ">
          <div
            className="absolute inset-0 bg-cover bg-center w-full h-full "
            style={{
              backgroundImage: `url(${SunyaMeditation})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60" />

            <div className="max-w-4xl  mx-auto text-center flex  flex-col justify-center items-center h-full  relative z-10 text-white ">
              <h1 className="heading mb-6 text-white ">
                Real Stories.
                <br />
                Real Impact.
              </h1>
              <p className="hero-desc mb-10 max-w-2xl mx-auto text-white ">
                Discover how SIF initiatives are transforming lives across
                communities—from farmers securing livelihoods to children
                gaining confidence.
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
      <section className="max-w-6xl mx-auto section-gap">
        <div className="mb-16">
          <h2 className="subheading mb-2">Featured Transformations</h2>
          <p className="text-gray-500 text-lg font-light">
            Highlighted stories showcasing the depth of our impact.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Big card */}
          <div
            className="relative bento-card col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2
               bg-zinc-900 text-white p-6 sm:p-10 lg:p-12
               flex flex-col justify-end bg-cover bg-center min-h-[320px] sm:min-h-[420px] lg:min-h-[520px] overflow-hidden "
            style={{
              backgroundImage: `url(${bento1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60" />

            <div className="absolute top-6 left-6 sm:top-10 sm:left-10 lg:top-12 lg:left-12 text-4xl sm:text-5xl">
              🌾
            </div>

            <div className="relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-4 block">
                Livelihoods
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                From Uncertainty to Security
              </h3>
              <p className="text-zinc-200 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl">
                Farmers in Siddipet shifted to Noni under SIF's buy-back model,
                eliminating income risks.
              </p>
              <span className="text-sm font-bold border-b-2 border-white pb-1 inline-block">
                Read Full Story →
              </span>
            </div>
          </div>

          {/* Wide card */}
          <div
            className="relative bento-card col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-1
               p-6 sm:p-8 lg:p-10
               flex flex-col justify-between border-pink-50 bg-pink-50/30 bg-cover bg-center min-h-[220px] overflow-hidden "
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `url(${bento2})`,
            }}
          >
            <div className="absolute inset-0 bg-black/60" />

            <div className="flex justify-between items-start relative z-10">
              <div className="text-3xl sm:text-4xl">👩‍🧵</div>
              <span className="text-[9px] font-bold uppercase tracking-widest bg-pink-600 text-white px-3 py-1 rounded-full">
                Empowerment
              </span>
            </div>
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-pink-600">
                Hands that Earn
              </h3>
              <p className="text-pink-700 text-sm leading-relaxed max-w-md">
                Women learned Kimono stitching, combining heritage with
                livelihood and financial independence.
              </p>
            </div>
          </div>

          {/* Small card 1 */}
          <div className="bento-card col-span-1 lg:col-span-1 lg:row-span-1 p-6 sm:p-8 flex flex-col justify-center text-center bg-orange-50/50 min-h-[220px]">
            <div className="text-3xl sm:text-4xl mb-5 sm:mb-6">👓</div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-orange-900">
              Vision for Learning
            </h3>
            <p className="text-orange-800/60 text-sm sm:text-xs sm:leading-relaxed">
              Eye camps provided free spectacles to children, improving outcomes
              instantly.
            </p>
          </div>

          {/* Small card 2 */}
          <div className="bento-card col-span-1 lg:col-span-1 lg:row-span-1 p-6 sm:p-8 flex flex-col justify-center text-center bg-purple-50/50 min-h-[220px]">
            <div className="text-3xl sm:text-4xl mb-5 sm:mb-6">🎒</div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-purple-900">
              Kindness in Action
            </h3>
            <p className="text-purple-800/60 text-sm sm:text-xs sm:leading-relaxed">
              Children learned empathy through sharing snacks and games that
              reinforced respect.
            </p>
          </div>
        </div>
      </section>
      <StoriesWithFilter />
    </main>
  );
}

/* ========================= Stories + Filter ========================= */
const ALL_STORIES = [
  {
    image: SecureLivehoods,
    category: "farmer",
    color: "from-emerald-600 to-emerald-700",
    emoji: "🌾",
    title: "Secured Livelihoods with Noni",
    desc: "Farmers in Siddipet shifted from low-margin crops to Noni under SIF's buy-back model, eliminating income uncertainty.",
    quote:
      '"Before, we sold our produce in distress. Now, we know the price in advance and farm with confidence."',
    author: "– Ravi, Farmer",
  },
  {
    image: SoilTest,
    category: "farmer",
    color: "from-emerald-600 to-emerald-700",
    emoji: "🧪",
    title: "Soil Testing Saves a Season",
    desc: "After soil testing showed nutrient gaps, SIF introduced bio-fertilizers, preventing crop loss and saving dozens of acres.",
  },
  {
    image: YouthFarm,
    category: "farmer",
    color: "from-emerald-600 to-emerald-700",
    emoji: "🏠",
    title: "Youth Return to Farming",
    desc: "With modern training and assured income, rural youth who migrated to cities are returning to their family farms.",
  },
  {
    image: WomenFarmer,
    category: "farmer",
    color: "from-emerald-600 to-emerald-700",
    emoji: "👩‍🌾",
    title: "Women Farmers Take Lead",
    desc: "Women in farmer families now co-manage plots, gaining financial literacy and confidence in agricultural decisions.",
  },

  // Women Empowerment
  {
    image: HomemakerToEntrepreneur,
    category: "women",
    color: "from-pink-500 to-pink-700",
    emoji: "💼",
    title: "From Homemaker to Entrepreneur",
    desc: "A women's self-help group trained by SIF now produces eco-friendly bags sold in local markets.",
  },
  {
    image: KimonoCommunityPride,
    category: "women",
    color: "from-pink-500 to-pink-700",
    emoji: "🧵",
    title: "Kimono to Community Pride",
    desc: "Women learned Kimono stitching, combining heritage with livelihood.",
    quote:
      '"I never thought my hands could earn. Today my work is respected in the market."',
    author: "– Lakshmi, Artisan",
  },
  {
    image: FinancialIndependenceSHG,
    category: "women",
    color: "from-pink-500 to-pink-700",
    emoji: "💰",
    title: "Financial Independence through SHGs",
    desc: "Dozens of women now run small savings groups, handling loans and income collectively.",
  },
  {
    image: ConfidenceBeyondIncome,
    category: "women",
    color: "from-pink-500 to-pink-700",
    emoji: "🎤",
    title: "Confidence Beyond Income",
    desc: "Training in public speaking and leadership has enabled women to represent their SHGs in government forums.",
  },

  // Rural Health
  {
    category: "health",
    color: "from-blue-600 to-blue-800",
    emoji: "👓",
    title: "Preventing School Dropouts",
    desc: "Eye camps provided free spectacles to children, improving learning outcomes instantly.",
  },
  {
    category: "health",
    color: "from-blue-600 to-blue-800",
    emoji: "🩸",
    title: "Breaking Menstrual Taboos",
    desc: "Girls attended school regularly after SIF distributed dignity kits and conducted health sessions.",
  },
  {
    image: Covidppe,
    category: "health",
    color: "from-blue-600 to-blue-800",
    emoji: "😷",
    title: "COVID Relief Beyond PPE",
    desc: "During the pandemic, oxygen concentrators and hygiene kits reached hundreds of families.",
  },
  {
    category: "health",
    color: "from-blue-600 to-blue-800",
    emoji: "🧘",
    title: "Mindfulness for Health Workers",
    desc: "Local ASHA workers trained in Sunya reported better focus and lower stress while serving their communities.",
  },

  // Child Education
  {
    image: FoodBingoLesson,
    category: "education",
    color: "from-amber-500 to-orange-600",
    emoji: "🎲",
    title: "The Food Bingo Lesson",
    desc: "Children learned kindness through sharing snacks and playing games that reinforced empathy.",
  },
  {
    image: ConflictCards,
    category: "education",
    color: "from-amber-500 to-orange-600",
    emoji: "🤝",
    title: "Conflict Cards Build Respect",
    desc: "Older kids reflected on real-life disputes and learned respectful responses.",
  },
  {
    image: MindfulnessPlay,
    category: "education",
    color: "from-amber-500 to-orange-600",
    emoji: "🎯",
    title: "Mindfulness Play Enhances Focus",
    desc: "Stick-color matching games boosted concentration and patience in young children.",
  },
  {
    image: ParentalPride,
    category: "education",
    color: "from-amber-500 to-orange-600",
    emoji: "👨‍👩‍👧",
    title: "Parental Pride",
    desc: "Parents report positive behavioral changes in their children.",
    quote:
      '"My child now helps with chores and homework, and speaks politely at home."',
    author: "– Parent, Siddipet",
  },

  // ODOC
  {
    image: EnergyLearn,
    category: "odoc",
    color: "from-violet-600 to-violet-700",
    emoji: "⚡",
    title: "Energy to Learn",
    desc: "Spirulina supplementation reduced fatigue, improving school attendance among children.",
  },
  {
    image: TacklingAnemia,
    category: "odoc",
    color: "from-violet-600 to-violet-700",
    emoji: "🩸",
    title: "Tackling Anemia",
    desc: "Weekly BMI checks showed anemia levels decreasing among girls receiving supplementation.",
  },
  {
    image: CommunityConfidence,
    category: "odoc",
    color: "from-violet-600 to-violet-700",
    emoji: "🤝",
    title: "Community Confidence",
    desc: "Families shared improved trust in nutrition after seeing visible health gains.",
  },
  {
    image: TransparencyAction,
    category: "odoc",
    color: "from-violet-600 to-violet-700",
    emoji: "📊",
    title: "Transparency in Action",
    desc: "Live dashboards showed bottle distribution, building donor confidence in program effectiveness.",
  },

  // Sunya
  {
    image: CorporateCalm,
    category: "sunya",
    color: "from-cyan-600 to-cyan-700",
    emoji: "💼",
    title: "Corporate Calm",
    desc: "An IT company reported reduced stress levels after Sunya training sessions for employees.",
  },
  {
    image: HealingRelationships,
    category: "sunya",
    color: "from-cyan-600 to-cyan-700",
    emoji: "💕",
    title: "Healing Relationships",
    desc: "A couple used Sunya meditation practices to rebuild empathy and communication.",
  },
  {
    image: StudentsGainFocus,
    category: "sunya",
    color: "from-cyan-600 to-cyan-700",
    emoji: "📚",
    title: "Students Gain Focus",
    desc: "Teens practicing Sunya before exams reported less anxiety and better scores.",
  },
  {
    image: GlobalRetreats,
    category: "sunya",
    color: "from-cyan-600 to-cyan-700",
    emoji: "🌍",
    title: "Global Retreats Inspire Change",
    desc: "International retreat participants find clarity and purpose.",
    quote: '"I came to Bodh Gaya confused, I left with clarity."',
    author: "– Retreat Participant",
  },

  // Palm Leaf Sutra
  {
    category: "palm",
    color: "from-orange-600 to-orange-700",
    emoji: "🎨",
    title: "Artisans Revive Pride",
    desc: "800 artisans in Odisha now have sustainable incomes by reviving palm-leaf work.",
  },
  {
    image: DiamondSutraLives,
    category: "palm",
    color: "from-orange-600 to-orange-700",
    emoji: "📜",
    title: "Diamond Sutra Lives Again",
    desc: "Ancient text preserved through laser engraving, now shared worldwide with new generations.",
  },
  {
    image: YouthCraft,
    category: "palm",
    color: "from-orange-600 to-orange-700",
    emoji: "👥",
    title: "Youth Join the Craft",
    desc: "Young artisans learn modern engraving techniques, bridging tradition and technology.",
  },
  {
    image: GlobalRecognition,
    category: "palm",
    color: "from-orange-600 to-orange-700",
    emoji: "🌐",
    title: "Global Recognition",
    desc: "Scholars, monks, and cultural bodies applauded the revival of palm-leaf sutra printing traditions.",
  },
];

function StoriesWithFilter() {
  const tabs = [
    { id: "all", label: "All Stories" },
    { id: "farmer", label: "Farmer Empowerment" },
    { id: "women", label: "Women Empowerment" },
    { id: "health", label: "Rural Health" },
    { id: "education", label: "Child Education" },
    { id: "odoc", label: "ODOC" },
    { id: "sunya", label: "Sunya Meditation" },
    { id: "palm", label: "Palm Leaf Sutra" },
  ];

  const [active, setActive] = useState("all");
  const stories = useMemo(
    () =>
      ALL_STORIES.filter((s) =>
        active === "all" ? true : s.category === active,
      ),
    [active],
  );

  return (
    <section className="section-gap bg-gray-50">
      <div className="max-w-6xl mx-auto ">
        <div className="text-center mb-10">
          <h2 className="subheading mb-4">All Impact Stories</h2>
          <p className="text-lg  text-gray-500">
            Filter by program to explore specific transformations
          </p>
        </div>

        <div className="flex flex-wrap justify-start sm:justify-center  gap-2 mb-12">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition cursor-pointer ${
                active === t.id
                  ? "bg-[#2f2760] text-white "
                  : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {stories.map((s, i) => (
            <article
              key={`${s.title}-${i}`}
              className="rounded-[2.5rem] overflow-hidden border border-gray-200 transition hover:-translate-y-2 bg-white"
            >
              <div className="h-52 w-full bg-gray-100 flex items-center justify-center">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover "
                />
              </div>
              <div className="p-8">
                <span className="inline-block text-xs font-semibold tracking-wider uppercase bg-gray-100 text-gray-600 px-3 py-1 rounded-full mb-3">
                  {labelFromCategory(s.category)}
                </span>
                <h3 className="text-xl font-bold mb-2 leading-snug">
                  {s.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                {s.quote && (
                  <blockquote className="bg-gray-50 border-l-4 border-emerald-500 p-4 mt-4 rounded-r-[2.5rem] italic text-gray-800">
                    {s.quote}
                    <div className="font-semibold text-sm text-gray-600 mt-2">
                      {s.author}
                    </div>
                  </blockquote>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function labelFromCategory(cat) {
  switch (cat) {
    case "farmer":
      return "Farmer Empowerment";
    case "women":
      return "Women Empowerment";
    case "health":
      return "Rural Health";
    case "education":
      return "Child Education";
    case "odoc":
      return "ODOC";
    case "sunya":
      return "Sunya Meditation";
    case "palm":
      return "Palm Leaf Sutra";
    default:
      return cat;
  }
}
