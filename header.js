// components/Header.jsx
import React from "react";
import { Link } from "react-scroll";

function Header() {
  return (
    <header className="sticky top-0 z-10 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between whitespace-nowrap px-4 sm:px-6 lg:px-8 py-3 border-b border-gray-200 dark:border-gray-800">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <svg
            className="h-6 w-6 text-primary"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 12l-4-4h8l-4 4z"></path>
          </svg>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Portfolio
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="hero"
            smooth={true}
            duration={600}
            className="cursor-pointer text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={600}
            className="cursor-pointer text-sm font-medium hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={600}
            className="cursor-pointer text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-full h-9 px-4 bg-primary text-white text-sm font-bold shadow-lg hover:bg-opacity-90 transition-all"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
