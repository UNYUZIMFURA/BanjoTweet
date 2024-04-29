import RecommendedFollow from "./RecommendedFollow";

const WhoToFollow = () => {
  return (
    <div className="bg-black border border-custom flex flex-col rounded-xl pb-2">
      <span className="font-bold px-5 pt-5 pb-4 text-xl">Who to follow</span>
      <div className="flex flex-col">
        <RecommendedFollow suggestedImage="computer" displayName="Reactjs" username="reactjs"/>
        <RecommendedFollow suggestedImage="programmer" displayName="Typescript" username="typescript"/>
        <RecommendedFollow suggestedImage="code" displayName="Tailwind CSS" username="tailwindcss"/>
      </div>
    </div>
  );
}

export default WhoToFollow