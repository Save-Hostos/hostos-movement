import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Founders", href: "/founders" },
];

const Header = ({ setMobileMenuOpen, mobileMenuOpen }) => {
  const location = useLocation();
  const isRootPath = location.pathname === "/";
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
            <Link to="/" className="-m-1.5 p-1.5" aria-label="Go to home page">
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
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-white"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12" role="list">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  role="listitem"
                  aria-current={isActive ? "page" : undefined}
                  className={`text-md font-semibold leading-6 ease-in transition duration-200 hover:text-orange focus:outline-none focus:text-orange ${
                    isActive ? "text-orange underline underline-offset-4" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>

        {/* Mobile menu — slide in from right with animated backdrop */}
        <Transition appear show={mobileMenuOpen} as={Fragment}>
          <Dialog
            as="div"
            className="lg:hidden"
            onClose={setMobileMenuOpen}
          >
            {/* Backdrop */}
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 z-40 bg-black/30" />
            </Transition.Child>

            {/* Panel slides in from right */}
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-200 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm md:max-w-md sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <Link
                    to="/"
                    className="-m-1.5 p-1.5"
                    aria-label="Go to home page"
                  >
                    <div className="flex items-center">
                      <img
                        className="h-24 w-auto"
                        src="assets/logo/hostos-white.png"
                        alt="Hostos Logo"
                      />
                    </div>
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <nav className="space-y-2 py-6" aria-label="Mobile navigation">
                      {navigation.map((item) => {
                        const isActive = location.pathname === item.href;
                        return (
                          <Link
                            key={item.name}
                            to={item.href}
                            aria-current={isActive ? "page" : undefined}
                            className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ease-in transition duration-200 focus:outline-none hover:text-orange ${
                              isActive ? "text-orange" : "text-white"
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                    </nav>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </Dialog>
        </Transition>
      </header>
    </div>
  );
};

Header.propTypes = {
  setMobileMenuOpen: PropTypes.func.isRequired,
  mobileMenuOpen: PropTypes.bool.isRequired,
};

export default Header;
