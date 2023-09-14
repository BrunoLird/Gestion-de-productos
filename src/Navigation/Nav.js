import { FiHeart } from "react-icons/fi";
import { AiOutlineLogin } from "react-icons/ai";
import "./Nav.css";
import logo from "./Assets/logo.png"


const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <img src={logo} alt='' className="logo"/>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Encuentra tu celular perfecto"
        />
      </div>
      <div className="profile-container">
        <a href="#_">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#_">
          <AiOutlineLogin className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;