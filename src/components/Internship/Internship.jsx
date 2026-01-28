import { scrollToSection } from "@/lib/scrollToSection";
import { ChevronRight } from "lucide-react";
import Banner1 from "../../assets/Internship/Banner1.jpg";
import Banner2 from "../../assets/Internship/Banner2.jpg";
import Banner3 from "../../assets/Internship/Banner3.jpg";
import bento2 from "../../assets/Internship/skill.jpg";
import TestimonialsCarousel from "../ui/TestimonialsCarousel";
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
              <div className="inline-block px-4 py-1.5 mb-6 bg-blue-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-blue-700 border border-blue-200">
                🎓 Learning with Impact, Growing with Purpose
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
                Internship Programs.
              </h1>
              <p className="text-xl md:text-2xl  font-light mb-10 max-w-2xl mx-auto text-white">
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
        <div className="max-w-6xl mx-auto bg-zinc-900 text-white py-24 px-6 rounded-[2rem]">
          <div className="text-center mb-16">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-4">
              Program Impact & Growth
            </h2>
            <h3 className="text-3xl font-bold">
              Empowering the Next Generation
            </h3>
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

      <section className="py-24 px-6 max-w-6xl mx-auto" id="sif">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="rounded-[3rem] bg-blue-50 aspect-square flex items-center justify-center text-blue-200 overflow-hidden relative border border-blue-100 shadow-inner">
            <img src={Banner1} className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-blue-600 font-bold tracking-tight text-sm uppercase mb-4">
              Why SIF?
            </h2>
            <h3 className="text-4xl font-bold tracking-tight mb-6 text-gradient">
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

      <section className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gradient">
              Program Areas
            </h2>
            <p className="text-gray-500 mt-2">
              Diverse opportunities across all SIF domains.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div
              className="bento-card col-span-1 md:col-span-2 p-10 bg-zinc-900 text-white border-none"
              style={{
                backgroundImage: `url(${Banner2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="text-3xl mb-6">💻</div>
              <h4 className="text-xl font-bold mb-3">IT & Design</h4>
              <p className=" text-sm leading-relaxed">
                Website development, social media design, dashboard building,
                and creative campaigns.
              </p>
            </div>
            <div className="bento-card p-10">
              <div className="text-3xl mb-6">🎓</div>
              <h4 className="text-lg font-bold mb-2">Education</h4>
              <p className="text-gray-500 text-xs">
                Assist in Child Education Centres and develop learning modules.
              </p>
            </div>
            <div className="bento-card p-10">
              <div className="text-3xl mb-6">📊</div>
              <h4 className="text-lg font-bold mb-2">Research</h4>
              <p className="text-gray-500 text-xs">
                Collect field data and prepare global impact reports.
              </p>
            </div>
            <div className="bento-card p-10">
              <div className="text-3xl mb-6">🤝</div>
              <h4 className="text-lg font-bold mb-2">Outreach</h4>
              <p className="text-gray-500 text-xs">
                Support awareness programs in health and rural engagement.
              </p>
            </div>
            <div className="bento-card p-10">
              <div className="text-3xl mb-6">🏛️</div>
              <h4 className="text-lg font-bold mb-2">Heritage</h4>
              <p className="text-gray-500 text-xs">
                Contribute to Palm Leaf Sutra Printing through research.
              </p>
            </div>
            <div
              className="bento-card col-span-1 md:col-span-2 p-10 bg-blue-600 text-white border-none flex flex-col justify-between"
              style={{
                backgroundImage: `url(${bento2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div>
                <div className="text-3xl mb-6">🌐</div>
                <h4 className="text-xl font-bold mb-3">Future Opportunities</h4>
                <p className="text-blue-100 text-sm">
                  Expanding into AI, digital storytelling, sustainability
                  projects, and international exchange.
                </p>
              </div>
              <div className="mt-8 text-[10px] uppercase tracking-widest font-bold">
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center">
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

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gradient">
            Start Your Journey.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bento-card p-10 bg-blue-50/50 border-blue-100">
            <i className="fas fa-file-signature text-blue-600 mb-6"></i>
            <h4 className="font-bold mb-2">Apply for Internship</h4>
            <p className="text-xs text-gray-500 mb-6">
              Join our structured program with real-world projects.
            </p>
            <button className="text-[10px] font-bold uppercase tracking-widest text-blue-600 flex items-center">
              Apply Now <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="bento-card p-10">
            <i className="fas fa-users text-blue-600 mb-6"></i>
            <h4 className="font-bold mb-2">Volunteer</h4>
            <p className="text-xs text-gray-500 mb-6">
              Start with shorter-term opportunities to experience our work.
            </p>
            <button className="text-[10px] font-bold uppercase tracking-widest text-blue-600 flex items-center">
              Get Involved <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="bento-card p-10">
            <i className="fas fa-network-wired text-blue-600 mb-6"></i>
            <h4 className="font-bold mb-2">Alumni Network</h4>
            <p className="text-xs text-gray-500 mb-6">
              Connect with former interns for guidance and mentorship.
            </p>
            <button className="text-[10px] font-bold uppercase tracking-widest text-blue-600 flex items-center">
              Connect <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="bento-card p-10 bg-zinc-900  border-none">
            <i className="fas fa-award text-blue-400 mb-6"></i>
            <h4 className="font-bold mb-2">Future Academy</h4>
            <p className="text-xs text-zinc-500 mb-6">
              Get certifications and global exchange opportunities.
            </p>
            <button className="text-[10px] font-bold uppercase tracking-widest text-blue-600 flex items-center">
              Learn More <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
