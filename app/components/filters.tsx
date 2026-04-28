"use client";

import { useState } from "react";
import { useTheme } from "./ThemeProvider";

type Props = {
  setCategory: (value: string) => void;
};

const mainFilters = ["All", "Food", "Shopping", "Transport"];
const extraFilters = ["Entertainment", "Utilities", "Daily Expenses"];

export default function Filters({ setCategory }: Props) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [active, setActive] = useState("All");
  const [open, setOpen] = useState(false);

  const handleClick = (value: string) => {
    setActive(value);
    setCategory(value);
  };

  const baseBtn =
    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border";

  const activeStyle = isDark
    ? "bg-indigo-500/20 text-indigo-200 border-indigo-400/40"
    : "bg-blue-500/10 text-blue-700 border-blue-400/40";

  const inactiveStyle = isDark
    ? "bg-white/5 text-gray-200 border-white/10 hover:bg-white/10"
    : "bg-black/5 text-gray-800 border-black/10 hover:bg-black/10";

  return (
    <div className="w-full flex flex-col gap-3">
      {/* MAIN FILTERS */}
      <div className="flex flex-wrap gap-2">
        {mainFilters.map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className={`${baseBtn} ${
              active === item ? activeStyle : inactiveStyle
            }`}
          >
            {item}
          </button>
        ))}

        {/* MORE BUTTON (mobile + desktop) */}
        <button
          onClick={() => setOpen(!open)}
          className={`${baseBtn} ${
            isDark
              ? "bg-white/10 text-white border-white/20"
              : "bg-black/5 text-black border-black/10"
          }`}
        >
          More
        </button>
      </div>

      {/* EXTRA FILTERS (DROPDOWN / MOBILE SHEET STYLE) */}
      {open && (
        <div
          className={`
            flex flex-wrap gap-2 p-3 rounded-xl border
            ${isDark ? "bg-gray-900 border-white/10" : "bg-white border-black/10"}
          `}
        >
          {extraFilters.map((item) => (
            <button
              key={item}
              onClick={() => {
                handleClick(item);
                setOpen(false);
              }}
              className={`${baseBtn} ${
                active === item ? activeStyle : inactiveStyle
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
