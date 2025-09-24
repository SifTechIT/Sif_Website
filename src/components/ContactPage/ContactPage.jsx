import { saveData } from "@/lib/db";
import { serverTimestamp } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";

/** Contact Us – SIF | React + Tailwind (no config) */
export default function ContactPage() {
  return (
    <main>
      <Hero />
      <ContactMain />
      <EmailContact />
    </main>
  );
}

function Hero() {
  return (
    <section className="bg-gradient-to-br from-white to-[#f8fafc]">
      <div className="max-w-[1200px] mx-auto px-6 py-28 text-center">
        <div className="max-w-[680px] mx-auto">
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-tight tracking-tight mb-3">
            Contact Us
          </h1>
          <p className="text-[18px] text-gray-600 leading-8">
            Ready to join our mission or learn more about our programs? We’d
            love to hear from you. Reach out through any of our offices or send
            us a message below.
          </p>
        </div>
      </div>
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
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
    <section className="py-20 bg-white">
      <div
        ref={ref}
        className="opacity-0 translate-y-5 transition-all duration-700 max-w-[1200px] mx-auto px-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
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
    <div className="bg-white rounded-2xl p-8 md:p-10 border border-[#e2e8f0] shadow-sm">
      <div
        className={`mb-5 rounded-lg border text-sm px-4 py-3 ${
          show ? "block animate-[slideDown_.3s_ease]" : "hidden"
        } bg-[#dcfce7] text-[#166534] border-[#bbf7d0]`}
      >
        Thank you! Your message has been sent successfully. We&apos;ll get back
        to you soon.
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-1">Get in Touch with Us</h3>
        <p className="text-gray-600">
          Fill out the form below, and our team will get back to you shortly.
          Let’s connect and explore how we can assist you.
        </p>
      </div>

      <form onSubmit={onSubmit} id="contactForm" className="space-y-5">
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
            className="block text-sm font-semibold text-gray-900 mb-1.5"
          >
            How can we help you?
          </label>
          <select
            id="subject"
            required
            className="w-full rounded-lg border border-[#e2e8f0] px-4 py-3 text-[15px] bg-white focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
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
            className="block text-sm font-semibold text-gray-900 mb-1.5"
          >
            Message
          </label>
          <textarea
            id="message"
            required
            placeholder="Tell us more about your inquiry..."
            className="w-full min-h-[110px] rounded-lg border border-[#e2e8f0] px-4 py-3 text-[15px] bg-white resize-y focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
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
        className="block text-sm font-semibold text-gray-900 mb-1.5"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        onBlur={onBlur}
        onInput={onInput}
        className={`w-full rounded-lg border px-4 py-3 text-[15px] bg-white focus:outline-none focus:ring-4 transition
          ${
            invalid
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
              : "border-[#e2e8f0] focus:border-emerald-500 focus:ring-emerald-500/10"
          }`}
      />
    </div>
  );
}

/* ========================= Office Info ========================= */
function OfficeInfo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="mb-1">
        <h3 className="text-2xl font-bold mb-1">Our Offices</h3>
        <p className="text-gray-600">
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
    <div className="border border-[#e2e8f0] rounded-xl p-6 transition hover:shadow-md hover:-translate-y-0.5">
      <div className="flex items-start gap-4">
        <div
          className={`w-11 h-11 rounded-lg text-white grid place-items-center text-[20px] flex-shrink-0 bg-gradient-to-br ${bg}`}
        >
          <span className="material-icons">{icon}</span>
        </div>
        <div className="flex-1">
          <h4 className="text-[16px] font-bold text-gray-900">{title}</h4>
          <p className="text-[13px] font-medium text-gray-400 mb-2">{type}</p>
          <p className="text-[14px] text-gray-600 leading-relaxed">{address}</p>
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
        <div className="max-w-[520px] mx-auto text-center border border-[#e2e8f0] bg-white rounded-2xl p-8 md:p-10">
          <div className="w-14 h-14 rounded-xl bg-emerald-500 text-white grid place-items-center mx-auto mb-4">
            <span className="material-icons text-[26px]">mail</span>
          </div>
          <h3 className="text-xl font-bold mb-1">Email Us Directly</h3>
          <p className="text-sm text-gray-600 mb-3">
            For quick inquiries and general information
          </p>
          <a
            href="mailto:hello@sifworld.com"
            className="inline-block font-semibold text-emerald-600 hover:text-emerald-700 border-b-2 border-transparent hover:border-emerald-600 text-[18px]"
          >
            hello@sifworld.com
          </a>
        </div>
      </div>
    </section>
  );
}
