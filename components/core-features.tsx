"use client"

import { FileEdit, Download, Users } from "lucide-react"

export default function CoreFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            核心功能
          </h2>
        </div>

        {/* 功能卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* 智能剧本创作 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
            {/* 图标区域 */}
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
              <FileEdit className="h-8 w-8 text-blue-600" />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
              智能剧本创作
            </h3>

            <p className="text-base text-gray-600 leading-relaxed font-light">
              基于AI技术的智能创作助手，帮助编剧快速生成高质量剧本内容，提供专业的故事结构建议。
            </p>
          </div>

          {/* 多种导出格式 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
            {/* 图标区域 */}
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
              <Download className="h-8 w-8 text-green-600" />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
              多种导出格式
            </h3>

            <p className="text-base text-gray-600 leading-relaxed font-light">
              支持PDF、Word、Final Draft等多种专业剧本格式导出，完全符合行业标准和制片公司要求。
            </p>
          </div>

          {/* 自制角色功能 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
            {/* 图标区域 */}
            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-purple-600" />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
              自制角色功能
            </h3>

            <p className="text-base text-gray-600 leading-relaxed font-light">
              创建和管理角色档案，AI助手帮助完善角色背景、性格特征，确保角色一致性和深度。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}