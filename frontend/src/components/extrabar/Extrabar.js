import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./extrabar.css";
import {IoMdCreate} from "react-icons/io" 

export default function ExtraBar() {
  const{user}=useContext(Context);

  return (
    <div className="extrabar-main">
      {user ?
        <div className="extrabar-in">
          <Link to="/write"><button><IoMdCreate className="create-icon"/>Write Post</button></Link> 
        </div>

    :
    <div>
      <div className="extrabar-out">
        <p>Join Thousands of other people and express your views and thoughts !</p>
      <Link to="/register"><button>Register Now</button></Link>
    </div>
    </div>
    }
    </div>
  );
}
