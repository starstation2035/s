'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Rocket } from 'lucide-react';

export default function Member1Page() {
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

        {/* Characters Header */}
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          {[
            { src: '/hero_robot.png', alt: 'Iron Hero' },
            { src: '/hero_captain.png', alt: 'Captain Hero' },
            { src: '/hero_thunder.png', alt: 'Thunder Hero' },
            { src: '/hero_spider.png', alt: 'Spider Hero' },
            { src: '/hero_green.png', alt: 'Green Hero' },
          ].map((hero, idx) => (
            <div 
              key={idx}
              className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg border-4 border-white/50 transform hover:-translate-y-2 hover:scale-110 hover:shadow-2xl hover:rotate-3 transition-all duration-300 overflow-hidden"
            >
              <Image 
                src={hero.src} 
                alt={hero.alt} 
                width={80} 
                height={80} 
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
        
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
          팀원 1 페이지<br/>
          <span className="text-yellow-300">오벤져스 팀 협업</span>
        </h1>
        
        {/* Description */}
        <p className="text-white/80 text-lg md:text-xl mb-12 font-medium max-w-md mx-auto leading-relaxed">
          여기가 팀원 1의 메인 공간입니다!<br/>
          팀 협업을 위한 작업 공간입니다.
        </p>

        {/* Action Button */}
        <div className="flex flex-col items-center gap-4">
          <Link 
            href="/member2" 
            className="group relative inline-flex items-center justify-center gap-3 bg-[#E62429] hover:bg-[#B11B1F] text-white text-xl md:text-2xl font-bold py-6 px-10 rounded-2xl shadow-[0_10px_30px_rgba(230,36,41,0.4)] hover:shadow-[0_15px_40px_rgba(230,36,41,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span>팀원 2 페이지로 이동</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <span className="text-white/50 text-sm font-medium uppercase tracking-widest">
            Go to Member 2
          </span>
        </div>
      </div>
    </div>
  );
}
