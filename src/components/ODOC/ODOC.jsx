import activitiesColors from "@/lib/activies";
import { scrollToSection } from "@/lib/scrollToSection";
import DrLim from "../../assets/About/lim.jpeg";
import DrSavera from "../../assets/About/rajesh.jpeg";
import Banner1 from "../../assets/ODOC/Banner1.jpeg";
import { BentoCard } from "../ui/bento-card";
import { Card } from "../ui/card";
export default function ODOCPage() {
  const textColor = activitiesColors.oDOCOneDollarOneChild.text;
  const bgColor = activitiesColors.oDOCOneDollarOneChild.bg;
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
              <div
                className={
                  "inline-block px-4 py-1.5 mb-6  rounded-full text-[10px] font-bold uppercase tracking-widest    " +
                  bgColor
                }
              >
                Global Nutrition Initiative by DXN & SIF
              </div>
              <h1 className="heading mb-6 text-white">
                Child Education Centres.
              </h1>
              <p className="hero-desc mb-10 max-w-2xl mx-auto text-white">
                Creating environments where children learn, play, and grow
                holistically through early learning, mindfulness, and behavioral
                development.
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
              Live Impact Dashboard
            </h2>
            <h3 className="text-3xl font-bold">
              Real Transformation. 100% Transparency.
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">50k+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Children
                <br />
                Helped
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">120k+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Spirulina Bottles
                <br />
                Distributed
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">85+</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Partner
                <br />
                Organizations
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold accent-purple mb-2">100%</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                Transparency
                <br />
                In Reporting
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap" id="mission">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 bg-green-50 rounded-[3rem] border border-green-100">
              <span className="text-2xl mb-4 block">🎯</span>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To create a world where no child suffers from malnutrition. By
                providing scientifically proven Spirulina supplementation, we
                deliver essential nutrients that fuel growth and unlock every
                child's potential.
              </p>
            </div>
            <div className="p-12 bg-zinc-50 rounded-[3rem] border border-gray-100">
              <span className="text-2xl mb-4 block">🌟</span>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A future where every child has access to proper nutrition and
                the dignity of good health — regardless of background or
                circumstance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gradient">
              Why ODOC?
            </h2>
            <p className="text-gray-500 mt-4">
              A revolutionary approach to global child nutrition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bento-card p-10">
              <div className="text-3xl mb-6">⚡</div>
              <h4 className="text-xl font-bold mb-4">Nutritional Excellence</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Spirulina provides complete protein, essential amino acids, and
                minerals in highly bioavailable forms.
              </p>
            </div>
            <div className="bento-card p-10  ">
              <div className="text-3xl mb-6">📊</div>
              <h4 className="text-xl font-bold mb-4">Data-Driven Impact</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Comprehensive BMI tracking and health monitoring ensure
                measurable outcomes and transparent progress.
              </p>
            </div>
            <div className="bento-card p-10">
              <div className="text-3xl mb-6">👨‍👩‍👧‍👦</div>
              <h4 className="text-xl font-bold mb-4">Community Education</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Empowering families with nutrition knowledge to create lasting
                change far beyond program duration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center">
          A Systematic Approach.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="text-center">
            <div className="step-number mb-4">STEP 01</div>
            <h4 className="font-bold mb-2">Identification</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Children identified through schools and community partners.
            </p>
          </div>
          <div className="text-center">
            <div className="step-number mb-4">STEP 02</div>
            <h4 className="font-bold mb-2">Baseline Evaluation</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Initial BMI and health assessments recorded.
            </p>
          </div>
          <div className="text-center">
            <div className="step-number mb-4">STEP 03</div>
            <h4 className="font-bold mb-2">Daily Supplement</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              3 grams of DXN Spirulina administered daily.
            </p>
          </div>
          <div className="text-center">
            <div className="step-number mb-4">STEP 04</div>
            <h4 className="font-bold mb-2">Monitoring</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Weekly checks to ensure safety and effectiveness.
            </p>
          </div>
          <div className="text-center">
            <div className="step-number mb-4">STEP 05</div>
            <h4 className="font-bold mb-2">Assessment</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Comprehensive re-evaluation after 45 days.
            </p>
          </div>
        </div>
      </section>

      <section className="section-gap bg-green-50/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">
            Nature's Most Complete Superfood.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-6">💪</div>
              <h4 className="font-bold mb-2">Growth</h4>
              <p className="text-xs text-gray-500">
                Complete protein for muscle and healthy growth.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-6">🧠</div>
              <h4 className="font-bold mb-2">Cognitive</h4>
              <p className="text-xs text-gray-500">
                Iron-rich content prevents anemia and supports brain health.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-6">🛡️</div>
              <h4 className="font-bold mb-2">Immunity</h4>
              <p className="text-xs text-gray-500">
                Antioxidants that protect against seasonal infections.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-6">⚡</div>
              <h4 className="font-bold mb-2">Energy</h4>
              <p className="text-xs text-gray-500">
                Natural support for active and healthy childhoods.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-gap max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center text-gray-300">
              <img
                src={DrLim}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold">Datuk Lim Siow Jin</h3>
              <p className="text-green-600 text-xs font-bold uppercase tracking-widest mb-4">
                Guiding Principal
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Leading the global mission to eliminate childhood malnutrition
                through innovative supplementation.
              </p>
            </div>
          </Card>
          <Card className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center text-gray-300">
              <img
                src={DrSavera}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold">Dr. Rajesh Savera</h3>
              <p className="text-green-600 text-xs font-bold uppercase tracking-widest mb-4">
                Founder & Director
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Pioneering evidence-based nutrition interventions and ensuring
                sustainable improvements worldwide.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="section-gap max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2
            className={`text-[10px] uppercase tracking-[0.3em]  font-bold mb-4 ${textColor}`}
          >
            Start Your Journey
          </h2>
          <h3 className="subheading text-gradient">
            {" "}
            Help Us Reach 1 Million Children.
          </h3>
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
    title: "Partner With Us",
    description: "Join as an organizational partner for schools and centers.",
    buttonText: "  Partner Now",
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
    title: "Volunteer",
    description: "Support field operations, monitoring, or outreach.",
    buttonText: "Apply Now",
    href: "/join-us",
  },
  {
    icon: "❤️",
    title: "Sponsor a Child",
    description: "Fund a child's nutrition for just One Dollar.",
    buttonText: "Donate $1 Now",
    href: "/join-us",
  },
];
