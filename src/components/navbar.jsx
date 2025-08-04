import React from "react";
import { Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 glass-dark backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between px-6 lg:px-8 mx-auto">
        <a
          className="flex items-center space-x-3 group"
          href="/"
        >
          <div className="relative">
            <div className="h-12 w-12 rounded-2xl glass-button flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-all duration-300 group-hover:scale-105">
              <Target className="h-6 w-6 text-[#8F8AF4]" />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
          </div>
          <span className="text-2xl font-bold gradient-text">CareerPath</span>
        </a>

        <nav className="hidden md:flex items-center space-x-1">
            {[
              { name: "Assessment", href: "/assessment" },
              { name: "Profile", href: "/profile" },
              { name: "Recommendations", href: "/recommendations" },
              { name: "Explore", href: "/explore" },
              { name: "About", href: "#about" },
            ].map((item) => (
              <Link
                key={item.name}
                className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/10 group"
                to={item.href}
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/login">
              <button
                variant="ghost"
                size="sm"
                className="px-4 py-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl glass-button border-0"
              >
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button
                size="sm"
                className="glass-button bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white border-0 shadow-glow hover:shadow-glow-lg transition-all duration-300 rounded-xl px-4 py-1.5 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </Link>
          </div>
      </div>
    </header>
  );
};

export default Navbar;
