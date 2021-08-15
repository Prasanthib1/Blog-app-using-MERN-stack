import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./navbar.css";

export default function NavBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  }
  return (
    <div className="top">
      <Link className="logo" to="/" style={{ textDecoration:"none"}}>DailyBlog.in</Link>
      <div className="nav-center">
        <ul className="nav-list">
          <li className="nav-item">
            <Link className="link" to="/">
              <p>HOME</p>
            </Link>
          </li>
          <li className="nav-item">
            { user && <Link className="link" to={`/?user=${user.username}`}>
              <p>MY POSTS</p>
            </Link>
            }
          </li>
          <li className="nav-item">
            <Link className="link" to="/contact">
              <p>CONTACT</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        {user ? (
          <div className="nav-right_">
            <div className="nav-item-logout" onClick={handleLogout}>
                    {user && <p className="logout-txt">LogOut</p>}
            </div>
          <Link to="/settings">
            <img className="nav-img" src={PF+user.profilePic} alt="" />
          </Link>
          </div>
        ) : (
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link className="link" to="/login">
               <p className="nav-list-text"> LogIn</p>
              </Link>
            </li>
            <li className="nav-list-item">
              <Link className="link" to="/register">
              <p className="nav-list-text">Register</p>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
