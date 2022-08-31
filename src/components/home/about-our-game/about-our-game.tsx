import { useMediaQuery } from "@mui/material";
import React from "react";
import styles from "../../../styles/home.module.css";
import Container from "../../container/Container";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./aboutGame.scss";

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 840 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 840, min: 420 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 420, min: 0 },
    items: 1,
  },
};

const AboutOurGame = () => {
  // const is768 = useMediaQuery("(max-width:768px)");
  const is425 = useMediaQuery("(max-width:425px)");

  return (
    <Container style={{ paddingTop: "124px" }}>
      <div className={` ${styles.gradient_box}`}>
        <div style={{ width: 350, textAlign: "center" }}>
          <h1
            className={styles.title}
            style={{
              fontSize: is425 ? "30px" : "40px",
              margin: "4rem 0 2rem 0",
            }}
          >
            About our game
          </h1>
        </div>

        <section style={{ padding: is425 ? "0 5px" : "0 46px" }}>
          <p
            className={styles.desc}
            style={{ fontSize: is425 ? "15px" : "20px" }}
          >
            We have seen many race games but our game is unique. It's definitely
            P2E game and everyone is winner in our game. You will get reward in
            every race you participate. Every car needs to have and use fuel nft
            in the race. There are 4 race types and all races will be created
            and announced by our support. You have special 4 types of fuel NFTS
            and each has its unique property. Broken latency level will be
            increased if you use every 3 boost in one race.
          </p>

          <div
            style={{
              // display: "grid",
              // gridTemplateColumns: is768 ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
              // gap: "20px",
              marginTop: "80px",
              marginBottom: "46px",
              // display: "grid",
              // gridTemplateColumns: is768 ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
              // gap: "20px",
              width: "80vw",
              maxWidth: "1200px",
            }}
          >
            <Carousel
              swipeable={false}
              draggable={false}
              responsive={responsive}
              infinite={true}
              autoPlay={false}
              autoPlaySpeed={10000000000000}
            >
              {Array.from({ length: 6 }, (_, k) => k + 1).map((i) => (
                <img
                  key={i}
                  src={`/images/car/car${i}.png`}
                  alt={`car${i}`}
                  width="100%"
                  height="100%"
                  style={{
                    filter: "drop-shadow(0px 0px 5px #FF0000)",
                    borderRadius: "10px",
                    padding: "1rem",
                  }}
                />
              ))}
            </Carousel>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default AboutOurGame;
