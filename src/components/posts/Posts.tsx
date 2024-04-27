import Post from "./Post"
import { PostProps } from "@/types/PostProps"

const Posts = () => {
    const posts: PostProps[] = [
       {
            category: "house",
      },
      {
        category: "music"
      },
      {
        category: "restaurant"
      },
      {
        category: "water"
      },
      {
        category: "piano"
      }
    ]

    return (
        <div className="flex w-full flex-col">
        {
          posts.map((post, index) => (
            <Post key={index} category={post.category} />
          ))
           }
        </div>
    )
}

export default Posts
