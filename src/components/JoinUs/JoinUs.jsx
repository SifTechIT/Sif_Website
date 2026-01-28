import { saveData } from "@/lib/db";
import { storage } from "@/lib/firebase";
import { serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import FileUpload from "./FileUpload";

/** Join Us – SIF (React + Tailwind, no config) */
export default function JoinUs() {
  const [activeTab, setActiveTab] = useState("volunteer");

  return (
    <div className="scroll-smooth bg-white text-[#111827] font-sans">
      {/* Header */}

      <main>
        <PageHero
          eyebrow="Join Us"
          title="Serve. Learn. Lead."
          subtitle="Be part of SIF's journey—volunteer with communities, build real-world skills as an intern, or grow your career on mission-driven teams."
          primaryCta={{ label: "View Opportunities", to: "#volunteer" }}
          secondaryCta={{ label: "Our Impact", to: "/impact-stories" }}
        />

        {/* Choice Chips */}
        <section className="sticky top-[60px] z-40 bg-white border-b border-gray-200 py-4">
          <div className="max-w-[315px] sm:max-w-[400px]  mx-auto flex gap-2 bg-gray-100 rounded-xl p-2 justify-center">
            {[
              { id: "volunteer", label: "Volunteer" },
              { id: "internship", label: "Internship" },
            ].map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveTab(c.id)}
                className={`flex-1 px-4 py-2 rounded-lg font-semibold text-sm transition cursor-pointer ${
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
      </main>
    </div>
  );
}

/* ---------- Volunteer ---------- */
function VolunteerForm() {
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      fullName: form[0].value,
      email: form[1].value,
      phone: form[2].value,
      city: form[3].value,
      interest: form[4].value,
      availability: form[5].value,
      startDate: form[6].value,
      why: form[7].value,
      createdAt: serverTimestamp(),
    };
    await saveData("volunteers", data);
    setShow(true);
    form.reset();
    setTimeout(() => setShow(false), 5000);
  };
  return (
    <section id="volunteer" className="py-24">
      <div className="mx-auto w-full px-5 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="rounded-[2.5rem] border border-gray-200 shadow-sm p-8">
            <h3 className="text-xl font-semibold mb-2">Volunteer with SIF</h3>
            <p className="text-muted-foreground mb-6">
              Choose your cause. Give your time. Create tangible impact.
            </p>

            {/* Success toast */}
            {show && (
              <div className="mb-4 rounded-xl border border-accent/30 bg-accent/10 text-accent px-4 py-3 text-sm">
                Thank you! Your volunteer application has been submitted. We'll
                contact you within 5–7 days.
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
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
                    ),
                  )}
                </Select>
                <Input type="date" />
              </div>
              <Textarea
                placeholder="Why do you want to volunteer?"
                minRows={4}
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 text-nowrap cursor-pointer"
                >
                  Submit Interest
                </button>
                <button
                  type="reset"
                  className="border px-6 py-3 rounded-lg font-semibold text-nowrap cursor-pointer"
                >
                  Clear
                </button>
              </div>
              <p className="text-sm text-gray-500">
                We&apos;ll get back within 5–7 working days. For queries:{" "}
                <a
                  className="text-emerald-600"
                  href="mailto:hello@sifworld.com"
                >
                  hello@sifworld.com
                </a>
              </p>
            </form>
          </div>

          <div className="rounded-[2.5rem] border border-gray-200 shadow-sm p-8">
            <h3 className="text-xl font-semibold mb-2">
              Popular Volunteer Tracks
            </h3>
            <p className="text-muted-foreground mb-6">
              Pick one track or mix & match based on your interests.
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
                    <div className="p-1.5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
                      {icon}
                    </div>
                    <p className="text-foreground">
                      <strong>{heading}:</strong>
                      {body}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Internship ---------- */
function InternshipForm() {
  const [show, setShow] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    try {
      setUploading(true);
      let resumeURL = "";
      if (resumeFile) {
        const resumeRef = ref(
          storage,
          `resumes/${Date.now()}_${resumeFile.name}`,
        );
        await uploadBytes(resumeRef, resumeFile);
        resumeURL = await getDownloadURL(resumeRef);
      }
      const data = {
        fullName: form[0].value,
        email: form[1].value,
        phone: form[2].value,
        city: form[3].value,
        discipline: form[4].value,
        team: form[5].value,
        duration: form[6].value,
        startDate: form[7].value,
        portfolio: form[8].value,
        sop: form[9].value,
        createdAt: serverTimestamp(),
        resumeURL,
      };
      await saveData("internships", data);

      setShow(true);
      form.reset();
      setResumeFile(null);
      setTimeout(() => setShow(false), 5000);
    } catch (err) {
      console.log("Error in submitting the form:", err);
    } finally {
      setUploading(false);
    }
  };
  return (
    <section id="internship" className="py-24">
      <div className="mx-auto w-full px-5 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="rounded-[2.5rem] border border-gray-200 shadow-sm p-8">
            <h3 className="text-xl font-semibold mb-2">
              Internship Application
            </h3>
            <p className="text-muted-foreground mb-6">
              Real projects, real mentors, real impact.
            </p>

            {show && (
              <div className="mb-4 rounded-xl border border-accent/30 bg-accent/10 text-accent px-4 py-3 text-sm">
                Thank you! Your internship application has been submitted.
                Shortlisted applicants will be contacted for an interview.
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
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
              <FileUpload
                onFileChange={setResumeFile}
                accept=".pdf,.doc,.docx"
                required
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 cursor-pointer"
                >
                  {uploading ? "Uploading..." : "Apply"}
                </button>
                <button
                  type="reset"
                  className="border px-6 py-3 rounded-lg font-semibold cursor-pointer"
                >
                  Clear
                </button>
              </div>
              <p className="text-sm text-gray-500">
                Shortlisted applicants will be contacted for a quick
                conversation with a mentor.
              </p>
            </form>
          </div>

          <div className="h-fit rounded-[2.5rem] border border-gray-200 shadow-sm p-8">
            <h3 className="text-xl font-semibold mb-2">Intern Benefits</h3>
            <p className="text-muted-foreground mb-6">
              Mentored pathways & certifications
            </p>
            <ul className="space-y-4">
              {[
                ["👨‍🏫", "Mentor-led sprints with weekly reviews and guidance."],
                ["🎓", "Project certificates & recommendation letters."],
                [
                  "💼",
                  "Real-world portfolio (dashboards, campaigns, reports).",
                ],
                ["🌱", "Field exposure to programs & community work."],
                ["🧘", "Sunya mindfulness sessions for focus & resilience."],
              ].map(([icon, text], i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="p-1.5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
                    {icon}
                  </div>
                  <p className="text-foreground">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Form Primitives (Tailwind only) ---------- */

function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full border border-border rounded-xl px-4 py-3 text-sm bg-card outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 ${className}`}
      {...props}
    />
  );
}

function Select({ className = "", children, ...props }) {
  return (
    <select
      className={`w-full border border-border rounded-xl px-4 py-3 text-sm bg-card outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 ${className}`}
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
      className={`w-full border border-border rounded-xl px-4 py-3 text-sm bg-card outline-none transition resize-y focus:border-accent focus:ring-2 focus:ring-accent/20 ${className}`}
      {...props}
    />
  );
}

function PageHero({ eyebrow, title, subtitle, align = "center" }) {
  const alignClasses = {
    center: "text-center items-center",
    left: "text-left items-start",
  };

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Subtle decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-[0.03]"
          style={{
            background:
              "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-[0.02]"
          style={{
            background:
              "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container">
        <div
          className={`flex flex-col ${alignClasses[align]}`}
          style={{
            minHeight: "clamp(340px, 50vh, 520px)",
            paddingTop: "clamp(3rem, 8vh, 6rem)",
            paddingBottom: "clamp(3rem, 8vh, 6rem)",
            justifyContent: "center",
          }}
        >
          {/* Eyebrow / Badge */}
          {eyebrow && (
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {eyebrow}
            </div>
          )}

          {/* Title */}
          <h1 className="max-w-4xl heading text-foreground">{title}</h1>

          {/* Subtitle */}
          {subtitle && (
            <p
              className={`mt-5 hero-desc text-muted-foreground ${align === "center" ? "mx-auto" : ""}`}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
