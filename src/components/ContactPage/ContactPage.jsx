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

/* ========================= Header ========================= */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all backdrop-blur-xl ${
        scrolled ? "bg-white/95 shadow-sm" : "bg-white/95"
      } border-[#e2e8f0]`}
    >
      <nav className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between relative">
        <div className="hidden md:flex items-center">
          <ul className="flex gap-8 text-[15px] text-gray-600">
            <li>
              <a className="hover:text-gray-900" href="index.html">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-gray-900" href="#programs">
                Programs
              </a>
            </li>
            <li>
              <a className="hover:text-gray-900" href="#impact">
                Impact
              </a>
            </li>
          </ul>
        </div>

        {/* Logo centered */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full bg-emerald-500 grid place-items-center overflow-hidden">
            <div className="w-6 h-4 rounded-full border-2 border-white" />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-white" />
          </div>
          <span className="text-[20px] font-extrabold tracking-tight">SIF</span>
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <ul className="hidden md:flex gap-8 text-[15px] text-gray-600">
            <li>
              <a className="hover:text-gray-900" href="about.html">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-gray-900" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <button className="px-5 py-2 rounded-lg bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition">
            Donate
          </button>
          <button
            className="md:hidden text-2xl text-gray-800"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}

/* ========================= Hero ========================= */
function Hero() {
  return (
    <section className="mt-[72px] bg-gradient-to-br from-white to-[#f8fafc]">
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

  const onSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    e.currentTarget.reset();
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
          className="w-full rounded-lg bg-emerald-500 text-white font-semibold px-6 py-3 hover:bg-emerald-600 transition shadow-sm"
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
        icon="gavel"
        bg="from-violet-500 to-violet-700"
      />
      <OfficeCard
        title="Head Office & Sunya Studio"
        type="Main Operations Center • Maharashtra"
        address="BUSINESS POINT, OFFICE NO. 401, 4TH FLOOR, Laxman Nagar, Baner, Pune, Maharashtra 411045"
        icon="business_center"
        bg="from-emerald-500 to-emerald-700"
      />
      <OfficeCard
        title="South & CSR Office"
        type="Regional Operations • Telangana"
        address="5th Floor, Rajapushpa Summit, ISB Rd, Financial District, Gachibowli, Nanakramguda, Telangana 500032"
        icon="corporate_fare"
        bg="from-blue-500 to-blue-700"
      />
      <OfficeCard
        title="Central Office"
        type="Regional Coordination • Maharashtra"
        address="201, Ram Residency, Near UCO Bank, Manish Nagar, Nagpur – 440015"
        icon="location_city"
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

/* ========================= Footer ========================= */
function Footer() {
  return (
    <footer className="bg-[#1f2937] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-[16px] font-bold mb-3">Contact</h3>
            <p className="text-white/70">hello@sifworld.com</p>
            <p className="text-white/70">Multiple Office Locations</p>
            <p className="text-white/70">Serving Communities Across India</p>
          </div>
          <div>
            <h3 className="text-[16px] font-bold mb-3">Programs</h3>
            <FooterLink href="#farmer-empowerment" label="Farmer Empowerment" />
            <FooterLink href="#women-empowerment" label="Women Empowerment" />
            <FooterLink href="#education" label="Child Education" />
            <FooterLink href="#health" label="Rural Health" />
          </div>
          <div>
            <h3 className="text-[16px] font-bold mb-3">Get Involved</h3>
            <FooterLink href="#" label="Volunteer" />
            <FooterLink href="#" label="Donate" />
            <FooterLink href="#" label="Partnership" />
            <FooterLink href="#" label="Internship" />
          </div>
          <div>
            <h3 className="text-[16px] font-bold mb-3">Follow Us</h3>
            <FooterLink href="#" label="Instagram" />
            <FooterLink href="#" label="Facebook" />
            <FooterLink href="#" label="LinkedIn" />
            <FooterLink href="#" label="YouTube" />
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-white/60 text-sm">
          © 2025 Sunyatee International Foundation. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }) {
  return (
    <p>
      <a href={href} className="text-white/70 hover:text-white transition">
        {label}
      </a>
    </p>
  );
}
