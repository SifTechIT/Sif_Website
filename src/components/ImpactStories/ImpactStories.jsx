import { useEffect, useMemo, useRef, useState } from "react";
import SoilTest from "../../assets/FarmerEmpowerment/Soil_Testing.jpeg";
import COVIDPPE from "../../assets/ImpactStories/COVID_PPE.png";
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
import TacklingAnemia from "../../assets/ImpactStories/Tackling_Anemia.jpeg";
import TransparencyAction from "../../assets/ImpactStories/Transparency_Action.jpeg";
import WomenFarmer from "../../assets/ImpactStories/WomenFarmer.jpg";
import YouthFarm from "../../assets/ImpactStories/YouthFarm.png";
import YouthCraft from "../../assets/ImpactStories/Youth_Craft.jpg";
export default function ImpactStoriesPage() {
  return (
    <main>
      <Hero />
      <FeaturedStories />
      <StoriesWithFilter />
      <Stats />
    </main>
  );
}

/* ========================= Hero ========================= */
function Hero() {
  return (
    <section className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white text-center py-40">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur text-sm font-medium mb-8">
          <span>📈</span>
          <span>Real Stories, Real Impact</span>
        </div>
        <h1 className="text-[clamp(3rem,8vw,5rem)] font-extrabold leading-tight mb-4">
          Impact Stories
        </h1>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed">
          Discover how SIF initiatives are transforming lives across
          communities. From farmers securing their livelihoods to children
          gaining confidence, these are the stories that drive our mission
          forward.
        </p>
      </div>
    </section>
  );
}

/* ========================= Featured Stories ========================= */
function FeaturedStories() {
  const cards = [
    {
      icon: "🌾",
      title: "From Uncertainty to Security",
      text: "Farmers in Siddipet shifted from low-margin crops to Noni under SIF's buy-back model, eliminating income uncertainty and farming with confidence.",
      span: "lg:col-span-8 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white",
    },
    {
      icon: "👩‍🧵",
      title: "Hands that Earn",
      text: "Women learned Kimono stitching, combining heritage with livelihood, gaining respect and financial independence.",
      span: "lg:col-span-4 bg-gradient-to-br from-pink-500 to-pink-700 text-white",
    },
    {
      icon: "👓",
      title: "Vision for Learning",
      text: "Eye camps provided free spectacles to children, improving learning outcomes instantly and preventing school dropouts.",
      span: "lg:col-span-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white",
    },
    {
      icon: "🎒",
      title: "Kindness in Action",
      text: "Children learned empathy through sharing snacks and playing games that reinforced respect and collaboration.",
      span: "lg:col-span-6 bg-gradient-to-br from-amber-500 to-orange-600 text-white",
    },
  ];
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Featured Transformations
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
            Highlighted stories that showcase the depth and breadth of our
            impact
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className={`rounded-3xl p-10 border border-gray-200 ${c.span}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 grid place-items-center text-3xl mb-6 shadow">
                {c.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{c.title}</h3>
              <p className="leading-relaxed opacity-90">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= Stories + Filter ========================= */
const ALL_STORIES = [
  // Farmer Empowerment
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
    image: COVIDPPE,
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
        active === "all" ? true : s.category === active
      ),
    [active]
  );

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            All Impact Stories
          </h2>
          <p className="text-lg md:text-xl text-gray-500">
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
                  ? "bg-emerald-500 border-emerald-500 text-white"
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
              className="rounded-2xl overflow-hidden border border-gray-200 transition hover:-translate-y-2 bg-white"
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
                  <blockquote className="bg-gray-50 border-l-4 border-emerald-500 p-4 mt-4 rounded-r-md italic text-gray-800">
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

/* ========================= Stats ========================= */
function Stats() {
  const items = [
    { value: 1000, suffix: "+", label: "Lives Directly Impacted" },
    { value: 25, suffix: "+", label: "Stories of Transformation" },
    { value: 7, suffix: "", label: "Program Areas Active" },
    { value: 100, suffix: "%", label: "Community-Driven Approach" },
  ];

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setVisible(true));
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-28 bg-[#1f2937] text-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Impact by the Numbers
          </h2>
          <p className="text-lg md:text-xl text-white/70">
            Quantifying the transformation across all our initiatives
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((it) => (
            <div key={it.label} className="text-center">
              <div className="text-[3.25rem] md:text-[4rem] font-black mb-2 bg-clip-text text-transparent bg-gradient-to-br from-emerald-400 to-amber-400">
                {visible ? (
                  <CountUp to={it.value} suffix={it.suffix} />
                ) : (
                  <span>0{it.suffix}</span>
                )}
              </div>
              <div className="text-sm font-semibold opacity-80">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({ to, suffix }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let current = 0;
    const frames = 30;
    const step = to / frames;
    const timer = setInterval(() => {
      current += step;
      if (current >= to) {
        current = to;
        clearInterval(timer);
      }
      setN(Math.floor(current));
    }, 50);
    return () => clearInterval(timer);
  }, [to]);
  return (
    <span>
      {n}
      {suffix}
    </span>
  );
}
