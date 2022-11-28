import Article from "./Article";
import blogData from "../data/blog";
function ArticleList() {
  return (
    <main>
      {blogData.posts.map((post) => {
        return (
          <Article
            title={post.title}
            preview={post.preview}
            date={post.date}
            key={post.id}
          />
        );
      })}
    </main>
  );
}
export default ArticleList;
