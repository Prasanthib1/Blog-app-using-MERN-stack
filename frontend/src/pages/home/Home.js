import { useEffect, useState, useContext } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import ExtraBar from "../../components/extrabar/Extrabar";
import { Context } from "../../context/Context";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";


export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <ExtraBar />
        {posts.length == 0 ?
           (<div>
             <p className="home-error">You Haven't Posted Anything Yet!</p>
           </div>)
           :
          <Posts posts={posts} /> }    
      </div>
    </>
  );
}
