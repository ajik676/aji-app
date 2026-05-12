import { FaSearch, FaBell } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">

      {/* LEFT */}
      <div className="flex items-center gap-5">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-400 flex items-center justify-center shadow-md">
            <FcAreaChart className="text-2xl" />
          </div>

          <div>
            <h1 className="text-lg font-bold text-gray-800 leading-none">
              Dashboard
            </h1>

            <p className="text-xs text-gray-400 mt-1">
              Product Management System
            </p>
          </div>
        </div>

        {/* SEARCH */}
        <div className="relative hidden md:block w-[360px]">

          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-[#F8F9FB] border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

        </div>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        {/* NOTIFICATION */}
        <button className="relative w-11 h-11 rounded-2xl bg-[#F8F9FB] border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition">

          <FaBell className="text-gray-600" />

          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>

        </button>

        {/* SETTINGS */}
        <button className="w-11 h-11 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center hover:bg-red-100 transition">

          <SlSettings className="text-red-500 text-lg" />

        </button>

        {/* PROFILE */}
        <div className="flex items-center gap-3 bg-[#F8F9FB] border border-gray-200 rounded-2xl px-3 py-2 cursor-pointer hover:bg-gray-100 transition">

          <img
            src="/img/rafijelek.jpeg"
            alt="profile"
            className="w-12 h-12 rounded-2xl object-cover"
          />

          <div className="hidden sm:block">

            <p className="text-xs text-gray-400">
              Welcome Back
            </p>

            <h2 className="text-sm font-bold text-gray-800">
              Muhammad Hirzi
            </h2>

          </div>

        </div>

      </div>

    </header>
  );
}