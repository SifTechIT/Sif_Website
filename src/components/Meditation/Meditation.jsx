import activitiesColors from "@/lib/activies";
import { scrollToSection } from "@/lib/scrollToSection";
import { Link } from "react-router-dom";
import SunyaMeditation from "../../assets/SunyaMeditation/banner.jpeg";
import Philosophy from "../../assets/SunyaMeditation/Philosophy.jpeg";
import Residential from "../../assets/SunyaMeditation/Residential.jpeg";
import Trainers from "../../assets/SunyaMeditation/Trainers.jpeg";
import BentoCard from "../ui/bento-card";
import TestimonialsCarousel from "../ui/TestimonialsCarousel";

const DEFAULT_TESTIMONIALS = [
  {
    quote:
      "Sunya gave me more than peace—it gave me direction in life. I found clarity I never knew existed.",
    highlight: "₹1,80,000",
    name: "Kavitha",
    role: "Teacher, Bangalore",
    avatarText: "K",
    accent: "text-blue-600",
  },
  {
    quote:
      "Only with Sunya did I find a method to completely let go. The practice of NOTHING taught me everything.",
    highlight: "",
    name: "Arif",
    role: "Software Engineer, Hyderabad",
    avatarText: "A",
    accent: "text-emerald-600",
  },
  {
    quote:
      "We introduced Sunya to 120 girls. The impact was immediate—confidence, calmness, and smiles.",
    highlight: "",
    name: "NGO Partner",
    role: "Women's Shelter, Mumbai",
    avatarText: "N",
    accent: "text-indigo-600",
  },
];

export default function SunyaLanding() {
  const textColor = activitiesColors.sunyaMeditation.text;
  const bgColor = activitiesColors.sunyaMeditation.bg;
  return (
    <main>
      <section className="hero-gradient relative w-full">
        <div className="relative min-h-[90vh] sm:min-h-[680px] w-full mx-auto   ">
          <div
            className="absolute inset-0 bg-cover bg-center w-full h-full "
            style={{ backgroundImage: `url(${SunyaMeditation})` }}
          >
            <div className="absolute inset-0 bg-black/60" />

            <div className="max-w-4xl mx-auto text-center flex  flex-col justify-center items-center h-full  relative z-10 text-white">
              <h1 className="heading mb-6 text-white">The Power of Nothing.</h1>

              <p className="hero-desc text-white  mb-12 max-w-3xl mx-auto">
                Ancient wisdom revived for the modern world. Experience inner
                peace through the practice of conscious emptiness.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <button
                  className="bg-black text-white px-10 py-4 rounded-full font-semibold hover:bg-zinc-800 transition shadow-lg"
                  onClick={() => scrollToSection("PHILOSOPHY")}
                >
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BELT BAR */}
      <section className="max-w-5xl mx-auto px-6 py-24 ">
        <div className="flex w-full rounded-full overflow-hidden mb-4">
          <div className="w-[14.28%] h-[6px] bg-red-500" />
          <div className="w-[14.28%] h-[6px] bg-orange-500" />
          <div className="w-[14.28%] h-[6px] bg-yellow-400" />
          <div className="w-[14.28%] h-[6px] bg-green-500" />
          <div className="w-[14.28%] h-[6px] bg-blue-500" />
          <div className="w-[14.28%] h-[6px] bg-indigo-600" />
          <div className="w-[14.28%] h-[6px] bg-purple-600" />
        </div>

        <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
          <span>Red Belt: Awareness</span>
          <span className="hidden md:block text-gray-300">
            The 7-Belt Pathway
          </span>
          <span>Violet Belt: Liberation</span>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-24 px-6 bg-[#fbfbfd]" id="PHILOSOPHY">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2
                className={`${textColor} font-bold tracking-tight text-sm uppercase mb-4`}
              >
                Core Philosophy
              </h2>
              <h3 className="subheading mb-6">Embrace the Zero.</h3>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                Sunya is a transformative practice that helps you reconnect with
                your true self by consciously letting go of judgments. In a
                world of noise, Sunya invites you to return to simplicity.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 bg-white rounded-[1rem] border border-gray-100">
                  <div className="text-blue-600 mb-2">
                    <BrainIcon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-bold">Mental Clarity</p>
                </div>

                <div className="p-8 bg-white rounded-[1rem] border border-gray-100">
                  <div className="text-red-500 mb-2">
                    <HeartIcon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-bold">Emotional Balance</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-gray-200 h-[500px] flex items-center justify-center text-gray-400 overflow-hidden relative">
              <img
                src={Philosophy}
                alt="Philosophy"
                className="object-cover w-full h-full absolute inset-0 rounded-[2.5rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="subheading ">Core Activities.</h2>
            <p className="text-gray-500 mt-4 text-lg">
              Designed to deepen your practice at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <BentoBox className="md:col-span-7  text-white  flex flex-col justify-between h-[450px] overflow-hidden">
              <div
                className="relative bg-cover bg-center w-full h-full p-12"
                style={{ backgroundImage: `url(${Residential})` }}
              >
                <div className="absolute inset-0 bg-black/60" />
                <div className="z-10 relative my-4">
                  <span
                    className={`${textColor} font-bold text-xs uppercase tracking-widest`}
                  >
                    Deep Immersion
                  </span>
                  <h3 className="text-3xl font-bold mt-4 mb-4">
                    Residential Retreats
                  </h3>
                  <p className="text-white max-w-sm">
                    7 to 10-day silent retreats in serene environments with
                    expert guidance for profound transformation.
                  </p>
                </div>

                <Link
                  to="#"
                  className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium w-fit relative "
                >
                  View Schedule
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
                <h3 className="text-xl font-bold mb-3">Foundation Course</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  A 3-day beginner workshop conducted in communities and
                  colleges to build self-awareness.
                </p>
              </div>

              <Link to="#" className={`${textColor} font-medium text-sm`}>
                Learn more &gt;
              </Link>
            </BentoBox>

            <BentoBox className="md:col-span-4 bg-white p-8 border border-gray-100">
              <h4 className="font-bold mb-2">Online Sessions</h4>
              <p className="text-gray-500 text-sm mb-4">
                Free guided meditations every weekend via Zoom &amp; YouTube.
              </p>
              <span
                className={`${textColor} text-xs font-bold uppercase tracking-widest `}
              >
                Join Live
              </span>
            </BentoBox>

            <BentoBox className="md:col-span-4 bg-white p-8 border border-gray-100">
              <h4 className="font-bold mb-2">School Programs</h4>
              <p className="text-gray-500 text-sm mb-4">
                Introduction to Sunya for students to enhance focus and focus.
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
                style={{ backgroundImage: `url(${Trainers})` }}
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
      <TestimonialsCarousel testimonials={DEFAULT_TESTIMONIALS} />

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2
            className={`text-[10px] uppercase tracking-[0.3em]  font-bold mb-4 ${textColor}`}
          >
            Start Your Journey
          </h2>
          <h3 className="subheading text-gradient">Get Involved.</h3>
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

function BentoBox({ className = "", children }) {
  return (
    <div
      className={[
        "rounded-[2.5rem] border border-[#f2f2f7] transition-all duration-400",
        "hover:-translate-y-[5px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function BrainIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 2a3 3 0 0 0-3 3v1.2A3.5 3.5 0 0 0 4 9.5c0 1.2.6 2.3 1.5 3A3.5 3.5 0 0 0 6 18v1a3 3 0 0 0 3 3h1v-8H9v-2h1V2H9Zm6 0h-1v8h1v2h-1v8h1a3 3 0 0 0 3-3v-1a3.5 3.5 0 0 0 .5-5.5A3.5 3.5 0 0 0 20 9.5a3.5 3.5 0 0 0-2-3.3V5a3 3 0 0 0-3-3Z" />
    </svg>
  );
}

function HeartIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21s-7-4.6-9.4-9C.5 7.8 3.2 4.8 6.6 5c1.6.1 3 .9 3.9 2.1.9-1.2 2.3-2 3.9-2.1 3.4-.2 6.1 2.8 4 7-2.4 4.4-9.4 9-9.4 9Z" />
    </svg>
  );
}

function UsersIcon({ className = "", ...props }) {
  return (
    <svg
      className={className}
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0ZM4 20a7 7 0 0 1 16 0H4Zm14-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
  );
}
const cards = [
  {
    icon: "📅",
    title: "Join a Workshop",
    description:
      "Experience transformative meditation through our Foundation Course or immersive residential retreats.",
    buttonText: "Find Events",
    buttonVariant: "primary",
    href: "/",
  },
  {
    icon: "📍",
    title: "Invite Us",
    description:
      "Bring Sunya meditation to your school, office, or community center with customized modules.",
    buttonText: "Request Visit",
    href: "/contact-us",
  },
  {
    icon: "🎓",
    title: "Become a Trainer",
    description:
      "Join our certified trainer program and help spread Sunya practices in your region and language.",
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
