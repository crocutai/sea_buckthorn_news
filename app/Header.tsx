"use client";

import { pages, tabs } from "@/reference/tab";
import { usePathname, useSearchParams } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentUrl = pathname + (searchParams.toString() ? "?" + searchParams.toString() : "");

  const isTabActive = (tabUrl: string) => {
    if (tabUrl.startsWith("/?")) {
      // Extract article param from tabUrl (e.g., "?article=health" -> "health")
      const tabParams = new URLSearchParams(tabUrl.substring(1));
      const tabArticle = tabParams.get("article");
      // Check if current URL has the same article param
      const currentArticle = searchParams.get("article");
      return tabArticle === currentArticle;
    }
    return currentUrl === tabUrl;
  };

  return (
    <header className="w-full bg-white dark:bg-[#3D2418] border-b border-[#FFD4A3] dark:border-[#5C3D2E] sticky top-0 z-50">
      <nav className="flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-3 gap-2 sm:gap-0">
        {/* Row 1: Pages links (left) and Website name (center on wide, left on narrow) */}
        <div className="flex items-center justify-between w-full sm:w-auto gap-4">
          {/* Left: Pages links */}
          <div className="flex items-center gap-4">
            {pages.map((p) => (
              <a
                key={p.url}
                href={p.url}
                className="text-sm font-medium text-[#8B4513] dark:text-[#FFD4A3] hover:text-[#FF8C00] dark:hover:text-[#FFA500] transition-colors"
              >
                {p.name}
              </a>
            ))}
          </div>

          {/* Center: Website name - hidden on narrow if needed, or shown */}
          <div className="sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
            <h1 className="text-lg font-bold text-[#FF8C00] dark:text-[#FFA500]">
              沙棘x健康關注組
            </h1>
          </div>
        </div>

        {/* Row 2 on narrow / Right on wide: Tabs with block style when selected */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-end">
          {tabs.map((tab) => {
            const isActive = isTabActive(tab.url);
            return (
              <a
                key={tab.url}
                href={isActive ? "/" : tab.url}
                className={`text-sm font-medium px-3 py-1.5 rounded-md transition-colors ${
                  isActive
                    ? "bg-[#FF8C00] text-white dark:bg-[#FFA500] dark:text-[#2D1810]"
                    : "text-[#8B4513] dark:text-[#FFD4A3] hover:text-[#FF8C00] dark:hover:text-[#FFA500] hover:bg-[#FFF0E0] dark:hover:bg-[#5C3D2E]"
                }`}
              >
                {tab.name}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
