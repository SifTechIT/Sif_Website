import { useEffect, useMemo, useRef, useState } from "react";

/** Join Us – SIF (React + Tailwind, no config) */
export default function JoinUs() {
  const [activeTab, setActiveTab] = useState("volunteer");
  const [scrolled, setScrolled] = useState(false);

  // Smooth header style on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll-smooth bg-white text-[#111827] font-sans">
      {/* Header */}

      <main>
        {/* Hero */}
        <section className="mt-[72px] relative overflow-hidden">
          <div className="bg-gradient-to-br from-[#10b981] to-[#059669]">
            <div className="relative">
              <div className="absolute inset-0 [background:radial-gradient(circle_at_20%_20%,rgba(255,255,255,.12)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,.1)_0%,transparent_50%)]" />
              <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-16 items-center relative text-white">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1 mb-6 text-sm font-semibold backdrop-blur">
                    Join Us
                  </div>
                  <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-tight mb-4">
                    Serve. Learn. Lead.
                  </h1>
                  <p className="text-lg md:text-xl opacity-90 mb-6">
                    Be part of SIF&apos;s journey—volunteer with communities,
                    build real-world skills as an intern, or grow your career on
                    mission-driven teams.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Mindfulness & Sunya",
                      "Education",
                      "Rural Health",
                      "Women & Farmers",
                      "Cultural Heritage",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/20 border border-white/30 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                  <Stat n="1,200+" l="Active Volunteers" />
                  <Stat n="300+" l="Projects & Events" />
                  <Stat n="65%" l="Youth Participation" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Choice Chips */}
        <section className="sticky top-[72px] z-40 bg-white border-b border-gray-200 py-4">
          <div className="max-w-[600px] mx-auto flex gap-2 bg-gray-100 rounded-xl p-2 justify-center">
            {[
              { id: "volunteer", label: "Volunteer" },
              { id: "internship", label: "Internship" },
              { id: "careers", label: "Careers" },
            ].map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveTab(c.id)}
                className={`flex-1 px-4 py-2 rounded-lg font-semibold text-sm transition ${
                  activeTab === c.id
                    ? "bg-white shadow text-gray-900"
                    : "text-gray-600"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </section>

        {/* Sections */}
        {activeTab === "volunteer" && <VolunteerForm />}
        {activeTab === "internship" && <InternshipForm />}
        {activeTab === "careers" && <CareersSection />}
      </main>
    </div>
  );
}

/* ---------- Bits ---------- */
function Stat({ n, l }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-extrabold mb-1">{n}</div>
      <div className="text-sm opacity-90 font-medium">{l}</div>
    </div>
  );
}

/* ---------- Volunteer ---------- */
function VolunteerForm() {
  const [show, setShow] = useState(false);

  return (
    <section id="volunteer" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <div className="rounded-2xl border border-gray-200 shadow-sm p-8">
          <h3 className="text-2xl font-bold mb-2">Volunteer with SIF</h3>
          <p className="text-gray-600 mb-6">
            Choose your cause. Give your time. Create tangible impact.
          </p>

          {/* Success toast */}
          {show && (
            <div className="mb-4 rounded-lg border border-green-200 bg-green-100 text-green-800 px-4 py-3 text-sm">
              Thank you! Your volunteer application has been submitted.
              We&apos;ll contact you within 5–7 days.
            </div>
          )}

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setShow(true);
              e.currentTarget.reset();
              setTimeout(() => setShow(false), 5000);
            }}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <Input required placeholder="Full Name" />
              <Input type="email" required placeholder="Email" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Input type="tel" required placeholder="Phone" />
              <Input placeholder="City / Location" />
            </div>
            <Select required defaultValue="">
              <Option value="" label="Areas of Interest" />
              {[
                "Sunya & Mindfulness",
                "Child Education Centres",
                "Rural Health & Awareness",
                "Women Empowerment",
                "Farmer Empowerment",
                "Palm Leaf / Agamas",
                "Events & Logistics",
              ].map((v) => (
                <Option key={v} value={v} />
              ))}
            </Select>
            <div className="grid md:grid-cols-2 gap-4">
              <Select required defaultValue="">
                <Option value="" label="Availability" />
                {["Weekdays", "Weekends", "Remote / Online", "Flexible"].map(
                  (v) => (
                    <Option key={v} value={v} />
                  )
                )}
              </Select>
              <Input type="date" />
            </div>
            <Textarea placeholder="Why do you want to volunteer?" minRows={4} />
            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600"
              >
                Submit Interest
              </button>
              <button
                type="reset"
                className="border px-6 py-3 rounded-lg font-semibold"
              >
                Clear
              </button>
            </div>
            <p className="text-sm text-gray-500">
              We&apos;ll get back within 5–7 working days. For queries:{" "}
              <a className="text-emerald-600" href="mailto:hello@sifworld.com">
                hello@sifworld.com
              </a>
            </p>
          </form>
        </div>

        <div className="rounded-2xl border border-gray-200 shadow-sm p-8">
          <h3 className="text-2xl font-bold mb-2">Popular Volunteer Tracks</h3>
          <p className="text-gray-600 mb-6">
            Pick one track or mix &amp; match based on your interests.
          </p>
          <ul className="space-y-4">
            {[
              [
                "📚",
                "Education Buddy: Reading circles, homework help, weekend learning camps.",
              ],
              [
                "🏥",
                "Health Advocate: Village health camps, hygiene awareness, logistics.",
              ],
              [
                "🧘",
                "Sunya Facilitator: Support meditation sessions & retreats (training provided).",
              ],
              [
                "👩‍🌾",
                "Women & Farmers: SHG support, market-linkage events, documentation.",
              ],
              [
                "📜",
                "Culture & Heritage: Palm-leaf documentation, Agamas research support.",
              ],
              [
                "📱",
                "Comms & Design: Photo/video, social media, stories & newsletters.",
              ],
            ].map(([icon, text], i) => {
              const [heading, body] = text.split(":");
              return (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center">
                    {icon}
                  </div>
                  <p className="text-gray-700">
                    <strong>{heading}:</strong>
                    {body}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Internship ---------- */
function InternshipForm() {
  const [show, setShow] = useState(false);

  return (
    <section id="internship" className="py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-8">
          <h3 className="text-2xl font-bold mb-2">Internship Application</h3>
          <p className="text-gray-600 mb-6">
            Real projects, real mentors, real impact.
          </p>

          {show && (
            <div className="mb-4 rounded-lg border border-green-200 bg-green-100 text-green-800 px-4 py-3 text-sm">
              Thank you! Your internship application has been submitted.
              Shortlisted applicants will be contacted for an interview.
            </div>
          )}

          <form
            className="space-y-4"
            id="internshipForm"
            onSubmit={(e) => {
              e.preventDefault();
              setShow(true);
              e.currentTarget.reset();
              setTimeout(() => setShow(false), 5000);
            }}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <Input required placeholder="Full Name" />
              <Input
                type="email"
                required
                placeholder="Email (you@college.edu)"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Input type="tel" required placeholder="Phone" />
              <Input placeholder="Current City" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Select required defaultValue="">
                <Option value="" label="Discipline" />
                {[
                  "IT / Data / Product",
                  "Design / Content",
                  "Education / Social Work",
                  "Public Health",
                  "Agri / Rural Development",
                  "Culture / Research",
                ].map((v) => (
                  <Option key={v} value={v} />
                ))}
              </Select>
              <Select required defaultValue="">
                <Option value="" label="Preferred Team" />
                {[
                  "Child Education Centres",
                  "ODOC (Nutrition)",
                  "Rural Health",
                  "Women & Farmers",
                  "Palm Leaf / Agamas",
                  "Comms / Design / Tech",
                ].map((v) => (
                  <Option key={v} value={v} />
                ))}
              </Select>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Select required defaultValue="">
                <Option value="" label="Duration" />
                {["6 weeks", "2 months", "3 months", "6 months"].map((v) => (
                  <Option key={v} value={v} />
                ))}
              </Select>
              <Input type="date" placeholder="Start Date" />
            </div>
            <Input placeholder="Portfolio / LinkedIn / GitHub (comma separated)" />
            <Textarea
              required
              placeholder="Statement of Purpose — What do you want to learn and build with SIF?"
              minRows={5}
            />
            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600"
              >
                Apply
              </button>
              <button
                type="reset"
                className="border px-6 py-3 rounded-lg font-semibold"
              >
                Clear
              </button>
            </div>
            <p className="text-sm text-gray-500">
              Shortlisted applicants will be contacted for a quick conversation
              with a mentor.
            </p>
          </form>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-8">
          <h3 className="text-2xl font-bold mb-2">Intern Benefits</h3>
          <p className="text-gray-600 mb-6">
            Mentored pathways & certifications
          </p>
          <ul className="space-y-4">
            {[
              ["👨‍🏫", "Mentor-led sprints with weekly reviews and guidance."],
              ["🎓", "Project certificates & recommendation letters."],
              ["💼", "Real-world portfolio (dashboards, campaigns, reports)."],
              ["🌱", "Field exposure to programs & community work."],
              ["🧘", "Sunya mindfulness sessions for focus & resilience."],
            ].map(([icon, text], i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center">
                  {icon}
                </div>
                <p className="text-gray-700">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Careers ---------- */
function CareersSection() {
  const [show, setShow] = useState(false);
  const roleInput = useRef(null);

  const jobs = useMemo(
    () => [
      {
        title: "Program Coordinator — Education",
        tags: ["Full-time", "Hyderabad", "3+ years"],
      },
      {
        title: "Field Officer — Rural Health",
        tags: ["Full-time", "Telangana (travel)", "2+ years"],
      },
      {
        title: "Designer — Comms & Social",
        tags: ["Contract", "Remote", "Portfolio"],
      },
    ],
    []
  );

  return (
    <section id="careers" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Open roles */}
        <div className="rounded-2xl border border-gray-200 shadow-sm p-8">
          <h3 className="text-2xl font-bold mb-2">Open Roles</h3>
          <p className="text-gray-600 mb-6">
            Current opportunities across our programs and locations.
          </p>
          <div className="space-y-4">
            {jobs.map((j, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border rounded-xl p-5 hover:shadow-md transition"
              >
                <div>
                  <h4 className="font-bold text-lg mb-1">{j.title}</h4>
                  <div className="flex gap-2 flex-wrap">
                    {j.tags.map((t, k) => (
                      <span
                        key={k}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  className="border border-emerald-500 text-emerald-600 px-4 py-2 rounded-lg font-semibold hover:bg-emerald-500 hover:text-white transition"
                  onClick={() => {
                    document
                      .getElementById("careers-tab-anchor")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setTimeout(() => {
                      roleInput.current &&
                        ((roleInput.current.value = j.title),
                        roleInput.current.focus());
                    }, 250);
                  }}
                >
                  Apply
                </button>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Don&apos;t see a fit? Use the general application form →
          </p>
        </div>

        {/* General application */}
        <div
          className="rounded-2xl border border-gray-200 shadow-sm p-8"
          id="careers-tab-anchor"
        >
          <h3 className="text-2xl font-bold mb-2">General Application</h3>
          <p className="text-gray-600 mb-6">
            Tell us about yourself. We&apos;ll match you to new roles.
          </p>

          {show && (
            <div className="mb-4 rounded-lg border border-green-200 bg-green-100 text-green-800 px-4 py-3 text-sm">
              Thank you! Your application has been submitted. If selected, HR
              will contact you via email.
            </div>
          )}

          <form
            id="careersForm"
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setShow(true);
              e.currentTarget.reset();
              setTimeout(() => setShow(false), 5000);
            }}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <Input required placeholder="Full Name" />
              <Input type="email" required placeholder="Email" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Input type="tel" required placeholder="Phone" />
              <Input placeholder="City" />
            </div>
            <Input
              refEl={roleInput}
              placeholder="Role of Interest (auto-fills when you click Apply above)"
            />
            <Textarea
              required
              placeholder="Experience Summary — briefly describe relevant experience"
              minRows={4}
            />
            <div className="grid md:grid-cols-2 gap-4">
              <Input type="url" placeholder="LinkedIn" />
              <Input type="url" placeholder="Portfolio / Website" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Input type="date" placeholder="Earliest Start" />
              <Select defaultValue="Full-time">
                {["Full-time", "Part-time", "Contract"].map((v) => (
                  <Option key={v} value={v} />
                ))}
              </Select>
            </div>
            <Textarea
              required
              placeholder="Why SIF? — What draws you to our mission?"
              minRows={4}
            />
            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600"
              >
                Submit Application
              </button>
              <button
                type="reset"
                className="border px-6 py-3 rounded-lg font-semibold"
              >
                Clear
              </button>
            </div>
            <p className="text-sm text-gray-500">
              We value diversity and equal opportunity. Applications are
              reviewed quarterly.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- Form Primitives (Tailwind only) ---------- */
function Input({ refEl, className = "", ...props }) {
  return (
    <input
      ref={refEl}
      className={`w-full border border-gray-200 rounded-lg px-4 py-3 text-[15px] outline-none transition
      focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 ${className}`}
      {...props}
    />
  );
}

function Select({ className = "", children, ...props }) {
  return (
    <select
      className={`w-full border border-gray-200 rounded-lg px-4 py-3 text-[15px] outline-none transition
      focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}

function Option({ value, label }) {
  return <option value={value}>{label ?? value}</option>;
}

function Textarea({ minRows = 3, className = "", ...props }) {
  return (
    <textarea
      rows={minRows}
      className={`w-full border border-gray-200 rounded-lg px-4 py-3 text-[15px] outline-none transition resize-y
      focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 ${className}`}
      {...props}
    />
  );
}
