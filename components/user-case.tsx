"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function UserCase() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">

          {/* 左侧：实际案例 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 tracking-tight">
              实际案例
            </h2>

            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
                  不被看和的悲剧！
                  <br />
                  更完整！
                </h3>

                <p className="text-base text-gray-600 mb-6 font-light leading-relaxed">
                  为您生成完整的剧本内容
                </p>

                <div className="flex gap-4">
                  <Input
                    placeholder="请输入您的想法..."
                    className="flex-1 h-12 text-base border-gray-200 rounded-xl"
                  />
                  <Button
                    className="bg-gray-900 text-white hover:bg-black px-8 rounded-xl text-base font-semibold shadow-lg transition-all duration-200"
                  >
                    提交
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧：用户评价 */}
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start space-x-6">
              {/* 用户头像 */}
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">👤</span>
              </div>

              {/* 用户信息和评价 */}
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <h4 className="text-lg font-bold text-gray-900">用户</h4>
                  <span className="text-sm text-gray-500 font-light">2024.9</span>
                </div>

                <p className="text-base text-gray-700 leading-relaxed mb-6 font-light">
                  &ldquo;这个AI剧作软件真的改变了我的创作方式。从最初的创意构思到完整的剧本，整个过程变得如此流畅和高效。特别是角色发展功能，帮我创造了更加立体的人物形象。&rdquo;
                </p>

                <div className="flex items-center space-x-3">
                  <div className="flex text-yellow-400 text-lg">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <span className="text-sm text-gray-500 font-light">来自用户</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}