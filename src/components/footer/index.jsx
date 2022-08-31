import React from "react";
import {
  FaInstagram,
  FaDiscord,
  FaTelegramPlane,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { GoDeviceMobile } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import Container from "../container/Container";
import { Link as LinkScroll } from "react-scroll";
import logo from "../../assets/layout/logo.svg";
import "./__footer.scss";

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="footerTop sectionTop">
        <Container className="footerTop__logo">
          <Link to="/">
            <img style={{ maxWidth: "120px" }} src={logo} alt="logo" />
          </Link>{" "}
          <div className="footerStyleTxt">
            Discover and collect extraordinary Lorem NFTs
          </div>
        </Container>
      </div>
      <div className="footer">
        <Container className="footerContainer">
          <div className="footer__left">
            <div>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                }}
                className="footer__left__item footerStyleTxt"
              >
                META RACE WINNER
              </div>
              <div className="footer__left__item">
                <FiMail style={{ marginRight: "8px" }} />{" "}
                contact@metaracewinner.app
              </div>
              <div className="footer__left__item">
                <GoDeviceMobile style={{ marginRight: "8px" }} />
                +357 77 788461
              </div>
              <div className="footer__left__item">
                <IoLocationSharp style={{ marginRight: "8px" }} />
                Paphos, Cyprus
              </div>
            </div>
            <div className="contactUsContainer">
              <div className="footer__left__title footerStyleTxt">
                Connect Us
              </div>
              <div className="footer__left__socialIcons">
                <a
                  href="https://discord.gg/CjWvC6J8"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaDiscord className="footer__left__socialIcon" />
                </a>
                <a
                  href="https://t.me/metaracewinner"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTelegramPlane className="footer__left__socialIcon" />
                </a>
                <a
                  href="https://twitter.com/race_meta"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter className="footer__left__socialIcon" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100084606070432"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook className="footer__left__socialIcon" />
                </a>
                <a
                  href="https://www.instagram.com/meta.racewinner"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="footer__left__socialIcon" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer__right">
            <div className="footer__right__col">
              <div className="footer__right__col__header footerStyleTxt">
                Useful Links
              </div>
              {pathname === "/" ? (
                <>
                  <div className="footer__right__col__item">
                    <LinkScroll to="home-features">Features</LinkScroll>
                  </div>
                  <div className="footer__right__col__item">
                    <LinkScroll to="home-game">Game</LinkScroll>
                  </div>
                  <div className="footer__right__col__item">
                    <LinkScroll to="home-team">Team</LinkScroll>
                  </div>
                  <div className="footer__right__col__item">
                    <LinkScroll to="home-roadmap">Roadmap</LinkScroll>
                  </div>
                </>
              ) : (
                <>
                  <div className="footer__right__col__item">
                    <Link to="/">Features</Link>
                  </div>
                  <div className="footer__right__col__item">
                    <Link to="/">Game</Link>
                  </div>
                  <div className="footer__right__col__item">
                    <Link to="/">Team</Link>
                  </div>
                  <div className="footer__right__col__item">
                    <Link to="/">Roadmap</Link>
                  </div>
                </>
              )}
            </div>
            <div className="footer__right__col">
              <div className="footer__right__col__header footerStyleTxt">
                Get Help
              </div>
              <div className="footer__right__col__item">
                <Link to="/contact">Contact</Link>
              </div>
              <div className="footer__right__col__item">
                <Link to="/whitepaper">Whitepaper</Link>
              </div>
            </div>
            <div className="footer__right__col">
              <div className="footer__right__col__header footerStyleTxt">
                Upcomming
              </div>
              <div className="footer__right__col__item">
                <Link to="/presale">Presale</Link>
              </div>
            </div>
          </div>
        </Container>
        <Container className="websiteRights">
          MRW @ {new Date().getFullYear()} All rights reserved.
        </Container>
      </div>
    </>
  );
};

export default Footer;
