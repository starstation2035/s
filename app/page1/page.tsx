export default function Page1() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl p-10 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center text-center">
        <h1 className="text-4xl font-extrabold text-black mb-4">Page 1</h1>
        <p className="text-gray-700 text-lg mb-8 font-medium">
          3D 입체 디자인이 적용된 작업 공간입니다. 박스에 마우스를 올려보세요!
        </p>
        <button className="w-full py-4 bg-indigo-500 text-white text-xl font-bold rounded-xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-indigo-600 active:shadow-none active:translate-x-[6px] active:translate-y-[6px] transition-all">
          클릭해보기
        </button>
      </div>
    </div>
  );
}
