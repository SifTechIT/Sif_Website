// ServicesSlider.jsx
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import * as React from "react";
import { Card, CardContent } from "../ui/card";

const items = [
  // Original 3
  {
    id: "implementation",
    kicker: "Salesforce",
    title: "Implementation",
    top: "bg-[#4C0C3E]",
    bottomType: "waves",
  },
  {
    id: "development",
    kicker: "Salesforce",
    title: "Development",
    top: "bg-[#36A7D6]",
    bottomType: "shapes",
  },
  {
    id: "management",
    kicker: "Salesforce",
    title: "Management",
    top: "bg-[#D85A33]",
    bottomType: "bars",
  },

  // +4 new
  {
    id: "integration",
    kicker: "Salesforce",
    title: "Integration",
    top: "bg-[#1F6FEB]",
    bottomType: "gridGlow",
  },
  {
    id: "automation",
    kicker: "Salesforce",
    title: "Automation",
    top: "bg-[#0F766E]",
    bottomType: "rings",
  },
  {
    id: "analytics",
    kicker: "Salesforce",
    title: "Analytics",
    top: "bg-[#7C3AED]",
    bottomType: "dots",
  },
  {
    id: "support",
    kicker: "Salesforce",
    title: "Support",
    top: "bg-[#B91C1C]",
    bottomType: "stack",
  },
  {
    id: "security",
    kicker: "Salesforce",
    title: "Security",
    top: "bg-[#0B1220]", // deep navy/black
    bottomType: "shieldGlow",
  },
  {
    id: "training",
    kicker: "Salesforce",
    title: "Training",
    top: "bg-[#F59E0B]", // amber
    bottomType: "ribbons",
  },
  {
    id: "optimization",
    kicker: "Salesforce",
    title: "Optimization",
    top: "bg-[#16A34A]", // green
    bottomType: "speedLines",
  },
  {
    id: "training",
    kicker: "Salesforce",
    title: "Training",
    top: "bg-[#4C0C3E]", // same purple scheme
    bottomType: "wavesSoft",
  },
  {
    id: "testing",
    kicker: "Salesforce",
    title: "Testing",
    top: "bg-[#36A7D6]", // same blue scheme
    bottomType: "shapesSoft",
  },
  {
    id: "optimization",
    kicker: "Salesforce",
    title: "Optimization",
    top: "bg-[#D85A33]", // same orange scheme
    bottomType: "barsSoft",
  },
];

function ServicesSlider() {
  const viewportRef = React.useRef(null);
  const [page, setPage] = React.useState(0);
  const [perView, setPerView] = React.useState(3);

  // responsive perView
  React.useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 640) return 1;
      if (w < 1024) return 2;
      return 3;
    };
    const update = () => setPerView(calc());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxPage = Math.max(0, Math.ceil(items.length / perView) - 1);

  React.useEffect(() => {
    // clamp when perView changes
    setPage((p) => Math.min(p, maxPage));
  }, [perView, maxPage]);

  const go = (dir) => {
    setPage((p) => {
      const next = Math.min(maxPage, Math.max(0, p + dir));
      return next;
    });
  };

  const cardW = 320;
  const gap = 40;

  React.useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const left = page * perView * (cardW + gap);
    el.scrollTo({ left, behavior: "smooth" });
  }, [page, perView]);

  return (
    <section className="w-full bg-[#fafafa] py-10">
      <div className="mx-auto max-w-6xl px-4">
        {/* Outer canvas */}
        <div className="relative rounded-xl bg-white p-10 shadow-sm">
          {/* Slider row */}
          <div
            ref={viewportRef}
            className="
              flex gap-10
              overflow-x-auto
              scroll-smooth
              [scrollbar-width:none]
              [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
              pb-16
            "
          >
            {items.map((it) => (
              <ServiceCard key={it.id} item={it} />
            ))}
          </div>

          {/* Nav buttons (bottom-right like screenshot) */}
          <div className="pointer-events-none absolute bottom-6 right-8 flex items-center gap-3">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => go(-1)}
              disabled={page === 0}
              className="pointer-events-auto h-12 w-12 rounded-full border-muted-foreground/20 bg-white disabled:opacity-40"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => go(1)}
              disabled={page === maxPage}
              className="pointer-events-auto h-12 w-12 rounded-full border-muted-foreground/20 bg-white disabled:opacity-40"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Optional: tiny pager dots */}
          <div className="absolute bottom-7 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-2">
              {Array.from({ length: maxPage + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={[
                    "h-2.5 w-2.5 rounded-full transition",
                    i === page ? "bg-black/50" : "bg-black/15",
                  ].join(" ")}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSlider;

function ServiceCard({ item }) {
  return (
    <Card className="w-[320px] shrink-0 overflow-hidden rounded-none border border-black/5 shadow-none">
      <CardContent className="p-0">
        {/* Top */}
        <div className={`relative h-[175px] ${item.top}`}>
          <div className="absolute left-7 top-16">
            <div className="text-xs tracking-wide text-white/70">
              {item.kicker}
            </div>
            <div className="mt-2 text-[22px] font-medium leading-none text-white">
              {item.title}
            </div>
          </div>

          <div className="absolute right-6 top-[74px]">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5">
              <ArrowRight className="h-5 w-5 text-white/70" />
            </div>
          </div>
        </div>

        {/* Bottom (art placeholders) */}
        <div className="relative h-[190px] bg-white">
          {item.bottomType === "waves" && <Waves />}
          {item.bottomType === "shapes" && <Shapes />}
          {item.bottomType === "bars" && <Bars />}
          {item.bottomType === "gridGlow" && <GridGlow />}
          {item.bottomType === "rings" && <Rings />}
          {item.bottomType === "dots" && <Dots />}
          {item.bottomType === "stack" && <Stack />}
        </div>
      </CardContent>
    </Card>
  );
}

/** --- Art blocks --- */

function Waves() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#a16898] to-[#e7c8e0]">
      <div className="absolute inset-0 opacity-70">
        <div className="absolute -left-10 bottom-10 h-36 w-[140%] rotate-[-8deg] rounded-[999px] bg-white/30 blur-[1px]" />
        <div className="absolute -left-20 bottom-16 h-28 w-[150%] rotate-[-8deg] rounded-[999px] bg-white/25" />
        <div className="absolute -left-16 bottom-24 h-20 w-[150%] rotate-[-8deg] rounded-[999px] bg-white/20" />
      </div>
    </div>
  );
}

function Shapes() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#7ad0f3] to-[#8fb7ff]">
      <div className="absolute inset-0 grid grid-cols-6 gap-3 p-7">
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl bg-white/30 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-sm"
            style={{
              borderRadius: i % 5 === 0 ? 999 : i % 3 === 0 ? 18 : 10,
              transform: `translateY(${(i % 4) * 2}px)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function Bars() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#ff945f] to-[#ffd2b6]">
      <div className="absolute bottom-7 left-8 flex items-end gap-4">
        {[44, 64, 86, 104].map((h, idx) => (
          <div
            key={idx}
            className="w-8 rounded-xl bg-[#e85e36] shadow-[0_18px_40px_rgba(0,0,0,0.15)]"
            style={{ height: h }}
          />
        ))}
      </div>
    </div>
  );
}

function GridGlow() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#7db6ff] to-[#d7e7ff]">
      <div className="absolute inset-0 p-6">
        <div className="h-full w-full rounded-2xl bg-white/25 backdrop-blur-[2px]" />
        <div className="pointer-events-none absolute inset-6 rounded-2xl">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute left-6 top-10 h-24 w-24 rounded-full bg-white/35 blur-2xl" />
          <div className="absolute bottom-10 right-10 h-28 w-28 rounded-full bg-white/25 blur-2xl" />
        </div>
      </div>
    </div>
  );
}

function Rings() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#6ee7d6] to-[#c8fff2]">
      <div className="absolute inset-0">
        <div className="absolute left-10 top-12 h-28 w-28 rounded-full border-8 border-white/40" />
        <div className="absolute left-24 top-24 h-36 w-36 rounded-full border-8 border-white/25" />
        <div className="absolute right-10 bottom-10 h-40 w-40 rounded-full border-8 border-white/30" />
      </div>
    </div>
  );
}

function Dots() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#c4a7ff] to-[#efe7ff]">
      <div className="absolute inset-0 p-8">
        <div className="h-full w-full rounded-2xl bg-white/20 backdrop-blur-[2px]" />
        <div className="absolute inset-8 bg-[radial-gradient(rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:14px_14px] opacity-80" />
        <div className="absolute left-10 bottom-10 h-20 w-32 rounded-2xl bg-white/30 shadow-[0_18px_40px_rgba(0,0,0,0.08)]" />
      </div>
    </div>
  );
}

function Stack() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#ff7a7a] to-[#ffd0d0]">
      <div className="absolute bottom-8 left-8 right-8 space-y-3">
        <div className="h-10 w-[72%] rounded-2xl bg-white/35 shadow-[0_18px_40px_rgba(0,0,0,0.12)]" />
        <div className="h-10 w-[85%] rounded-2xl bg-white/28 shadow-[0_18px_40px_rgba(0,0,0,0.10)]" />
        <div className="h-10 w-[60%] rounded-2xl bg-white/40 shadow-[0_18px_40px_rgba(0,0,0,0.14)]" />
      </div>
    </div>
  );
}
