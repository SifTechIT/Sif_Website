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

const PDFBookReader = () => {
  const [pages, setPages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [jumpPage, setJumpPage] = useState("");
  const bookRef = useRef(null); // ref to FlipBook component (API)
  const shellRef = useRef(null); // ref to a real DOM node for fullscreen
  const [isFullscreen, setIsFullscreen] = useState(false);

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
          window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        `;
        document.head.appendChild(workerScript);
      } else {
        loadPDF();
      }
    };

    const loadPDF = async () => {
      try {
        const pdf = await window.pdfjsLib.getDocument(SUNYATIMES_PDF).promise;
        const numPages = pdf.numPages;
        const pageImages = [];

        for (let i = 1; i <= numPages; i++) {
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 1.3 });
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          await page.render({ canvasContext: ctx, viewport }).promise;
          pageImages.push(canvas.toDataURL("image/png"));
        }

        setPages(pageImages);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading PDF:", error);
        setIsLoading(false);
      }
    };

    loadPDFJS();
  }, []);

  // Fullscreen state + resize handling
  useEffect(() => {
    const onFsChange = () => {
      const fsEl =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement;
      setIsFullscreen(!!fsEl);

      // Nudge layout so FlipBook recalculates size
      setTimeout(() => {
        try {
          // some versions expose update(); otherwise trigger a resize
          bookRef.current?.pageFlip?.()?.update?.();
        } catch (err) {
          console.error("Error in changing fullscreen", err);
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
    const pageNum = parseInt(jumpPage, 10);
    if (pageNum > 0 && pageNum <= pages.length) {
      bookRef.current.pageFlip().turnToPage(pageNum - 1);
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
      } catch (error) {
        console.error("Share failed:", error);
      }
    } else {
      alert("Sharing not supported in this browser.");
    }
  };

  const handleMore = () => alert("More options coming soon...");

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
      {/* Make fullscreen look right */}
      <style>{`
        /* When the shell is fullscreen, stretch it and center the book */
        .flipbook-shell:fullscreen,
        .flipbook-shell:-webkit-full-screen {
          width: 100vw !important;
          height: 100vh !important;
          background: #0a0a0a;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          box-sizing: border-box;
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

      {/* Flipbook (wrapped in a real DOM shell for fullscreen) */}
      <div
        ref={shellRef}
        className="flipbook-shell overflow-hidden "
        style={{ height: "500px", maxWidth: "100%" }}
      >
        <HTMLFlipBook
          width={450}
          height={500}
          maxHeight={1200}
          showCover={true}
          className="mx-auto"
          onFlip={onFlip}
          ref={bookRef}
        >
          {pages.map((src, index) => (
            <div
              key={index}
              className="page bg-white flex items-center justify-center"
            >
              <img
                src={src}
                alt={`Page ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      {/* Bottom Controls */}
      <div className="border rounded-2xl border-neutral-200 bg-white/95 backdrop-blur-sm px-6 py-3 dark:border-neutral-800 dark:bg-neutral-950/95 mt-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Left buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => bookRef.current.pageFlip().flipPrev()}
              className="rounded-lg bg-neutral-100 p-2 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => bookRef.current.pageFlip().flipNext()}
              className="rounded-lg bg-neutral-100 p-2 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Jump to page */}
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={jumpPage}
              onChange={(e) => setJumpPage(e.target.value)}
              placeholder="Page #"
              className="w-20 rounded-md border px-2 py-1 text-sm dark:bg-neutral-800 dark:border-neutral-700"
            />
            <button
              onClick={goToPage}
              className="rounded-md bg-emerald-600 px-3 py-1 text-sm text-white hover:bg-emerald-500"
            >
              Go
            </button>
          </div>

          {/* Page info */}
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Page {currentPage + 1} / {pages.length}
          </p>

          {/* Extra icons */}
          <div className="flex items-center justify-end gap-3">
            <button
              onClick={toggleFullscreen}
              className="rounded-lg bg-neutral-100 p-2 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
              title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            >
              <Maximize2 size={16} />
            </button>
            <button
              onClick={handleShare}
              className="rounded-lg bg-neutral-100 p-2 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
              title="Share"
            >
              <Share2 size={16} />
            </button>
            {/* <button
              onClick={handleMore}
              className="rounded-lg bg-neutral-100 p-2 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
              title="More options"
            >
              <MoreHorizontal size={16} />
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PDFBookReader;
