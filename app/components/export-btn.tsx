"use client";

import { useTheme } from "./ThemeProvider";

export default function ExportBtn({ data }: { data: any[] }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleExport = () => {
    const csv = [
      ["Date", "Category", "Amount"],
      ...data.map((d) => [d.date, d.category, d.amount]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.csv";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleExport}
      className="
        px-4 py-2
        rounded-lg
        font-medium
        transition-all duration-300
        border
        hover:scale-[1.03]
        active:scale-[0.98]
        backdrop-blur-md
      "
      style={{
        background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
        color: isDark ? "#e5e7eb" : "#111827",
        borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
        boxShadow: isDark
          ? "0 10px 30px rgba(0,0,0,0.3)"
          : "0 10px 25px rgba(0,0,0,0.08)",
      }}
    >
      Export CSV
    </button>
  );
}
