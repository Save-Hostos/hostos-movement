import { Link } from "react-router-dom";

export default function Hero() {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative overflow-hidden bg-gray-900 min-h-screen flex flex-col justify-center sm:pb-20">
      {/* Video as the background */}
      <video
        src="assets/video/Hostos-Collection-compressed.mp4"
        alt="Collection Video"
        className="absolute inset-0 z-0 h-full w-full object-cover"
        muted
        loop
        autoPlay
      />
      {/* Overlay tint */}
      <div className="absolute inset-0 z-10 bg-black opacity-[65%]"></div>{" "}
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
                className="rounded-md px-3.5 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm border border-white hover:bg-orange hover:border-orange ease-in transition duration-200"
                onClick={scrollToTop}
              >
                Explore The Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
