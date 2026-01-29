import activitiesColors from "@/lib/activies";
import { scrollToSection } from "@/lib/scrollToSection";
import { UsersIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Banner1 from "../../assets/Internship/Banner1.jpg";
import Banner2 from "../../assets/Internship/Banner2.jpg";
import Banner3 from "../../assets/Internship/Banner3.jpg";
import bento2 from "../../assets/Internship/skill.jpg";
import TestimonialsCarousel from "../ui/TestimonialsCarousel";
import { BentoBox, BentoCard } from "../ui/bento-card";
export default function InternshipProgramsPage() {
  const DEFAULT_TESTIMONIALS = [
    {
      quote:
        "At SIF, I didn't just learn about NGO work—I discovered my own strengths. Working on ODOC's impact dashboard gave me confidence in data analysis and project design.",
      highlight: "",
      avatarText: "A",
      name: "Ananya Sharma",
      role: "IT Intern, 2024",
      accent: "text-blue-600",
    },
    {
      quote:
        "Supporting the Child Education Centre taught me patience, empathy, and how small actions create big change. This experience shaped my career path in education.",
      highlight: "",
      avatarText: "R",
      name: "Rahul Kumar",
      role: "Education Intern, 2023",
      accent: "text-emerald-600",
    },
    {
      quote:
        "The mentorship at SIF was incredible. I learned project management, improved my communication skills, and built a portfolio that helped me land my dream job.",
      highlight: "",
      avatarText: "P",
      name: "Priya Patel",
      role: "Research Intern, 2024",
      accent: "text-indigo-600",
    },
  ];
  const textColor = activitiesColors.internshipAcademy.text;
  const bgColor = activitiesColors.internshipAcademy.bg;
  return (
    <main>
      <section className="hero-gradient   relative w-full  ">
        <div className="relative min-h-[90vh] sm:min-h-[680px] w-full mx-auto   ">
          <div
            className="absolute inset-0 bg-cover bg-center w-full h-full "
            style={{ backgroundImage: `url(${Banner3})` }}
          >
            <div className="absolute inset-0 bg-black/60" />

            <div className="max-w-4xl mx-auto text-center flex  flex-col justify-center items-center h-full  relative z-10 text-white">
              <div
                className={
                  "inline-block px-4 py-1.5 mb-6 rounded-full text-[10px] font-bold uppercase tracking-widest  " +
                  bgColor
                }
              >
                🎓 Learning with Impact, Growing with Purpose
              </div>
              <h1 className="heading mb-6 text-white">Internship Programs.</h1>
              <p className="hero-desc mb-10 max-w-2xl mx-auto text-white">
                Combine meaningful learning with social impact. Join young
                changemakers across education, health, technology, and community
                development.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button
                  onClick={() => scrollToSection("sif")}
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
              Program Impact & Growth
            </h2>
            <h3 className="subheading">Empowering the Next Generation</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">50+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Interns
                <br />
                Mentored
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">6</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Program Areas
                <br />
                Available
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">95+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Report Improved
                <br />
                Confidence
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">100+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Portfolio
                <br />
                Support
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap max-w-6xl mx-auto" id="sif">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="rounded-[3rem] bg-blue-50 aspect-square flex items-center justify-center text-blue-200 overflow-hidden relative border border-blue-100 shadow-inner">
            <img src={Banner1} className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-blue-600 font-bold tracking-tight text-sm uppercase mb-4">
              Why SIF?
            </h2>
            <h3 className="subheading mb-6 text-gradient">
              Education Meets Empathy.
            </h3>
            <p className="text-lg text-gray-500 leading-relaxed mb-6">
              Our program offers young people the opportunity to combine
              learning with meaningful social impact. Every internship is
              purpose-driven work where participants don't just complete
              tasks—they contribute to global causes.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Gain exposure across multiple domains while contributing to
              nutrition, mindfulness, farmer empowerment, and cultural heritage
              preservation.
            </p>
          </div>
        </div>
      </section>

      <section id="programs" className="section-gap">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="subheading ">Program Areas</h2>
            <p className="text-gray-500 mt-4 text-lg">
              Diverse opportunities across all SIF domains.
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
                  <h3 className="text-3xl font-bold mt-4 mb-4">IT & Design</h3>
                  <p className="text-white max-w-sm">
                    Website development, social media design, dashboard
                    building, and creative campaigns.
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
                <h3 className="text-xl font-bold mb-3">Education</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Assist in Child Education Centres and develop learning
                  modules.
                </p>
              </div>

              <Link to="#" className={`${textColor} font-medium text-sm`}>
                Learn more &gt;
              </Link>
            </BentoBox>

            <BentoBox className="md:col-span-4 bg-white p-8 border border-gray-100">
              <h4 className="font-bold mb-2">Research</h4>
              <p className="text-gray-500 text-sm mb-4">
                Collect field data and prepare global impact reports.
              </p>
              <span
                className={`${textColor} text-xs font-bold uppercase tracking-widest `}
              >
                Join Live
              </span>
            </BentoBox>

            <BentoBox className="md:col-span-4 bg-white p-8 border border-gray-100">
              <h4 className="font-bold mb-2">Outreach</h4>
              <p className="text-gray-500 text-sm mb-4">
                Support awareness programs in health and rural engagement.
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
                <h4 className="font-bold mb-2 relative">Heritage</h4>
                <p className="text-sm mb-4 relative">
                  Contribute to Palm Leaf Sutra Printing through research.
                </p>
                <span className="text-white text-xs relative font-bold uppercase tracking-widest underline underline-offset-4">
                  Apply Now
                </span>
              </div>
            </BentoBox>
          </div>
        </div>
      </section>
      <section className="section-gap max-w-6xl mx-auto">
        <h2 className="subheading mb-16 text-center">
          Comprehensive Development.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex gap-6">
            <div className="text-blue-600 text-xl font-bold">01</div>
            <div>
              <h4 className="font-bold mb-2">Expert Mentorship</h4>
              <p className="text-sm text-gray-500">
                Receive guidance from SIF leaders ensuring structured,
                high-value learning.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-blue-600 text-xl font-bold">02</div>
            <div>
              <h4 className="font-bold mb-2">Portfolio Building</h4>
              <p className="text-sm text-gray-500">
                Apply academic knowledge to real-world projects that enhance
                your CV.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-blue-600 text-xl font-bold">03</div>
            <div>
              <h4 className="font-bold mb-2">Personal Growth</h4>
              <p className="text-sm text-gray-500">
                Develop confidence and leadership while making a meaningful
                difference.
              </p>
            </div>
          </div>
        </div>
      </section>
      <TestimonialsCarousel testimonials={DEFAULT_TESTIMONIALS} />

      <section className="section-gap max-w-6xl mx-auto">
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

const cards = [
  {
    icon: "📅",
    title: "Apply for Internship",
    description: "Join our structured program with real-world projects.",
    buttonText: "Find Events",
    href: "/",
  },
  {
    icon: "📍",
    title: "Volunteer",
    description:
      "Start with shorter-term opportunities to experience our work.",
    buttonText: "Request Visit",
    href: "/contact-us",
  },
  {
    icon: "🎓",
    title: "Alumni Network",
    description: "Connect with former interns for guidance and mentorship.",
    buttonText: "Apply Now",
    href: "/join-us",
  },
  {
    icon: "❤️",
    title: "Future Academy",
    description: "Get certifications and global exchange opportunities.",
    buttonText: "Sponsor",
    href: "/join-us",
  },
];
