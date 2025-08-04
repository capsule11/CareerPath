import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Target,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Globe,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-violet-950/30 to-slate-950"></div>
      <div className="container px-6 md:px-8 py-16 relative mx-auto">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="h-12 w-12 rounded-2xl glass-button flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-all duration-300 group-hover:scale-105">
                  <Target className="h-6 w-6 text-violet-400" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
              </div>
              <span className="text-2xl font-bold gradient-text">
                CareerPath
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              AI-powered career guidance platform helping professionals discover
              their perfect career path through advanced assessment and
              personalized recommendations.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="group"
                >
                  <div className="w-10 h-10 rounded-xl glass-button hover:bg-gradient-to-r hover:from-violet-500 hover:to-cyan-500 flex items-center justify-center transition-all duration-300 group-hover:scale-110 hover:shadow-glow">
                    <Icon className="h-5 w-5 text-slate-400 group-hover:text-white" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Platform</h4>
            <ul className="space-y-3 text-slate-400">
              {[
                { name: "Career Assessment", href: "/assessment" },
                { name: "Sign Up", href: "/signup" },
                { name: "Login", href: "/login" },
                { name: "View Results", href: "/results" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg glass-button flex items-center justify-center">
                  <Mail className="h-4 w-4" />
                </div>
                support@careerpath.com
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg glass-button flex items-center justify-center">
                  <Phone className="h-4 w-4" />
                </div>
                1-800-CAREER-1
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg glass-button flex items-center justify-center">
                  <Globe className="h-4 w-4" />
                </div>
                Available 24/7
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} CareerPath. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
