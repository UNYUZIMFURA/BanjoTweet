const RecommendedFollow = () => {
  return (
    <div className="flex justify-between px-4 py-2">
      <div className="flex gap-4">
        <div className="h-[3.2rem] w-[3.2rem] border border-custom rounded-full"></div>
        <div className="flex flex-col">
          <span className="font-bold">React</span>
          <span className="text-skin-secondary">@reactjs</span>
        </div>
      </div>
      <button className="h-[2.5rem] px-5 rounded-full bg-white text-black text-sm font-bold">
        Follow
      </button>
    </div>
  );
}

export default RecommendedFollow