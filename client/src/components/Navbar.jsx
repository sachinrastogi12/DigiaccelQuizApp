import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    <div className="navbar">
      <span className="logo">
        
          Digiaccel Learning
        
      </span>


      {user ? 
      
      (//user is ther
        <ul className="list">
          <li className="listItem">
            <img
              src={user.photos[0].value}   // nam dikha dega
              alt=""
              className="avatar"  //their image from the email
            />
          </li>
          <li className="listItem">{user.displayName}</li>
          <li className="listItem" onClick={logout}>
            Logout
          </li>
        </ul>
      )
      
      : ( //user is not there
        <Link className="link" to="login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
