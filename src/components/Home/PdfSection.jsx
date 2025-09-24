import {
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  Maximize2,
  Share2,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

import SUNYATIMES_PDF from "../../assets/pdf.pdf";

export default function PDFBookReader() {
  const [pages, setPages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [jumpPage, setJumpPage] = useState("");
  const bookRef = useRef(null); // FlipBook API
  const shellRef = useRef(null); // Real DOM element for fullscreen
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [flipbookHeight, setFlipbookHeight] = useState(640);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      const isMobileDevice = window.innerWidth < 768; // md breakpoint
      setIsMobile(isMobileDevice);

      if (isMobileDevice) {
        // For mobile: use more of the viewport height but leave space for controls
        const h = window.innerHeight * 0.6; // 60% of viewport height
        setFlipbookHeight(h);
      } else {
        // For desktop: 80% of viewport height
        const h = window.innerHeight * 0.8;
        setFlipbookHeight(h);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Load PDF.js and render pages
  useEffect(() => {
    const loadPDFJS = async () => {
      if (!window.pdfjsLib) {
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
        script.onload = () => loadPDF();
        document.head.appendChild(script);

        const workerScript = document.createElement("script");
        workerScript.textContent = `
          window.pdfjsLib.GlobalWorkerOptions.workerSrc =
            'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        `;
        document.head.appendChild(workerScript);
      } else {
        loadPDF();
      }
    };

    const loadPDF = async () => {
      try {
        const pdf = await window.pdfjsLib.getDocument(SUNYATIMES_PDF).promise;
        const pageImages = [];
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          // Adjust scale based on device
          const scale = isMobile ? 1.0 : 1.3;
          const viewport = page.getViewport({ scale });
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          await page.render({ canvasContext: ctx, viewport }).promise;
          pageImages.push(canvas.toDataURL("image/png"));
        }
        setPages(pageImages);
      } catch (e) {
        console.error("Error loading PDF:", e);
      } finally {
        setIsLoading(false);
      }
    };

    loadPDFJS();
  }, [isMobile]);

  // Fullscreen state + resize handling
  useEffect(() => {
    const onFsChange = () => {
      const fsEl =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement;
      setIsFullscreen(!!fsEl);

      // Force FlipBook to recompute layout
      setTimeout(() => {
        try {
          bookRef.current?.pageFlip?.()?.update?.();
        } catch (err) {
          console.log("Error in Force FlipBook to recompute layout", err);
        }
        window.dispatchEvent(new Event("resize"));
      }, 50);
    };

    document.addEventListener("fullscreenchange", onFsChange);
    document.addEventListener("webkitfullscreenchange", onFsChange);
    document.addEventListener("MSFullscreenChange", onFsChange);
    return () => {
      document.removeEventListener("fullscreenchange", onFsChange);
      document.removeEventListener("webkitfullscreenchange", onFsChange);
      document.removeEventListener("MSFullscreenChange", onFsChange);
    };
  }, []);

  const onFlip = (e) => setCurrentPage(e.data);

  const goToPage = () => {
    const n = parseInt(jumpPage, 10);
    if (n > 0 && n <= pages.length) {
      bookRef.current?.pageFlip().turnToPage(n - 1);
      setJumpPage("");
    }
  };

  // Fullscreen toggle on a REAL DOM element
  const toggleFullscreen = () => {
    const el = shellRef.current;
    if (!el) return;

    const isFs =
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement;

    if (!isFs) {
      (
        el.requestFullscreen ||
        el.webkitRequestFullscreen ||
        el.msRequestFullscreen ||
        el.mozRequestFullScreen
      )?.call(el);
    } else {
      (
        document.exitFullscreen ||
        document.webkitExitFullscreen ||
        document.msExitFullscreen ||
        document.mozCancelFullScreen
      )?.call(document);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Flipbook",
          text: "Check out this flipbook!",
          url: window.location.href,
        });
      } catch (e) {
        console.error("Share failed:", e);
      }
    } else {
      alert("Sharing not supported in this browser.");
    }
  };

  if (isLoading) {
    return (
      <section id="sunyatimes" className="mt-30 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-2xl border bg-white shadow dark:bg-neutral-950">
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <div className="animate-spin h-12 w-12 border-b-2 border-emerald-600 rounded-full mx-auto mb-4"></div>
              <p className="text-neutral-600 dark:text-neutral-400">
                Loading PDF...
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="sunyatimes" className="mt-30 mx-auto max-w-7xl px-4 sm:px-6">
      {/* Fullscreen layout helper */}
      <style>{`
        .flipbook-shell:fullscreen,
        .flipbook-shell:-webkit-full-screen {
          width: 100vw !important;
          height: 100vh !important;
          background: #0a0a0a;
          display: grid;
          grid-template-columns: 1fr auto; /* book + vertical toolbar */
          gap: 1rem;
          align-items: center;
          justify-items: center;
          padding: 1rem;
          box-sizing: border-box;
        }

        /* Mobile optimizations */
        @media (max-width: 767px) {
          .flipbook-shell {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 300px;
          }
        }
      `}</style>

      {/* Header */}
      <div className="mb-6 grid gap-6 md:grid-cols-3 md:items-center">
        <div className="md:col-span-2">
          <p className="text-sm uppercase tracking-wider text-emerald-600">
            Sunyatimes
          </p>
          <h2 className="mt-1 text-3xl font-semibold tracking-tight">
            Our Annual Voice of Transformation
          </h2>
          <p className="mt-2 max-w-2xl text-neutral-700 dark:text-neutral-300">
            Stories of change across farmers, women, children, and communities.
            Download the latest edition or read inline.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 md:justify-end">
          <a
            href={SUNYATIMES_PDF}
            download
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
          >
            <Download size={18} />
            Download PDF
          </a>
          <a
            href={SUNYATIMES_PDF}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow hover:bg-neutral-50 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
          >
            <ExternalLink size={18} />
            Open in New Tab
          </a>
        </div>
      </div>

      {/* Responsive layout: Desktop = side-by-side, Mobile = stacked */}
      <div
        className={`${
          isMobile ? "flex flex-col gap-4" : "grid grid-cols-[1fr_auto] gap-4"
        }`}
      >
        {/* Flipbook shell (for fullscreen) */}
        <div
          ref={shellRef}
          className={`flipbook-shell overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl dark:border-neutral-800 dark:bg-neutral-950 ${
            isMobile ? "w-full" : ""
          }`}
          style={{
            height: "auto",
            maxHeight: flipbookHeight,
            width: isMobile ? "100%" : "auto",
          }}
        >
          <HTMLFlipBook
            width={isMobile ? Math.min(window.innerWidth - 32, 560) : 560} // Adjust width for mobile
            height={flipbookHeight}
            size="stretch"
            minWidth={isMobile ? 280 : 250}
            maxWidth={isMobile ? window.innerWidth - 32 : 1200}
            minHeight={250}
            maxHeight={flipbookHeight}
            showCover
            className={`mx-auto flipbook-container ${isMobile ? "w-full" : ""}`}
            onFlip={onFlip}
            ref={bookRef}
            style={{
              width: isMobile ? "100%" : "auto",
            }}
          >
            {pages.map((src, index) => (
              <div
                key={index}
                className="page bg-white flex items-center justify-center"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  src={src}
                  alt={`Page ${index + 1}`}
                  className={`w-full h-auto object-contain ${
                    isMobile ? "max-h-full" : "max-h-[80vh]"
                  }`}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </div>
            ))}
          </HTMLFlipBook>
        </div>

        {/* Controls - Vertical sidebar on desktop, horizontal on mobile */}
        {!isFullscreen && (
          <aside
            className={`${isMobile ? "w-full" : "sticky top-24 self-start"}`}
          >
            {isMobile ? (
              <ControlsHorizontal
                currentPage={currentPage}
                totalPages={pages.length}
                jumpPage={jumpPage}
                setJumpPage={setJumpPage}
                goToPage={goToPage}
                flipPrev={() => bookRef.current.pageFlip().flipPrev()}
                flipNext={() => bookRef.current.pageFlip().flipNext()}
                toggleFullscreen={toggleFullscreen}
                handleShare={handleShare}
                isFullscreen={isFullscreen}
              />
            ) : (
              <ControlsVertical
                currentPage={currentPage}
                totalPages={pages.length}
                jumpPage={jumpPage}
                setJumpPage={setJumpPage}
                goToPage={goToPage}
                flipPrev={() => bookRef.current.pageFlip().flipPrev()}
                flipNext={() => bookRef.current.pageFlip().flipNext()}
                toggleFullscreen={toggleFullscreen}
                handleShare={handleShare}
                isFullscreen={isFullscreen}
              />
            )}
          </aside>
        )}
      </div>
    </section>
  );
}

/** Vertical toolbar component for desktop */
function ControlsVertical({
  currentPage,
  totalPages,
  jumpPage,
  setJumpPage,
  goToPage,
  flipPrev,
  flipNext,
  toggleFullscreen,
  handleShare,
  isFullscreen,
}) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50/80 px-2 py-3 shadow-sm backdrop-blur-sm dark:border-neutral-700 dark:bg-neutral-900/80">
      {/* Page info (vertical style) */}
      <div className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
        {currentPage + 1} / {totalPages}
      </div>

      {/* Nav */}
      <button
        onClick={flipPrev}
        className="rounded-lg bg-white p-2 text-neutral-700 hover:bg-neutral-100 shadow-sm dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
        title="Previous page"
        aria-label="Previous page"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={flipNext}
        className="rounded-lg bg-white p-2 text-neutral-700 hover:bg-neutral-100 shadow-sm dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
        title="Next page"
        aria-label="Next page"
      >
        <ChevronRight size={16} />
      </button>

      {/* Jump to page */}
      <div className="mt-1 flex flex-col items-center gap-2">
        <input
          type="number"
          value={jumpPage}
          onChange={(e) => setJumpPage(e.target.value)}
          placeholder="#"
          className="w-14 rounded-md border px-1 py-2 text-xs bg-white dark:bg-neutral-800 dark:border-neutral-700 text-center shadow-sm"
          aria-label="Jump to page number"
        />
        <button
          onClick={goToPage}
          className="w-14 rounded-md bg-emerald-600 px-2 py-2 text-xs font-medium text-white hover:bg-emerald-500 cursor-pointer shadow-sm"
          aria-label="Go to page"
        >
          Go
        </button>
      </div>

      {/* Divider */}
      <div className="my-1 h-px w-8 bg-neutral-200 dark:bg-neutral-700" />

      {/* Extra actions */}
      <button
        onClick={toggleFullscreen}
        className="rounded-lg bg-white p-2 text-neutral-700 hover:bg-neutral-100 shadow-sm dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
        title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        aria-label="Toggle Fullscreen"
      >
        <Maximize2 size={16} />
      </button>

      <button
        onClick={handleShare}
        className="rounded-lg bg-white p-2 text-neutral-700 hover:bg-neutral-100 shadow-sm dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
        title="Share"
        aria-label="Share"
      >
        <Share2 size={16} />
      </button>
    </div>
  );
}

/** Horizontal toolbar component for mobile */
function ControlsHorizontal({
  currentPage,
  totalPages,
  jumpPage,
  setJumpPage,
  goToPage,
  flipPrev,
  flipNext,
  toggleFullscreen,
  handleShare,
  isFullscreen,
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-neutral-200 bg-neutral-50/80 px-3 py-2 shadow-sm backdrop-blur-sm dark:border-neutral-700 dark:bg-neutral-900/80">
      {/* Left side - Navigation */}
      <div className="flex items-center gap-2">
        <button
          onClick={flipPrev}
          className="rounded-lg bg-white p-2 text-neutral-700 hover:bg-neutral-100 shadow-sm dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
          title="Previous page"
          aria-label="Previous page"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={flipNext}
          className="rounded-lg bg-white p-2 text-neutral-700 hover:bg-neutral-100 shadow-sm dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
          title="Next page"
          aria-label="Next page"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Center - Page info */}
      <div className="text-sm font-medium text-neutral-600 dark:text-neutral-400 px-2">
        {currentPage + 1} / {totalPages}
      </div>

      {/* Jump to page */}
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={jumpPage}
          onChange={(e) => setJumpPage(e.target.value)}
          placeholder="#"
          className="w-12 rounded-md border px-2 py-1 text-xs bg-white dark:bg-neutral-800 dark:border-neutral-700 text-center shadow-sm"
          aria-label="Jump to page number"
        />
        <button
          onClick={goToPage}
          className="rounded-md bg-emerald-600 px-3 py-1 text-xs font-medium text-white hover:bg-emerald-500 shadow-sm"
          aria-label="Go to page"
        >
          Go
        </button>
      </div>

      {/* Right side - Actions */}
      <div className="flex items-center gap-2">
        <button
          onClick={toggleFullscreen}
          className="rounded-lg bg-white p-2 text-neutral-700 hover:bg-neutral-100 shadow-sm dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
          title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          aria-label="Toggle Fullscreen"
        >
          <Maximize2 size={16} />
        </button>

        <button
          onClick={handleShare}
          className="rounded-lg bg-white p-2 text-neutral-700 hover:bg-neutral-100 shadow-sm dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
          title="Share"
          aria-label="Share"
        >
          <Share2 size={16} />
        </button>
      </div>
    </div>
  );
}
