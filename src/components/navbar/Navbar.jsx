import "./navbar.css"
import { useNavigate } from "react-router-dom";

const Navbar = () => {


  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/src/login/Login.jsx");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Booking.Com</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar