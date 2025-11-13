"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "李明",
    title: "资深编剧",
    company: "华纳兄弟中国",
    content:
      "起泡 彻底改变了我的创作流程。AI助手不仅能提供创意灵感，还能帮我优化剧本结构。这确实是编剧界的革命性工具。",
    rating: 5,
    avatar: "👨‍💼",
  },
  {
    name: "张小雨",
    title: "独立编剧",
    company: "自由职业",
    content:
      "作为新手编剧，起泡 是我最好的导师。它不仅教会了我专业的剧本格式，还帮我理解了故事结构的精髓。",
    rating: 5,
    avatar: "👩‍💻",
  },
  {
    name: "王导演",
    title: "电影导演",
    company: "北京电影制片厂",
    content:
      "与编剧团队使用 起泡 协作，效率提升了300%。AI的建议总是能激发我们新的创意思路。",
    rating: 5,
    avatar: "🎬",
  },
  {
    name: "陈制片",
    title: "制片人",
    company: "光线传媒",
    content:
      "起泡 帮助我们快速评估剧本质量，节省了大量的前期筛选时间。对制片公司来说，这是必备工具。",
    rating: 5,
    avatar: "🎭",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            用户评价
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            来自全球编剧、导演和制片人的真实反馈
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-blue-200" />

              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.title} · {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">4.9/5</div>
              <div className="text-sm text-gray-600">平均评分</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">
                2,500+
              </div>
              <div className="text-sm text-gray-600">用户评价</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">98%</div>
              <div className="text-sm text-gray-600">推荐率</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
