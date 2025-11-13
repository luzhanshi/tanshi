"use client";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col justify-center items-center relative overflow-hidden">
      {/* 背景光晕效果 - 更接近参考图片 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-32 bg-blue-300 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-24 bg-blue-400 rounded-full opacity-30 blur-2xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        {/* Logo */}
        <div className="mb-16">
          <div className="text-sm text-gray-400 mb-12 font-light tracking-[0.3em] uppercase">
            □ 起泡
          </div>
        </div>

        {/* 主标题 */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 mb-20 tracking-tight leading-[0.9] font-sans">
          世界首款AI剧作软件
        </h1>

        {/* 副标题 */}
        <p className="text-base md:text-lg text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed font-light">
          由好莱坞资深编剧团队作为顾问，指导编程人员倾情打造
        </p>

        {/* CTA 按钮 */}
        <Button className="bg-gray-900 text-white hover:bg-black px-12 py-4 rounded-full text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 tracking-wide">
          开始体验
        </Button>
      </div>
    </section>
  );
}
