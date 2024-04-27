import Post from "./Post"
import { PostProps } from "@/types/PostProps"

const Posts = () => {
    const posts: PostProps[] = [
        {
            category: "mansion",
            person: "boss",
            displayName: "Elon Musk",
            username: "elonmusk",
        },
        {
            category: "football",
            person: "footballer",
            displayName: "Cristiano Ronaldo",
            username: "cristiano",
        },
        {
            category: "boxing",
            person: "boxer",
            displayName: "Mike Tyson",
            username: "miketyson",
        },
        {
            category: "lake",
            person: "tourist",
            displayName: "",
            username: "",
        },
        {
            category: "military",
            person: "soldier",
            displayName: "Rwanda Defence Force",
            username: "rwandamod",
        },
    ]

    return (
        <div className="flex w-full flex-col">
        {
          posts.map((post, index) => (
            <Post key={index} category={post.category} person={post.person} />
          ))
           }
        </div>
    )
}

export default Posts
