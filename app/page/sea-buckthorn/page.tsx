import { pages } from "@/reference/tab";
import type { Metadata } from "next";
import Image from "next/image";
import ImageSlider from "./ImageSlider";

const seaBuckthornPage = pages.find((p) => p.url === "/page/sea-buckthorn");

export const metadata: Metadata = {
  title: seaBuckthornPage?.title || "什麼是沙棘",
  description: seaBuckthornPage?.description,
  keywords: seaBuckthornPage?.keywords,
  openGraph: {
    title: seaBuckthornPage?.title || "什麼是沙棘",
    description: seaBuckthornPage?.description,
    type: "website",
    locale: "zh_HK",
    siteName: "沙棘x健康關注組",
  },
  twitter: {
    card: "summary_large_image",
    title: seaBuckthornPage?.title || "沙棘x健康關注組",
    description: seaBuckthornPage?.description,
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: 'Jg_Rtj2OwYd6n_zbxSVICXpNMCfeethJyiXvjZE0NnE',
  },
};

export default function SeaBuckthornPage() {
  return (
    <div className="flex flex-col flex-1 bg-[#FFFAF5] font-sans dark:bg-[#2D1810] min-h-screen">
      <main className="flex flex-1 w-full max-w-3xl mx-auto flex-col py-16 px-8">
        <h1 className="text-3xl font-bold text-[#8B4513] dark:text-[#FFD4A3] mb-6">
          什麼是沙棘
        </h1>
        <p className="text-lg leading-8 text-[#A0522D] dark:text-[#DEB887] mb-8">
          沙棘是一種耐寒、耐旱的灌木，主要生長在高寒地區，如蒙古、俄羅斯、中國西北等地。它以其明亮的橘色果實而聞名，這些果實富含維生素C、E、K，以及類胡蘿蔔素、類黃酮和脂肪酸等多種營養成分，其中最為特別的是其富含Omega-7脂肪酸。由於其特殊的生長環境和對土壤條件的嚴格要求，沙棘的產量相對稀少，因此更顯珍貴。
        </p>

        <ImageSlider />

        <p className="text-lg leading-8 text-[#A0522D] dark:text-[#DEB887] mb-8">
          ● 沙棘果油：取自果肉與果皮，富含Omega-7、β-胡蘿蔔素、維生素E。
          Omega-7消化道形成保護膜，幫助維持消化道機能，使消化道不嘖嘖。 
          高含量β-胡蘿蔔素增進皮膚與黏膜健康。
        </p>
        <p className="text-lg leading-8 text-[#A0522D] dark:text-[#DEB887] mb-8">
          ● 沙棘籽油：壓榨種籽所得，含有高比例的Omega-3、6，更適合調整體質、管道健康。
          Omega-3和Omega-6有助於維持管道健康，補足日常營養不均。
          多種營養成分具有抗氧化作用，增強保護力，調節生理機能。

          沙棘籽油與沙棘果油各具特色，適合不同的健康需求。沙棘籽油富含Omega-3與Omega-6，特別適合內服以「保護管道健康」與「提升身體保護力」；而沙棘果油則因其高含量的Omega-7與β-胡蘿蔔素，更適用於「護膚」與「消化道機能」。
        </p>

        <ImageSlider imageSet="set2" />

        <ol className="text-lg leading-8 text-[#A0522D] dark:text-[#DEB887] mb-8">
          <li>誰需要補充沙棘油？</li>
          <li>消化道不適族：幫助維持消化道機能、促進新陳代謝</li>
          <li>肌膚困擾者：養顏美容、青春美麗、氣色紅潤</li>
          <li>年長者銀髮族：營養補給、增強體力、健康維持</li>
          <li>壓力大忙碌族、三餐不定者：調節生理機能、幫助消化</li>
          <li>Vegan素食族：營養補給、滋補強身</li>
        </ol>

        <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-lg overflow-hidden bg-white dark:bg-[#3D2418]">
          <Image
            src="/sea_buckthorn_health7.webp"
            alt="沙棘健康"
            fill
            className="object-contain"
          />
        </div>
      </main>
    </div>
  );
}
