import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ODOC1 from "../../assets/Home/ODOC1.jpeg";
import ODOC2 from "../../assets/Home/ODOC2.jpeg";
import ODOC3 from "../../assets/Home/ODOC3.jpeg";
import ODOC4 from "../../assets/Home/ODOC4.jpeg";
const slides = [
  {
    title: "One Dollar One Child (ODOC)",
    description:
      "Spirulina nutrition for vulnerable children at just $1 per child. Launched at the Sunya Mega Retreat, ODOC is a growing movement supported by global Sunyatees and partners to fight malnutrition with dignity.",
    bg: "bg-[#FFF8EB]",
    image: ODOC1,
  },
  {
    title: "Fighting Malnutrition with Dignity",
    description:
      "Every dollar helps provide Spirulina to children in need, giving them a chance to grow healthy, study better, and live with dignity.",
    bg: "bg-[#E8F9F3]",
    image: ODOC2,
  },
  {
    title: "Global Support, Local Impact",
    description:
      "Backed by Sunyatees and international partners, ODOC is not just charity—it’s a sustainable movement for nutrition and empowerment.",
    bg: "bg-[#F9F0FF]",
    image: ODOC3,
  },
  {
    title: "Join the Movement",
    description:
      "With your support, we can reach more children and communities across the world. Together, we fight malnutrition one child at a time.",
    bg: "bg-[#FFF4F0]",
    image: ODOC4,
  },
  {
    title: "Healthy Kids, Bright Futures",
    description:
      "Proper nutrition transforms lives—empowering children to dream bigger, learn better, and grow stronger.",
    bg: "bg-[#E6F7FF]",
    image: ODOC1,
  },
  {
    title: "Community Driven Change",
    description:
      "Local volunteers and global partners together create a network of care and compassion that sustains ODOC.",
    bg: "bg-[#FFF7E6]",
    image: ODOC1,
  },
  {
    title: "From Awareness to Action",
    description:
      "Workshops, awareness programs, and campaigns ensure that families understand the importance of nutrition.",
    bg: "bg-[#F0FFF4]",
    image: ODOC1,
  },
  {
    title: "Together We Can",
    description:
      "Your support fuels a global mission—ending child malnutrition with dignity, one step at a time.",
    bg: "bg-[#FDF0F5]",
    image: ODOC1,
  },
];

export default function OdocSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`mt-30 flex flex-col md:flex-row items-center justify-between  px-8 py-20 transition-all duration-700 ease-in-out ${slides[current].bg}`}
    >
      {/* Left content */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-bold">{slides[current].title}</h2>
        <p className="text-gray-700">{slides[current].description}</p>
        <div className="flex space-x-4">
          <Link
            to={"/onedollar-onechild"}
            className="bg-black text-white px-4 py-2 rounded-full hover:opacity-90 text-nowrap"
          >
            Sponsor a Child
          </Link>
          <Link
            to={"/impact-stories"}
            className="bg-white border px-4 py-2 rounded-full hover:bg-gray-100 text-nowrap"
          >
            See Impact
          </Link>
        </div>
      </div>

      {/* Right content - Image */}
      <div className="md:w-1/2 relative mt-6 md:mt-0">
        <div className="overflow-hidden rounded-xl">
          <img
            src={slides[current].image}
            alt="ODOC impact"
            className="w-full h-95 object-cover transition-all duration-700 ease-in-out"
          />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-white p-2 rounded-full shadow"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-white p-2 rounded-full shadow"
        >
          <ChevronRight />
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-3 space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                current === i ? "bg-black scale-110" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
