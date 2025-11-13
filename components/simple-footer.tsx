"use client";

export default function SimpleFooter() {
  return (
    <footer className="py-12 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-base font-light text-gray-600 tracking-wide">
              © 2024 起泡 AI - 保留所有权利
            </span>
          </div>

          {/* 链接 */}
          <div className="flex space-x-8 text-base text-gray-500">
            <a
              href="#"
              className="hover:text-gray-700 transition-colors duration-200 font-light"
            >
              隐私政策
            </a>
            <a
              href="#"
              className="hover:text-gray-700 transition-colors duration-200 font-light"
            >
              服务条款
            </a>
            <a
              href="#"
              className="hover:text-gray-700 transition-colors duration-200 font-light"
            >
              联系我们
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
