'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Rocket, Home } from 'lucide-react';

export default function Member2() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950 font-sans">
      {/* 배경 장식 요소: 프리미엄 느낌을 주는 움직이는 조명 효과 */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px] animate-pulse [animation-delay:2s]" />

      <div className="relative z-10 max-w-xl w-full px-6">
        <div className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] border border-white/10 text-center">
          
          {/* 상단 로켓 로고: 통통 튀는 애니메이션 적용 */}
          <div className="mb-10 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-blue-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="relative w-24 h-24 bg-gradient-to-tr from-primary to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Rocket className="w-12 h-12 text-white animate-bounce" style={{ animationDuration: '3s' }} />
              </div>
            </div>
          </div>

          {/* 헤더 섹션 */}
          <div className="space-y-2 mb-8">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase rounded-full border border-primary/20">
              Team Member 02
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              혁신을 쏘아올리는 <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                공간 크리에이터
              </span>
            </h1>
          </div>

          {/* 본문 텍스트 */}
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-sm mx-auto">
            안녕하세요! 팀원 2입니다. <br />
            오벤져스와 함께 당신의 소중한 공간에 <br />
            새로운 생명력을 불어넣고 있습니다. ✨
          </p>

          {/* 액션 버튼 */}
          <div className="flex flex-col gap-4">
            <Link
              href="/member3"
              className="group relative flex items-center justify-center gap-3 bg-white text-slate-950 font-black py-5 px-10 rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 overflow-hidden shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)]"
            >
              <span className="relative z-10 text-lg">다음 멤버 탐험하기</span>
              <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            
            <Link 
              href="/" 
              className="flex items-center justify-center gap-2 text-gray-500 hover:text-white transition-colors py-2 text-sm font-medium"
            >
              <Home className="w-4 h-4" />
              메인 스테이션으로 돌아가기
            </Link>
          </div>
        </div>

        {/* 하단 장식 요소 */}
        <div className="mt-12 flex justify-center gap-8 opacity-20">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-white" />
          <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-white" />
        </div>
      </div>
    </div>
  );
}
