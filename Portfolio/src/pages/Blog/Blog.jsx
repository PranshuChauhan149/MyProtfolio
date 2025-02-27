import { useEffect, useState } from "react";
import BlogPost from "./BlogPost";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(error => console.error("Error fetching blogs:", error));
  }, []); // Empty dependency array ensures this runs only once

  return (
    <>
      <section className="blog">
        <header>
          <h2 className="h2 article">Blogs</h2>
        </header>
        <div className="blog-posts">
          <ul className="blog-posts-list">
            {blogs.map((post, index) => (
              <BlogPost key={index} post={post} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Blog;