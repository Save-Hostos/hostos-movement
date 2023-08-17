import { Link } from "react-router-dom";

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="flex items-center">
          <Link
            to="/hostos-movement/"
            className="-m-1.5 p-1.5"
            onClick={scrollToTop}
          >
            <img
              className="h-24 w-auto"
              src="../src/assets/logo/hostos-white.png"
              alt="Hostos Logo"
            />
          </Link>
        </div>
        <p className="text-sm text-white text-center ">
          ©2023 Hostos Community College. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
