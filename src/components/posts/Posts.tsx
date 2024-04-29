import Post from "./Post"
import { PostProps } from "@/types/PostProps"

const Posts = () => {
    const posts: PostProps[] = [
        {
            category: "modern house",
            person: "boss",
            displayName: "Elon Musk",
            username: "elonmusk",
            comments: 650,
            retweets: 1.2,
            likes: 19,
            analytics: 9.5,
        },
        {
            category: "stadium",
            person: "footballer",
            displayName: "Cristiano Ronaldo",
            username: "cristiano",
            comments: 650,
            retweets: 1,
            likes: 19,
            analytics: 9.5,
        },
        {
            category: "boxing",
            person: "boxer",
            displayName: "Mike Tyson",
            username: "miketyson",
            comments: 650,
            retweets: 1,
            likes: 19,
            analytics: 9.5,
        },
        {
            category: "animal",
            person: "tourist",
            displayName: "Kevin Hart",
            username: "kevinhart4real",
            comments: 650,
            retweets: 1,
            likes: 19,
            analytics: 9.5,
        },
        {
            category: "soldier",
            person: "soldier",
            displayName: "Rwanda Defence Force",
            username: "rwandamod",
            comments: 650,
            retweets: 1,
            likes: 19,
            analytics: 9.5,
        },
    ]

    return (
        <div className="flex w-full flex-col">
            {posts.map((post, index) => (
                <Post
                    key={index}
                    category={post.category}
                    person={post.person}
                    displayName={post.displayName}
                    username={post.username}
                    comments={post.comments}
                    retweets={post.retweets}
                    likes={post.likes}
                    analytics={post.analytics}
                />
            ))}
        </div>
    )
}

export default Posts
