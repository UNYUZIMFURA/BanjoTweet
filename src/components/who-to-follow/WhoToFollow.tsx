import RecommendedFollow from "./RecommendedFollow"

const WhoToFollow = () => {
    return (
        <div className="flex flex-col rounded-xl border border-custom bg-black pb-2">
            <span className="px-5 pb-4 pt-5 text-xl font-bold">
                Who to follow
            </span>
            <div className="flex flex-col">
                <RecommendedFollow
                    suggestedImage="computer"
                    displayName="Reactjs"
                    username="reactjs"
                />
                <RecommendedFollow
                    suggestedImage="programmer"
                    displayName="Typescript"
                    username="typescript"
                />
                <RecommendedFollow
                    suggestedImage="code"
                    displayName="Tailwind CSS"
                    username="tailwindcss"
                />
            </div>
        </div>
    )
}

export default WhoToFollow
