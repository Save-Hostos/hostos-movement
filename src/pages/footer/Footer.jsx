import { Link } from "react-router-dom";

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <div className="flex flex-col items-center md:flex-col md:items-center md:justify-center mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="flex items-center mb-4">
          <Link to="/" className="-m-1.5 p-1.5" onClick={scrollToTop}>
            <div className="flex flex-row items-center space-x-4">
              <img
                className="h-12 w-auto sm:h-24 md:h-24"
                src="assets/logo/hostos-white.png"
                alt="Hostos Logo"
              />
              <img
                className="h-10 w-auto sm:h-16 md:h-16"
                src="assets/logo/cuny-logo-white.png"
                alt="CUNY Logo"
              />
            </div>
          </Link>
        </div>
        <p className="text-sm text-white text-center mt-4 md:mt-0">
          ©2023 Hostos Community College. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
