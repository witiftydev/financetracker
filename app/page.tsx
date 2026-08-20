"use client";

import React, { useState } from "react";
import Chart from "./components/Chart";
import { transaction } from "./lib/data";
import { ThemeProvider, useTheme } from "./components/ThemeProvider";
import ExportBtn from "./components/export-btn";
import Filters from "./components/filters";
import Table from "./components/table";
import AreaChartCard from "./components/AreaChartCard";
import LineChartCard from "./components/LineChartCard";
import DonutChart from "./components/DonutChart";
import ComposedChartCard from "./components/ComposedChartCard";
import Sparkline from "./components/Sparkline";
import CarAbandonmentRateChart from "./components/CarAbandonmentRateChart";
import IncreaseInConversionRateChart from "./components/IncreaseInConversionRateChart";
import ShoppingCartAbandonmentChart from "./components/ShoppingCartAbandonmentChart";

const page = () => {
  const { theme, setTheme } = useTheme();
  const [category, setCategory] = useState("All");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const filtered =
    category === "All"
      ? transaction
      : transaction.filter((t) => t.category === category);
  return (
    <div className="p-6 min-h-screen">
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <CarAbandonmentRateChart />
        <IncreaseInConversionRateChart />
      </div>
      <div className="mt-6">
        <ShoppingCartAbandonmentChart />
      </div>
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">
          Finance Tracker (Some charts design - by Fahim Ahmed Ifty)
        </h1>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-[var(--secondary)] hover:bg-[var(--accent)] transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          )}
        </button>
      </div>
      <Filters setCategory={setCategory} />
      <div className="mt-6">
        {" "}
        <Chart data={filtered} />
      </div>
      <div className="mt-6 ">
        {" "}
        <Table data={filtered} />
      </div>
      <div className="mt-6">
        <AreaChartCard data={filtered} />
      </div>
      <div className="mt-6">
        <LineChartCard data={filtered} />
      </div>
      <div className="mt-6">
        <div className="mt-6">
          <DonutChart data={filtered} />
        </div>
        <div className="mt-6">
          <ComposedChartCard data={filtered} />
        </div>

        <div className="mt-6">
          {" "}
          <Sparkline data={filtered} />
        </div>
        <ExportBtn data={filtered} />
      </div>
    </div>
  );
};

export default page;
