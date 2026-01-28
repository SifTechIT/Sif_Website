import { scrollToSection } from "@/lib/scrollToSection";
import { ChevronRight } from "lucide-react";
import WomenStitching from "../../assets/women_stitching.JPG";
import Banner1 from "../../assets/WomenEmpowerment/banner1.jpeg";
import TestimonialsCarousel from "../ui/TestimonialsCarousel";
export default function WomenEmpowermentPage() {
  const DEFAULT_TESTIMONIALS = [
    {
      quote:
        "I stitched 200 school uniforms this year. For the first time, my children saw me as someone who makes things that matter.",
      highlight: "",
      name: "Rajitha",
      role: "Production Unit Member, Siddipet",
      avatarText: "R",
      accent: "text-blue-600",
    },
    {
      quote:
        "I came in as a silent learner. Today, I train others. This place gave me a future I didn't know I could have.",
      highlight: "",
      name: "Sucharitha",
      role: "Team Leader, Apparel Division",
      avatarText: "S",
      accent: "text-emerald-600",
    },
    {
      quote:
        "I paid for my daughter's classes with the money I earned. It felt like I sewed our dreams into every garment.",
      highlight: "",
      name: "Jyoti",
      role: "Home-based Tailor, Siddipet",
      avatarText: "J",
      accent: "text-indigo-600",
    },
  ];
  return (
    <main>
      <section className="hero-gradient relative w-full">
        <div className="relative min-h-[90vh] sm:min-h-[680px] w-full mx-auto   ">
          <div
            className="absolute inset-0 bg-cover bg-center w-full h-full "
            style={{ backgroundImage: `url(${Banner1})` }}
          >
            <div className="absolute inset-0 bg-black/60" />

            <div className="max-w-4xl mx-auto text-center flex  flex-col justify-center items-center h-full  relative z-10 text-white">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
                She Leads, We Rise.
              </h1>
              <p className="text-xl md:text-2xl  font-light mb-10 max-w-2xl mx-auto text-white">
                Rewriting the story of rural women through skill development,
                meditation, and sustainable livelihood programs.
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
      <section className="py-24 px-6 bg-gray-50/50" id="mission">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              The Mission Behind the Movement
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm font-bold text-pink-600 border border-pink-100">
                1
              </div>
              <h4 className="font-bold mb-3">Inner Strength</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Sunya workshops that bring clarity, calm, and self-awareness to
                transform lives from within.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm font-bold text-pink-600 border border-pink-100">
                2
              </div>
              <h4 className="font-bold mb-3">Livelihood Training</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Comprehensive training in tailoring and entrepreneurship to
                create sustainable income.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm font-bold text-pink-600 border border-pink-100">
                3
              </div>
              <h4 className="font-bold mb-3">Holistic Well-being</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Health programs including free medical check-ups and physical
                wellness initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-pink-600 font-bold tracking-tight text-sm uppercase mb-4">
                Production Spotlight
              </h2>
              <h3 className="text-4xl font-bold tracking-tight mb-6">
                Siddipet: Stitching Strength.
              </h3>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                Women once bound by circumstance now lead production units and
                contribute to real-world supply chains with pride.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-gray-700 text-sm">
                  <i className="fas fa-check text-pink-500"></i> Kimono and Zafu
                  cushion production
                </li>
                <li className="flex items-center gap-3 text-gray-700 text-sm">
                  <i className="fas fa-check text-pink-500"></i> Bulk uniform
                  stitching for government projects
                </li>
                <li className="flex items-center gap-3 text-gray-700 text-sm">
                  <i className="fas fa-check text-pink-500"></i> Home-based work
                  opportunities
                </li>
              </ul>
              <div className="flex gap-12 border-t border-gray-100 pt-8">
                <div>
                  <div className="text-3xl font-bold">250+</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">
                    Women Trained
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold">10K+</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">
                    Garments Made
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[3rem] bg-gray-100 h-[500px] flex items-center justify-center text-gray-400 overflow-hidden relative">
              <img
                src={WomenStitching}
                alt="Sewing"
                className="w-full h-full object-cover absolute top-0 left-0"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-zinc-900 text-white rounded-[4rem] mx-4 my-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Collective Impact 2024–25</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold accent-pink mb-2">250+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500">
                Women Trained
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold accent-pink mb-2">10k+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500">
                Garments Produced
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold accent-pink mb-2">100+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500">
                Micro-Enterprises
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold accent-pink mb-2">500+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500">
                Practicing Sunya
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold accent-pink mb-2">100%</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500">
                On-Time Delivery
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold accent-pink mb-2">50+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500">
                Leadership Roles
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimonialsCarousel testimonials={DEFAULT_TESTIMONIALS} />

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold">Be Part of Her Journey.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bento-card p-8 bg-pink-50/50">
            <i className="fas fa-tools text-pink-600 mb-6"></i>
            <h4 className="font-bold mb-2">Sponsor a Machine</h4>
            <p className="text-xs text-gray-500 mb-6">
              Provide the tools for sustainable livelihood.
            </p>
            <button className="text-[10px] font-bold uppercase tracking-widest text-pink-600 flex items-center">
              Get Involved <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="bento-card p-8">
            <i className="fas fa-graduation-cap text-pink-600 mb-6"></i>
            <h4 className="font-bold mb-2">Fund Training</h4>
            <p className="text-xs text-gray-500 mb-6">
              Invest in skill development and empowerment.
            </p>
            <button className="text-[10px] font-bold uppercase tracking-widest text-pink-600 flex items-center">
              Support <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="bento-card p-8">
            <i className="fas fa-shopping-bag text-pink-600 mb-6"></i>
            <h4 className="font-bold mb-2">Order Apparel</h4>
            <p className="text-xs text-gray-500 mb-6">
              Support production through direct orders.
            </p>
            <button className="text-[10px] font-bold uppercase tracking-widest text-pink-600 flex items-center">
              Shop Now <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="bento-card p-8 bg-zinc-900 border-none">
            <i className="fas fa-handshake text-pink-400 mb-6"></i>
            <h4 className="font-bold mb-2">Partner with SIF</h4>
            <p className="text-xs text-zinc-500 mb-6">
              Collaborate on rural empowerment projects.
            </p>
            <button className="text-[10px] font-bold uppercase tracking-widest text-pink-600 flex items-center">
              Contact Us <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
