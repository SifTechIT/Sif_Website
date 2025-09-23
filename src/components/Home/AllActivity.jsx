// // import { ChevronLeft, ChevronRight } from "lucide-react";
// // import { useState } from "react";

// // import ODOC1 from "../../assets/Home/ODOC1.jpeg";
// // import ODOC2 from "../../assets/Home/ODOC2.jpeg";
// // import ODOC3 from "../../assets/Home/ODOC3.jpeg";
// // import ODOC4 from "../../assets/Home/ODOC4.jpeg";
// // const activities = [
// //   {
// //     id: "women",
// //     title: "Women Empowerment",
// //     desc: "Empowering women through skill development, leadership training, and social awareness programs.",
// //     cta1: { label: "Join Us", href: "#cta" },
// //     cta2: { label: "Learn More", href: "#activities" },
// //     images: [ODOC1, ODOC2, ODOC3, ODOC4], // replace
// //   },
// //   {
// //     id: "sunya",
// //     title: "Sunya Meditation",
// //     desc: "Spreading peace and awareness through transformative meditation practices.",
// //     cta1: { label: "Start Meditating", href: "#cta" },
// //     cta2: { label: "View Programs", href: "#activities" },
// //     images: [ODOC2, ODOC3, ODOC4, ODOC1],
// //   },
// //   {
// //     id: "corporate-youth",
// //     title: "Corporate & Youth",
// //     desc: "Engaging youth and professionals with mindfulness programs to build resilience, focus, and leadership.",
// //     cta1: { label: "Get Involved", href: "#cta" },
// //     cta2: { label: "Discover More", href: "#activities" },
// //     images: [ODOC3, ODOC4, ODOC1, ODOC2],
// //   },
// //   {
// //     id: "farmer",
// //     title: "Farmer Empowerment",
// //     desc: "Supporting farmers with sustainable agricultural practices, training, and fair market opportunities.",
// //     cta1: { label: "Support Farmers", href: "#cta" },
// //     cta2: { label: "View Impact", href: "#activities" },
// //     images: [ODOC4, ODOC1, ODOC2, ODOC3],
// //   },
// //   {
// //     id: "health",
// //     title: "Rural Health & Wellness",
// //     desc: "Improving healthcare accessibility and awareness in rural communities through wellness initiatives.",
// //     cta1: { label: "Contribute", href: "#cta" },
// //     cta2: { label: "See Programs", href: "#activities" },
// //     images: [ODOC1, ODOC2, ODOC3, ODOC4],
// //   },
// //   {
// //     id: "ausumn-kids",
// //     title: "Ausumn Kids",
// //     desc: "Special initiatives for children with autism to enhance learning, creativity, and social interaction.",
// //     cta1: { label: "Support a Child", href: "#cta" },
// //     cta2: { label: "Learn More", href: "#activities" },
// //     images: [ODOC2, ODOC3, ODOC4, ODOC1],
// //   },
// //   {
// //     id: "odoc",
// //     title: "One Dollar One Child (ODOC)",
// //     desc: "Spirulina nutrition for vulnerable children at just $1 per child. Launched at the Sunya Mega Retreat, ODOC is a growing movement supported by global Sunyatees and partners to fight malnutrition with dignity.",
// //     cta1: { label: "Sponsor a Child", href: "#cta" },
// //     cta2: { label: "See Impact", href: "#activities" },
// //     images: [ODOC1, ODOC2, ODOC3, ODOC4],
// //   },
// //   {
// //     id: "agamas",
// //     title: "Agamas & Translation",
// //     desc: "Preserving and translating ancient spiritual texts to make timeless wisdom accessible globally.",
// //     cta1: { label: "Support Research", href: "#cta" },
// //     cta2: { label: "Read Translations", href: "#activities" },
// //     images: [ODOC3, ODOC4, ODOC1, ODOC2],
// //   },
// //   {
// //     id: "brick-house",
// //     title: "Brick House",
// //     desc: "Building eco-friendly homes and sustainable shelters for underprivileged families.",
// //     cta1: { label: "Donate a Brick", href: "#cta" },
// //     cta2: { label: "See Projects", href: "#activities" },
// //     images: [ODOC4, ODOC1, ODOC2, ODOC3],
// //   },
// //   {
// //     id: "palm-leaf",
// //     title: "Palm Leaf Sutra",
// //     desc: "Preserving and digitizing ancient palm leaf manuscripts containing profound wisdom and history.",
// //     cta1: { label: "Preserve Heritage", href: "#cta" },
// //     cta2: { label: "View Archives", href: "#activities" },
// //     images: [ODOC1, ODOC2, ODOC3, ODOC4],
// //   },
// //   {
// //     id: "csr",
// //     title: "CSR Partnership",
// //     desc: "Collaborating with corporations to drive impactful community and social responsibility initiatives.",
// //     cta1: { label: "Partner With Us", href: "#cta" },
// //     cta2: { label: "See CSR Projects", href: "#activities" },
// //     images: [ODOC2, ODOC3, ODOC4, ODOC1],
// //   },
// //   {
// //     id: "internship",
// //     title: "Internship",
// //     desc: "Offering students and youth opportunities to learn, grow, and contribute to meaningful social projects.",
// //     cta1: { label: "Apply Now", href: "#cta" },
// //     cta2: { label: "Explore Roles", href: "#activities" },
// //     images: [ODOC3, ODOC4, ODOC1, ODOC2],
// //   },
// //   {
// //     id: "education",
// //     title: "Education",
// //     desc: "Providing access to quality education and resources for children and communities in need.",
// //     cta1: { label: "Support Education", href: "#cta" },
// //     cta2: { label: "See Initiatives", href: "#activities" },
// //     images: [ODOC4, ODOC1, ODOC2, ODOC3],
// //   },
// // ];

// // export default function AllActivities() {
// //   const [index, setIndex] = useState(0);

// //   const prev = () => setIndex((i) => (i === 0 ? activities.length - 1 : i - 1));
// //   const next = () => setIndex((i) => (i === activities.length - 1 ? 0 : i + 1));

// //   const current = activities[index];

// //   return (
// //     <section
// //       id={current.id}
// //       className="mt-16 rounded-3xl bg-gradient-to-br from-yellow-50 to-rose-50 p-8 shadow-inner dark:from-neutral-900 dark:to-neutral-900/60"
// //     >
// //       <div className="grid items-center gap-8 md:grid-cols-2">
// //         <div>
// //           <h3 className="text-3xl font-semibold tracking-tight">
// //             {current.title}
// //           </h3>
// //           <p className="mt-3 text-neutral-700 dark:text-neutral-300">
// //             {current.desc}
// //           </p>
// //           <div className="mt-6 flex flex-wrap gap-3">
// //             <a
// //               href={current.cta1.href}
// //               className="rounded-full bg-neutral-900 px-5 py-2.5 text-white hover:bg-neutral-800"
// //             >
// //               {current.cta1.label}
// //             </a>
// //             <a
// //               href={current.cta2.href}
// //               className="rounded-full bg-white px-5 py-2.5 text-neutral-900 shadow hover:bg-neutral-50 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
// //             >
// //               {current.cta2.label}
// //             </a>
// //           </div>
// //         </div>

// //         {/* Images Grid */}
// //         <div className="grid grid-cols-2 gap-3">
// //           {current.images.map((img, n) => (
// //             <div key={n} className="aspect-square overflow-hidden rounded-xl">
// //               <img
// //                 alt={current.title}
// //                 className="h-full w-full object-cover"
// //                 src={img}
// //               />
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Next / Prev Controls */}
// //       <div className="mt-8 flex justify-center gap-3">
// //         <button
// //           onClick={prev}
// //           className="flex items-center gap-2 rounded-full bg-neutral-800 px-4 py-2 text-white hover:bg-neutral-700 cursor-pointer"
// //         >
// //           <ChevronLeft size={18} /> Prev
// //         </button>
// //         <button
// //           onClick={next}
// //           className="flex items-center gap-2 rounded-full bg-neutral-800 px-4 py-2 text-white hover:bg-neutral-700 cursor-pointer"
// //         >
// //           Next <ChevronRight size={18} />
// //         </button>
// //       </div>
// //     </section>
// //   );
// // }

// import { useEffect, useState } from "react";

// import ODOC1 from "../../assets/Home/ODOC1.jpeg";
// import ODOC2 from "../../assets/Home/ODOC2.jpeg";
// import ODOC3 from "../../assets/Home/ODOC3.jpeg";
// import ODOC4 from "../../assets/Home/ODOC4.jpeg";

// const activities = [
//   {
//     id: "women",
//     title: "Women Empowerment",
//     desc: "Empowering women through skill development, leadership training, and social awareness programs.",
//     cta1: { label: "Join Us", href: "#cta" },
//     cta2: { label: "Learn More", href: "#activities" },
//     images: [ODOC1, ODOC2, ODOC3, ODOC4], // replace
//   },
//   {
//     id: "sunya",
//     title: "Sunya Meditation",
//     desc: "Spreading peace and awareness through transformative meditation practices.",
//     cta1: { label: "Start Meditating", href: "#cta" },
//     cta2: { label: "View Programs", href: "#activities" },
//     images: [ODOC2, ODOC3, ODOC4, ODOC1],
//   },
//   {
//     id: "corporate-youth",
//     title: "Corporate & Youth",
//     desc: "Engaging youth and professionals with mindfulness programs to build resilience, focus, and leadership.",
//     cta1: { label: "Get Involved", href: "#cta" },
//     cta2: { label: "Discover More", href: "#activities" },
//     images: [ODOC3, ODOC4, ODOC1, ODOC2],
//   },
//   {
//     id: "farmer",
//     title: "Farmer Empowerment",
//     desc: "Supporting farmers with sustainable agricultural practices, training, and fair market opportunities.",
//     cta1: { label: "Support Farmers", href: "#cta" },
//     cta2: { label: "View Impact", href: "#activities" },
//     images: [ODOC4, ODOC1, ODOC2, ODOC3],
//   },
//   {
//     id: "health",
//     title: "Rural Health & Wellness",
//     desc: "Improving healthcare accessibility and awareness in rural communities through wellness initiatives.",
//     cta1: { label: "Contribute", href: "#cta" },
//     cta2: { label: "See Programs", href: "#activities" },
//     images: [ODOC1, ODOC2, ODOC3, ODOC4],
//   },
//   {
//     id: "ausumn-kids",
//     title: "Ausumn Kids",
//     desc: "Special initiatives for children with autism to enhance learning, creativity, and social interaction.",
//     cta1: { label: "Support a Child", href: "#cta" },
//     cta2: { label: "Learn More", href: "#activities" },
//     images: [ODOC2, ODOC3, ODOC4, ODOC1],
//   },
//   {
//     id: "odoc",
//     title: "One Dollar One Child (ODOC)",
//     desc: "Spirulina nutrition for vulnerable children at just $1 per child. Launched at the Sunya Mega Retreat, ODOC is a growing movement supported by global Sunyatees and partners to fight malnutrition with dignity.",
//     cta1: { label: "Sponsor a Child", href: "#cta" },
//     cta2: { label: "See Impact", href: "#activities" },
//     images: [ODOC1, ODOC2, ODOC3, ODOC4],
//   },
//   {
//     id: "agamas",
//     title: "Agamas & Translation",
//     desc: "Preserving and translating ancient spiritual texts to make timeless wisdom accessible globally.",
//     cta1: { label: "Support Research", href: "#cta" },
//     cta2: { label: "Read Translations", href: "#activities" },
//     images: [ODOC3, ODOC4, ODOC1, ODOC2],
//   },
//   {
//     id: "brick-house",
//     title: "Brick House",
//     desc: "Building eco-friendly homes and sustainable shelters for underprivileged families.",
//     cta1: { label: "Donate a Brick", href: "#cta" },
//     cta2: { label: "See Projects", href: "#activities" },
//     images: [ODOC4, ODOC1, ODOC2, ODOC3],
//   },
//   {
//     id: "palm-leaf",
//     title: "Palm Leaf Sutra",
//     desc: "Preserving and digitizing ancient palm leaf manuscripts containing profound wisdom and history.",
//     cta1: { label: "Preserve Heritage", href: "#cta" },
//     cta2: { label: "View Archives", href: "#activities" },
//     images: [ODOC1, ODOC2, ODOC3, ODOC4],
//   },
//   {
//     id: "csr",
//     title: "CSR Partnership",
//     desc: "Collaborating with corporations to drive impactful community and social responsibility initiatives.",
//     cta1: { label: "Partner With Us", href: "#cta" },
//     cta2: { label: "See CSR Projects", href: "#activities" },
//     images: [ODOC2, ODOC3, ODOC4, ODOC1],
//   },
//   {
//     id: "internship",
//     title: "Internship",
//     desc: "Offering students and youth opportunities to learn, grow, and contribute to meaningful social projects.",
//     cta1: { label: "Apply Now", href: "#cta" },
//     cta2: { label: "Explore Roles", href: "#activities" },
//     images: [ODOC3, ODOC4, ODOC1, ODOC2],
//   },
//   {
//     id: "education",
//     title: "Education",
//     desc: "Providing access to quality education and resources for children and communities in need.",
//     cta1: { label: "Support Education", href: "#cta" },
//     cta2: { label: "See Initiatives", href: "#activities" },
//     images: [ODOC4, ODOC1, ODOC2, ODOC3],
//   },
// ];

// export default function AllActivities() {
//   const [index, setIndex] = useState(0);
//   const current = activities[index];

//   // Auto-run slider
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % activities.length);
//     }, 5000); // change every 4s
//     return () => clearInterval(interval); // cleanup
//   }, []);

//   return (
//     <section
//       id={current.id}
//       className="mt-16 rounded-3xl bg-gradient-to-br from-yellow-50 to-rose-50 p-8 shadow-inner dark:from-neutral-900 dark:to-neutral-900/60"
//     >
//       <div className="grid items-center gap-8 md:grid-cols-2">
//         <div>
//           <h3 className="text-3xl font-semibold tracking-tight">
//             {current.title}
//           </h3>
//           <p className="mt-3 text-neutral-700 dark:text-neutral-300">
//             {current.desc}
//           </p>
//           <div className="mt-6 flex flex-wrap gap-3">
//             <a
//               href={current.cta1.href}
//               className="rounded-full bg-neutral-900 px-5 py-2.5 text-white hover:bg-neutral-800"
//             >
//               {current.cta1.label}
//             </a>
//             <a
//               href={current.cta2.href}
//               className="rounded-full bg-white px-5 py-2.5 text-neutral-900 shadow hover:bg-neutral-50 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
//             >
//               {current.cta2.label}
//             </a>
//           </div>
//         </div>

//         {/* Images Grid */}
//         <div className="grid grid-cols-2 gap-3">
//           {current.images.map((img, n) => (
//             <div key={n} className="aspect-square overflow-hidden rounded-xl">
//               <img
//                 alt={current.title}
//                 className="h-full w-full object-cover"
//                 src={img}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Slider Dots */}
//       <div className="mt-8 flex justify-center gap-2">
//         {activities.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setIndex(i)}
//             className={`h-2 w-2 rounded-full transition ${
//               i === index
//                 ? "bg-neutral-900 dark:bg-white scale-110"
//                 : "bg-neutral-400/50 hover:bg-neutral-600"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

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
