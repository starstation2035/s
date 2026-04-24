'use client';

import React, { useState } from 'react';
import Image from "next/image";
import {
  Search,
  Globe,
  Menu,
  User,
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Users
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState('stays');

  const listings = [
    {
      id: 1,
      image: "/listing-1.png",
      location: "서울 강남",
      title: "광안대교가 보이는 펜트하우스",
      price: "₩320,000 /박",
      rating: 5.0,
      count: 3,
      isGuestFavorite: true,
    },
    {
      id: 2,
      image: "/listing-2.png",
      location: "호주, 시드니",
      title: "모던 럭셔리 아파트먼트",
      price: "₩280,000 /박",
      rating: 5.0,
      count: 6,
      isGuestFavorite: true,
    },
    {
      id: 3,
      image: "/listing-3.png",
      location: "부산, Star Haus",
      title: "프라이빗 풀빌라",
      price: "₩450,000 /박",
      rating: 4.9,
      count: 5,
      isGuestFavorite: true,
    },
    {
      id: 4,
      image: "/listing-4.png",
      location: "부산, 기장군",
      title: "루프탑 테라스 하우스",
      price: "₩210,000 /박",
      rating: 5.0,
      count: 7,
      isGuestFavorite: false,
    },
    {
      id: 5,
      image: "/listing-5.png",
      location: "부산, 수영구",
      title: "미니멀 화이트 감성 숙소",
      price: "₩180,000 /박",
      rating: 5.0,
      count: 7,
      isGuestFavorite: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#222222]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-20 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1 flex items-center">
            <div className="flex items-center gap-1 text-[#FF385C]">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current" aria-hidden="true" role="presentation" focusable="false">
                <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.39 3.341-6.566 3.341-3.568 0-6.401-2.463-6.401-6.44l.001-.227c.01-.892.233-1.745.856-3.23l.15-.35c.983-2.292 5.143-11.002 7.098-14.832l.533-1.027C12.537 1.963 13.992 1 16 1zm0 2c-1.232 0-2.316.693-3.414 2.656L12.052 6.7C10.15 10.437 6.07 19.001 5.116 21.23c-.563 1.341-.75 2.103-.794 2.766L4.32 24.3c0 2.825 1.944 4.44 4.401 4.44 1.636 0 3.518-1.02 5.342-2.83l.423-.434.332-.34h1.964l.332.341.424.433c1.824 1.81 3.706 2.83 5.342 2.83 2.443 0 4.356-1.601 4.356-4.478l-.001-.295c-.04-.632-.213-1.355-.758-2.653l-.15-.353c-.943-2.193-5.023-10.758-6.925-14.494l-.534-1.027C18.316 3.693 17.232 3 16 3zm0 7c2.735 0 5 2.215 5 5s-2.265 5-5 5-5-2.215-5-5 2.265-5 5-5zm0 2c-1.684 0-3 1.316-3 3s1.316 3 3 3 3-1.316 3-3-1.316-3-3-3z"></path>
              </svg>
              <span className="text-xl font-bold tracking-tighter">오벤져스</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center gap-8">
              <button
                onClick={() => setActiveTab('stays')}
                className={`text-base py-2 relative transition-colors ${activeTab === 'stays' ? 'font-semibold text-black' : 'text-gray-500 hover:text-black hover:bg-gray-50 rounded-full px-4'}`}
              >
                숙소
                {activeTab === 'stays' && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-black"></div>}
              </button>
              <button
                onClick={() => setActiveTab('experiences')}
                className={`text-base py-2 relative transition-colors ${activeTab === 'experiences' ? 'font-semibold text-black' : 'text-gray-500 hover:text-black hover:bg-gray-50 rounded-full px-4'}`}
              >
                체험
                <span className="absolute -top-1 -right-2 bg-gray-100 text-[10px] px-1 rounded-sm border border-gray-200">NEW</span>
                {activeTab === 'experiences' && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-black"></div>}
              </button>
              <button
                onClick={() => setActiveTab('online')}
                className={`text-base py-2 relative transition-colors ${activeTab === 'online' ? 'font-semibold text-black' : 'text-gray-500 hover:text-black hover:bg-gray-50 rounded-full px-4'}`}
              >
                온라인 체험
                <span className="absolute -top-1 -right-2 bg-gray-100 text-[10px] px-1 rounded-sm border border-gray-200">NEW</span>
                {activeTab === 'online' && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-black"></div>}
              </button>
            </div>
          </nav>

          {/* User Menu */}
          <div className="flex-1 flex items-center justify-end gap-2">
            <button className="hidden lg:block text-sm font-semibold p-3 hover:bg-gray-50 rounded-full transition-colors">당신의 공간을 오벤져스하세요</button>
            <button className="p-3 hover:bg-gray-50 rounded-full transition-colors">
              <Globe className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-3 p-2 pl-3 border border-gray-200 rounded-full hover:shadow-md transition-shadow">
              <Menu className="w-4 h-4" />
              <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white">
                <User className="w-5 h-5 fill-current" />
              </div>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto pb-6 px-4">
          <div className="flex items-center bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow h-16 divide-x divide-gray-200">
            <button className="flex-1 flex flex-col justify-center px-8 h-full text-left hover:bg-gray-100 rounded-l-full transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-tight">여행지</span>
              <span className="text-sm text-gray-500">여행지 검색</span>
            </button>
            <button className="flex-1 flex flex-col justify-center px-8 h-full text-left hover:bg-gray-100 transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-tight">날짜</span>
              <span className="text-sm text-gray-500">날짜 추가</span>
            </button>
            <div className="flex-[1.2] flex items-center justify-between pl-8 pr-2 h-full hover:bg-gray-100 rounded-r-full group transition-colors">
              <div className="flex flex-col justify-center text-left">
                <span className="text-[10px] font-bold uppercase tracking-tight">여행자</span>
                <span className="text-sm text-gray-500">게스트 추가</span>
              </div>
              <button className="bg-[#FF385C] p-3 rounded-full text-white hover:bg-[#E31C5F] transition-colors">
                <Search className="w-5 h-5 stroke-[3px]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-20 py-10">
        {/* Reservation Banner */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-4 bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer max-w-2xl mx-auto">
            <div className="text-center">
              <span className="font-semibold text-lg">부산 숙소 예약을 완료하세요</span>
              <span className="text-gray-500 ml-2">8월 8일 ~ 10일 · 게스트 1명</span>
            </div>
            <div className="w-10 h-10 rounded-lg overflow-hidden border border-gray-100">
              <Image src="/listing-1.png" alt="Preview" width={40} height={40} className="object-cover h-full w-full" />
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Recently Viewed Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight">최근 조회한 항목</h2>
            <div className="flex items-center gap-2">
              <button className="p-2 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-2 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {listings.map((listing) => (
              <div key={listing.id} className="group cursor-pointer">
                {/* Image Card */}
                <div className="relative aspect-square rounded-xl overflow-hidden mb-3 bg-gray-100">
                  <Image
                    src={listing.image}
                    alt={listing.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {listing.isGuestFavorite && (
                    <div className="absolute top-3 left-3 bg-white/95 px-3 py-1 rounded-full text-[12px] font-bold ovengers-card-shadow">
                      게스트 선호
                    </div>
                  )}
                  <button className="absolute top-3 right-3 text-white/90 hover:scale-110 transition-transform">
                    <Heart className="w-6 h-6 stroke-[2px] hover:fill-[#FF385C] hover:stroke-[#FF385C]" />
                  </button>
                </div>

                {/* Info */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[15px]">{listing.location}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="text-[14px]">{listing.rating}</span>
                    </div>
                  </div>
                  <span className="text-gray-500 text-[14px] line-clamp-1">{listing.title}</span>
                  <span className="text-gray-500 text-[14px]">침대 {listing.count}개</span>
                  <div className="mt-1">
                    <span className="font-bold text-[15px]">{listing.price.split(' ')[0]}</span>
                    <span className="text-[15px]"> {listing.price.split(' ')[1]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer / Mobile Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 sm:hidden">
        <div className="flex items-center justify-around">
          <div className="flex flex-col items-center gap-1 text-[#FF385C]">
            <Search className="w-6 h-6" />
            <span className="text-[10px] font-medium">탐색</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-gray-400">
            <Heart className="w-6 h-6" />
            <span className="text-[10px] font-medium">위시리스트</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-gray-400">
            <User className="w-6 h-6" />
            <span className="text-[10px] font-medium">로그인</span>
          </div>
        </div>
      </div>
    </div>
  );
}

