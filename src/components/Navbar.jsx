import React from "react";
import { NavLink } from "react-router-dom";
import { House, LayoutDashboard } from "lucide-react";

const links = [
  {
    label: "Home",
    to: "/",
    end: true,
    icon: House,
  },
  {
    label: "Admin",
    to: "/admin",
    end: false,
    icon: LayoutDashboard,
  },
];

export default function Navbar() {
  return (
    <nav className="flex min-w-0 items-center justify-center" aria-label="Main navigation">
      <ul className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#f8f7fa] p-1.5 sm:w-auto">
        {links.map(({ label, to, end, icon: Icon }) => (
          <li key={to} className="flex-1 sm:flex-none">
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                [
                  "flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-300",
                  isActive
                    ? "bg-[#7367f0] text-white shadow-[0_4px_14px_rgba(115,103,240,0.3)]"
                    : "text-[#6f6b7d] hover:bg-white hover:text-[#7367f0]",
                ].join(" ")
              }
            >
              <Icon size={17} aria-hidden="true" />
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
