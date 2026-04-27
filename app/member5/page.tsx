'use client';

import React from 'react';
import Link from 'next/link';
import { RotateCcw, Smartphone, Home } from 'lucide-react';

export default function Member5() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#84CC16] text-white p-6">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/20 text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center shadow-inner">
            <Smartphone className="w-12 h-12 text-white drop-shadow-md" />
          </div>
        </div>
        
        <h1 className="text-7xl font-black mb-2 opacity-90">05</h1>
        <h2 className="text-2xl font-bold mb-6">팀원 5 담당 페이지</h2>
        
        <p className="text-white/70 mb-10 leading-relaxed">
          마지막 팀원 5입니다!<br/>
          이제 모든 페이지를 다 돌았습니다.<br/>
          메인 페이지로 돌아가볼까요?
        </p>

        <Link 
          href="/" 
          className="group flex items-center justify-center gap-2 bg-white text-[#84CC16] font-bold py-4 px-8 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl shadow-black/10"
        >
          메인 페이지로 돌아가기
          <RotateCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
        </Link>
        
        <div className="mt-8">
          <Link href="/" className="text-white/50 hover:text-white flex items-center justify-center gap-1 text-sm transition-colors">
            <Home className="w-4 h-4" />
            홈으로 바로가기
          </Link>
        </div>
      </div>
    </div>
  );
}
