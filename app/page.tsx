'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Users, Sparkles, Rocket } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#3B82F6] text-white p-6 font-sans">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-12 md:p-16 shadow-2xl border border-white/20 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 p-8 opacity-20">
          <Sparkles className="w-12 h-12" />
        </div>
        <div className="absolute bottom-0 left-0 p-8 opacity-20">
          <Rocket className="w-12 h-12" />
        </div>

        {/* Icon Header */}
        <div className="mb-10 flex justify-center">
          <div className="w-40 h-40 bg-white rounded-[2rem] flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 overflow-hidden border-8 border-white/50">
            <Image 
              src="/ironman-logo.png" 
              alt="Iron Man Logo" 
              width={140} 
              height={140} 
              className="object-contain"
            />
          </div>
        </div>
        
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
          오벤져스 팀 협업<br/>
          <span className="text-yellow-300">연습 프로젝트</span>
        </h1>
        
        {/* Description */}
        <p className="text-white/80 text-lg md:text-xl mb-12 font-medium max-w-md mx-auto leading-relaxed">
          깃허브 워크플로우와 팀 협업을 위한<br/>
          실습 공간에 오신 것을 환영합니다!
        </p>

        {/* Action Button */}
        <div className="flex flex-col items-center gap-4">
          <Link 
            href="/member2" 
            className="group relative inline-flex items-center justify-center gap-3 bg-[#E62429] hover:bg-[#B11B1F] text-white text-xl md:text-2xl font-bold py-6 px-10 rounded-2xl shadow-[0_10px_30px_rgba(230,36,41,0.4)] hover:shadow-[0_15px_40px_rgba(230,36,41,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span>협업 연습 시작하기 (팀원 2에게 이동)</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <span className="text-white/50 text-sm font-medium uppercase tracking-widest">
            Ready to collaborate?
          </span>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-12 flex gap-8 text-white/40 font-bold text-sm">
        <span>TEAM O-VENGERS</span>
        <span>•</span>
        <span>GITHUB WORKFLOW</span>
        <span>•</span>
        <span>2024</span>
      </div>
    </div>
  );
}
