'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Home } from 'lucide-react';

export default function Member4() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#8B5CF6] text-yellow-400 p-6">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/20 text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
            <Shield className="w-12 h-12 text-yellow-400" />
          </div>
        </div>
        
        <h1 className="text-7xl font-black mb-2 opacity-90">04</h1>
        <h2 className="text-2xl font-bold mb-6">팀원 4 담당 페이지</h2>
        
        <p className="text-yellow-400/70 mb-10 leading-relaxed">
          어서오세요! 팀원 4입니다.<br/>
          충돌(Conflict)을 해결하는 과정도<br/>
          협업의 중요한 일부입니다.
        </p>

        <Link 
          href="/member5" 
          className="group flex items-center justify-center gap-2 bg-white text-[#8B5CF6] font-bold py-4 px-8 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl shadow-black/10"
        >
          다음 팀원에게 이동 (팀원 5)
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
        
        <div className="mt-8">
          <Link href="/" className="text-yellow-400/50 hover:text-yellow-400 flex items-center justify-center gap-1 text-sm transition-colors">
            <Home className="w-4 h-4" />
            메인으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
