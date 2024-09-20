import { usePosts } from "./context/PostContext";

export default function List() {
  const { searchedPosts } = usePosts();
  return (
    <ul>
      {searchedPosts.map((post, i) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
