import RecommendedFollow from "./RecommendedFollow";

const WhoToFollow = () => {
  return (
    <div className="flex flex-col bg-secondary rounded-xl">
      <span className="font-bold px-5 pt-5 pb-4 text-xl">Who to follow</span>
      <div className="flex flex-col gap-2">
        <RecommendedFollow suggestedImage="computer"/>
        <RecommendedFollow suggestedImage="computer"/>
        <RecommendedFollow suggestedImage="computer"/>
      </div>
    </div>
  );
}

export default WhoToFollow