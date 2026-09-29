import React, { useState } from "react";
import assets from "./assets/assets";
import ThemeToggleBtn from "./component/ThemeToggleBtn";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">
      {/* Logo */}
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        className="w-32 sm:w-40 cursor-pointer"
        alt="Logo"
      />

      {/* Navigation */}
      <div
        className={`text-gray-700 dark:text-white md:text-sm
          ${sidebarOpen ? "max-md:w-60 max-md:pl-10" : "max-md:w-0"}
          max-md:fixed max-md:top-0 max-md:left-0
          max-md:h-screen
          max-md:flex max-md:flex-col
          max-md:bg-black/80
          max-md:text-white
          max-md:pt-20
          overflow-hidden
          flex md:items-center gap-8
          transition-all duration-300`}
      >
        {/* Close Button */}
        <img
          src={assets.close_icon}
          alt="Close menu"
          className="w-5 absolute right-4 top-4 md:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />

        {/* Links */}
        <a
          href="#"
          className="md:hover:border-b"
          onClick={() => setSidebarOpen(false)}
        >
          Home
        </a>

        <a
          href="#services"
          className="md:hover:border-b"
          onClick={() => setSidebarOpen(false)}
        >
          Services
        </a>

        <a
          href="#our-work"
          className="md:hover:border-b"
          onClick={() => setSidebarOpen(false)}
        >
          Our Work
        </a>

        <a
          href="#contact-us"
          className="md:hover:border-b"
          onClick={() => setSidebarOpen(false)}
        >
          Contact Us
        </a>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Theme Toggle Button */}
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        {/* Mobile Menu Button */}
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt="Open menu"
          onClick={() => setSidebarOpen(true)}
          className="w-8 md:hidden cursor-pointer"
        />

        {/* Desktop Contact Button */}
        <a
          href="#contact-us"
          className="text-sm max-md:hidden flex items-center
            gap-2 bg-primary text-white px-6 py-2 rounded-full
            cursor-pointer hover:scale-105 transition-all"
        >
          Contact
          <img src={assets.arrow_icon} width={14} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
