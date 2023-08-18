import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../pages/header/Header";
import Footer from "../pages/footer/Footer";

function Root() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* LANDING PAGE */}
      <main className="mx-auto min-h-screen">
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default Root;
