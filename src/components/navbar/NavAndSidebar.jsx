import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import "./NavAndSidebar.scss";
import { navRoutes } from "./NavLinks";
import logo from "../../assets/layout/logo.svg";
import { animateScroll as scroll } from "react-scroll";
import { Link as LinkScroll } from "react-scroll";

const Navbar = () => {
  const { pathname } = useLocation();
  const [openSidebar, setOpenSidebar] = useState(false);

  // change nav color when change
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 140) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <header className="navbarAndSidebar">
      {/* NAVBAR PART */}
      <nav
        className={
          pathname !== "/"
            ? "navbarContainer-otherPage"
            : color
            ? "navbarContainer navbarContainer-bg"
            : "navbarContainer"
        }
      >
        <div className="navbarContainerWrapper">
          {/* LEFT NAVBAR */}
          <div className="navbarContainerLeft">
            <div className="navbarContainerHamburger">
              <Hamburger
                toggle={setOpenSidebar}
                toggled={openSidebar}
                color="#044ffd"
              />
            </div>
            <div className="navbarContainerLogo">
              {pathname === "/" &&
                (color ? (
                  <Link to="/">
                    <img
                      onClick={toggleHome}
                      style={{ maxWidth: "90px" }}
                      src={logo}
                      alt="logo"
                    />
                  </Link>
                ) : (
                  <Link to="/">
                    <img
                      onClick={toggleHome}
                      style={{ maxWidth: "180px" }}
                      src={logo}
                      alt="logo"
                    />
                  </Link>
                ))}
              {pathname !== "/" && (
                <Link to="/">
                  <img
                    onClick={toggleHome}
                    style={{ maxWidth: "90px" }}
                    src={logo}
                    alt="logo"
                  />
                </Link>
              )}
            </div>
          </div>
          {/* RIGHT NAVBAR */}
          <div className="navbarContainerRightItems">
            {pathname !== "/" ? (
              <>
                <div className="navbarContainerRightItem">
                  <Link className="link" to="/">
                    Features
                  </Link>
                </div>
                <div className="navbarContainerRightItem">
                  <Link className="link" to="/">
                    Game
                  </Link>
                </div>
                <div className="navbarContainerRightItem">
                  <Link className="link" to="/">
                    Team
                  </Link>
                </div>
                <div className="navbarContainerRightItem">
                  <Link className="link" to="/">
                    Roadmap
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="navbarContainerRightItem">
                  <LinkScroll className="link" to="home-features">
                    Features
                  </LinkScroll>
                </div>
                <div className="navbarContainerRightItem">
                  <LinkScroll className="link" to="home-game">
                    Game
                  </LinkScroll>
                </div>
                <div className="navbarContainerRightItem">
                  <LinkScroll className="link" to="home-team">
                    Team
                  </LinkScroll>
                </div>
                <div className="navbarContainerRightItem">
                  <LinkScroll className="link" to="home-roadmap">
                    Roadmap
                  </LinkScroll>
                </div>
              </>
            )}
            {navRoutes.map((item) => (
              <div key={item.name} className="navbarContainerRightItem">
                <Link className="link" to={item.route}>
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </nav>
      {/* SIDEBAR PART */}
      <div className={openSidebar ? "SidebarBackground" : ""}>
        <div
          className={`
                ${
                  openSidebar ? "translateForSidebar" : "translateForSidebarNeg"
                }
                setSidebarForToggle transform transition-all duration-300`}
        >
          <div className="sidebarTop">
            <Link
              onClick={() => {
                setOpenSidebar(!openSidebar);
              }}
              to="/"
            >
              <img style={{ maxWidth: "100px" }} src={logo} alt="logo" />
            </Link>
            <Hamburger
              toggle={setOpenSidebar}
              toggled={openSidebar}
              color="#044ffd"
            />
          </div>
          <ul className="SidebarItems">
            {navRoutes.map((item) => (
              <li
                onClick={() => {
                  setOpenSidebar(!openSidebar);
                }}
                key={item.name}
                className="SidebarItem"
              >
                <Link className="sidebarlink" to={item.route}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
