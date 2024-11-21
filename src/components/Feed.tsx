// import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import useStore from "../store/useStore";

const Feed: React.FC = () => {
  const posts = useStore((state) => state.posts);
  /**
   * Unnecessary state
   */
  /**const [postCount, setPostCount] = useState(posts.length);*/

  /**
   * Unnecessary effect
   */
  /**useEffect(() => {
   * setPostCount(posts.length);
  }, [postCount, posts]);*/

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts ({posts.length})</h1>{" "}
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          author={post.author}
          content={post.content}
          image={post.image}
          liked={post.liked}
          saved={post.saved!}
        />
      ))}
    </div>
  );
};

export default Feed;
