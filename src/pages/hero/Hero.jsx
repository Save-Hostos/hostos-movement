import { Link } from "react-router-dom";
import { scrollToTop, scrollToSection } from "../../utils/scroll";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gray-900 min-h-screen flex flex-col justify-center sm:pb-20">
      {/* Decorative background video */}
      <video
        src="assets/video/hostovemovement.mp4"
        className="absolute inset-0 z-0 h-full w-full object-cover"
        muted
        loop
        autoPlay
        playsInline
        aria-hidden="true"
        tabIndex={-1}
      />
      {/* Overlay tint */}
      <div className="absolute inset-0 z-10 bg-black opacity-[65%]" aria-hidden="true" />
      {/* Text content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-20">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              La Lucha: The Save Hostos Movement
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#F5F5F5] opacity-[85%]">
              The Save Hostos Movement Online Exhibit commemorates the activists
              who fought to create and save Hostos Community College in the
              South Bronx.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/gallery"
                className="rounded-md px-3.5 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm border border-white hover:bg-orange hover:border-orange ease-in transition duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                onClick={scrollToTop}
              >
                Explore The Collection
              </Link>
              <button
                type="button"
                className="rounded-md px-3.5 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm border border-white hover:bg-orange hover:border-orange ease-in transition duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                onClick={() => scrollToSection("theMovement")}
              >
                Read The Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
