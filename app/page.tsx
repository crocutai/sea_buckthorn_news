import { pages, tabs } from "@/reference/tab";
import { articles, Article_Type, Article } from "@/reference/article";
import type { Metadata } from "next";
import Image from "next/image";

// Helper function to extract YouTube video ID from URL
const getYouTubeVideoId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

// Group articles without images into pairs
const groupArticles = (articles: Article[]) => {
  const result: (Article | Article[])[] = [];
  let noImageBuffer: Article[] = [];

  for (const article of articles) {
    const isYouTube = article.type === Article_Type.YOUTUBE;
    const videoId = isYouTube ? getYouTubeVideoId(article.url) : null;
    const hasMedia = (isYouTube && videoId) || article.og_image;

    if (hasMedia) {
      // Flush buffer first if any
      if (noImageBuffer.length > 0) {
        result.push(...noImageBuffer);
        noImageBuffer = [];
      }
      result.push(article);
    } else {
      noImageBuffer.push(article);
      if (noImageBuffer.length === 2) {
        result.push([noImageBuffer[0], noImageBuffer[1]]);
        noImageBuffer = [];
      }
    }
  }
  // Flush remaining
  result.push(...noImageBuffer);
  return result;
};

const homePage = pages.find((p) => p.url === "/");

export const metadata: Metadata = {
  title: homePage?.title || "沙棘x健康關注組",
  description: homePage?.description,
  keywords: homePage?.keywords,
  openGraph: {
    title: homePage?.title || "沙棘x健康關注組",
    description: homePage?.description,
    type: "website",
    locale: "zh_HK",
    siteName: "沙棘x健康關注組",
  },
  twitter: {
    card: "summary_large_image",
    title: homePage?.title || "沙棘x健康關注組",
    description: homePage?.description,
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: 'Jg_Rtj2OwYd6n_zbxSVICXpNMCfeethJyiXvjZE0NnE',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Map article param to category name
const getCategoryFromParam = (param: string | undefined): string | null => {
  const tab = tabs.find((t) => t.url === `/?article=${param}`);
  return tab?.name || null;
};

interface HomeProps {
  searchParams: Promise<{ article?: string; page?: string; tag?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const selectedCategory = getCategoryFromParam(params.article);
  const selectedTag = params.tag;
  const currentPage = Math.max(1, parseInt(params.page || "1", 10));
  const ITEMS_PER_PAGE = 10;

  // Filter articles by category or tag
  let filteredArticles = articles;
  if (selectedTag) {
    filteredArticles = articles.filter((article) => article.tags.includes(selectedTag));
  } else if (selectedCategory) {
    filteredArticles = articles.filter((article) => article.tags.includes(selectedCategory));
  }

  // Calculate pagination
  const totalArticles = filteredArticles.length;
  const totalPages = Math.ceil(totalArticles / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Build page URLs
  const buildPageUrl = (page: number) => {
    const searchParams = new URLSearchParams();
    // Preserve the article filter from current URL
    if (params.article) {
      searchParams.set("article", params.article);
    }
    // Preserve the tag filter from current URL
    if (params.tag) {
      searchParams.set("tag", params.tag);
    }
    if (page > 1) searchParams.set("page", page.toString());
    const query = searchParams.toString();
    return query ? `/?${query}` : "/";
  };

  // Build tag filter URL
  const buildTagUrl = (tag: string) => {
    const searchParams = new URLSearchParams();
    searchParams.set("tag", tag);
    return `/?${searchParams.toString()}`;
  };

  return (
    <div className="flex flex-col flex-1 bg-[#FFFAF5] font-sans dark:bg-[#2D1810] min-h-screen">
      <main className="flex flex-1 w-full lg:w-[75%] mx-auto flex-col py-16 px-4 sm:px-8">
        {/* Article List Group */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-[#8B4513] dark:text-[#FFD4A3]">
            {selectedTag ? `標籤：${selectedTag}` : selectedCategory || "焦點新聞"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {groupArticles(paginatedArticles).map((item, index) => {
              // Handle paired articles (no image)
              if (Array.isArray(item)) {
                return (
                  <div
                    key={`pair-${index}`}
                    className="flex flex-col gap-4 p-4 rounded-lg border border-[#FFD4A3] dark:border-[#5C3D2E] bg-white dark:bg-[#3D2418]"
                  >
                    {item.map((article) => (
                      <div
                        key={article.url}
                        className="group flex flex-col gap-2 flex-1 hover:bg-[#FFF5EB] dark:hover:bg-[#4A2A1E] p-2 rounded-md transition-colors"
                      >
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col gap-2"
                        >
                          <h2 className="text-sm font-semibold text-[#8B4513] dark:text-[#FFD4A3] group-hover:text-[#FF8C00] dark:group-hover:text-[#FFA500] transition-colors line-clamp-2">
                            {article.title}
                          </h2>
                          <p className="text-xs text-[#A0522D] dark:text-[#DEB887] line-clamp-2">
                            {article.content}
                          </p>
                        </a>
                        {article.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-1">
                            {article.tags.slice(0, 3).map((tag) => (
                              <a
                                key={tag}
                                href={buildTagUrl(tag)}
                                className="text-xs px-2 py-0.5 rounded-full bg-[#FFF0E0] dark:bg-[#5C3D2E] text-[#8B4513] dark:text-[#FFD4A3] hover:bg-[#FF8C00] hover:text-white dark:hover:bg-[#FFA500] dark:hover:text-[#2D1810] transition-colors"
                              >
                                {tag}
                              </a>
                            ))}
                          </div>
                        )}
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between mt-1"
                        >
                          <span className="text-xs text-[#CD853F] dark:text-[#D2B48C] truncate max-w-[120px]">
                            {new URL(article.url).hostname}
                          </span>
                          <span className="text-xs text-[#FF8C00] dark:text-[#FFA500] font-medium">
                            →
                          </span>
                        </a>
                      </div>
                    ))}
                  </div>
                );
              }

              // Single article (with media)
              const article = item;
              const isYouTube = article.type === Article_Type.YOUTUBE;
              const videoId = isYouTube ? getYouTubeVideoId(article.url) : null;

              return (
                <div
                  key={article.url}
                  className={`group flex flex-col gap-3 p-4 rounded-lg border border-[#FFD4A3] dark:border-[#5C3D2E] bg-white dark:bg-[#3D2418] hover:border-[#FF8C00] dark:hover:border-[#FFA500] transition-colors ${isYouTube ? "sm:col-span-2" : ""}`}
                >
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-4"
                  >
                    {isYouTube && videoId ? (
                      <div className="relative w-full aspect-video flex-shrink-0 rounded-md overflow-hidden bg-[#FFF0E0] dark:bg-[#5C3D2E]">
                        <iframe
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title={article.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full"
                        />
                      </div>
                    ) : article.og_image ? (
                      <div className="relative w-full h-40 flex-shrink-0 rounded-md overflow-hidden bg-[#FFF0E0] dark:bg-[#5C3D2E]">
                        <Image
                          src={article.og_image}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : null}
                    <div className="flex flex-col gap-2 flex-1">
                      <h2 className="text-lg font-semibold text-[#8B4513] dark:text-[#FFD4A3] group-hover:text-[#FF8C00] dark:group-hover:text-[#FFA500] transition-colors line-clamp-2">
                        {article.title}
                      </h2>
                      <p className="text-sm text-[#A0522D] dark:text-[#DEB887] line-clamp-3">
                        {article.content}
                      </p>
                    </div>
                  </a>
                  {article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {article.tags.map((tag) => (
                        <a
                          key={tag}
                          href={buildTagUrl(tag)}
                          className="text-xs px-2 py-1 rounded-full bg-[#FFF0E0] dark:bg-[#5C3D2E] text-[#8B4513] dark:text-[#FFD4A3] hover:bg-[#FF8C00] hover:text-white dark:hover:bg-[#FFA500] dark:hover:text-[#2D1810] transition-colors"
                        >
                          {tag}
                        </a>
                      ))}
                    </div>
                  )}
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between mt-auto"
                  >
                    <span className="text-xs text-[#CD853F] dark:text-[#D2B48C] truncate max-w-[200px]">
                      {new URL(article.url).hostname}
                    </span>
                    <span className="text-xs text-[#FF8C00] dark:text-[#FFA500] flex items-center gap-1 font-medium">
                      閱讀更多 →
                    </span>
                  </a>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              {/* Previous */}
              {currentPage > 1 ? (
                <a
                  href={buildPageUrl(currentPage - 1)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-[#8B4513] dark:text-[#FFD4A3] hover:bg-[#FFD4A3] dark:hover:bg-[#5C3D2E] transition-colors"
                >
                  ← 上一頁
                </a>
              ) : (
                <span className="px-3 py-2 rounded-md text-sm font-medium text-[#CD853F] dark:text-[#8B7355] cursor-not-allowed">
                  ← 上一頁
                </span>
              )}

              {/* Page Numbers */}
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <a
                    key={page}
                    href={buildPageUrl(page)}
                    className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium transition-colors ${
                      page === currentPage
                        ? "bg-[#FF8C00] text-white"
                        : "text-[#8B4513] dark:text-[#FFD4A3] hover:bg-[#FFD4A3] dark:hover:bg-[#5C3D2E]"
                    }`}
                  >
                    {page}
                  </a>
                ))}
              </div>

              {/* Next */}
              {currentPage < totalPages ? (
                <a
                  href={buildPageUrl(currentPage + 1)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-[#8B4513] dark:text-[#FFD4A3] hover:bg-[#FFD4A3] dark:hover:bg-[#5C3D2E] transition-colors"
                >
                  下一頁 →
                </a>
              ) : (
                <span className="px-3 py-2 rounded-md text-sm font-medium text-[#CD853F] dark:text-[#8B7355] cursor-not-allowed">
                  下一頁 →
                </span>
              )}
            </div>
          )}

          {/* Page Info */}
          <div className="text-center text-sm text-[#CD853F] dark:text-[#D2B48C] mt-2">
            共 {totalArticles} 篇文章，第 {currentPage} / {totalPages} 頁
          </div>
        </div>
      </main>
    </div>
  );
}
