import React from "react";
import {
  Mail,
  Target,
  Facebook,
  Twitter,
  Instagram,
  Phone,
  Globe,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 md:px-6 py-12 mx-auto">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <Target className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">CareerPath</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI-powered career guidance platform helping professionals discover
              their perfect career path.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <div className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Platform</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="/assessment"
                  className="hover:text-white transition-colors"
                >
                  Career Assessment
                </a>
              </li>
              <li>
                <a
                  href="/auth"
                  className="hover:text-white transition-colors"
                >
                  Sign Up
                </a>
              </li>
              <li>
                <a
                  href="/auth"
                  className="hover:text-white transition-colors"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="/results"
                  className="hover:text-white transition-colors"
                >
                  View Results
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                support@careerpath.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                1-800-CAREER-1
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Available 24/7
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CareerPath. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
