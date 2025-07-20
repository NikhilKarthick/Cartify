import React, { useState, useEffect } from "react";
import type { ReactNode } from "react";

import { Link } from "react-router-dom";

export interface NavItem {
  label: string;
  href: string;
  disabled?: boolean;
  dropdownItems?: { label: string; href: string }[];
}

export interface NavbarProps {
  logo?: ReactNode;
  navItems: NavItem[];
  rightContent?: ReactNode;
  forceMobileMode?: boolean;
  forceOpenMobileMenu?: boolean;
  vertical?: boolean; // Storybook only
}

export const Navbar: React.FC<NavbarProps> = ({
  logo,
  navItems,
  rightContent,
  forceMobileMode = false,
  forceOpenMobileMenu = false,
  vertical = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (forceOpenMobileMenu) {
      setIsOpen(true);
    }
  }, [forceOpenMobileMenu]);

  const isStorybookVertical = vertical;

  return (
    <nav
      className={`bg-gray-900 text-white ${
        isStorybookVertical ? "w-100 h-screen flex flex-col p-4 space-y-4" : ""
      }`}
    >
      {/* VERTICAL NAVBAR */}
      {isStorybookVertical ? (
        <>
          <div className="text-lg font-bold">{logo || "Navbar"}</div>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                {item.dropdownItems ? (
                  <details className="group">
                    <summary className="cursor-pointer hover:text-blue-400">{item.label}</summary>
                    <ul className="pl-4 mt-1 space-y-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <li key={dropdownItem.href}>
                          <Link
                            to={dropdownItem.href}
                            className="block text-gray-300 hover:text-white"
                          >
                            {dropdownItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    to={item.href}
                    className={`block ${
                      item.disabled
                        ? "text-gray-500 cursor-not-allowed"
                        : "hover:text-blue-400"
                    }`}
                    aria-disabled={item.disabled}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          {rightContent && <div className="pt-4">{rightContent}</div>}
        </>
      ) : (
        <>
          {/* DESKTOP + MOBILE NAVBAR */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0 text-lg font-bold">{logo || "Navbar"}</div>

              {/* Hamburger for mobile */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white focus:outline-none"
                  aria-label="Toggle navigation"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>

              {/* Desktop nav items */}
              <div className={`${forceMobileMode ? "hidden" : "hidden md:flex"} md:items-center md:space-x-6`}>
                <ul className="flex space-x-4 overflow-x-auto max-h-[100px]">
                  {navItems.map((item) => (
                    <li key={item.href} className="relative group">
                      {item.dropdownItems ? (
                        <>
                          <button className="inline-flex items-center hover:text-blue-400 focus:outline-none">
                            {item.label}
                            <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                            </svg>
                          </button>
                          <ul className="absolute hidden group-hover:flex flex-col bg-white text-gray-800 mt-2 rounded shadow-lg min-w-[160px] z-50">
                            {item.dropdownItems.map((dropdownItem) => (
                              <li key={dropdownItem.href}>
                                <Link
                                  to={dropdownItem.href}
                                  className="block px-4 py-2 hover:bg-gray-100"
                                >
                                  {dropdownItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <Link
                          to={item.href}
                          className={`${
                            item.disabled
                              ? "text-gray-500 cursor-not-allowed"
                              : "hover:text-blue-400"
                          }`}
                          aria-disabled={item.disabled}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
                {rightContent && <div className="ml-4">{rightContent}</div>}
              </div>
            </div>
          </div>

          {/* Mobile dropdown nav */}
          {(isOpen || forceOpenMobileMenu) && (
            <div className="md:hidden px-4 pb-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.href}>
                  {item.dropdownItems ? (
                    <details className="group">
                      <summary className="cursor-pointer text-white hover:text-blue-400">
                        {item.label}
                      </summary>
                      <ul className="pl-4 mt-1 space-y-1">
                        {item.dropdownItems.map((dropdownItem) => (
                          <li key={dropdownItem.href}>
                            <Link
                              to={dropdownItem.href}
                              className="block text-gray-300 hover:text-white"
                            >
                              {dropdownItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block ${
                        item.disabled
                          ? "text-gray-500 cursor-not-allowed"
                          : "text-white hover:text-blue-400"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              {rightContent && <div className="mt-4">{rightContent}</div>}
            </div>
          )}
        </>
      )}
    </nav>
  );
};
