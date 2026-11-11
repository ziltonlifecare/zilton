import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_ITEMS } from "~/data/navigation";
import { COMPANY } from "~/data/company";
import { Magnetic } from "~/components/motion/Magnetic";

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 15);

      // Hide on scroll down, show on scroll up
      if (currentY > lastScrollY.current && currentY > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? "bg-[#F0FDF4]/95 backdrop-blur-md border-b border-emerald-200/60 shadow-[0_4px_25px_rgba(15,23,42,0.06)] py-2.5 sm:py-3"
          : "bg-[#F0FDF4]/90 backdrop-blur-sm border-b border-emerald-100/50 py-3 sm:py-4"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* ─── Prominent Logo & Company Branding ─── */}
          <Link
            to="/"
            className="flex items-center gap-3.5 group rounded-xl outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9E71] focus-visible:ring-offset-2"
            aria-label={`${COMPANY.name} — Homepage`}
          >
            {/* Enlarged official logo container with subtle shadow & pristine aspect ratio */}
            <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-2xl bg-white p-1.5 border border-slate-200/90 shadow-[0_2px_10px_rgba(15,23,42,0.06)] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-[#0D9E71]/50 group-hover:shadow-[0_4px_16px_rgba(13,158,113,0.2)] transition-all duration-300">
              <img
                src="/images/branding/logo-512.png"
                alt="Zilton Life Care Logo"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>

            {/* Prominent Company Wordmark & Category Tag */}
            <div className="flex flex-col leading-none">
              <div className="flex items-center gap-1.5">
                <span className="font-editorial text-2xl sm:text-[27px] tracking-tight font-extrabold text-[#0A192F] group-hover:text-[#0D9E71] transition-colors duration-200">
                  Zilton
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D9E71] animate-pulse hidden sm:inline-block" />
              </div>
              <span className="text-[10px] sm:text-[11.5px] tracking-[0.24em] uppercase text-[#0D9E71] font-bold mt-0.5">
                Life Care
              </span>
            </div>
          </Link>

          {/* ─── Desktop Nav Links ─── */}
          <ul className="hidden md:flex items-center gap-7 lg:gap-9 relative" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.to} className="relative">
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `text-[14.5px] font-semibold transition-all py-1.5 px-1 rounded-md outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9E71] ${
                      isActive
                        ? "text-[#0D9E71] font-bold"
                        : "text-[#1E293B] hover:text-[#0D9E71]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-[#0D9E71] to-[#06B6D4] rounded-full animate-in fade-in duration-300 shadow-[0_1px_6px_rgba(13,158,113,0.4)]" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* ─── Desktop Vibrant CTA Action Button (Inspired by Serio's prominent green CTA) ─── */}
          <div className="hidden md:block">
            <Magnetic strength={0.25}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0D9E71] to-[#059669] hover:from-[#10B981] hover:to-[#047857] text-white text-xs uppercase tracking-wider font-bold shadow-[0_4px_16px_rgba(13,158,113,0.35)] hover:shadow-[0_6px_22px_rgba(13,158,113,0.5)] hover:-translate-y-0.5 transition-all duration-200 outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9E71] focus-visible:ring-offset-2"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Magnetic>
          </div>

          {/* ─── Mobile Menu Hamburger ─── */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[#0A192F] hover:bg-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0D9E71] transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6 text-[#0D9E71]" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* ─── Mobile Navigation Drawer ─── */}
        {menuOpen && (
          <div className="md:hidden mt-3 pt-4 pb-6 border-t border-emerald-200/60 bg-[#F0FDF4]/98 backdrop-blur-xl rounded-2xl p-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                        isActive
                          ? "bg-gradient-to-r from-[#0D9E71] to-[#059669] text-white shadow-[0_4px_14px_rgba(13,158,113,0.25)]"
                          : "text-[#1E293B] hover:bg-slate-100"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t border-slate-200/90">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#0D9E71] to-[#059669] text-white text-xs uppercase tracking-wider font-bold shadow-[0_4px_16px_rgba(13,158,113,0.35)]"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
