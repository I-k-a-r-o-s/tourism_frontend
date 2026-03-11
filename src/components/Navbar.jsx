import { Link } from "react-router";
import LoginModal from "./LoginModal";
import { GrMenu } from "react-icons/gr";
import { AiOutlineHome } from "react-icons/ai";
import { CiViewList } from "react-icons/ci";
import { useContext } from "react";
import { TourismContext } from "../context/TourismContext";

const Navbar = () => {
  const { user, logOut } = useContext(TourismContext);
  const navLinks = [
    { name: "Home", path: "/", icon: <AiOutlineHome size={20} /> },
    {
      name: "Listings",
      path: "/getlisting/:id",
      icon: <CiViewList size={20} />,
    },
  ];
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <GrMenu size={20} />
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-3"
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="flex items-center gap-2">
                  {link.icon}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Tourism
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="flex items-center gap-2">
                {link.icon}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button className="btn" onClick={logOut}>
            Logout
          </button>
        ) : (
          <LoginModal />
        )}
      </div>
    </div>
  );
};
export default Navbar;
