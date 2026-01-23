import DrLim from "../../assets/About/DrLim2.png";
import DrSavera from "../../assets/About/DrSavera1.png";
import SunyaMeditation from "../../assets/About/sunya_meditation.jpg";

export default function AboutUsPage() {
  return (
    <div className="bg-gradient-to-b from-white via-neutral-50 to-white dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-950 dark:text-white">
      <section className="hero-gradient   relative w-full  ">
        <div className="relative min-h-[90vh] sm:min-h-[660px] w-full mx-auto   ">
          <div
            className="absolute inset-0 bg-cover bg-center w-full h-full "
            style={{ backgroundImage: `url(${SunyaMeditation})` }}
          >
            <div className="absolute inset-0 bg-black/60" />

            <div className="max-w-4xl mx-auto text-center flex  flex-col justify-center items-center h-full  relative z-10 text-white">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
                Creating Peace.
                <br />
                Empowering Lives.
              </h1>
              <p className="text-xl md:text-2xl  font-light mb-10 max-w-2xl mx-auto text-white  ">
                Sunyatee International Foundation has been transforming lives
                through mindfulness and community service since 2019.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium">
                  Our Impact
                </button>
                <button className="border border-gray-300 px-8 py-3 rounded-full text-sm font-medium hover:bg-white transition">
                  Get Involved
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-32 pb-16 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Our Journey.
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
          From a single vision in 2019 to a global movement for mindfulness and
          empowerment.
        </p>
      </section>

      <section className="relative py-20 bg-[#fbfbfd] overflow-hidden">
        <div className="line-connector hidden md:block"></div>

        <div className="flex overflow-x-auto hide-scroll snap-x snap-mandatory px-12 md:px-[20vw] space-x-8 relative z-10">
          <div className="timeline-card snap-center">
            <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                Founding
              </span>
              <h3 className="text-4xl font-bold mb-4">2019</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Sunyatee International Foundation is established to bridge the
                gap between inner peace and community resilience.
              </p>
            </div>
          </div>

          <div className="timeline-card snap-center">
            <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                Mindfulness
              </span>
              <h3 className="text-4xl font-bold mb-4">2020</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                First Sunya Mega Retreat launched. Global belt certification
                programs reach practitioners across 40 countries.
              </p>
            </div>
          </div>

          <div className="timeline-card snap-center">
            <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                Relief
              </span>
              <h3 className="text-4xl font-bold mb-4">2021</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                COVID Relief operations: Distribution of 400 concentrators and 4
                lakh masks to frontline rural communities.
              </p>
            </div>
          </div>

          <div className="timeline-card snap-center">
            <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                Livelihoods
              </span>
              <h3 className="text-4xl font-bold mb-4">2022</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                The Noni Farmer Project launches in Siddipet, transforming
                agricultural uncertainty into guaranteed income.
              </p>
            </div>
          </div>

          <div className="timeline-card snap-center">
            <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                Inclusion
              </span>
              <h3 className="text-4xl font-bold mb-4">2023</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Ausum Kids therapy program begins, focusing on inclusion and
                support for children with special needs.
              </p>
            </div>
          </div>

          <div className="timeline-card snap-center">
            <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                Growth
              </span>
              <h3 className="text-4xl font-bold mb-4">2024</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                ODOC program scales to support 5,000+ children, providing
                essential Spirulina-based nutrition globally.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-400 text-[10px] uppercase tracking-widest font-bold">
          <i className="fas fa-chevron-left mr-2"></i> Swipe to explore{" "}
          <i className="fas fa-chevron-right ml-2"></i>
        </div>
      </section>
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="img-placeholder h-[500px]">
            <span className="text-gray-400 text-sm font-medium">
              SIF FOUNDATION IMAGE [1200 x 1500]
            </span>
            {/* <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md p-6 rounded-2xl text-white">
              <p className="text-sm font-light">
                "Rooted in the practice of Sunya — the wisdom of nothingness."
              </p>
            </div> */}
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded in 2019, Sunyatee International Foundation (SIF) is
              inspired by the vision of <strong>Datuk Lim Siow Jin</strong> and{" "}
              <strong>Dr. Rajesh Savera</strong>. We are a beacon of
              transformation working with farmers, women, and children across
              the globe.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div>
                <h4 className="text-blue-600 font-bold text-sm uppercase mb-2">
                  Vision
                </h4>
                <p className="text-sm text-gray-500">
                  A world where peace and prosperity are lived realities rooted
                  in compassion.
                </p>
              </div>
              <div>
                <h4 className="text-blue-600 font-bold text-sm uppercase mb-2">
                  Mission
                </h4>
                <p className="text-sm text-gray-500">
                  Spreading Sunya meditation and sustainable programs for
                  holistic well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight">
              Our Leadership.
            </h2>
            <p className="text-gray-500 mt-4">
              The visionaries guiding our global initiatives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-[32px] border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center text-gray-300">
                <img
                  src={DrLim}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Datuk Lim Siow Jin</h3>
                <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
                  Guiding Principal
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Founder of DXN. His vision inspired SIF to promote mindfulness
                  as a tool for global peace and inclusive prosperity.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-[32px] border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center text-gray-300">
                <img
                  src={DrSavera}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Dr. Rajesh Savera</h3>
                <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
                  Founder & Director
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Mindfulness coach and author. He leads SIF's
                  boots-on-the-ground initiatives in farmer empowerment and
                  cultural revival.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-[40px] bg-gray-100 h-[600px] flex items-center justify-center text-gray-400 italic overflow-hidden">
            <div className="text-center p-12">
              <p className="mb-4">IMAGE: LEADERSHIP IN THE FIELD [1200x1500]</p>
              <p className="text-xs uppercase tracking-widest">
                SIF Field Operations, 2024
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-bold leading-tight">
              Guided by Wisdom.
              <br />
              Driven by Impact.
            </h2>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
              SIF is inspired by the vision of Datuk Lim Siow Jin and Dr. Rajesh
              Savera. Rooted in the practice of Sunya — the wisdom of
              nothingness — we are dedicated to uplifting lives through
              meditation, empowerment, and cultural preservation.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-blue-50 rounded-3xl">
                <h4 className="font-bold text-blue-700">Vision</h4>
                <p className="text-sm text-blue-600/70">
                  A world where peace and prosperity are lived realities.
                </p>
              </div>
              <div className="p-6 bg-zinc-900 rounded-3xl text-white">
                <h4 className="font-bold">Mission</h4>
                <p className="text-sm text-zinc-400">
                  Sustainable programs that nurture holistic well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold tracking-tighter">45,000+</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-2">
              Certificates
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold tracking-tighter">300+</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-2">
              Volunteers
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold tracking-tighter">40+</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-2">
              Countries
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold tracking-tighter">5,000+</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-2">
              ODOC Kids
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold tracking-tighter">4 Lakh</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-2">
              Relief Kits
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
