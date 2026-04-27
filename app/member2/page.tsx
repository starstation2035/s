'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Diamond, Home, Sparkles } from 'lucide-react';

export default function Member2() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 via-amber-100 to-yellow-200 text-amber-900 p-6 relative overflow-hidden">
      {/* 장식용 배경 요소 (노란색 빛 효과) */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-amber-300/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="max-w-md w-full bg-white/40 backdrop-blur-xl rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(251,191,36,0.15)] border border-white/60 text-center relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
        <div className="mb-8 flex justify-center relative">
          <div className="w-24 h-24 bg-gradient-to-tr from-amber-200/50 to-yellow-100/30 rounded-3xl flex items-center justify-center shadow-inner group relative overflow-hidden">
            <Diamond className="w-12 h-12 text-amber-600 animate-[spin_8s_linear_infinite] group-hover:scale-110 transition-transform duration-300" />
            <Sparkles className="absolute top-2 right-2 w-4 h-4 text-amber-400/50 animate-bounce" />
          </div>
        </div>

        <div className="relative inline-block mb-4">
          <h1 className="text-8xl font-black text-amber-600 opacity-10 absolute -top-8 -left-4 select-none">02</h1>
          <h2 className="text-3xl font-extrabold tracking-tight mb-2 relative z-10 text-amber-900">팀원 2의 공간</h2>
          <div className="h-1.5 w-12 bg-amber-400/40 mx-auto rounded-full mb-6" />
        </div>

        <p className="text-amber-800/80 mb-10 leading-relaxed font-medium">
          안녕하세요! <span className="text-amber-900 font-bold underline decoration-amber-400/30 underline-offset-4">팀원 2</span>입니다.<br />
          우리는 지금 깃허브 포크와 협업을<br />
          예술처럼 연습하고 있습니다. ✨
        </p>

        <Link
          href="/member3"
          className="group relative flex items-center justify-center gap-3 bg-amber-500 text-white font-bold py-4 px-8 rounded-2xl hover:bg-amber-600 transition-all duration-300 shadow-[0_10px_20px_rgba(245,158,11,0.2)] overflow-hidden"
        >
          <span className="relative z-10">다음 여정으로 (팀원 3)</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
        </Link>

        <div className="mt-10">
          <Link href="/" className="text-amber-700/40 hover:text-amber-800 flex items-center justify-center gap-2 text-sm transition-all hover:gap-3 group">
            <Home className="w-4 h-4 group-hover:scale-110" />
            홈으로 돌아가기
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
