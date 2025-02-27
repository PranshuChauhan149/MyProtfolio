const BlogPost = ({ post }) => {
  const { title, category, image, description, date } = post;

  return (
    <li className="blog-post-item">
      <a href="#">
        <figure className="blog-banner-box">
          <img src={image} alt={title} loading="lazy" />
        </figure>

        <div className="blog-content">
          <div className="blog-meta">
            <p className="blog-category">{category}</p>
            <span className="dot"></span>
            <time datetime={date}>{new Date(date).toLocaleDateString()}</time>
          </div>

          <h3 className="h3 blog-title">{title}</h3>

          <p className="blog-text">{description}</p>
        </div>
      </a>
    </li>
  );
};

export default BlogPost;