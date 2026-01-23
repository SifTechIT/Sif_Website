import img2 from "../../assets/noni_cultivate.jpg";
import img1 from "../../assets/women_stitching.JPG";
const images = [
  img1,
  img2,
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=70",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=70",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=70",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=70",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=70",
];
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
              <button className="bg-black text-white px-10 py-4 rounded-full font-semibold hover:bg-zinc-800 transition">
                Get Involved
              </button>
              <button className="bg-white text-black border border-black px-10 py-4 rounded-full font-semibold hover:bg-gray-50 transition">
                Contact Us
              </button>
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
        "group relative h-[120px] w-[140px] overflow-hidden bg-neutral-200 shadow-[0_10px_25px_rgba(0,0,0,0.12)] cursor-pointer",
        "sm:h-[150px] sm:w-[170px]",
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
    0: " h-[150px] w-[165px] sm:h-[200px] sm:w-[210px] z-20",
    1: " h-[150px] w-[165px] sm:h-[270px] sm:w-[210px] z-20",
    2: " h-[150px] w-[165px] sm:h-[330px] sm:w-[260px] z-20",
    3: " h-[140px] w-[155px] sm:h-[250px] sm:w-[210px] z-10",
    4: " h-[150px] w-[165px] sm:h-[330px] sm:w-[260px] z-20",
    5: " h-[150px] w-[165px] sm:h-[270px] sm:w-[210px] z-20",
    6: " h-[150px] w-[165px] sm:h-[200px] sm:w-[210px] z-20",
  };
  return map[i] || base;
}

export default CTA;
