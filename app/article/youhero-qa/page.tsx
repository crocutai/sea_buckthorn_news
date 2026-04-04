import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "沙棘x健康關注組 | 宇航人 Q&A | 公司篇與行業篇問答",
  description: "宇航人公司常見問題解答，包括公司歷史、榮譽認證、直銷牌照、會員制度、推消合一制度、永續經營三要素等詳細資訊。了解全球最大沙棘企業宇航人的直銷模式與行業知識。",
  keywords: "宇航人, Q&A, 問答, 公司介紹, 直銷牌照, 會員制度, 沙棘, 本質直銷, 推消合一, 鑽卡會員, 七大國家榮譽, 八大世界認證, 永續經營, 直銷行業",
  openGraph: {
    title: "沙棘x健康關注組 | 宇航人 Q&A | 公司篇與行業篇問答",
    description: "宇航人公司常見問題解答，包括公司歷史、榮譽認證、直銷牌照、會員制度等詳細資訊。",
    type: "article",
    locale: "zh_HK",
    siteName: "沙棘x健康關注組",
    images: [
      {
        url: "/youhero_cert1.jpg",
        width: 800,
        height: 600,
        alt: "宇航人認證證書",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "沙棘x健康關注組 | 宇航人 Q&A | 公司篇與行業篇問答",
    description: "宇航人公司常見問題解答，包括公司歷史、榮譽認證、直銷牌照、會員制度等詳細資訊。",
    images: ["/youhero_cert1.jpg"],
  },
  alternates: {
    canonical: "/article/youhero-qa",
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
  authors: [{ name: "沙棘x健康關注組" }],
  creator: "沙棘x健康關注組",
  publisher: "沙棘x健康關注組",
};

const companyQA = [
  {
    q: "內蒙古宇航人高技術產業有限責任公司創立於哪一年？更名於哪一年？",
    a: "創立於 1988 年，更名於 1995 年。",
  },
  {
    q: "原中共中央總書記、國家主席胡錦濤是哪一年視察宇航人公司的？",
    a: "2006 年。",
  },
  {
    q: "宇航人哪一年取得的直銷牌照？",
    a: "2015 年。",
  },
  {
    q: "宇航商城是哪一年的幾月份正式運營？",
    a: "2019 年 9 月份正式運營。",
  },
  {
    q: "宇航商城產品是否包郵？",
    a: "福利區活動根據當天的福利活動政策。其他區域單筆訂單滿 299 元包郵，其中沙棘區滿 99 元就可以包郵。",
  },
  {
    q: "宇航商城的哪個級別的會員封頂值最高，可以做到利益最大化？",
    a: "2 萬的鑽卡會員。",
  },
  {
    q: "宇航商城共同理想中的「三個沒有」是什麼？",
    a: "沒有中間剝削、沒有產品欺騙、沒有直銷難民。",
  },
  {
    q: "宇航商城採用的制度是什麼？",
    a: "推消合一。",
  },
  {
    q: "宇航商城推消合一的制度特點是什麼？",
    a: "推廣開拓性強、消費穩定性強。",
  },
  {
    q: "宇航商城的產品模式保障是什麼？",
    a: "剛需產品高品質、低價位。",
  },
  {
    q: "宇航商城的文化本質是什麼？",
    a: "追求本質、注重成長。",
  },
  {
    q: "宇航商城主要共分為哪四個區？",
    a: "生活區、精品區、沙棘區、福利區。",
  },
  {
    q: "福利區主要的活動類型有哪三種？哪種必須用商城餘額支付？",
    a: "眾籌、搶購、秒殺。其中搶購、秒殺必須用商城餘額支付。",
  },
  {
    q: "宇航商城的會員福利日是哪一天？",
    a: "每週二的早晨 8 點。",
  },
  {
    q: "宇航商城的當前使命是什麼？",
    a: "回歸本質直銷、重塑行業規則。",
  },
  {
    q: "宇航商城價值觀是什麼？",
    a: "追求本質、終端至上、貴在體驗、重在售後。",
  },
  {
    q: "宇航商城的總任務是什麼？",
    a: "讓每個家庭都用上宇航產品。",
  },
  {
    q: "宇航商城的終極目標是什麼？",
    a: "打造一個人人自由而全面成長的社會生態。",
  },
  {
    q: "宇航商城文化的基本要求是什麼？",
    a: "對待事情的要求（求真求實）；對待自己的要求（不欺不騙）；對待別人的要求（利於別人）；對待結果的要求（成於自己）。",
  },
  {
    q: "宇航人集團是不是全球規模最大的沙棘一體化綜合利用企業？",
    a: "是。",
  },
  {
    q: "宇航人集團是不是第一家沙棘全產業鏈企業？",
    a: "是。包含育苗、種植、採摘、研發、生產、銷售和服務為一體。",
  },
  {
    q: "請說出宇航人集團七大國家榮譽？",
    a: "1）農業產業化國家重點龍頭企業 2）國家林業重點龍頭企業 3）農產品加工出口示範企業 4）國家知識產權優勢企業 5）中藥現代化科技產業基地建設十周年優秀單位 6）高新技術企業 7）中國馳名商標",
  },
  {
    q: "請說出宇航人集團八大世界認證？",
    a: "1）中國有機食品認證；2）美國有機食品認證；3）歐盟有機食品認證；4）日本有機農產品認證 5）猶太認證；6）ISO9001 認證；7）保健品 GMP 認證；8）HACCP 認證",
  },
];

const industryQA = [
  {
    q: "直銷的本質是什麼？",
    a: "去掉中間環節，產品直接從工廠到消費者手裡。",
  },
  {
    q: "人際傳播倍增事業主要分為幾個盤面？其中哪些盤面是絕對不能從事？",
    a: "正規盤、資金盤、概念盤、賭博盤。其中資金盤、概念盤、賭博盤絕對不能從事。",
  },
  {
    q: "正規盤主要分為哪兩個類型？其中哪個盤面才能真正的代表未來？",
    a: "傳統直銷、本質直銷。其中本質直銷才能真正的代表未來。",
  },
  {
    q: "本質直銷的判斷標準是什麼？",
    a: "品質不比直銷差，價格要比超市低。",
  },
  {
    q: "一個事業要想實現永續經營，需要滿足哪三個要素？",
    a: "模式、制度、文化，簡稱「永續經營三要素」。",
  },
  {
    q: "永續經營三要素中模式分為幾種類型？其中哪一種更得民心？",
    a: "兩種，「高品質、高價位」和「高品質、低價位」。其中「高品質、低價位」更得民心。",
  },
  {
    q: "永續經營三要素中制度分為幾種類型？其中哪一種制度是最理想的制度？",
    a: "三種，「養小不養老」，「養老不養小」，「前快、中穩、後大」三種制度。其中「前快、中穩、後大的制度」是最理想的制度。",
  },
  {
    q: "永續經營三要素中文化分為幾種類型？其中哪一種文化更符合未來的發展？",
    a: "三種，「炒作掙錢」，「文化遮蔽」，「追求本質、注重成長」三種類型。其中追求本質、注重成長更符合未來的發展。",
  },
  {
    q: "雙軌制度的特點是什麼？",
    a: "開拓性強、穩定性弱。",
  },
  {
    q: "太陽線制度的特點是什麼？",
    a: "穩定性強、開拓性弱。",
  },
  {
    q: "什麼決定了人們對事情的認可度？",
    a: "模式。",
  },
  {
    q: "什麼決定了從業人員的生存度？",
    a: "制度。",
  },
  {
    q: "什麼決定了一個平台的長久度？",
    a: "文化。",
  },
  {
    q: "有什麼方法可以判斷是否會產生直銷難民？",
    a: "終端判斷法。即如果該事業不能推廣，你最後一個加入，對你是否還有利，你是否還願意加入。",
  },
];

export default function YouHeroQA() {
  return (
    <div className="flex flex-col flex-1 bg-[#FFFAF5] font-sans dark:bg-[#2D1810] min-h-screen">
      <main className="flex flex-1 w-full max-w-3xl mx-auto flex-col py-16 px-4 sm:px-8">
        <h1 className="text-3xl font-bold text-[#8B4513] dark:text-[#FFD4A3] mb-2">
          宇航人 Q&A
        </h1>
        <p className="text-sm text-[#A0522D] dark:text-[#DEB887] mb-8">
          公司篇與行業篇常見問題解答
        </p>

        {/* 公司篇 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF8C00] dark:text-[#FFA500] mb-6 pb-2 border-b-2 border-[#FFD4A3] dark:border-[#5C3D2E]">
            公司篇
          </h2>
          <div className="space-y-6">
            {companyQA.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#3D2418] rounded-lg p-5 border border-[#FFD4A3] dark:border-[#5C3D2E]"
              >
                <h3 className="font-semibold text-[#8B4513] dark:text-[#FFD4A3] mb-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#FF8C00] text-white text-sm mr-2">
                    {index + 1}
                  </span>
                  {item.q}
                </h3>
                <p className="text-[#A0522D] dark:text-[#DEB887] pl-8">
                  答：{item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

{/* 認證圖片 */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#FF8C00] dark:text-[#FFA500] mb-6 pb-2 border-b-2 border-[#FFD4A3] dark:border-[#5C3D2E]">
            宇航人認證
          </h2>
          <div className="flex flex-col gap-6">
            <div className="relative w-full aspect-[4/2] rounded-lg overflow-hidden bg-white dark:bg-[#3D2418] border border-[#FFD4A3] dark:border-[#5C3D2E]">
              <Image
                src="/youhero_cert1.jpg"
                alt="宇航人認證證書 1"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-full aspect-[4/2] rounded-lg overflow-hidden bg-white dark:bg-[#3D2418] border border-[#FFD4A3] dark:border-[#5C3D2E]">
              <Image
                src="/youhero_cert2.jpg"
                alt="宇航人認證證書 2"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>
        
        {/* 行業篇 */}
        <section>
          <h2 className="text-2xl font-bold text-[#FF8C00] dark:text-[#FFA500] mb-6 pb-2 border-b-2 border-[#FFD4A3] dark:border-[#5C3D2E]">
            行業篇
          </h2>
          <div className="space-y-6">
            {industryQA.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#3D2418] rounded-lg p-5 border border-[#FFD4A3] dark:border-[#5C3D2E]"
              >
                <h3 className="font-semibold text-[#8B4513] dark:text-[#FFD4A3] mb-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#FF8C00] text-white text-sm mr-2">
                    {index + 1}
                  </span>
                  {item.q}
                </h3>
                <p className="text-[#A0522D] dark:text-[#DEB887] pl-8">
                  答：{item.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
