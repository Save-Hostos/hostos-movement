import { useState, useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ImageViewer from "react-simple-image-viewer";
import { data } from "../../../data";

const Gallery = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentFilter, setCurrentFilter] = useState(
    location.state ? location.state : "all"
  );

  const [filteredData, setFilteredData] = useState([]);
  const images = filteredData.map(({ imagePath }) => imagePath);

  useEffect(() => {
    if (isViewerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isViewerOpen]);

  useEffect(() => {
    setFilteredData([...data]);
  }, []);

  useEffect(() => {
    navigate(".", { replace: true, state: currentFilter });
  }, [currentFilter, navigate]);

  useEffect(() => {
    const filter = location.state ? location.state : "all";
    if (filter === "all") {
      setFilteredData([...data]);
    } else {
      setFilteredData([...data.filter((image) => image.Title === filter)]);
    }
  }, [location.state]);

  const filterImages = useCallback((filter) => {
    setCurrentFilter(filter);
  }, []);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
    document.body.style.overflow = "auto";
  };

  // Function to smoothly scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pt-40 md:pt-40 lg:pt-40 mb-[2%] mx-[2%] lg:mx-[5%]">
      <div className="text-center mb-4">
        <button
          onClick={() => filterImages("all")}
          className={`rounded-md px-3.5 py-2.5 text-sm font-semibold leading-6 shadow-sm border border-orange bg-orange transition duration-200 hover:bg-opacity-80 mr-2 ${
            currentFilter === "all" ? "text-[#F5F5F5]" : "text-black"
          }`}
        >
          All
        </button>
        <button
          onClick={() => filterImages("Magda Vasillov")}
          className={`rounded-md px-3.5 py-2.5 text-sm font-semibold leading-6 shadow-sm border border-orange bg-orange transition duration-200 hover:bg-opacity-80 mx-2 ${
            currentFilter === "Magda Vasillov" ? "text-[#F5F5F5]" : "text-black"
          }`}
        >
          Magda Vasillov
        </button>
        <button
          onClick={() => filterImages("Hostos Moments")}
          className={`rounded-md px-3.5 py-2.5 text-sm font-semibold leading-6 shadow-sm border border-orange bg-orange transition duration-200 hover:bg-opacity-80 ml-2 ${
            currentFilter === "Hostos Moments" ? "text-[#F5F5F5]" : "text-black"
          }`}
        >
          Hostos Moments
        </button>
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
                className="rounded-md relative cusor:pointer"
                style={{ width: "100%" }}
              >
                <div className="transform transition-transform duration-200 lg:hover:scale-105">
                  <LazyLoadImage
                    src={imagePath}
                    alt={Name}
                    effect="blur"
                    width="100%"
                    className="rounded-md cursor cursor-pointer"
                    onClick={() => openImageViewer(index)}
                  />
                  <div className="absolute bottom-[1%] right-0 bg-opacity-[75%] bg-black text-white p-2 rounded-md hover:text-orange ease-in transition duration-200">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold"
                      aria-label={`View source for ${Name}`}
                      style={{ padding: "4px 8px" }}
                    >
                      View Source
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </AnimatePresence>
      </ResponsiveMasonry>
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
          backgroundStyle={{ zIndex: 100 }}
        />
      )}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 p-2 bg-gray-900 text-white rounded-full cursor-pointer"
        style={{ width: "60px", height: "60px" }}
      >
        ☝️
      </button>
    </div>
  );
};

export default Gallery;
