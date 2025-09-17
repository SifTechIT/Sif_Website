import {
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  Maximize2,
  MoreHorizontal,
  RotateCw,
  Share2,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import SUNYATIMES_PDF from "../../assets/pdf.pdf";
const PDFBookReader = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [scale, setScale] = useState(1.0);
  const [rotation, setRotation] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [pdfDoc, setPdfDoc] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState("");
  const leftCanvasRef = useRef(null);
  const rightCanvasRef = useRef(null);

  // Load PDF.js
  useEffect(() => {
    const loadPDFJS = async () => {
      if (!window.pdfjsLib) {
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
        document.head.appendChild(script);

        const workerScript = document.createElement("script");
        workerScript.textContent = `
          window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        `;
        document.head.appendChild(workerScript);

        script.onload = () => loadPDF();
      } else {
        loadPDF();
      }
    };

    const loadPDF = async () => {
      try {
        const pdf = await window.pdfjsLib.getDocument(SUNYATIMES_PDF).promise;
        setPdfDoc(pdf);
        setTotalPages(pdf.numPages);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading PDF:", error);
        setIsLoading(false);
      }
    };

    loadPDFJS();
  }, []);

  // Render page on canvas
  const renderPage = async (pageNum, canvas) => {
    if (!pdfDoc || !canvas || pageNum < 1 || pageNum > totalPages) return;

    try {
      const page = await pdfDoc.getPage(pageNum);
      const context = canvas.getContext("2d");

      const viewport = page.getViewport({ scale, rotation });
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      await page.render(renderContext).promise;
    } catch (error) {
      console.error("Error rendering page:", error);
    }
  };

  // Render current spread (left and right pages)
  useEffect(() => {
    if (!pdfDoc) return;

    const renderSpread = async () => {
      // For book view, show two pages side by side
      // Left page (even page numbers on left)
      const leftPageNum = currentPage % 2 === 0 ? currentPage - 1 : currentPage;
      // Right page (odd page numbers on right)
      const rightPageNum = leftPageNum + 1;

      if (leftCanvasRef.current && leftPageNum >= 1) {
        await renderPage(leftPageNum, leftCanvasRef.current);
      }

      if (rightCanvasRef.current && rightPageNum <= totalPages) {
        await renderPage(rightPageNum, rightCanvasRef.current);
      }
    };

    renderSpread();
  }, [pdfDoc, currentPage, scale, rotation]);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setIsFlipping(true);
      setFlipDirection("next");
      setTimeout(() => {
        setCurrentPage((prev) => prev + 2);
        setIsFlipping(false);
      }, 300);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setIsFlipping(true);
      setFlipDirection("prev");
      setTimeout(() => {
        setCurrentPage((prev) => Math.max(1, prev - 2));
        setIsFlipping(false);
      }, 300);
    }
  };

  const goToPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum % 2 === 0 ? pageNum - 1 : pageNum);
    }
  };

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.2, 2.5));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.5));
  const rotate = () => setRotation((prev) => (prev + 90) % 360);

  if (isLoading) {
    return (
      <section id="sunyatimes" className="mt-16">
        <div className="mb-6 grid gap-6 md:grid-cols-3 md:items-center">
          <div className="md:col-span-2">
            <p className="text-sm uppercase tracking-wider text-emerald-600">
              Sunyatimes
            </p>
            <h2 className="mt-1 text-3xl font-semibold tracking-tight">
              Our Annual Voice of Transformation
            </h2>
            <p className="mt-2 max-w-2xl text-neutral-700 dark:text-neutral-300">
              Stories of change across farmers, women, children, and
              communities. Download the latest edition or read inline.
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

        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow dark:border-neutral-800 dark:bg-neutral-950">
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
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
    <section id="sunyatimes" className="mt-16">
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

      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-950">
        {/* Book Reader Container */}
        <div
          className="relative bg-neutral-100 dark:bg-neutral-900"
          style={{ height: "80vh" }}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevPage}
            disabled={currentPage <= 1}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg backdrop-blur-sm hover:bg-white disabled:cursor-not-allowed disabled:opacity-30 dark:bg-neutral-800/90 dark:hover:bg-neutral-800"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextPage}
            disabled={currentPage >= totalPages - 1}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg backdrop-blur-sm hover:bg-white disabled:cursor-not-allowed disabled:opacity-30 dark:bg-neutral-800/90 dark:hover:bg-neutral-800"
          >
            <ChevronRight size={24} />
          </button>

          {/* Book Pages Container */}
          <div className="flex h-full items-center justify-center p-8">
            <div
              className={`flex shadow-2xl transition-transform duration-300 ${
                isFlipping
                  ? flipDirection === "next"
                    ? "transform -translate-x-4 rotate-1"
                    : "transform translate-x-4 -rotate-1"
                  : "transform-none"
              }`}
              style={{
                maxHeight: "90%",
                maxWidth: "90%",
                perspective: "1000px",
              }}
            >
              {/* Left Page */}
              <div className="relative bg-white shadow-lg">
                <canvas
                  ref={leftCanvasRef}
                  className="block max-h-full max-w-full"
                  style={{
                    filter: isFlipping ? "brightness(0.9)" : "none",
                    transition: "filter 0.3s ease",
                  }}
                />
              </div>

              {/* Book Spine */}
              <div className="w-4 bg-gradient-to-r from-neutral-300 to-neutral-400 shadow-inner dark:from-neutral-600 dark:to-neutral-700"></div>

              {/* Right Page */}
              <div className="relative bg-white shadow-lg">
                <canvas
                  ref={rightCanvasRef}
                  className="block max-h-full max-w-full"
                  style={{
                    filter: isFlipping ? "brightness(0.9)" : "none",
                    transition: "filter 0.3s ease",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Control Bar */}
        <div className="border-t border-neutral-200 bg-white/95 backdrop-blur-sm px-6 py-4 dark:border-neutral-800 dark:bg-neutral-950/95">
          <div className="flex items-center justify-between">
            {/* Left Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={zoomOut}
                className="rounded-lg bg-neutral-100 p-2 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
                title="Zoom Out"
              >
                <ZoomOut size={16} />
              </button>

              <button
                onClick={zoomIn}
                className="rounded-lg bg-neutral-100 p-2 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
                title="Zoom In"
              >
                <ZoomIn size={16} />
              </button>

              <button
                onClick={rotate}
                className="rounded-lg bg-neutral-100 p-2 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
                title="Rotate"
              >
                <RotateCw size={16} />
              </button>

              <div className="ml-2 text-xs text-neutral-500">
                {Math.round(scale * 100)}%
              </div>
            </div>

            {/* Center - Page Info */}
            <div className="flex items-center gap-4">
              <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                {currentPage}/{totalPages}
              </div>

              <div className="flex items-center gap-2">
                <div className="grid grid-cols-2 gap-1">
                  <div className="h-2 w-2 rounded-sm bg-neutral-300"></div>
                  <div className="h-2 w-2 rounded-sm bg-neutral-300"></div>
                  <div className="h-2 w-2 rounded-sm bg-neutral-300"></div>
                  <div className="h-2 w-2 rounded-sm bg-neutral-300"></div>
                </div>
              </div>

              <input
                type="range"
                min="1"
                max={totalPages}
                value={currentPage}
                onChange={(e) => goToPage(parseInt(e.target.value))}
                className="w-24 accent-emerald-600"
              />
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-3">
              <button
                className="rounded-lg bg-neutral-100 p-2 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
                title="Fullscreen"
              >
                <Maximize2 size={16} />
              </button>

              <button
                className="rounded-lg bg-neutral-100 p-2 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
                title="Share"
              >
                <Share2 size={16} />
              </button>

              <button
                className="rounded-lg bg-neutral-100 p-2 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
                title="More options"
              >
                <MoreHorizontal size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Keyboard Navigation Handler */}
      <div
        className="sr-only"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            prevPage();
          } else if (e.key === "ArrowRight") {
            e.preventDefault();
            nextPage();
          }
        }}
      />
    </section>
  );
};

export default PDFBookReader;
