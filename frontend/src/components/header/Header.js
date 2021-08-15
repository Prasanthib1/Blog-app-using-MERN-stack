import "./Header.css";
import bg from '../../images/header.jpg'

export default function Header() {
  return (
    <div className="header">
      <div className="header-title">
        <span className="header-title-txt">DailyBlog.in</span>
      </div>
      <img
        className="header-img"
        src={bg}
        alt=""
      />
    </div>
  );
}
