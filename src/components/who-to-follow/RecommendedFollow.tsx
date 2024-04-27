import Image from "next/image"

interface Props {
  suggestedImage: string
}

const RecommendedFollow:React.FC<Props> = ({suggestedImage}) => {
  return (
      <div className="flex justify-between px-4 py-2">
          <div className="flex gap-4">
              <div className="relative overflow-hidden h-[3.2rem] w-[3.2rem] rounded-full border border-custom">
                  <Image
                      src={`https://source.unsplash.com/600x600/?${suggestedImage}`}
                      fill={true}
                      className="object-cover"
                      alt=""
                  />
              </div>
              <div className="flex flex-col">
                  <span className="font-bold">React</span>
                  <span className="text-skin-secondary">@reactjs</span>
              </div>
          </div>
          <button className="h-[2.5rem] rounded-full bg-white px-5 text-sm font-bold text-black">
              Follow
          </button>
      </div>
  )
}

export default RecommendedFollow