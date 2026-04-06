import { useState, useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  ArrowUpIcon,
  ArrowTopRightOnSquareIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { data } from "../../../data";
import { scrollToTop } from "../../utils/scroll";

const safeStorage = {
  get: (key, fallback = null) => {
    try {
      return localStorage.getItem(key) ?? fallback;
    } catch {
      return fallback;
    }
  },
  set: (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch {
      // Private/restricted browsing — silently ignore
    }
  },
};

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Magda Vasillov", value: "Magda Vasillov" },
  { label: "Hostos Moments", value: "Hostos Moments" },
];

const Gallery = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentFilter, setCurrentFilter] = useState(
    location.state ?? safeStorage.get("galleryFilter", "all")
  );
  const [filteredData, setFilteredData] = useState([]);
  const images = filteredData.map(({ imagePath }) => imagePath);

  // Lock body scroll when viewer is open
  useEffect(() => {
    if (isViewerOpen) {
      document.body.classList.add("scroll-locked");
    }
    return () => {
      document.body.classList.remove("scroll-locked");
    };
  }, [isViewerOpen]);

  // Keyboard navigation for custom viewer
  useEffect(() => {
    if (!isViewerOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeImageViewer();
      if (e.key === "ArrowLeft")
        setCurrentImage((prev) => Math.max(0, prev - 1));
      if (e.key === "ArrowRight")
        setCurrentImage((prev) => Math.min(filteredData.length - 1, prev + 1));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isViewerOpen, filteredData.length]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setFilteredData([...data]);
  }, []);

  useEffect(() => {
    navigate(".", { replace: true, state: currentFilter });
  }, [currentFilter, navigate]);

  useEffect(() => {
    const initialFilter =
      location.state ?? safeStorage.get("galleryFilter", "all");
    if (initialFilter === "all") {
      setFilteredData([...data]);
    } else {
      setFilteredData([
        ...data.filter((image) => image.Title === initialFilter),
      ]);
    }
    safeStorage.set("galleryFilter", initialFilter);
  }, [location.state]);

  const filterImages = useCallback((filter) => {
    setCurrentFilter(filter);
    safeStorage.set("galleryFilter", filter);
  }, []);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const currentItem = filteredData[currentImage];

  return (
    <div className="pt-40 mb-[2%] mx-[2%] lg:mx-[5%]">
      {/* Filter buttons */}
      <div
        className="text-center mb-4"
        role="group"
        aria-label="Filter gallery images"
      >
        {FILTERS.map(({ label, value }, i) => (
          <button
            key={value}
            type="button"
            onClick={() => filterImages(value)}
            aria-pressed={currentFilter === value}
            className={`rounded-md px-3.5 py-2.5 text-sm font-semibold leading-6 shadow-sm border border-orange bg-orange transition duration-200 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 ${
              i === 0 ? "mr-2" : i === FILTERS.length - 1 ? "ml-2" : "mx-2"
            } ${
              currentFilter === value
                ? "text-white ring-2 ring-inset ring-white/40"
                : "text-gray-900"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Screen-reader announcement for filter results */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {`Showing ${filteredData.length} image${filteredData.length !== 1 ? "s" : ""}`}
      </div>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
        <AnimatePresence>
          <Masonry gutter="16px">
            {filteredData.map(({ Name, href, imagePath }, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                key={`${currentFilter}-${index}`}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="rounded-md relative w-full group"
              >
                <div className="transform transition-transform duration-200 lg:hover:scale-105">
                  {/* Image opener */}
                  <button
                    type="button"
                    className="w-full p-0 border-0 bg-transparent cursor-pointer rounded-md block focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
                    onClick={() => openImageViewer(index)}
                    aria-label={`Open image: ${Name}`}
                  >
                    <LazyLoadImage
                      src={imagePath}
                      alt={Name}
                      effect="blur"
                      width="100%"
                      className="rounded-md block"
                    />
                  </button>

                  {/* View Source — small on mobile, hover-reveal on lg+ */}
                  {href && (
                    <div className="absolute bottom-2 right-2 transition-opacity duration-200 lg:opacity-0 lg:pointer-events-none lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto lg:group-focus-within:opacity-100 lg:group-focus-within:pointer-events-auto">
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 sm:gap-1.5 bg-black/80 backdrop-blur-sm text-white text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full hover:bg-orange transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                        aria-label={`View source for ${Name} (opens in new tab)`}
                      >
                        <ArrowTopRightOnSquareIcon
                          className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0"
                          aria-hidden="true"
                        />
                        Source
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </Masonry>
        </AnimatePresence>
      </ResponsiveMasonry>

      {/* Custom image viewer modal */}
      {isViewerOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-stretch justify-center sm:items-center px-2 sm:px-0"
          onClick={closeImageViewer}
          role="dialog"
          aria-modal="true"
          aria-label={`Image viewer: ${currentItem?.Name ?? ""}`}
        >
          {/* Close */}
          <button
            type="button"
            className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white rounded-full p-1"
            onClick={closeImageViewer}
            aria-label="Close image viewer"
          >
            <XMarkIcon className="w-8 h-8" aria-hidden="true" />
          </button>

          {/* Counter — sm+ only (mobile counter lives in the bottom nav row) */}
          <div className="hidden sm:block absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm select-none">
            {currentImage + 1} / {images.length}
          </div>

          {/* Side arrows — sm+ only */}
          {currentImage > 0 && (
            <button
              type="button"
              className="hidden sm:flex absolute left-5 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
              onClick={(e) => { e.stopPropagation(); setCurrentImage((p) => p - 1); }}
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          )}
          {currentImage < images.length - 1 && (
            <button
              type="button"
              className="hidden sm:flex absolute right-5 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
              onClick={(e) => { e.stopPropagation(); setCurrentImage((p) => p + 1); }}
              aria-label="Next image"
            >
              <ChevronRightIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          )}

          {/* Inner column — full height on mobile so controls pin to bottom */}
          <div
            className="flex flex-col items-center w-full sm:w-auto h-full sm:h-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image + caption — flex-1 pushes bottom controls down on mobile */}
            <div className="flex flex-col items-center gap-2 flex-1 justify-center w-full sm:w-auto pt-16 sm:pt-0 px-2 sm:px-0">
              <img
                src={images[currentImage]}
                alt={currentItem?.Name ?? ""}
                className="max-h-[60vh] sm:max-h-[80vh] max-w-[96vw] sm:max-w-[80vw] object-contain select-none block"
                draggable={false}
              />

              {/* Museum label — below image, left-aligned */}
              {currentItem?.Title && (
                <div className="w-full max-w-[96vw] sm:max-w-[80vw] text-left">
                  <p className="text-white text-[10px] sm:text-xs font-semibold tracking-widest uppercase leading-tight">
                    Collection: {currentItem.Title}
                  </p>
                  {currentItem.Date && (
                    <p className="text-white text-[9px] sm:text-[10px] tracking-wider mt-0.5 italic">
                      {currentItem.Date}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Bottom controls — pinned to bottom on mobile, stacked below image on sm+ */}
            <div className="flex flex-col items-center gap-3 pb-8 sm:pb-0 mt-3 w-full sm:w-auto">
              {/* Mobile nav — hidden on sm+ */}
              <div className="flex sm:hidden items-center gap-5">
                <button
                  type="button"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-30 disabled:cursor-not-allowed"
                  onClick={() => setCurrentImage((p) => p - 1)}
                  disabled={currentImage === 0}
                  aria-label="Previous image"
                >
                  <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
                </button>
                <span className="text-white/50 text-sm select-none tabular-nums">
                  {currentImage + 1} / {images.length}
                </span>
                <button
                  type="button"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-30 disabled:cursor-not-allowed"
                  onClick={() => setCurrentImage((p) => p + 1)}
                  disabled={currentImage === images.length - 1}
                  aria-label="Next image"
                >
                  <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              {/* View Source */}
              {currentItem?.href && (
                <a
                  href={currentItem.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-black/80 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full border border-white/20 hover:bg-orange transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label={`View source for ${currentItem.Name} (opens in new tab)`}
                >
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" aria-hidden="true" />
                  View Source
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Back to top */}
      <button
        type="button"
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gray-900 text-white rounded-full shadow-lg hover:bg-orange transition-colors duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className="w-5 h-5" aria-hidden="true" />
      </button>
    </div>
  );
};

export default Gallery;
