'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, User, Home } from 'lucide-react';

export default function Member2() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#3B82F6] text-white p-6">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/20 text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
            <User className="w-12 h-12 text-white" />
          </div>
        </div>
        
        <h1 className="text-7xl font-black mb-2 opacity-90">02</h1>
        <h2 className="text-2xl font-bold mb-6">팀원 2 담당 페이지</h2>
        
        <p className="text-white/70 mb-10 leading-relaxed">
          안녕하세요! 팀원 2입니다.<br/>
          우리는 지금 깃허브 포크와 협업을<br/>
          연습하고 있습니다. 화이팅!
        </p>

        <Link 
          href="/member3" 
          className="group flex items-center justify-center gap-2 bg-white text-[#3B82F6] font-bold py-4 px-8 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl shadow-black/10"
        >
          다음 팀원에게 이동 (팀원 3)
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
