import type { ReactNode } from "react";
import "../App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import StarsCanvas from "./StarsBackground";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
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
