import Post from "./Post"
import { PostProps } from "@/types/PostProps"

const Posts = () => {
    const posts: PostProps[] = [
        {
            category: "modern house",
            person: "boss",
            displayName: "Elon Musk",
            username: "elonmusk",
        },
        {
            category: "stadium",
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
            category: "animal",
            person: "tourist",
            displayName: "Kevin Hart",
            username: "kevinhart4real",
        },
        {
            category: "soldier",
            person: "soldier",
            displayName: "Rwanda Defence Force",
            username: "rwandamod",
        },
    ]

    return (
        <div className="flex w-full flex-col">
        {
          posts.map((post, index) => (
            <Post key={index} category={post.category} person={post.person} displayName={post.displayName} username={post.username} />
          ))
           }
        </div>
    )
}

export default Posts
