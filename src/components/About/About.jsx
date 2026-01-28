import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import DrLim from "../../assets/About/lim.jpeg";
import DrSavera from "../../assets/About/rajesh.jpeg";
import story from "../../assets/About/story.jpeg";
import SunyaMeditation from "../../assets/About/sunya_meditation.jpg";
import wisdom from "../../assets/About/wisdom.jpeg";
import time1 from "../../assets/Timeline/2019.jpeg";
import time2 from "../../assets/Timeline/2020.jpeg";
import time3 from "../../assets/Timeline/2021.jpeg";
import time4 from "../../assets/Timeline/2022.jpeg";
import time5 from "../../assets/Timeline/2023.jpeg";
import time6 from "../../assets/Timeline/2024.jpeg";

export default function AboutUsPage() {
  return (
    <div className="">
      <section className="hero-gradient   relative w-full  ">
        <div className="relative min-h-[90vh] sm:min-h-[680px] w-full mx-auto   ">
          <div
            className="absolute inset-0 bg-cover bg-center w-full h-full "
            style={{ backgroundImage: `url(${SunyaMeditation})` }}
          >
            <div className="absolute inset-0 bg-black/60" />

            <div className="max-w-6xl mx-auto text-center flex  flex-col justify-center items-center h-full  relative z-10 text-white">
              <h1 className="heading mb-6 text-white">
                Creating Peace.
                <br />
                Empowering Lives.
              </h1>
              <p className="hero-desc mb-10 max-w-2xl mx-auto text-white  ">
                Sunyatee International Foundation has been transforming lives
                through mindfulness and community service since 2019.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  to="/impact-stories"
                  className="bg-black text-white px-8 py-3 rounded-full font-semibold  transition w-full sm:w-auto"
                >
                  Our Impact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-32 pb-16 px-6 text-center">
        <h1 className="heading mb-6">Our Journey.</h1>
        <p className="text-gray-500 hero-desc mx-auto font-light">
          From a single vision in 2019 to a global movement for mindfulness and
          empowerment.
        </p>
      </section>
      <TimelineAutoScrollSection />

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="img-placeholder h-[500px]">
            <img
              src={story}
              alt="Timeline 2019"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="subheading mb-6">Our Story</h2>
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
            <h2 className="subheading">Our Leadership.</h2>
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
          <div className="">
            <img
              src={wisdom}
              alt="Guided by Wisdom"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="space-y-8">
            <h2 className="subheading">
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
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
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
            <div className="subheading">45,000+</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-2">
              Certificates
            </div>
          </div>
          <div>
            <div className="subheading">300+</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-2">
              Volunteers
            </div>
          </div>
          <div>
            <div className="subheading">40+</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-2">
              Countries
            </div>
          </div>
          <div>
            <div className="subheading">5,000+</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-2">
              ODOC Kids
            </div>
          </div>
          <div>
            <div className="subheading">4 Lakh</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-2">
              Relief Kits
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useEffect, useMemo, useRef } from "react";
function TimelineAutoScrollSection() {
  const scrollerRef = useRef(null);
  const intervalRef = useRef(null);

  const items = useMemo(
    () => [
      {
        tag: "Founding",
        year: "2019",
        text: "Sunyatee International Foundation is established to bridge the gap between inner peace and community resilience.",
        img: time1,
      },
      {
        tag: "Mindfulness",
        year: "2020",
        text: "First Sunya Mega Retreat launched. Global belt certification programs reach practitioners across 40 countries.",
        img: time2,
      },
      {
        tag: "Relief",
        year: "2021",
        text: "COVID Relief operations: Distribution of 400 concentrators and 4 lakh masks to frontline rural communities.",
        img: time3,
      },
      {
        tag: "Livelihoods",
        year: "2022",
        text: "The Noni Farmer Project launches in Siddipet, transforming agricultural uncertainty into guaranteed income.",
        img: time4,
      },
      {
        tag: "Inclusion",
        year: "2023",
        text: "Ausum Kids therapy program begins, focusing on inclusion and support for children with special needs.",
        img: time5,
      },
      {
        tag: "Growth",
        year: "2024",
        text: "ODOC program scales to support 5,000+ children, providing essential Spirulina-based nutrition globally.",
        img: time6,
      },
    ],
    [],
  );

  const scrollByCard = (direction = 1) => {
    const el = scrollerRef.current;
    if (!el) return;

    // match your responsive card widths: 280 / 360 / 440
    const w =
      typeof window !== "undefined"
        ? window.innerWidth < 640
          ? 280
          : window.innerWidth < 768
            ? 360
            : 440
        : 440;

    const gap = 32; // gap-8 = 2rem = 32px
    const step = w + gap;

    el.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  const startAutoScroll = () => {
    stopAutoScroll();
    intervalRef.current = window.setInterval(() => {
      const el = scrollerRef.current;
      if (!el) return;

      // same step logic as buttons
      const w =
        window.innerWidth < 640 ? 280 : window.innerWidth < 768 ? 360 : 440;
      const gap = 32;
      const step = w + gap;

      const maxLeft = el.scrollWidth - el.clientWidth;
      const nextLeft = el.scrollLeft + step;

      // loop back to start when reaching end
      if (nextLeft >= maxLeft - 2) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 2500);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    // start autoplay
    if (typeof window !== "undefined") startAutoScroll();

    // cleanup
    return () => stopAutoScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="relative py-20 bg-[#fbfbfd] overflow-hidden">
      <div className="line-connector hidden md:block"></div>

      <div
        ref={scrollerRef}
        className="relative z-10 overflow-x-auto hide-scroll snap-x snap-mandatory px-6 sm:px-12 md:px-[20vw] py-2"
        style={{ WebkitOverflowScrolling: "touch" }}
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
        onTouchStart={stopAutoScroll}
        onTouchEnd={() => {
          // small delay so swipe finishes smoothly
          window.setTimeout(startAutoScroll, 1200);
        }}
      >
        <div className="flex flex-nowrap w-max gap-8">
          {items.map((item) => (
            <div
              key={item.year}
              className="snap-center shrink-0 w-[280px] sm:w-[360px] md:w-[440px]"
            >
              <div className="bg-white  rounded-[32px] border-gray-100 shadow-sm hover:shadow-md transition overflow-hidden h-full flex flex-col">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-52 object-cover "
                />
                <div className=" p-8">
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                    {item.tag}
                  </span>
                  <h3 className="text-4xl font-bold mb-4">{item.year}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center text-gray-400 text-[10px] uppercase tracking-widest font-bold flex items-center justify-center gap-3">
        {/* same UI text, just making icons clickable */}
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => scrollByCard(-1)}
          className="inline-flex items-center justify-center"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <span>Swipe to explore</span>

        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => scrollByCard(1)}
          className="inline-flex items-center justify-center"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
