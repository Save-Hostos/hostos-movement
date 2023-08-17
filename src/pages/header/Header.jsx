import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/hostos-movement/" },
  { name: "Gallery", href: "/hostos-movement/gallery" },
  { name: "Story", href: "/hostos-movement/story" },
  { name: "Gerald Meyer", href: "/hostos-movement/gerald" },
];

const Header = ({ setMobileMenuOpen, mobileMenuOpen }) => {
  const location = useLocation();
  const isRootPath = location.pathname === "/hostos-movement/";
  const headerClass = isRootPath ? "" : "bg-gray-900";

  return (
    <div>
      {/* Header */}
      <header className={`absolute inset-x-0 top-0 z-50 ${headerClass}`}>
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/hostos-movement/" className="-m-1.5 p-1.5">
              <div className="flex items-center">
                <img
                  className="h-24 w-auto"
                  src="../src/assets/logo/hostos-white.png"
                  alt="Hostos Logo"
                />
              </div>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-md font-semibold leading-6 text-white hover:text-orange ease-in transition duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <div className="flex items-center">
                  <img
                    className="h-24 w-auto"
                    src="../src/assets/logo/hostos-white.png"
                    alt="Hostos Logo"
                  />
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-orange  ease-in transition duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
};

Header.propTypes = {
  setMobileMenuOpen: PropTypes.func.isRequired,
  mobileMenuOpen: PropTypes.bool.isRequired,
};

export default Header;
