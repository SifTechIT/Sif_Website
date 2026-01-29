import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "./button";

function TestimonialsCarousel({
  testimonials = [],
  autoPlay = true,
  autoPlayMs = 4500,
}) {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (!autoPlay) return;
    const t = setInterval(next, autoPlayMs);
    return () => clearInterval(t);
  }, [autoPlay, autoPlayMs, next]);

  const t = testimonials[index];

  return (
    <section className="bg-slate-100 section-gap">
      <div className="  max-w-6xl mx-auto text-center">
        <div className="p-8 md:p-12 text-center">
          <p className="text-2xl md:text-4xl font-light italic leading-relaxed text-gray-800">
            “{renderHighlightedQuote(t.quote, t.highlight, t.accent)}”
          </p>

          <div className="mt-8 flex items-center justify-center">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 font-bold text-gray-600">
              {t.avatarText}
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-900">{t.name}</div>
              <div className="text-sm text-gray-500">{t.role}</div>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={prev}
              className="h-10 w-10 rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={[
                    "h-2.5 w-2.5 rounded-full transition",
                    i === index ? "bg-gray-900/70" : "bg-gray-900/20",
                  ].join(" ")}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={next}
              className="h-10 w-10 rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsCarousel;

function renderHighlightedQuote(quote, highlight, accentClass) {
  if (!highlight) return quote;

  const parts = quote.split(highlight);
  if (parts.length === 1) return quote;

  return (
    <>
      {parts[0]}
      <span className={`${accentClass} font-semibold`}>{highlight}</span>
      {parts.slice(1).join(highlight)}
    </>
  );
}
