import { useEffect, useMemo, useState } from "react";
import ChildrenGames from "../../assets/AusumKids/Expressive_Games.jpeg";
import LittleSunyatee from "../../assets/AusumKids/Little_Sunyatee.jpeg";
import ChildrenGroupLearning from "../../assets/AusumKids/StoryTelling.jpg";
import CommunityExhibition from "../../assets/CulturalRevival/Gallery_Community_Exhibition.JPG";
import SutraEngraving from "../../assets/CulturalRevival/Gallery_Sutra_Engraving.jpg";
import FarmerSmile from "../../assets/FarmerEmpowerment/Gallery_Farmer_Smile.jpeg";
import Noni from "../../assets/FarmerEmpowerment/Gallery_Noni.jpeg";
import SoilTesting from "../../assets/FarmerEmpowerment/Gallery_Soil.jpg";
import PalmLeafPreparation from "../../assets/PalmLeafSutra/Mission.jpg";
import StressRelief from "../../assets/RuralHealth/Stress_Relief.jpg";
import BodhGaya from "../../assets/SunyaMeditation/Gallery_Bodh_Gaya.JPG";
import ChildrenFirst from "../../assets/SunyaMeditation/Gallery_ChildMeditation.jpg";
import CommunityPractice from "../../assets/SunyaMeditation/Gallery_Community_Practice.JPG";
import FirstSale from "../../assets/WomenEmpowerment/Gallery_First_Sale.jpg";
import WomenLeader from "../../assets/WomenEmpowerment/Gallery_Leader.jpg";
import GallerySkillCenter from "../../assets/WomenEmpowerment/Gallery_Skill_Center.jpg";
export default function SifGalleryPage() {
  const [activeTab, setActiveTab] = useState("photos");
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState({
    open: false,
    title: "",
    desc: "",
    image: null,
  });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll-smooth font-sans text-[#111827] bg-white">
      {/* <Header scrolled={scrolled} /> */}
      <Hero />
      <GalleryNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        filter={filter}
        setFilter={setFilter}
      />
      {activeTab === "photos" ? (
        <PhotosSection
          filter={filter}
          onOpen={(p) => {
            setLightbox({
              open: true,
              title: p.title,
              desc: p.desc,
              image: p.image,
            });
          }}
        />
      ) : (
        <VideosSection filter={filter} />
      )}
      <Lightbox
        open={lightbox.open}
        title={lightbox.title}
        desc={lightbox.desc}
        image={lightbox.image}
        onClose={() =>
          setLightbox({ open: false, title: "", desc: "", image: null })
        }
      />
      {/* <Footer /> */}
    </div>
  );
}

/* ========================= Header ========================= */

/* ========================= Hero ========================= */
function Hero() {
  return (
    <section className="relative h-screen bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="w-full h-full opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_50%),radial-gradient(circle_at_80%_80%,white,transparent_50%)]" />
      </div>
      <div className="container max-w-[800px] mx-auto px-6 text-center text-white relative animate-[slideUp_.8s_cubic-bezier(0.4,0,0.2,1)]">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur text-sm font-medium mb-8">
          <span>📸 Visual Stories of Transformation</span>
        </div>
        <h1 className="text-[clamp(3rem,8vw,5rem)] font-extrabold leading-[1.1] mb-4">
          Gallery
        </h1>
        <p className="text-lg md:text-xl opacity-90 leading-relaxed">
          A living record of our journey—from Sunya Meditation retreats to
          farmer empowerment projects, from child education centres to the
          revival of ancient manuscripts. Each photograph and video tells a
          story of transformation, service, and hope.
        </p>
      </div>
    </section>
  );
}

/* ========================= Gallery Navigation ========================= */
const FILTERS = [
  { id: "all", label: "All" },
  { id: "meditation", label: "Meditation" },
  { id: "farmer", label: "Farmers" },
  { id: "women", label: "Women" },
  { id: "education", label: "Education" },
  { id: "health", label: "Health" },
  { id: "heritage", label: "Heritage" },
];

function GalleryNav({ activeTab, setActiveTab, filter, setFilter }) {
  return (
    <section className="sticky top-[72px] z-40 bg-white border-b border-gray-200 py-6">
      <div className="container max-w-[1280px] mx-auto px-6">
        {/* <div className="max-w-[420px] mx-auto flex gap-2 bg-gray-100 rounded-2xl p-2 mb-4">
          {["photos", "videos"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-4 py-2 rounded-xl font-semibold text-sm transition ${
                activeTab === tab
                  ? "bg-white shadow text-gray-900"
                  : "text-gray-600"
              }`}
            >
              {tab === "photos" ? "Photos" : "Videos"}
            </button>
          ))}
        </div> */}
        <div className="flex flex-wrap justify-start sm:justify-center gap-3">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition cursor-pointer ${
                filter === f.id
                  ? "bg-emerald-500 text-white border-emerald-500"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= Photo Gallery ========================= */
function PhotosSection({ filter, onOpen }) {
  const photos = useMemo(
    () => [
      // Meditation
      {
        image: BodhGaya,
        category: "meditation",
        emoji: "🧘",
        badge: "Mindfulness & Sunya",
        title: "Bodh Gaya Retreat",
        desc: "Powerful moments from meditation retreats in the sacred land where Buddha attained enlightenment.",
      },
      {
        image: CommunityPractice,
        category: "meditation",
        emoji: "👥",
        badge: "Mindfulness & Sunya",
        title: "Community Practice Circles",
        desc: "People across ages coming together for shared meditation and mindfulness practices.",
      },
      {
        image: ChildrenFirst,
        category: "meditation",
        emoji: "👶",
        badge: "Mindfulness & Sunya",
        title: "Children's First Meditation",
        desc: "Young minds experiencing the peace and clarity of meditation for the first time.",
      },
      // Farmer
      {
        image: Noni,
        category: "farmer",
        emoji: "🌱",
        badge: "Farmer Empowerment",
        title: "Noni Cultivation Fields",
        desc: "Farmers tending to their Noni cultivation fields in Siddipet with care and hope.",
      },
      {
        image: SoilTesting,
        category: "farmer",
        emoji: "🧪",
        badge: "Farmer Empowerment",
        title: "Soil Testing Workshop",
        desc: "Scientific soil testing workshops and sustainable farming training sessions in progress.",
      },
      {
        image: FarmerSmile,
        category: "farmer",
        emoji: "😊",
        badge: "Farmer Empowerment",
        title: "Assured Income Smiles",
        desc: "Smiles of farmers assured of income through SIF's buy-back model with DXN partnership.",
      },
      // Women
      {
        image: GallerySkillCenter,
        category: "women",
        emoji: "✂️",
        badge: "Women Empowerment",
        title: "Skill Development Centers",
        desc: "Women at skill development centers crafting eco-products and textiles with pride.",
      },
      {
        image: FirstSale,
        category: "women",
        emoji: "🏪",
        badge: "Women Empowerment",
        title: "First Sales Exhibition",
        desc: "Self-help groups showcasing their first sales at local exhibitions with joy and achievement.",
      },
      {
        image: WomenLeader,
        category: "women",
        emoji: "🎤",
        badge: "Women Empowerment",
        title: "Women Leaders",
        desc: "Women leaders addressing village meetings with confidence and authority.",
      },
      // Education
      {
        image: ChildrenGames,
        category: "education",
        emoji: "🎲",
        badge: "Child Education",
        title: "Mindfulness Games",
        desc: "Children engaged in mindfulness games like Food Bingo and Conflict Cards.",
      },
      {
        image: ChildrenGroupLearning,
        category: "education",
        emoji: "📚",
        badge: "Child Education",
        title: "Group Learning Sessions",
        desc: "Group learning sessions in rural education centers with interactive activities.",
      },
      {
        image: LittleSunyatee,
        category: "education",
        emoji: "👨‍🏫",
        badge: "Child Education",
        title: "Little Sunyatee Courses",
        desc: "Facilitators guiding Little Sunyatee courses with joy and compassion.",
      },
      // Health
      {
        category: "health",
        emoji: "👓",
        badge: "Rural Health",
        title: "Eye Check-ups",
        desc: "Villagers at health camps receiving eye check-ups and nutrition support.",
      },
      {
        category: "health",
        emoji: "🎒",
        badge: "Rural Health",
        title: "Dignity Kits Distribution",
        desc: "Girls proudly holding dignity kits during menstrual health awareness drives.",
      },
      {
        image: StressRelief,
        category: "health",
        emoji: "🧘‍♀️",
        badge: "Rural Health",
        title: "Stress Relief Workshops",
        desc: "Community members practicing Sunya for stress relief in health workshops.",
      },
      // Heritage
      {
        image: PalmLeafPreparation,
        category: "heritage",
        emoji: "🌿",
        badge: "Cultural Revival",
        title: "Palm Leaf Preparation",
        desc: "Odisha artisans carefully preparing palm leaves for traditional manuscript creation.",
      },
      {
        image: SutraEngraving,
        category: "heritage",
        emoji: "💎",
        badge: "Cultural Revival",
        title: "Diamond Sutra Engraving",
        desc: "Laser-engraving of the Diamond Sutra using modern technology on traditional materials.",
      },
      {
        image: CommunityExhibition,
        category: "heritage",
        emoji: "🏛️",
        badge: "Cultural Revival",
        title: "Community Exhibitions",
        desc: "Display of finished sutras in community events celebrating cultural heritage.",
      },
    ],
    []
  );

  const filtered = photos.filter(
    (p) => filter === "all" || p.category === filter
  );

  const catGradient = {
    meditation: "from-indigo-500 to-purple-600",
    farmer: "from-emerald-500 to-emerald-700",
    women: "from-pink-500 to-rose-700",
    education: "from-amber-500 to-amber-700",
    health: "from-blue-600 to-indigo-700",
    heritage: "from-violet-600 to-purple-700",
  };

  return (
    <section id="photos" className="py-20 bg-gray-50">
      <div className="container max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filtered.map((p, i) => (
            <button
              key={`${p.title}-${i}`}
              onClick={() => onOpen(p)}
              className="text-left group rounded-2xl overflow-hidden border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div
                className={`h-[250px] bg-gradient-to-br ${
                  catGradient[p.category]
                } text-white grid place-items-center text-5xl relative`}
              >
                <div className="h-[250px]  w-full bg-gray-100 flex items-center justify-center">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover "
                  />
                </div>
                <span className="absolute top-3 right-3 text-xs font-semibold bg-black/60 rounded-full px-2 py-0.5">
                  {p.category}
                </span>
              </div>
              <div className="p-6">
                <span className="inline-block text-[11px] uppercase tracking-wide font-bold bg-gray-100 text-gray-600 rounded-full px-3 py-1 mb-3">
                  {p.badge}
                </span>
                <h3 className="text-lg font-bold mb-1 text-gray-900">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= Video Gallery ========================= */
function VideosSection({ filter }) {
  const featured = [
    {
      title: "The Sunya Journey",
      emoji: "▶️",
      grad: "from-indigo-500 to-purple-600",
      desc: "How Sunya meditation is spreading globally, transforming lives and communities.",
    },
    {
      title: "Voices of Change",
      emoji: "🎙️",
      grad: "from-emerald-500 to-green-600",
      desc: "Interviews with farmers, women, and children about SIF's impact.",
    },
    {
      title: "ODOC in Action",
      emoji: "👶",
      grad: "from-amber-500 to-orange-700",
      desc: "Spirulina nutrition distribution and children's recovery stories.",
    },
    {
      title: "Artisans of Odisha",
      emoji: "🎨",
      grad: "from-violet-600 to-purple-700",
      desc: "Palm-leaf manuscript revival blending ancient craft and modern tech.",
    },
  ];

  const videos = [
    {
      category: "meditation",
      title: "Retreat Testimonials",
      desc: "Participants share their transformative experiences.",
    },
    {
      category: "education",
      title: "Sunyatimes Launch",
      desc: "Snippets from magazine launch events.",
    },
    {
      category: "farmer",
      title: "CSR Partnership Stories",
      desc: "Why partners collaborate with SIF and the impact witnessed.",
    },
    {
      category: "women",
      title: "Women's Success Stories",
      desc: "Stories of skill development and empowerment.",
    },
    {
      category: "health",
      title: "Health Camp Highlights",
      desc: "Highlights from rural health camps and wellness programs.",
    },
    {
      category: "heritage",
      title: "Heritage Revival Process",
      desc: "Time-lapse of palm leaf manuscript creation.",
    },
  ];

  const filtered = videos.filter(
    (v) => filter === "all" || v.category === filter
  );

  return (
    <section id="videos" className="py-20 bg-white">
      <div className="container max-w-[1280px] mx-auto px-6">
        {/* Featured */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-2">
            Featured Stories
          </h2>
          <p className="text-gray-500 text-lg">
            Documentary-style videos showcasing our transformative journey
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-12">
          <FeaturedCard {...featured[0]} span="lg:col-span-8" />
          <FeaturedCard {...featured[1]} span="lg:col-span-4" />
          <FeaturedCard {...featured[2]} span="lg:col-span-6" />
          <FeaturedCard {...featured[3]} span="lg:col-span-6" />
        </div>

        {/* Grid */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-2">Video Collection</h3>
          <p className="text-gray-500">
            Testimonials, events, and behind-the-scenes moments
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((v, i) => (
            <div
              key={`${v.title}-${i}`}
              className="rounded-2xl overflow-hidden border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="h-[200px] bg-gradient-to-br from-gray-100 to-gray-200 grid place-items-center">
                <button
                  className="w-14 h-14 rounded-full grid place-items-center text-white bg-black/80 hover:scale-105 transition"
                  aria-label="Play video"
                >
                  ▶
                </button>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg text-gray-900 mb-1">
                  {v.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ title, desc, grad, emoji, span }) {
  return (
    <div
      className={`rounded-3xl p-10 border border-gray-200 text-white bg-gradient-to-br ${grad} ${span} relative overflow-hidden transition hover:-translate-y-1 hover:shadow-2xl`}
    >
      <button
        className="w-16 h-16 rounded-2xl bg-white/10 grid place-items-center text-3xl mb-6 border border-white/20 hover:scale-105 transition"
        aria-label="Play video"
      >
        {emoji}
      </button>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="opacity-90 leading-relaxed">{desc}</p>
    </div>
  );
}

/* ========================= Lightbox ========================= */
function Lightbox({ open, title, desc, onClose, image }) {
  useEffect(() => {
    const onKey = (e) => {
      if (open && e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  console.log("image", image);
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[1000] bg-black/90 grid place-items-center p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-[90%] max-h-[90%] bg-white rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/70 text-white grid place-items-center"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
        {/* Placeholder image using inline SVG text (no external URLs) */}
        <div className="w-[80vw] max-w-[900px]">
          <div className="h-full w-full bg-gray-100 flex items-center justify-center">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover "
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 text-white p-6 bg-gradient-to-t from-black/80 to-transparent">
          <div className="text-lg font-bold">{title}</div>
          <div className="text-sm opacity-90">{desc}</div>
        </div>
      </div>
    </div>
  );
}

const style = document.createElement("style");
style.innerHTML = `@keyframes slideUp {from {opacity:0; transform: translateY(32px);} to {opacity:1; transform: translateY(0);} }`;
if (
  typeof document !== "undefined" &&
  !document.getElementById("sif-gallery-anim")
) {
  style.id = "sif-gallery-anim";
  document.head.appendChild(style);
}
