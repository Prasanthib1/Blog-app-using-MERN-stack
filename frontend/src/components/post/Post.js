import "./Post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && <img className="post-img" src={PF + post.photo} alt="" />}
      <div className="post-info">
        <div className="post-cats">
          {post.categories.map((c) => (
            <span className="post-cat">{c.name}</span>
          ))}
        </div>
          <span className="post-title">{post.title}</span>
        <hr />
        <span className="post-date">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="post-desc">{post.desc}</p>
      <Link to={`/post/${post._id}`} className="post-btn" style={{textDecoration:'none'}}>
        <button className="post-button">Read More</button>
      </Link>
    </div>
  );
}
