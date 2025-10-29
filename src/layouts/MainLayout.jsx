import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lenis from "@studio-freight/lenis";

function MainLayout() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Adjust for smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // default easing
      smoothWheel: true,
    });

    // Animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <Navbar />
      <main >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
