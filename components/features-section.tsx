"use client";

import { Brain, FileText, Sparkles, Users, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI智能创作",
    description:
      "基于先进的人工智能技术，帮助编剧快速生成创意剧本内容，提供灵感启发和结构建议。",
  },
  {
    icon: FileText,
    title: "专业剧本格式",
    description:
      "完全符合好莱坞行业标准的剧本格式，自动处理场景描述、对话、转场等专业要素。",
  },
  {
    icon: Sparkles,
    title: "创意辅助工具",
    description:
      "提供角色分析、情节发展、冲突设计等多维度创作辅助，让故事更加生动引人。",
  },
  {
    icon: Users,
    title: "协作编剧功能",
    description:
      "支持多人实时协作编剧，团队成员可以同时编辑、评论和修改剧本内容。",
  },
  {
    icon: Zap,
    title: "快速生成",
    description:
      "从创意构思到完整剧本，大幅缩短创作周期，让编剧专注于故事本身的打磨。",
  },
  {
    icon: Globe,
    title: "多语言支持",
    description: "支持中文、英文等多种语言创作，满足国际化剧本制作需求。",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            核心功能
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            起泡
            集成了最先进的AI技术与专业的剧作经验，为编剧提供全方位的创作支持
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center justify-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-600">
                  AI 引擎状态：运行中
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                好莱坞级别的AI剧作助手
              </h3>
              <p className="text-gray-600">
                由资深编剧团队训练的专业AI模型，深度理解剧作艺术
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
