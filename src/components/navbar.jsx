import React from 'react'
import { Target, ArrowRight } from 'lucide-react'

const Navbar = () => {
  return (
      <header className="sticky top-0 z-50 w-full border-b border-white/10 glass-dark backdrop-blur-xl">
        <div className="container flex h-20 items-center justify-between px-6 lg:px-8">
          <a className="flex items-center space-x-2" href="/">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <Target className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              CareerPath
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              href="/assessment"
            >
              Assessment
            </a>
            <a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="/profile">
              Profile
            </a>
            <a
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              href="/recommendations"
            >
              Career Recommendations
            </a>
            <a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="/explore">
              Explore Careers
            </a>
            <a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#about">
              About
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="/signup">
              <button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                Sign Up
              </button>
            </a>
            <a href="/login">
              <button
                size="sm"
                className="p-2 x-4 rounded-lg-border bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Sign In
              </button>
            </a>
          </div>
        </div>
      </header>
  )
}

export default Navbar