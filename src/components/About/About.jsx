// import DrLim from "../../assets/About/DrLim2.png";
// import DrSavera from "../../assets/About/DrSavera1.png";

// export default function LeadershipSection() {
//   const leaders = [
//     {
//       name: "Datuk Lim Siow Jin",
//       role: "Guiding Principal",
//       img: DrLim,
//       bio: `Founder of DXN and Guiding Principal of SIF. His vision inspired the
//       establishment of Sunyatee International Foundation to promote peace,
//       prosperity, and mindfulness globally.`,
//     },
//     {
//       name: "Dr. Rajesh Savera",
//       role: "Founder & Director",
//       img: DrSavera,
//       bio: `Founder of SIF, mindfulness coach, author, and facilitator. He leads
//       initiatives in Sunya meditation, farmer and women empowerment, rural
//       health, and cultural revival.`,
//     },
//   ];

//   return (
//     <section
//       id="leadership"
//       className="bg-neutral-50 dark:bg-neutral-950 py-16"
//     >
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="text-center">
//           <p className="text-sm uppercase tracking-wider text-emerald-600">
//             Leadership
//           </p>
//           <h2 className="mt-2 text-3xl font-bold">Our Founders & Guides</h2>
//           <p className="mt-3 max-w-2xl mx-auto text-neutral-600 dark:text-neutral-300">
//             The vision and dedication of our leaders guide SIF to create lasting
//             impact across communities.
//           </p>
//         </div>

//         <div className="mt-12 grid gap-10 sm:grid-cols-2">
//           {leaders.map((l) => (
//             <div
//               key={l.name}
//               className="rounded-2xl bg-white shadow-lg dark:bg-neutral-900 overflow-hidden"
//             >
//               <img
//                 src={l.img}
//                 alt={l.name}
//                 className="h-64 w-full object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold">{l.name}</h3>
//                 <p className="text-sm text-emerald-600">{l.role}</p>
//                 <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
//                   {l.bio}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import CSRCovid from "../../assets/About/CSR_Covid.jpg";
import DrLim from "../../assets/About/DrLim2.png";
import DrSavera from "../../assets/About/DrSavera1.png";
import Farmer from "../../assets/About/Farmer.jpeg";
import Health from "../../assets/About/Health.png";
import PalmLeaf from "../../assets/About/Palm_Leaf.JPG";
import About from "../../assets/About/sif.jpg";
import SunyaMeditation from "../../assets/About/sunya_meditation.jpg";
import Women from "../../assets/About/Women.jpg";
/**
 * AboutUsPage – Detailed About Us Page for SIFworld
 * -------------------------------------------------
 * Sections:
 * - Hero Header
 * - About SIF (intro + logo)
 * - Vision & Mission
 * - Impact Stats
 * - Key Focus Areas
 * - Milestones & History
 * - Testimonials (optional slot)
 * - Call to Action
 */

export default function AboutUsPage() {
  const stats = [
    { label: "Projects Implemented", value: "26+" },
    { label: "Sunya Certificates Issued", value: "45,000+" },
    { label: "Volunteers Engaged", value: "300+" },
    { label: "Countries Reached", value: "40+" },
    { label: "Children Supported (ODOC)", value: "5,000+" },
    { label: "COVID Relief Kits", value: "400,000+" },
  ];

  const focusAreas = [
    {
      title: "Sunya Meditation",
      desc: "The heart of SIF’s work — spreading Sunya worldwide through retreats, belt certifications, and community programs.",
      img: SunyaMeditation,
    },
    {
      title: "Farmer Empowerment",
      desc: "Noni cultivation projects, soil testing, training, and buy-back schemes in collaboration with DXN to ensure sustainable livelihoods.",
      img: Farmer,
    },
    {
      title: "Women’s Empowerment",
      desc: "Skill training centers, eco-product making, SHGs, and entrepreneurship programs to uplift women in rural and urban areas.",
      img: Women,
    },
    {
      title: "Health & Awareness",
      desc: "Rural health camps, nutrition drives, hygiene awareness, and Ausum Kids — a special needs therapy initiative.",
      img: Health,
    },
    {
      title: "Cultural Heritage Revival",
      desc: "Palm-leaf Sutra printing, Agamas & Sutras translations, and Amaravati Buddhist Centre initiatives preserving timeless wisdom.",
      img: PalmLeaf,
    },
    {
      title: "CSR & Relief",
      desc: "Partnerships with corporates for impactful projects. During COVID-19, SIF distributed 400 concentrators, 100k PPE kits & 400k masks.",
      img: CSRCovid,
    },
  ];
  const leaders = [
    {
      name: "Datuk Lim Siow Jin",
      role: "Guiding Principal",
      img: DrLim,
      bio: `Founder of DXN and Guiding Principal of SIF. His vision inspired the
      establishment of Sunyatee International Foundation to promote peace,
      prosperity, and mindfulness globally.`,
    },
    {
      name: "Dr. Rajesh Savera",
      role: "Founder & Director",
      img: DrSavera,
      bio: `Founder of SIF, mindfulness coach, author, and facilitator. He leads
      initiatives in Sunya meditation, farmer and women empowerment, rural
      health, and cultural revival.`,
    },
  ];
  const milestones = [
    { year: "2019", event: "Foundation of Sunyatee International Foundation" },
    {
      year: "2020",
      event: "First Sunya Mega Retreat & Global Belt Certifications",
    },
    {
      year: "2021",
      event: "COVID Relief: PPE, Oxygen concentrators, 4 lakh masks",
    },
    {
      year: "2022",
      event: "Noni Farmer Project launched in Siddipet, Telangana",
    },
    { year: "2023", event: "Ausum Kids therapy & inclusion program started" },
    {
      year: "2024",
      event: "ODOC program scaled to 5000+ children across India",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-neutral-50 to-white dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-950 dark:text-white">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-r from-violet-950 via-purple-900 to-indigo-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">About Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-purple-100">
            Sunyatee International Foundation (SIF) – Creating Peace, Prosperity
            & Mindful Communities since 2019
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-7xl px-6 mt-30 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold">Who We Are</h2>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300">
              Founded in 2019, Sunyatee International Foundation (SIF) is
              inspired by the vision of Datuk Lim Siow Jin and Dr. Rajesh
              Savera. Rooted in the practice of Sunya — the wisdom of
              nothingness — we are dedicated to uplifting lives through
              meditation, empowerment, health, cultural preservation, and
              education. SIF is a beacon of transformation working with farmers,
              women, children, and communities across India and beyond.
            </p>
          </div>
          <div>
            <img
              src={About}
              alt="About SIF"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>
      <section
        id="leadership"
        className="bg-neutral-50 dark:bg-neutral-950 mt-30"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-wider text-emerald-600">
              Leadership
            </p>
            <h2 className="mt-2 text-3xl font-bold">Our Founders & Guides</h2>
            <p className="mt-3 max-w-2xl mx-auto text-neutral-600 dark:text-neutral-300">
              The vision and dedication of our leaders guide SIF to create
              lasting impact across communities.
            </p>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {leaders.map((l) => (
              <div
                key={l.name}
                className="rounded-2xl bg-white shadow-lg dark:bg-neutral-900 overflow-hidden"
              >
                <img
                  src={l.img}
                  alt={l.name}
                  className="h-64 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{l.name}</h3>
                  <p className="text-sm text-emerald-600">{l.role}</p>
                  <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
                    {l.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Vision & Mission */}
      {/* <section className="bg-neutral-100 dark:bg-neutral-900 py-16 mt-30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-white/80 p-8 shadow dark:bg-neutral-800">
            <h3 className="text-xl font-semibold">Our Vision</h3>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">
              To create a peaceful, prosperous, and inclusive world where
              mindfulness, compassion, and service guide human progress.
            </p>
          </div>
          <div className="rounded-xl bg-white/80 p-8 shadow dark:bg-neutral-800">
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">
              To spread Sunya meditation globally, empower farmers and women,
              revive cultural wisdom, and implement impactful CSR initiatives
              that improve health, education, and livelihoods.
            </p>
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
            {/* Vision Card */}
            <div className="lg:col-span-6 bg-slate-800/50 rounded-2xl p-8 border border-slate-700/30 hover:bg-slate-800/70 transition-all duration-300">
              <h2 className="text-xl font-light text-white mb-4 tracking-wide">
                Our Vision
              </h2>
              <p className="text-slate-300 leading-7 font-light">
                To create a world where peace and prosperity are lived
                realities, rooted in mindfulness, compassion, and
                service—transforming individuals and communities for generations
                to come.
              </p>
            </div>

            {/* Mission Card */}
            <div className="lg:col-span-6 bg-slate-800/50 rounded-2xl p-8 border border-slate-700/30 hover:bg-slate-800/70 transition-all duration-300">
              <h2 className="text-xl font-light text-white mb-4 tracking-wide">
                Our Mission
              </h2>
              <p className="text-slate-300 leading-7 font-light">
                SIF is committed to spreading Sunya meditation globally while
                empowering farmers, women, children, and communities through
                sustainable programs that nurture peace, inclusivity, and
                holistic well-being.
              </p>
            </div>

            {/* Impact Header Card */}
            <div className="lg:col-span-12 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-6 border border-slate-700/30 text-center">
              <h2 className="text-2xl font-light text-white tracking-wide">
                Our Impact in Numbers
              </h2>
            </div>

            {/* Stats Cards */}
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="lg:col-span-4 bg-slate-800/30 rounded-2xl p-6 border border-slate-700/30 text-center group hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300"
              >
                <dt className="text-3xl lg:text-4xl font-extralight text-white mb-3 group-hover:text-slate-200 transition-colors duration-300">
                  {stat.value}
                </dt>
                <dd className="text-xs uppercase tracking-widest text-slate-400 font-medium">
                  {stat.label}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-neutral-50 dark:bg-neutral-950 mt-30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center">Key Focus Areas</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((f) => (
              <div
                key={f.title}
                className="overflow-hidden rounded-2xl bg-white shadow dark:bg-neutral-900"
              >
                <img
                  src={f.img}
                  alt={f.title}
                  className="h-40 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>

        <div className="relative flex items-center justify-between">
          {/* Line */}
          <div className="absolute top-5 left-0 w-full h-1 bg-purple-300"></div>

          {milestones.map((m, idx) => (
            <div
              key={m.year}
              className="relative flex flex-col items-center text-center w-1/6"
            >
              {/* Timeline Dot */}
              <div className="w-6 h-6 rounded-full bg-purple-600 border-4 border-white shadow-lg z-10"></div>

              {/* Year */}
              <span className="mt-4 text-purple-700 dark:text-purple-300 font-semibold">
                {m.year}
              </span>

              {/* Event */}
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300 max-w-[10rem]">
                {m.event}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-900 to-violet-800 py-16 mt-30 text-center text-white">
        <h2 className="text-3xl font-bold">Be Part of Our Journey</h2>
        <p className="mt-3 max-w-2xl mx-auto text-purple-100">
          Whether through volunteering, CSR partnerships, or supporting ODOC,
          your contribution helps us transform lives and communities.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="#cta"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-purple-900 shadow hover:bg-purple-50"
          >
            Get Involved
          </a>
          <a
            href="#sunyatimes"
            className="rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/20"
          >
            Read Sunyatimes
          </a>
        </div>
      </section>
    </div>
  );
}
