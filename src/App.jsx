import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Home from "./Home/Home";
import Admin from "./components/Admin/Admin";

function AppShell() {
  const location = useLocation();
  const showSidebar = location.pathname.toLowerCase().startsWith("/admin");

  return (
    <div className="flex min-h-screen flex-col">
      {/* Topbar */}
      <header className="sticky top-0 z-50 bg-[#f8f7fa]/90 px-2 pt-2 backdrop-blur-xl sm:px-4 lg:px-6">
        <div className="mx-auto grid min-h-[clamp(5rem,7vw,6.5rem)] w-full max-w-none grid-cols-1 items-center gap-3 rounded-2xl border border-[#dbdade] bg-white/95 px-3 py-3 shadow-[0_4px_18px_rgba(47,43,61,0.08)] sm:px-5 lg:grid-cols-[auto_minmax(18rem,1fr)_auto] lg:gap-5 lg:px-6">
          <div className="min-w-0 flex-shrink-0">
            <h1 className="text-[clamp(1.45rem,1.2vw+1rem,2.25rem)] font-extrabold tracking-[0.12em] text-[#7367f0]">Inventra</h1>
            <p className="text-[clamp(0.85rem,0.45vw+0.72rem,1.05rem)] text-[#6f6b7d]">Inventory Dashboard</p>
          </div>

          <Navbar />

          <div className="hidden items-center gap-4 md:flex">
            {/* Search */}
            <input
              type="text"
              placeholder="Search..."
              className="w-56 rounded-xl border border-[#dbdade] bg-white px-4 py-2 text-sm text-[#2f2b3d] outline-none transition-all duration-300 placeholder:text-[#a5a3ae] focus:border-[#7367f0] focus:shadow-[0_0_0_3px_rgba(115,103,240,0.14)]"
            />

            {/* Profile */}
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#7367f0] text-lg font-semibold text-white shadow-[0_4px_14px_rgba(115,103,240,0.35)]">
              S
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {showSidebar && <Sidebar />}

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-3 sm:p-5 lg:p-6">
          <div className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-none flex-col rounded-2xl border border-[#dbdade] bg-white p-4 shadow-[0_4px_18px_rgba(47,43,61,0.08)] sm:p-6 lg:p-8">
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin/*" element={<Admin />} />
              </Routes>
            </div>

            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f7fa] text-[#2f2b3d]">
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </div>
  );
}
