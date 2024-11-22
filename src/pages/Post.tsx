import { useParams } from "react-router-dom";
import useStore from "../store/useStore";
import PostCard from "../components/PostCard";

export default function Post() {
  let { postId } = useParams();
  const findById = useStore((state) => state.findById);
  const post = findById(Number(postId))

  return (
    <PostCard
      key={post.id}
      id={post.id}
      author={post.author}
      content={post.content}
      image={post.image}
      liked={post.liked}
      saved={post.saved!}
    />
  )
}
