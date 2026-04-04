import { Article_Type } from "@/reference/article";

// 網站結構化數據
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "沙棘x健康關注組",
    description: "宇航人沙棘產品資訊與健康知識",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}/?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// 組織結構化數據
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "沙棘x健康關注組",
    description: "專注於宇航人沙棘產品資訊與健康知識分享",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}/favicon.svg`,
    sameAs: [],
  };
}

// 文章列表頁結構化數據
export function generateCollectionPageSchema(
  title: string,
  description: string,
  url: string,
  articles: Array<{
    title: string;
    url: string;
    description: string;
    image?: string;
  }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description: description,
    url: url,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: articles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Article",
          name: article.title,
          url: article.url,
          description: article.description,
          image: article.image,
        },
      })),
    },
  };
}

// 文章頁結構化數據
export function generateArticleSchema(
  title: string,
  description: string,
  url: string,
  image?: string,
  datePublished?: string,
  dateModified?: string,
  author?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    url: url,
    image: image,
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: author || "沙棘x健康關注組",
    },
    publisher: {
      "@type": "Organization",
      name: "沙棘x健康關注組",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}/favicon.svg`,
      },
    },
  };
}

// 麵包屑導航結構化數據
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// FAQ 頁結構化數據
export function generateFAQSchema(
  questions: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((qa) => ({
      "@type": "Question",
      name: qa.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: qa.answer,
      },
    })),
  };
}

// 生成 JSON-LD 腳本標籤
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 2),
      }}
    />
  );
}
