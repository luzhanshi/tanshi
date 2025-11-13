"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export default function SimpleWaitlist() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // 模拟提交
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {!isSubmitted ? (
          <div className="max-w-lg mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 tracking-tight">
              抢先体验 起泡
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                <Input
                  type="email"
                  placeholder="输入您的邮箱地址"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-14 text-base rounded-xl border-gray-200 shadow-sm"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full h-14 bg-gray-900 text-white hover:bg-black font-semibold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                加入等待列表
              </Button>
            </form>

            <p className="text-sm text-gray-500 mt-6 font-light leading-relaxed">
              我们将在产品发布时第一时间通知您
            </p>
          </div>
        ) : (
          <div className="max-w-lg mx-auto">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-green-600 text-2xl">✓</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
              感谢您的关注！
            </h3>
            <p className="text-base text-gray-600 font-light">
              您已成功加入等待列表
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
