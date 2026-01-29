import { saveData } from "@/lib/db";
import { serverTimestamp } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";

/** Contact Us – SIF | React + Tailwind (no config) */
export default function ContactPage() {
  return (
    <main className="">
      <Hero />
      <ContactMain />
      <EmailContact />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none">
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
      <div className="relative z-10 px-3 md:px-6">
        <div
          className={`flex flex-col text-center items-center`}
          style={{
            minHeight: "clamp(340px, 50vh, 520px)",
            paddingTop: "clamp(3rem, 8vh, 6rem)",
            paddingBottom: "clamp(3rem, 8vh, 6rem)",
            justifyContent: "center",
          }}
        >
          {/* Eyebrow / Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Get in Touch
          </div>

          {/* Title */}
          <h1 className="max-w-4xl heading text-foreground">Contact Us</h1>

          {/* Subtitle */}
          <p className={`mt-5 text-muted-foreground hero-desc center`}>
            Ready to join our mission or learn more about our programs? We'd
            love to hear from you. Reach out through any of our offices or send
            us a message below.
          </p>
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}

/* ========================= Fade-in helper ========================= */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove("opacity-0", "translate-y-5");
            e.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ========================= Contact Main ========================= */
function ContactMain() {
  const ref = useReveal();
  return (
    <section className="section-gap bg-white ">
      <div
        ref={ref}
        className="opacity-0 translate-y-5 transition-all duration-700 max-w-6xl mx-auto "
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <ContactForm />
          <OfficeInfo />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [show, setShow] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    // Collect form data
    const form = e.target;
    const data = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      phone: form.phone.value,
      subject: form.subject.value,
      message: form.message.value,
      createdAt: serverTimestamp(),
    };

    // Save to Firebase
    await saveData("contacts", data);

    setShow(true);
    form.reset();
    setTimeout(() => setShow(false), 5000);
  };

  return (
    <div className=" text-left w-full rounded-[2.5rem] transition-all duration-300 ease-out bg-card border  border-border/60 p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1">
      <div
        className={`mb-5 rounded-lg border text-sm px-4 py-3 ${show ? "block" : "hidden"} bg-accent/10 text-accent border-accent/30`}
      >
        Thank you! Your message has been sent successfully. We'll get back to
        you soon.
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-1">Get in Touch with Us</h3>
        <p className="text-muted-foreground text-sm">
          Fill out the form below, and our team will get back to you shortly.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <FormField id="firstName" label="First Name" type="text" required />
          <FormField id="lastName" label="Last Name" type="text" required />
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <FormField id="email" label="Email Address" type="email" required />
          <FormField id="phone" label="Phone Number" type="tel" />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            How can we help you?
          </label>
          <select
            id="subject"
            required
            className="w-full rounded-lg border border-border px-4 py-3 text-sm bg-card focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            <option value="">Select an option</option>
            <option value="general">General Inquiry</option>
            <option value="volunteer">Volunteer Opportunities</option>
            <option value="partnership">Partnership</option>
            <option value="donation">Donation</option>
            <option value="internship">Internship Program</option>
            <option value="media">Media & Press</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Message
          </label>
          <textarea
            id="message"
            required
            placeholder="Tell us more about your inquiry..."
            className="w-full min-h-[110px] rounded-lg border border-border px-4 py-3 text-sm bg-card resize-y focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-emerald-500 text-white font-semibold px-6 py-3 hover:bg-emerald-600 transition shadow-sm cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

function FormField({ id, label, type = "text", required }) {
  const [invalid, setInvalid] = useState(false);
  const onBlur = (e) => {
    const val = e.target.value.trim();
    if (required && !val) setInvalid(true);
    else if (type === "email" && val) {
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
      setInvalid(!ok);
    } else setInvalid(false);
  };
  const onInput = () => setInvalid(false);
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-foreground mb-1.5"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        onBlur={onBlur}
        onInput={onInput}
        className={`w-full rounded-lg border px-4 py-3 text-sm bg-card focus:outline-none focus:ring-2 transition ${
          invalid
            ? "border-destructive focus:border-destructive focus:ring-destructive/20"
            : "border-border focus:border-primary focus:ring-primary/20"
        }`}
      />
    </div>
  );
}

/* ========================= Office Info ========================= */
function OfficeInfo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="mb-1">
        <h3 className="text-xl font-bold mb-1">Our Offices</h3>
        <p className="text-muted-foreground text-sm">
          Visit us at any of our locations across India
        </p>
      </div>
      <OfficeCard
        title="Registered Office"
        type="Legal & Administrative Hub • Telangana"
        address="Beside Ayyapa temple, Opp. 2-Town Police Station, Karimnagar road, Siddipet, Telangana-502103 India"
        icon="🏛️"
        bg="from-violet-500 to-violet-700"
      />
      <OfficeCard
        title="Head Office & Sunya Studio"
        type="Main Operations Center • Maharashtra"
        address="BUSINESS POINT, OFFICE NO. 401, 4TH FLOOR, Laxman Nagar, Baner, Pune, Maharashtra 411045"
        icon="🏛"
        bg="from-emerald-500 to-emerald-700"
      />
      <OfficeCard
        title="South & CSR Office"
        type="Regional Operations • Telangana"
        address="5th Floor, Rajapushpa Summit, ISB Rd, Financial District, Gachibowli, Nanakramguda, Telangana 500032"
        icon="🤝"
        bg="from-blue-500 to-blue-700"
      />
      <OfficeCard
        title="Central Office"
        type="Regional Coordination • Maharashtra"
        address="201, Ram Residency, Near UCO Bank, Manish Nagar, Nagpur – 440015"
        icon="📍"
        bg="from-amber-500 to-orange-700"
      />
    </div>
  );
}

function OfficeCard({ title, type, address, icon, bg }) {
  return (
    <div
      className={`text-left w-full rounded-[2.5rem] transition-all duration-300 ease-out bg-card border flex items-start gap-4 border-border/60 p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`w-11 h-11 rounded-lg text-white grid place-items-center text-[20px] flex-shrink-0 bg-gradient-to-br ${bg}`}
        >
          <span className="material-icons">{icon}</span>
        </div>
        <div className="flex-1">
          <h4 className="text-base font-semibold text-foreground">{title}</h4>
          <p className="text-xs font-medium text-muted-foreground mb-1">
            {type}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {address}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ========================= Email Contact ========================= */
function EmailContact() {
  const ref = useReveal();
  return (
    <section className="bg-[#f8fafc] py-16">
      <div
        ref={ref}
        className="opacity-0 translate-y-5 transition-all duration-700 max-w-[1200px] mx-auto px-6"
      >
        <div className="max-w-[520px] mx-auto text-center border border-[#e2e8f0] bg-white rounded-[2.5rem] p-8 md:p-10">
          <div className="w-14 h-14 rounded-2xl bg-accent text-accent-foreground grid place-items-center mx-auto mb-4 text-2xl">
            ✉️
          </div>
          <h3 className="text-xl font-bold mb-1">Email Us Directly</h3>
          <p className="text-sm text-muted-foreground mb-3">
            For quick inquiries and general information
          </p>
          <a
            href="mailto:hello@sifworld.com"
            className="inline-block font-semibold text-accent hover:underline text-lg"
          >
            hello@sifworld.com
          </a>
        </div>
      </div>
    </section>
  );
}
