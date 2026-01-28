import { Link } from "react-router-dom";
import img6 from "../../assets/Cta/brick.jpeg";
import img2 from "../../assets/Cta/farmer.jpeg";
import img3 from "../../assets/Cta/kids.png";
import img5 from "../../assets/Cta/lim.jpeg";
import img4 from "../../assets/Cta/odoc.jpeg";
import img7 from "../../assets/Cta/palm.jpeg";
import img1 from "../../assets/Cta/women.jpeg";
const images = [img1, img2, img3, img5, img6, img4, img7];
function CTA() {
  return (
    <section className="w-full  py-8">
      {/* Canvas */}
      <div className="mx-auto w-full px-4">
        <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-white/20 bg-">
          <div className="max-w-6xl mx-auto  px-6 pt-10 pb-20 text-center">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Ready to make an impact?
            </h2>
            <p className="text-xl text-gray-500 mb-12">
              Volunteer, partner via CSR, or support ODOC. Together, we can
              create a mindful world.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/get-involved"
                className="bg-black text-white px-10 py-4 rounded-full font-semibold hover:bg-zinc-800 transition"
              >
                Get Involved
              </Link>
              <Link
                to="/contact-us"
                className="bg-white text-black border border-black px-10 py-4 rounded-full font-semibold hover:bg-gray-50 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
          {/* Bottom strip (photos) */}
          <div className="relative bg-white pb-10">
            {/* Base row behind */}
            <div className="mx-auto flex w-full items-end justify-center  px-4 ">
              {images.map((src, i) => (
                <Photo key={src} src={src} className={getOverlapClass(i)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Photo({ src, className = "" }) {
  return (
    <div
      className={[
        "group relative overflow-hidden bg-neutral-200 shadow-[0_10px_25px_rgba(0,0,0,0.12)] cursor-pointer",
        className,
      ].join(" ")}
    >
      <img
        src={src}
        alt=""
        loading="lazy"
        className="
          h-full w-full object-cover
        "
      />

      {/* subtle top highlight like print */}
      <div className="pointer-events-none absolute inset-0 bg-black/50 group-hover:hidden" />
    </div>
  );
}

function getOverlapClass(i) {
  // 7 images: make the 3 middle ones “pop up” more
  const base = "translate-y-0";
  const map = {
    0: "h-[70px] w-[70px] sm:h-[120px] sm:w-[130px] md:h-[200px] md:w-[210px] z-20",
    1: "h-[90px] w-[70px] sm:h-[160px] sm:w-[130px] md:h-[270px] md:w-[210px] z-20",
    2: "h-[100px] w-[100px] sm:h-[200px] sm:w-[160px] md:h-[330px] md:w-[260px] z-20",
    3: "h-[80px] w-[80px] sm:h-[150px] sm:w-[130px] md:h-[250px] md:w-[210px] z-10",
    4: "h-[100px] w-[100px] sm:h-[200px] sm:w-[160px] md:h-[330px] md:w-[260px] z-20",
    5: "h-[90px] w-[70px] sm:h-[160px] sm:w-[130px] md:h-[270px] md:w-[210px] z-20",
    6: "h-[70px] w-[70px] sm:h-[120px] sm:w-[130px] md:h-[200px] md:w-[210px] z-20",
  };

  return map[i] || base;
}

export default CTA;
