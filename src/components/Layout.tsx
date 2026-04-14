import type { ReactNode } from "react";
import { useLayoutEffect } from "react";
import "../App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import StarsCanvas from "./StarsBackground";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className="app">
      <StarsCanvas />
      <Navbar />
      <main className="main-content">
        <div className="content-wrapper">
          {children}
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Layout;
