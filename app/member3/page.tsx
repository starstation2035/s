'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Home } from 'lucide-react';

export default function Member3() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#10B981] text-white p-6">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/20 text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
            <Zap className="w-12 h-12 text-white" />
          </div>
        </div>
        
        <h1 className="text-7xl font-black mb-2 opacity-90">03</h1>
        <h2 className="text-2xl font-bold mb-6">서희정 반짝 반짝</h2>
        
        <p className="text-white/70 mb-10 leading-relaxed">
          반갑습니다! 팀원 3입니다.<br/>
          코드 리뷰와 풀 리퀘스트를 통해<br/>
          성장하는 개발자가 됩시다.
        </p>

        <Link 
          href="/member4" 
          className="group flex items-center justify-center gap-2 bg-white text-[#10B981] font-bold py-4 px-8 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl shadow-black/10"
        >
          다음 팀원에게 이동 (팀원 4)
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
        
        <div className="mt-8">
          <Link href="/" className="text-white/50 hover:text-white flex items-center justify-center gap-1 text-sm transition-colors">
            <Home className="w-4 h-4" />
            메인으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
