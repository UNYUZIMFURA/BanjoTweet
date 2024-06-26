import Post from "./Post"
import { PostProps } from "@/types/PostProps"

const Posts = () => {
    const posts: PostProps[] = [
        {
            category: "modern house",
            person: "boss",
            content: "Ready to Launch something!",
            displayName: "Elon Musk",
            username: "elonmusk",
            comments: 650,
            retweets: 1.2,
            likes: 175,
            analytics: 35,
        },
        {
            category: "stadium",
            person: "footballer",
            content: "Happy for the win 💪",
            displayName: "Cristiano Ronaldo",
            username: "cristiano",
            comments: 650,
            retweets: 1,
            likes: 85,
            analytics: 20.5,
        },
        {
            category: "boxing",
            person: "boxer",
            content: "Jake Paul isn't ready! 👊",
            displayName: "Mike Tyson",
            username: "miketyson",
            comments: 650,
            retweets: 1,
            likes: 75,
            analytics: 11.5,
        },
        {
            category: "animal",
            person: "tourist",
            content: "Visiting Rwanda was a pleasure.",
            displayName: "Kevin Hart",
            username: "kevinhart4real",
            comments: 650,
            retweets: 1,
            likes: 29,
            analytics: 3.5,
        },
        {
            category: "soldier",
            person: "soldier",
            content: "Meet our soldiers in Cabo Delgado",
            displayName: "Rwanda Defence Force",
            username: "rwandamod",
            comments: 650,
            retweets: 1,
            likes: 23,
            analytics: 1.5,
        },
        {
            category: "music studio",
            person: "producer",
            content: "Jugumila is out now!🎹",
            displayName: "Element Eleeeh",
            username: "element_eleeeh",
            comments: 240,
            retweets: 4,
            likes: 40,
            analytics: 1,
        },
        {
            category: "Karate",
            person: "Karate Master",
            content: "Ready for combat!",
            displayName: "Michael Jai White",
            username: "michael_jai_white",
            comments: 340,
            retweets: 5,
            likes: 45,
            analytics: 2,
        },
    ]

    return (
        <div className="flex w-full flex-col">
            {posts.map((post, index) => (
                <Post
                    key={index}
                    category={post.category}
                    content={post.content}
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
