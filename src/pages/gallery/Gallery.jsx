import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ImageViewer from "react-simple-image-viewer";
import { data } from "../../../data";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const images = data.map(({ imagePath }) => imagePath);

  useEffect(() => {
    if (isViewerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup to ensure scrolling is re-enabled
    };
  }, [isViewerOpen]);

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

  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="pt-40 md:pt-40 lg:pt-40 mb-[2%] mx-[2%] lg:mx-[5%]">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
        <Masonry gutter="16px">
          {data.map(({ Name, href, imagePath }, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              key={index}
              className="rounded-md relative"
              style={{ width: "100%" }}
            >
              <LazyLoadImage
                src={imagePath}
                alt={Name}
                effect="blur"
                width="100%"
                className="rounded-md"
                onClick={() => openImageViewer(index)}
              />
              <div
                className="absolute bottom-0 bg-opacity-60 bg-black text-white p-2 rounded-b-md flex justify-between items-center"
                style={{ width: "100%" }}
              >
                {Name}
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange ease-in transition duration-200"
                  aria-label={`View source for ${Name}`}
                >
                  View Source
                </a>
              </div>
            </motion.div>
          ))}
        </Masonry>
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
    </div>
  );
};

export default Gallery;
