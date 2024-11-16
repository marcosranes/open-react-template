"use client";

import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";

export default function Header() {
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = (): void => {
    setisClick(!isClick);
  };

  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-1 sm:px-6">
        <div className="relative flex flex-1 h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          {/* Site branding */}
          <Logo />

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-4">
            <div className="flex items-center space-x-10">
              <li className="hidden md:block">
                <a
                  className="hover:underline hover:underline-offset-4"
                  href="/"
                  rel="noopener noreferrer"
                >
                  Home
                </a>
              </li>
              <li className="hidden md:block">
                <a
                  className="hover:underline hover:underline-offset-4"
                  href="/about"
                  rel="noopener noreferrer"
                >
                  About
                </a>
              </li>
              <li className="hidden md:block">
                <a
                  className="hover:underline hover:underline-offset-4"
                  href="/services"
                  rel="noopener noreferrer"
                >
                  Services
                </a>
              </li>
              <li className="hidden md:block">
                <a
                  className="hover:underline hover:underline-offset-4"
                  href="/contact"
                  rel="noopener noreferrer"
                >
                  Contact
                </a>
              </li>
            </div>
            <li>
              <button
                className="md:hidden inline-flex items-center justify-center p-1 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </li>
            <li>
              <Link
                href="/signin"
                className="btn-sm relative bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="btn-sm bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {isClick && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-6">
            <a
              className="block text-indigo-200/85 transition hover:text-indigo-500"
              href="/"
              rel="noopener noreferrer"
            >
              Home
            </a>
            <a
              className="block text-indigo-200/85 transition hover:text-indigo-500"
              href="/about"
              rel="noopener noreferrer"
            >
              About
            </a>
            <a
              className="block text-indigo-200/85 transition hover:text-indigo-500"
              href="/services"
              rel="noopener noreferrer"
            >
              Services
            </a>
            <a
              className="block text-indigo-200/85 transition hover:text-indigo-500"
              href="/contact"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
